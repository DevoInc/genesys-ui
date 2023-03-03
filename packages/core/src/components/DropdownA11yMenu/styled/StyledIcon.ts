import styled from 'styled-components';

import { Icon } from '../../Icon';

export const StyledIcon = styled(Icon)`
  position: absolute;
  left: 1.2rem;
  color: ${({ theme }) => theme.tokens.alias.color.text.body.base};
`;
