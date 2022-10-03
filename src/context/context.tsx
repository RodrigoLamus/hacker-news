import { createContext, useState, useEffect, useCallback } from 'react';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';
import { CardInterface, ContextInterface } from '../interfaces';
import { fetchHits } from '../services/fetchInfo';

export const GlobalContext = createContext<ContextInterface>({
  dispatchTab: () => {},
  activeTab: true,
  dispatchFavList: () => {},
  favList: [],
  dispatchDropdownParam: () => {},
  dropdownParam: '',
  setLoading: () => {},
  loading: false,
  cardData: [],
  active: 0,
  setActive: () => {},
});

export const Provider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [activeTab, setActiveTab] = useState(true);
  const [favList, setFavList] = useState<CardInterface[]>([]);
  const [oldDropdownParam, setOldDropdownParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);
  const [cardData, setCardData] = useState<CardInterface[]>([]);
  const [dropdownParam, setDropdownParam] = useState('');

  useEffect(() => {
    const savedFavList = getLocalStorage('list');

    if (savedFavList.length > 0)
      savedFavList.forEach(
        (fav: CardInterface) => (fav.createdAt = new Date(fav.createdAt))
      );

    setFavList(savedFavList);

    const savedParam = getLocalStorage('filter');

    setDropdownParam(savedParam.length > 0 ? savedParam : '');
    return () => setFavList([]);
  }, []);

  const fetchInfoForInfiniteScroll = useCallback(async () => {
    try {
      const data = await fetchHits(dropdownParam, active);
      const newCardData = [...cardData, ...data].filter(
        (card: CardInterface, i: number, arr: CardInterface[]) =>
          arr.findIndex((cards) => cards.id === card.id) === i
      );
      setCardData(newCardData);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [active]);

  const fetchNewInfo = useCallback(async () => {
    try {
      const data = await fetchHits(dropdownParam, 1);
      setActive(1);
      setCardData([...data]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [dropdownParam]);

  useEffect(() => {
    if (dropdownParam) {
      fetchNewInfo();
    }
  }, [fetchNewInfo, dropdownParam]);

  useEffect(() => {
    if (oldDropdownParam === dropdownParam && dropdownParam !== '') {
      fetchInfoForInfiniteScroll();
    }
    setOldDropdownParam(dropdownParam);
    // eslint-disable-next-line
  }, [fetchInfoForInfiniteScroll, active]);

  const dispatchTab = (actionType: boolean) => {
    setActiveTab(actionType);
  };

  const dispatchDropdownParam = (dropdownParam: string) => {
    setLocalStorage('filter', dropdownParam);
    setDropdownParam(dropdownParam);
  };

  const dispatchFavList = (
    listItem: CardInterface | undefined,
    set: boolean
  ) => {
    const oldList = getLocalStorage('list');
    oldList.forEach(
      (elem: CardInterface) => (elem.createdAt = new Date(elem.createdAt))
    );
    const newFavList: CardInterface[] = set
      ? [...oldList, { ...listItem, fav: set }]
      : [...oldList].filter((elem) => elem.id !== listItem?.id);
    setLocalStorage('list', newFavList);
    setFavList(newFavList);
  };

  return (
    <GlobalContext.Provider
      value={{
        dispatchTab,
        activeTab,
        dispatchFavList,
        favList,
        setLoading,
        loading,
        dispatchDropdownParam,
        dropdownParam,
        cardData,
        active,
        setActive,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
