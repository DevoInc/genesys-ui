import styled from 'styled-components';
import { menuItemSizeConfig } from '../constants';
import { flexMixin } from '../../../../../styled';

export const StyledMenuItemMarker = styled.span`
  ${flexMixin({ dis: 'flex', ai: 'center' })};
  position: absolute;
  left: ${({ theme }) => menuItemSizeConfig(theme).horPadding};
`;
