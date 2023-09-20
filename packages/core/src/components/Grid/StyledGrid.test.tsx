import * as React from 'react';
import { render, screen } from 'test-utils';

import { StyledGrid } from './StyledGrid';

describe('StyledFlex', () => {
  test('render', () => {
    render(<StyledGrid>test</StyledGrid>);
    expect(screen.getByText('test')).toHaveStyle({
      display: 'grid',
    });
  });

  test('inline', () => {
    render(<StyledGrid inline>test</StyledGrid>);
    expect(screen.getByText('test')).toHaveStyle({
      display: 'inline-grid',
    });
  });

  test('align', () => {
    render(
      <StyledGrid
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
        gridAutoFlow="row"
        gridTemplateRows="1fr"
        gridTemplateAreas="none"
        gridTemplateColumns="1fr"
        gap="cmp-md"
        columnGap="cmp-md"
        rowGap="cmp-md"
      >
        test
      </StyledGrid>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      justifyItems: 'center',
      gridAutoFlow: 'row',
      gridTemplateRows: '1fr',
      gridTemplateAreas: 'none',
      gridTemplateColumns: '1fr',
      gap: 'cmp-md',
      columnGap: 'cmp-md',
      rowGap: 'cmp-md',
    });
  });
});
