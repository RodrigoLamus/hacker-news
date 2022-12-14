import { createContext, useState, useEffect, useCallback } from 'react';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';
import { CardInterface, ContextInterface } from '../global/interfaces';
import { fetchHits } from '../services/fetchInfo';
import { deleteDuplicates } from '../helpers/deleteDuplicates';
import { addOrRemove } from '../helpers/addOrRemove';

const globalContextDefaultValues: ContextInterface = {
  tab: { dispatch: () => {}, state: true },
  favList: { dispatch: () => {}, state: [] },
  dropdownParam: { dispatch: () => {}, state: '' },
  loading: { dispatch: () => {}, state: false },
  cardData: [],
  active: { dispatch: () => {}, state: 0 },
};

export const GlobalContext = createContext<ContextInterface>(
  globalContextDefaultValues
);

export const Provider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [activeTab, setActiveTab] = useState(true);
  const [favList, setFavList] = useState<CardInterface[]>([]);
  const [oldDropdownParamState, setOldDropdownParamState] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [cardData, setCardData] = useState<CardInterface[]>([]);
  const [dropdownParamState, setDropdownParamState] = useState('');

  useEffect(() => {
    const savedFavList = getLocalStorage('list');

    if (savedFavList.length > 0)
      savedFavList.forEach(
        (fav: CardInterface) => (fav.createdAt = new Date(fav.createdAt))
      );

    setFavList(savedFavList);

    const savedParam = getLocalStorage('filter');

    setDropdownParamState(savedParam.length > 0 ? savedParam : '');
    return () => {
      setFavList([]);
      setDropdownParamState('');
    };
  }, []);

  const fetchInfoForInfiniteScroll = useCallback(async () => {
    try {
      const data = await fetchHits(dropdownParamState, active);
      const newCardData = deleteDuplicates([...cardData, ...data]);
      setCardData(newCardData);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [active]);

  const fetchNewInfo = useCallback(async () => {
    try {
      const data = await fetchHits(dropdownParamState, 1);
      setActive(1);
      setCardData([...data]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [dropdownParamState]);

  useEffect(() => {
    if (dropdownParamState) {
      fetchNewInfo();
    }
  }, [fetchNewInfo, dropdownParamState]);

  useEffect(() => {
    if (
      oldDropdownParamState === dropdownParamState &&
      dropdownParamState !== ''
    ) {
      fetchInfoForInfiniteScroll();
    }
    setOldDropdownParamState(dropdownParamState);
    // eslint-disable-next-line
  }, [fetchInfoForInfiniteScroll, active]);

  const dispatchTab = (actionType: boolean) => {
    setActiveTab(actionType);
  };

  const dispatchDropdownParam = (dropdownParam: string) => {
    setLocalStorage('filter', dropdownParam);
    setDropdownParamState(dropdownParam);
  };

  const dispatchFavList = (listItem: CardInterface, set: boolean) => {
    const oldList = getLocalStorage('list');
    oldList.forEach(
      (elem: CardInterface) => (elem.createdAt = new Date(elem.createdAt))
    );
    const newFavList = addOrRemove(set, oldList, listItem);
    setLocalStorage('list', newFavList);
    setFavList(newFavList);
  };

  return (
    <GlobalContext.Provider
      value={{
        tab: { dispatch: dispatchTab, state: activeTab },
        favList: { dispatch: dispatchFavList, state: favList },
        loading: { dispatch: setLoading, state: loading },
        dropdownParam: {
          dispatch: dispatchDropdownParam,
          state: dropdownParamState,
        },
        cardData,
        active: { dispatch: setActive, state: active },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
