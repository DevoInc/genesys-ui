import * as React from 'react';
import { RenderResult, render, type RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom/vitest';

import { light } from '@devoinc/genesys-brand-devo';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ThemeProvider theme={{ ...light }}>{children}</ThemeProvider>;

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
