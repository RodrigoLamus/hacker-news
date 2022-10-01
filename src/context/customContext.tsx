import { useContext } from 'react';
import { GlobalContext } from './context';

export const useTabButtonsContext = () => {
  const { dispatchTab, activeTab } = useContext(GlobalContext);
  return { dispatchTab, activeTab };
};
