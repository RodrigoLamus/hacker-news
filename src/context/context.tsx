import { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';
import { CardInterface, ContextInterface } from '../interfaces';

export const GlobalContext = createContext<ContextInterface>({
  dispatchTab: () => {},
  activeTab: true,
  dispatchFavList: () => {},
  favList: [],
  dispatchDropdownParam: () => {},
  dropdownParam: '',
  setLoading: () => {},
  loading: false,
});

export const Provider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [activeTab, setActiveTab] = useState(true);
  const [favList, setFavList] = useState<CardInterface[]>([]);
  const [loading, setLoading] = useState(false);
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
