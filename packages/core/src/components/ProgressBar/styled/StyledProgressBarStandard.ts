import styled, { css, keyframes } from 'styled-components';

import { BaseProgressBarProps } from '../declarations';

import { getProgressBgColor, getTrackBgColor } from '../utils';

const movingBar = keyframes`
  0% {
    left: -100%;
    width: 55%;
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    left: 100%;
    width: 15%;
    opacity: .3;
  }
`;

const movingMinorBar = keyframes`
  0% {
    left: -100%;
    width: 15%;
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    left: 100%;
    width: 5%;
    opacity: .3;
  }
`;

const movingStripes = (height) => keyframes`
  from {
    background-position: ${height} 0;
    }
  to {
    background-position: 0 0;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProgressBarStandardProps
  extends Pick<
    BaseProgressBarProps,
    | 'animated'
    | 'colorScheme'
    | 'indeterminate'
    | 'percent'
    | 'status'
    | 'showStatus'
    | 'size'
  > {}

export const StyledProgressBarStandard = styled.div<StyledProgressBarStandardProps>`
  ${({
  animated,
  colorScheme,
  indeterminate,
  percent,
  size,
  status,
  theme,
}) => {
  const progressBarTokens = theme.cmp.progressBar;
  const height = progressBarTokens.size.height[size];
  const progressBgColor = getProgressBgColor({
    status,
    tokens: progressBarTokens,
  });
  const percentBarWidth =
      indeterminate && status === 'progressing'
        ? '30%'
        : indeterminate
          ? '100%'
          : percent
            ? `${percent}%`
            : null;
  const percentMinorBarWidth =
      indeterminate && status === 'progressing'
        ? '15%'
        : indeterminate
          ? '0'
          : null;
  return css`
      flex: 1 1 auto;
      background-color: ${getTrackBgColor({
    colorScheme,
    status,
    tokens: progressBarTokens,
  })};
      position: relative;
      height: ${height};
      border-radius: ${progressBarTokens.shape.borderRadius};
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        border-radius: ${progressBarTokens.progress.shape.borderRadius};
        background-color: ${progressBgColor};
        transition: all ease 0.3s;
        width: ${percentBarWidth};
        ${animated &&
        css`
          animation: ${movingStripes(height)} 0.5s linear infinite;
          transform: translate3d(0, 0, 0);
          background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.15) 25%,
            transparent 25%,
            transparent 50%,
            rgba(0, 0, 0, 0.15) 50%,
            rgba(0, 0, 0, 0.15) 75%,
            transparent 75%,
            transparent
          );
          background-size: ${`${height} ${height}`};
        `};
        ${indeterminate &&
        (!status || status === 'progressing') &&
        css`
          animation: ${movingBar} 1.5s infinite ease-out;
          transform: translate3d(0, 0, 0);
        `};
      }

      ${indeterminate &&
      (!status || status === 'progressing') &&
      css`
        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: -100%;
          height: 100%;
          border-radius: ${progressBarTokens.shape.borderRadius};
          background-color: ${progressBgColor};
          transition: all ease 0.3s;
        }

        &::after {
          animation: ${movingBar} 1.5s infinite ease-out;
          transform: translate3d(0, 0, 0);
        }

        &::before {
          width: ${percentMinorBarWidth};
          animation: ${movingMinorBar} 1.5s infinite ease-out 0.12s;
          transform: translate3d(0, 0, 0);
        }
      `};
    `;
}};
`;
