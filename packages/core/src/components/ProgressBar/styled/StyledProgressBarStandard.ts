import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import styled, { css, keyframes } from 'styled-components';
import { getProgressBgColor, getTrackBgColor } from '../utils';
import { BaseStyledProgressBarProps } from './declarations';

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

export interface StyledProgressBarStandardProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<
      BaseStyledProgressBarProps,
      | 'animated'
      | 'colorScheme'
      | 'indeterminate'
      | 'percent'
      | 'progress'
      | 'showInfo'
      | 'size'
    > {}

export const StyledProgressBarStandard = styled.div.attrs(
  ({ percent, showInfo }: StyledProgressBarStandardProps) => ({
    'data-tip': !showInfo ? percent + '%' : null,
  })
)<StyledProgressBarStandardProps>`
  ${({
    animated,
    colorScheme,
    indeterminate,
    percent,
    progress,
    size,
    theme,
  }) => {
    const progressBarTokens = theme.cmp.progressBar;

    return css`
      --height: ${progressBarTokens.size.height[size]};
      --progress-bg-color: ${getProgressBgColor({
        progress,
        tokens: progressBarTokens,
      })};
      ${() => {
        if (indeterminate && progress === 'progressing') {
          return '--width-percent-bar: 30%; --width-percent-minor-bar: 15%';
        }
        if (indeterminate) {
          return '--width-percent-bar: 100%; --width-percent-minor-bar: 0';
        } else if (percent) {
          return `--width-percent-bar: ${percent}%`;
        } else {
          return '0';
        }
      }};

      // percent bar width depends on props percent and indeterminate ----------

      flex: 1 1 auto;
      background-color: ${getTrackBgColor({
        colorScheme,
        progress,
        tokens: progressBarTokens,
      })};
      position: relative;
      height: var(--height);
      border-radius: ${progressBarTokens.shape.borderRadius};
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        border-radius: ${progressBarTokens.progress.shape.borderRadius};
        background-color: var(--progress-bg-color);
        transition: all ease 0.3s;
        width: var(--width-percent-bar);
        ${animated &&
        css`
          animation: ${movingStripes('var(--height)')} 0.5s linear infinite;
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
          background-size: var(--height) var(--height);
        `};
        ${indeterminate &&
        (!progress || progress === 'progressing') &&
        css`
          animation: ${movingBar} 1.5s infinite ease-out;
          transform: translate3d(0, 0, 0);
        `};
      }

      ${indeterminate &&
      (!progress || progress === 'progressing') &&
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
          background-color: var(--progress-bg-color);
          transition: all ease 0.3s;
        }

        &::after {
          animation: ${movingBar} 1.5s infinite ease-out;
          transform: translate3d(0, 0, 0);
        }

        &::before {
          width: var(--width-percent-minor-bar);
          animation: ${movingMinorBar} 1.5s infinite ease-out 0.12s;
          transform: translate3d(0, 0, 0);
        }
      `};
    `;
  }};
`;
