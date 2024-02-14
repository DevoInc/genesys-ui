import { css, CSSProp, keyframes } from 'styled-components';
import { InputControlProps } from '@devoinc/genesys-ui';

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface cssRealTimeButtonProps
  extends Pick<InputControlProps, 'size'> {}

export const cssRealTimeButton: CSSProp = css`
  ${({ size }: cssRealTimeButtonProps): CSSProp => {
    return css`
      ${({ theme }) => {
        const RTButtonTokens = theme.cmp.dateTimeRangeControl.realTimeButton;
        const buttonSquare = RTButtonTokens.size.square[size];
        const buttonIconSize = RTButtonTokens.typo.fontSize[size];
        return css`
          width: ${buttonSquare};
          height: ${buttonSquare};

          i {
            font-size: ${buttonIconSize};
            width: ${buttonIconSize};
          }
        `;
      }}
    `;
  }}
`;
