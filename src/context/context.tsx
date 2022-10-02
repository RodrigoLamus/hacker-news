import { createContext, useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../helpers/localStorage';
import { CardInterface, ContextInterface } from '../interfaces';

export const GlobalContext = createContext<ContextInterface>({
  dispatchTab: () => {},
  activeTab: true,
  dispatchFavList: () => {},
  favList: [],
});

export const Provider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [activeTab, setActiveTab] = useState(true);
  const [favList, setFavList] = useState<CardInterface[]>([]);

  useEffect(() => {
    const savedFavList = getLocalStorage('list');

    if (savedFavList.length > 0)
      savedFavList.forEach(
        (fav: CardInterface) => (fav.createdAt = new Date(fav.createdAt))
      );

    setFavList(savedFavList);
  }, []);

  const dispatchTab = (actionType: boolean) => {
    setActiveTab(actionType);
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
