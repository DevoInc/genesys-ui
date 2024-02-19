import styled from 'styled-components';
import { menuItemSizeConfig } from '../constants';

export const StyledMenuItemIcon = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  left: ${({ theme }) => menuItemSizeConfig(theme).horPadding};
`;
