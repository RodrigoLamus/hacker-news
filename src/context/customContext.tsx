import { useContext } from 'react';
import { GlobalContext } from './context';

export const useTabButtonsContext = () => {
  const { tab } = useContext(GlobalContext);
  return { tab };
};

export const useFavButtonContext = () => {
  const { favList } = useContext(GlobalContext);
  return { favList };
};

export const useCardWrapperContext = () => {
  const { favList, tab } = useContext(GlobalContext);
  return { favList, tab };
};

export const useMainContext = () => {
  const { tab, cardData, loading, dropdownParam, favList, active } =
    useContext(GlobalContext);
  return {
    tab,
    cardData,
    loading,
    dropdownParam,
    favList,
    active,
  };
};

export const useSelectContext = () => {
  const { dropdownParam, loading } = useContext(GlobalContext);
  return { dropdownParam, loading };
};
