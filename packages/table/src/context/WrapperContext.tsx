import * as React from 'react';

export const WrapperContext = React.createContext({
  width: 0,
  height: 0,
  setSize: null,
});

export const WrapperContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [{ width, height }, setSize] = React.useState({ width: 0, height: 0 });

  return (
    <WrapperContext.Provider value={{ width, height, setSize }}>
      {children}
    </WrapperContext.Provider>
  );
};
