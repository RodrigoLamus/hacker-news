import { createContext, useCallback, useEffect, useState } from 'react';
import { ContextInterface } from '../interfaces';

export const GlobalContext = createContext<ContextInterface>({
  dispatchTab: () => {},
  activeTab: true,
});

export const Provider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [activeTab, setActiveTab] = useState(true);

  const dispatchTab = (actionType: boolean) => {
    setActiveTab(actionType);
  };

  return (
    <GlobalContext.Provider
      value={{
        dispatchTab,
        activeTab,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
