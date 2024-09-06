import styled from 'styled-components';
import { TDirection } from '../../declarations';

export interface StyledContainerProps {
  $direction: TDirection;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;
