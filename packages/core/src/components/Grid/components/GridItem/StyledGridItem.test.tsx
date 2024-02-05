import * as React from 'react';
import { render, screen } from 'test-utils';

import { StyledGridItem } from './StyledGridItem';

describe('StyledFlex', () => {
  test('render', () => {
    render(<StyledGridItem>test</StyledGridItem>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('props', () => {
    render(
      <StyledGridItem
        alignSelf="center"
        gridArea="auto"
        gridColumn="auto"
        gridColumnEnd="auto"
        gridColumnStart="auto"
        gridRow="auto"
        gridRowEnd="auto"
        gridRowStart="auto"
        justifySelf="center"
      >
        test
      </StyledGridItem>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      alignSelf: 'center',
      gridArea: 'auto',
      gridColumn: 'auto',
      gridColumnEnd: 'auto',
      gridColumnStart: 'auto',
      gridRow: 'auto',
      gridRowEnd: 'auto',
      gridRowStart: 'auto',
      justifySelf: 'center',
    });
  });
});
