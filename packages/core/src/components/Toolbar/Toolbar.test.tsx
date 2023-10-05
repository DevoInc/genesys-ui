import * as React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';
import { Toolbar } from './Toolbar';

const CONTENT_STRING = 'This is a test text';
const TEST_ID = 'toolbar';

describe('Toolbar', () => {
  test('Simple render', () => {
    render(<Toolbar data-testid={TEST_ID}>{CONTENT_STRING}</Toolbar>);
    expect(screen.getAllByTestId(TEST_ID)[0]).toBeInTheDocument();
  });
});
