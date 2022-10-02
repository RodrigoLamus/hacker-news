import { useContext } from 'react';
import { GlobalContext } from './context';

export const useTabButtonsContext = () => {
  const { dispatchTab, activeTab } = useContext(GlobalContext);
  return { dispatchTab, activeTab };
};

export const useFavButtonContext = () => {
  const { dispatchFavList } = useContext(GlobalContext);
  return { dispatchFavList };
};

export const useCardWrapperContext = () => {
  const { favList, activeTab } = useContext(GlobalContext);
  return { favList, activeTab };
};

export const useMainContext = () => {
  const {
    activeTab,
    cardData,
    loading,
    setLoading,
    dropdownParam,
    favList,
    setActive,
    active,
    dispatchDropdownParam,
  } = useContext(GlobalContext);
  return {
    activeTab,
    setLoading,
    cardData,
    loading,
    dropdownParam,
    favList,
    setActive,
    active,
    dispatchDropdownParam,
  };
};

export const useSelectContext = () => {
  const { dispatchDropdownParam, dropdownParam, setLoading } =
    useContext(GlobalContext);
  return { dispatchDropdownParam, dropdownParam, setLoading };
};
