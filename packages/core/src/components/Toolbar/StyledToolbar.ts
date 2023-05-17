import styled, { css } from 'styled-components';
import { boxMixin, BoxMixinProps } from '../../styled/';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledToolbarProps
  extends Omit<BoxMixinProps, '$display' | 'theme'> {}

export const StyledToolbar = styled.div<StyledToolbarProps>`
  ${({ theme, ...boxMixinProps }) => css`
    ${boxMixin({ theme, ...boxMixinProps })};
    grid-area: Toolbar;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: ${theme.alias.color.background.surface.base.base};
  `}
`;
