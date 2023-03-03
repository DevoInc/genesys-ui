import styled from 'styled-components';

import { Icon } from '../../Icon';

interface StyledCheckIconProps {
  selected?: boolean;
}

export const StyledCheckIcon = styled(Icon)<StyledCheckIconProps>`
  position: absolute;
  transition: all ease 0.15s;
  opacity: ${({ selected }) => (selected ? '1' : '0')};
  left: 1.2rem;
  height: 100%;
  font-size: 1.2rem;
`;
