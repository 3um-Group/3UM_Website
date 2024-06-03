'use client'
import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface MyContextType {
    selectPage: string;
    setSelectPage: Dispatch<SetStateAction<string>>;
  }

  export const MyContext = createContext<MyContextType | undefined>(undefined);

const Provider = ({ children }: { children: React.ReactNode }) => {
    const [selectPage, setSelectPage] = useState<string>('');

    return (
        <MyContext.Provider value={ {selectPage, setSelectPage}}>
            {children}
        </MyContext.Provider>
    )
}

export const UseContext = () => {
    const context = useContext(MyContext);
    if (!context) {
      throw new Error('UseContext must be used within a Provider');
    }
    return context;
  };

export default Provider