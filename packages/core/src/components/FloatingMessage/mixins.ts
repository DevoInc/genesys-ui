import { css } from 'styled-components';
import type {
  TFloatingMessageOffset,
  TFloatingMessagePosition,
} from './declarations';

export interface IFloatingMessageMixin {
  offset: TFloatingMessageOffset;
  position: TFloatingMessagePosition;
}

/**
 * Get the position styles based in position prop for FloatingMessage component
 *
 * @return styles for FloatingMessage component
 */
export const floatingNotificationPositionCss = ({
  position = 'right-top',
}: {
  position?: TFloatingMessagePosition;
  offset?: TFloatingMessageOffset;
}) => css`
  top: ${position.endsWith('-center')
    ? '50%'
    : position.endsWith('-top')
      ? '0'
      : 'auto'};
  right: ${position.startsWith('right-') ? '0' : 'auto'};
  bottom: ${position.endsWith('-bottom') ? '0' : 'auto'};
  left: ${position.startsWith('center-')
    ? '50%'
    : position.startsWith('left-')
      ? '0'
      : 'auto'};
  transform: ${position === 'center-center'
    ? 'translate(-50%, -50%)'
    : position.endsWith('-center')
      ? 'translate(0, -50%)'
      : position.startsWith('center-')
        ? 'translate(-50%, 0)'
        : null};
`;

/**
 * Get the margin styles based in position and offset props for FloatingMessage component
 *
 * @return styles for FloatingMessage component
 */
export const floatingNotificationMarginCss = ({
  offset = [10, 10],
  position = 'right-top',
}: {
  offset?: TFloatingMessageOffset;
  position?: TFloatingMessagePosition;
}) => css`
  margin-top: ${position.endsWith('-top') || position.endsWith('-center')
    ? `${offset[1]}px`
    : '0'};
  margin-bottom: ${position.endsWith('-bottom') ? `${offset[1]}px` : '0'};
  margin-left: ${position.startsWith('left-') || position.startsWith('center-')
    ? `${offset[0]}px`
    : '0'};
  margin-right: ${position.startsWith('right-') ? `${offset[0]}px` : '0'};
`;

/**
 * Get the specific styles (position and offset) for Panel component when it's used as a FloatingMessage component
 *
 * @return styles for Panel component
 */
export const floatingNotificationMixin = ({
  offset,
  position,
}: IFloatingMessageMixin) => css`
  position: absolute;
  ${floatingNotificationPositionCss({ position })};
  ${offset && floatingNotificationMarginCss({ offset, position })};
`;
