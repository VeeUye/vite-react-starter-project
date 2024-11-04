import React from 'react';
import {ThemeProvider} from "../../contexts/theme/ThemeContext.tsx";

export const MockThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};