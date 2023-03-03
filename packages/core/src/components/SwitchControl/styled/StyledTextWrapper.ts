import styled, { css } from 'styled-components';
import { getSpacingPropCss } from '../../../utils/spacing';

interface StyledTextWrapperProps {
  $checked?: boolean;
  widthProp?: number;
}

export const StyledTextWrapper = styled.span<StyledTextWrapperProps>`
  ${({ $checked, theme, widthProp }) => {
    const spaceToHandler = getSpacingPropCss('cmp-xxs', theme);
    const spaceToEdge = getSpacingPropCss('cmp-sm', theme);
    return css`
      position: relative;
      display: flex;
      justify-content: ${$checked ? 'flex-start' : 'flex-end'};
      overflow: hidden;
      margin: ${$checked
        ? `0 ${spaceToHandler} 0 ${spaceToEdge}`
        : `0 ${spaceToEdge} 0 ${spaceToHandler}`};
      width: ${widthProp}px;
    `;
  }};
`;
