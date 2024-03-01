import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { DefaultTheme, ThemeProvider } from 'styled-components';

/**
 * Get the static HTML markup of a React component
 *
 * @return the HTML markup
 */
export const getCmpMarkup = ({
  cmp,
  theme,
}: {
  cmp: React.ReactElement;
  theme: DefaultTheme;
}) => {
  return renderToStaticMarkup(
    <ThemeProvider theme={theme}>{cmp}</ThemeProvider>,
  );
};
