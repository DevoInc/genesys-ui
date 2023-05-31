import * as React from 'react';

import {
  FieldAriaProps,
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
    Pick<FieldAriaProps, 'aria-errormessage' | 'aria-invalid'>,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    StyledProgressBarCircularSVGProps,
    StyledProgressBarCircularProps,
    StyledProgressBarCircularCircleInnerProps {}

export const ProgressBarCircularBar: React.FC<ProgressBarCircularBarProps> = ({
  colorScheme,
  indeterminate,
  percent,
  showStatus,
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
      showStatus={showStatus}
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
