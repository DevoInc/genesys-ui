import styled, { css } from 'styled-components';

import { srOnlyMixin } from '../../../../styled/mixins';

export interface StyledFormLegendContainerProps {
  /** If the heading of the form group is hidden (always exists for
   * accessibility reasons). */
  $srOnly?: boolean;
}

export const StyledFormLegendContainer = styled.div<StyledFormLegendContainerProps>`
  ${({ $srOnly = false, theme }) => {
    const labelLineHeight = theme.alias.typo.lineHeight.body.md;
    return css`
      display: flex;
      align-items: center;
      min-height: ${labelLineHeight};
      margin: 0;

      ${$srOnly &&
      css`
        ${srOnlyMixin};
      `}
    `;
  }}
`;
