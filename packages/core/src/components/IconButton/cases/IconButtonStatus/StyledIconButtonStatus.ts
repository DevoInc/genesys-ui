import styled from 'styled-components';

import { iconButtonStatusMixin } from './utils';
import { StyledButton } from '../../../Button/StyledButton';

export const StyledIconButtonStatus = styled(StyledButton)`
  ${({ state, colorScheme, theme }) => {
    const tokens = theme.tokens.cmp.iconButtonStatus;
    return iconButtonStatusMixin({ state, tokens, colorScheme });
  }};
`;
