import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../../contexts/theme';

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => {
    const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
        return (
            <ThemeProvider>
                {children}
            </ThemeProvider>
        );
    };

    return rtlRender(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { customRender as render };