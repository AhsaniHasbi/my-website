import { createContext, useState, PropsWithChildren } from 'react';
import * as React from 'react';

export interface contextTypes {
  bodyScrollbarStatus : boolean,
  changeBodyScrollbarStatus: (val: boolean) => void
}

const GlobalContext = createContext<contextTypes | null>(null);

const GlobalContextProvider = ({ children } : PropsWithChildren) => {
  const [bodyScrollbarStatus, setBodyScrollbarStatus] = useState(true);

  const changeBodyScrollbarStatus = (val : boolean) => {
    setBodyScrollbarStatus(val);
  }

  return (
    <GlobalContext.Provider
      value={{
        bodyScrollbarStatus,
        changeBodyScrollbarStatus
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContext, GlobalContextProvider};