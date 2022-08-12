import React from 'react';
import defaultTheme from '../themes/default';

export type ThemeType = typeof defaultTheme; // TODO: export this

interface IThemeContext {
  theme: ThemeType;
}

export const ThemeContext = React.createContext<IThemeContext>({ theme: defaultTheme });

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => (
  <ThemeContext.Provider value={{ theme: defaultTheme }}>{children}</ThemeContext.Provider>
);
