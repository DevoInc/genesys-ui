import * as React from 'react';

import { render, screen } from '@test';
import { Helper } from './Helper';

const MESSAGE_STRING = 'This is a test message';
const MESSAGE_REACT = <span>{MESSAGE_STRING}</span>;
const TEST_ID = 'helper';

describe('Helper', () => {
  test('Passing a string as message', () => {
    render(<Helper data-testid={TEST_ID} message={MESSAGE_STRING} />);
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].tagName).toBe('P');
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].innerHTML).toBe(
      MESSAGE_STRING,
    );
  });

  test('Passing a React fragment as message', () => {
    render(<Helper data-testid={TEST_ID} message={MESSAGE_REACT} />);
    expect(screen.getAllByTestId(TEST_ID)[0].innerHTML).toBe(
      `<span>${MESSAGE_STRING}</span>`,
    );
  });

  test('Passing null as message', () => {
    render(<Helper data-testid={TEST_ID} message={null} />);
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].tagName).toBe('P');
    expect(screen.getAllByTestId(TEST_ID)[0].children[0].innerHTML).toBe('');
  });
});
