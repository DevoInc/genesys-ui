import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { light } from '@devoinc/genesys-brand-devo';
import '@testing-library/jest-dom';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider theme={{ tokens: light }}>{children}</ThemeProvider>;

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
