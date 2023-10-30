import * as React from 'react';
import { StyledPanelFooterContainer } from './StyledPanelFooterContainer';
import { render } from 'test-utils';

describe('StyledPanelFooterContainer', () => {
  test('Component renders with default styles', () => {
    const { container } = render(
      <StyledPanelFooterContainer>
        {'This is a footer'}
      </StyledPanelFooterContainer>,
    );

    expect(container.getElementsByTagName('footer')[0]).toHaveStyle(`
          z-index: 1;
          flex-shrink: 0;
          display: flex;
          align-items: center;
    `);
  });
});
