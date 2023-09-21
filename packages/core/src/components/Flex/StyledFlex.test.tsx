import * as React from 'react';
import { render, screen } from 'test-utils';
import { light as tokens } from '@devoinc/genesys-brand-devo';

import { StyledFlex } from './StyledFlex';

describe('StyledFlex', () => {
  test('render', () => {
    render(<StyledFlex>test</StyledFlex>);
    expect(screen.getByText('test')).toHaveStyle({
      display: 'flex',
    });
  });

  test('inline', () => {
    render(<StyledFlex inline>test</StyledFlex>);
    expect(screen.getByText('test')).toHaveStyle({
      display: 'inline-flex',
    });
  });

  test('align-content, align-items, justify-content', () => {
    render(
      <StyledFlex
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        test
      </StyledFlex>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      'align-content': 'center',
      'align-items': 'center',
      'justify-content': 'center',
    });
  });

  test('flex, flex-direction, flex-wrap', () => {
    render(
      <StyledFlex flex="1" flexDirection="row" flexWrap="wrap">
        test
      </StyledFlex>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      flex: '1',
      'flex-direction': 'row',
      'flex-wrap': 'wrap',
    });
  });

  test('gap', () => {
    render(<StyledFlex gap="cmp-md">test</StyledFlex>);
    expect(screen.getByText('test')).toHaveStyle({
      gap: tokens.alias.space.cmp.md,
    });
  });

  test('column-gap, row-gap', () => {
    render(
      <StyledFlex columnGap="cmp-md" rowGap="cmp-md">
        test
      </StyledFlex>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      'column-gap': tokens.alias.space.cmp.md,
      'row-gap': tokens.alias.space.cmp.md,
    });
  });

  test('childrenFlex', () => {
    render(
      <StyledFlex childrenFlex="1">
        <div>test</div>
      </StyledFlex>,
    );
    expect(screen.getByText('test')).toHaveStyle({
      flex: '1',
    });
  });
});
