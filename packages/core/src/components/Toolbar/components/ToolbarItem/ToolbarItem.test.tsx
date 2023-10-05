import * as React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'test-utils';
import { ToolbarItem } from './ToolbarItem';

const CONTENT_STRING = 'This is a test text';
const TEST_ID = 'ToolbarItem';

describe('ToolbarItem', () => {
  test('Simple render', () => {
    render(<ToolbarItem data-testid={TEST_ID}>{CONTENT_STRING}</ToolbarItem>);
    expect(screen.getAllByTestId(TEST_ID)[0]).toBeInTheDocument();
  });
});
