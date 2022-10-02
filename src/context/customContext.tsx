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

export const useSelectContext = () => {
  const { dispatchDropdownParam, dropdownParam, setLoading } =
    useContext(GlobalContext);
  return { dispatchDropdownParam, dropdownParam, setLoading };
};
