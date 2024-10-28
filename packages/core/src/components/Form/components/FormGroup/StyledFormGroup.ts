import styled, { css } from 'styled-components';

export interface StyledFormGroupProps {
  /** If the form group is boxed. */
  $boxed?: boolean;
  /** If the form group is collapsable. */
  $collapsable?: boolean;
  /** If the form group is expanded. */
  $expanded?: boolean;
}

export const StyledFormGroup = styled.div<StyledFormGroupProps>`
  ${({ $boxed = false, $collapsable = false, $expanded = false, theme }) => {
    const cmpTokens = theme.cmp.form.group;
    return css`
      ${$boxed &&
      css`
        border: solid ${cmpTokens.shape.borderSize.boxed}
          ${cmpTokens.color.border.boxed};
        border-radius: ${cmpTokens.shape.borderRadius.boxed};
        padding: ${cmpTokens.space.padding.boxed};
        padding-top: ${$collapsable && '0'};
        padding-bottom: ${$collapsable && !$expanded && '0'};
      `}
    `;
  }}
`;
