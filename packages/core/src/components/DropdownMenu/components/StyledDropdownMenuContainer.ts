import styled, { css } from 'styled-components';
import { boxMixin, BoxMixinProps } from '../../../styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface StyledDropdownProps extends BoxMixinProps {}

export const StyledDropdownMenuContainer = styled.ul<StyledDropdownProps>`
  ${({ theme, ...mixinBoxProps }) => {
    return css`
      ${boxMixin(theme)(mixinBoxProps)};
    `;
  }}
`;
