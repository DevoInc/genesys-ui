import * as React from 'react';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

import {
  StyledProgressBarCircular,
  StyledProgressBarCircularCircleInner,
  StyledProgressBarCircularCircleInnerProps,
  StyledProgressBarCircularProps,
  StyledProgressBarCircularSVG,
  StyledProgressBarCircularSVGProps,
} from '../styled';
import { getPercent, getStatus } from '../utils';

export interface ProgressBarCircularBarProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    StyledProgressBarCircularSVGProps,
    StyledProgressBarCircularProps,
    StyledProgressBarCircularCircleInnerProps {}

export const ProgressBarCircularBar: React.FC<ProgressBarCircularBarProps> = ({
  colorScheme,
  indeterminate,
  percent,
  showInfo,
  size,
  status,
  styles,
  ...nativeProps
}) => {
  return (
    <StyledProgressBarCircularSVG
      {...nativeProps}
      css={styles}
      indeterminate={indeterminate}
      percent={getPercent({ percent, status })}
      status={getStatus({ percent, status })}
      showInfo={showInfo}
      size={size}
    >
      <StyledProgressBarCircular
        colorScheme={colorScheme}
        status={status}
        size={size}
      />
      <StyledProgressBarCircularCircleInner
        indeterminate={indeterminate}
        percent={getPercent({ percent, status })}
        status={getStatus({ percent, status })}
        size={size}
      />
    </StyledProgressBarCircularSVG>
  );
};
