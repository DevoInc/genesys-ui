import * as React from 'react';
import { Helper } from './Helper';
import { render, screen } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { dark } from '@devoinc/genesys-brand-devo';

const MESSAGE_STRING = 'This is a test message';
const MESSAGE_REACT = <span>{MESSAGE_STRING}</span>;
const TEST_ID = 'helper';

const theme: DefaultTheme = dark;

describe('Helper', () => {
  test('Passing a string as message', () => {
    render(
      <ThemeProvider theme={theme}>
        <Helper data-testid={TEST_ID} message={MESSAGE_STRING} />
      </ThemeProvider>
    );
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].tagName).toBe('P');
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].innerHTML).toBe(
      MESSAGE_STRING
    );
  });

  test('Passing a React fragment as message', () => {
    render(
      <ThemeProvider theme={theme}>
        <Helper data-testid={TEST_ID} message={MESSAGE_REACT} />
      </ThemeProvider>
    );
    expect(screen.getAllByTestId(TEST_ID)[0].innerHTML).toBe(
      `<span>${MESSAGE_STRING}</span>`
    );
  });

  test('Passing null as message', () => {
    render(
      <ThemeProvider theme={theme}>
        <Helper data-testid={TEST_ID} message={null} />
      </ThemeProvider>
    );
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].tagName).toBe('P');
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].innerHTML).toBe('');
  });
});
