import styled from 'styled-components';

import { Icon } from '../../Icon';

export const StyledExpandedIcon = styled(Icon)`
  position: absolute;
  right: 1.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.alias.color.text.body.base};
`;
