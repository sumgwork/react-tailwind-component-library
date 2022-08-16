import React from 'react';
import defaultTheme from '../themes/default';

export type ThemeType = typeof defaultTheme; // TODO: export this
export type Mode = string | null;

interface IThemeContext {
  theme: ThemeType;
  mode?: Mode;
  toggleMode?: any;
}

export const ThemeContext = React.createContext<IThemeContext>({ theme: defaultTheme });

interface IThemeProviderProps {
  children: React.ReactNode;
  value?: any;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children, value }) => <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
