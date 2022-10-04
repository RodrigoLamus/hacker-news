import { useContext } from 'react';
import { GlobalContext } from './context';

export const useTabButtonsContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      'useTabButtonsContext should be used within a GlobaProvider'
    );
  }
  const { tab } = context;
  return { tab };
};

export const useFavButtonContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      'useFavButtonContext should be used within a GlobaProvider'
    );
  }
  const { favList } = context;
  return { favList };
};

export const useCardWrapperContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      'useCardWrapperContext should be used within a GlobaProvider'
    );
  }
  const { favList, tab } = context;
  return { favList, tab };
};

export const useMainContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useMainContext should be used within a GlobaProvider');
  }
  const { tab, cardData, loading, dropdownParam, favList, active } = context;
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
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useSelectContext should be used within a GlobaProvider');
  }
  const { dropdownParam, loading } = context;
  return { dropdownParam, loading };
};
