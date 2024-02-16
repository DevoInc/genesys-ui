import * as React from 'react';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';

import {
  StyledDevoLogoSpinner,
  StyledDevoLogoSpinnerProps,
} from './StyledDevoLogoSpinner';

export interface DevoLogoSpinnerProps
  extends StyledDevoLogoSpinnerProps,
    // native
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps {}

export const DevoLogoSpinner: React.FC<DevoLogoSpinnerProps> = ({
  animation = 'flow',
  colorScheme = 'dark',
  size = 'md',
  styles,
  tooltip,
  ...nativeProps
}) => (
  <StyledDevoLogoSpinner
    {...nativeProps}
    animation={animation}
    colorScheme={colorScheme}
    css={styles}
    size={size}
    title={tooltip}
  >
    <svg className="devo-logo-svg" x="0" y="0" viewBox="0 0 130 75">
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--odd"
          d={
            'M54,0L54,0c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,' +
            '6.4c-3.5,0-6.4-2.9-6.4-6.4S50.4,0,54,0'
          }
        />
      </g>
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--even"
          d={
            'M75.2,0h32.3c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,' +
            '6.4H75.2c-3.5,0-6.4-2.9-6.4-6.4S71.7,0,75.2,0'
          }
        />
      </g>
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--odd"
          d={
            'M6.4,33.7h79.9c3.5,0,6.4-2.9,6.4-6.4c0-3.5-2.9-6.4-' +
            '6.4-6.4H6.4c-3.5,0-6.4,2.9-6.4,6.4C0,30.8,2.9,33.7,6.4,33.7'
          }
        />
      </g>
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--even"
          d={
            'M107.1,33.7h17.2c3.5,0,6.4-2.9,6.4-6.4c0-3.5-2.9-' +
            '6.4-6.4-6.4h-17.2c-3.5,0-6.4,2.9-6.4,6.4C100.6,30.8,103.5,' +
            '33.7,107.1,33.7'
          }
        />
      </g>
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--odd"
          d={
            'M24,41.6L24,41.6c3.5,0,6.4,2.9,6.4,6.4c0,3.5-2.9,' +
            '6.4-6.4,6.4c-3.5,0-6.4-2.9-6.4-6.4C17.6,44.5,20.4,41.6,24,41.6'
          }
        />
      </g>
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--even"
          d={
            'M43.2,54.5h81.1c3.5,0,6.4-2.9,6.4-6.4c0-3.5-2.9-6.4-6.4-6.4' +
            'H43.2c-3.5,0-6.4,2.9-6.4,6.4C36.8,51.6,39.6,54.5,43.2,54.5'
          }
        />
      </g>
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--odd"
          d={
            'M68.4,75.3h18c3.5,0,6.4-2.9,6.4-6.4c0-3.5-2.9-6.4-6.4-6.4h-' +
            '18c-3.5,0-6.4,2.9-6.4,6.4C61.9,72.4,64.8,75.3,68.4,75.3'
          }
        />
      </g>
      <g className="devo-logo-svg__group">
        <path
          className="devo-logo-svg__path devo-logo-svg__path--even"
          d={
            'M107.1,75.3L107.1,75.3c3.5,0,6.4-2.9,6.4-6.4c0-3.5-2.9-6.4-' +
            '6.4-6.4c-3.5,0-6.4,2.9-6.4,6.4C100.6,72.4,103.5,75.3,107.1,75.3'
          }
        />
      </g>
    </svg>
  </StyledDevoLogoSpinner>
);
