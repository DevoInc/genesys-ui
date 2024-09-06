import { css, CSSProp, keyframes } from 'styled-components';

import type { IconButtonProps } from '@devoinc/genesys-ui';

import type { TRealtimeState } from './declarations';

const fadeAnimation = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0;
  }
  70% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const cssRealTimeButtonSpinner: CSSProp = css`
  animation:
    ${fadeAnimation} linear 3s infinite,
    ${rotateAnimation} linear 2s infinite;
`;

export const getRealTimeDataTip = (state) =>
  state === 'inactive' ? 'Activate real-time' : 'Deactivate real-time';

export const getButtonStateFromRealTimeState = (
  state: TRealtimeState = 'inactive',
): IconButtonProps['state'] => {
  switch (state) {
    case 'disabled':
      return 'disabled';
    case 'inactive':
      return 'enabled';
    case 'activated':
      return 'selected';
    case 'selected':
      return 'selected';
    default:
      return 'enabled';
  }
};
