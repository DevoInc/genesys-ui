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
import {
  getCxy,
  getPercent,
  getRadiant,
  getRadio,
  getStatus,
  getStroke,
} from '../utils';
import { SQUARE } from '../constants';

export interface ProgressBarCircularBarProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<FieldAriaProps, 'aria-errormessage' | 'aria-invalid'>,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    StyledProgressBarCircularSVGProps,
    StyledProgressBarCircularProps,
    Omit<StyledProgressBarCircularCircleInnerProps, 'rad'> {}

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
      width={SQUARE[size]}
      height={SQUARE[size]}
      data-tip={!showStatus ? percent + '%' : null}
    >
      <StyledProgressBarCircular
        colorScheme={colorScheme}
        status={status}
        size={size}
        cx={getCxy(size)}
        cy={getCxy(size)}
        strokeWidth={getStroke(size)}
        r={getRadio(size)}
        fill={'none'}
      />
      <StyledProgressBarCircularCircleInner
        indeterminate={indeterminate}
        percent={getPercent({ percent, status })}
        status={getStatus({ percent, status })}
        cx={getCxy(size)}
        cy={getCxy(size)}
        strokeWidth={getStroke(size)}
        r={getRadio(size)}
        rad={getRadiant(size)}
        fill={'none'}
      />
    </StyledProgressBarCircularSVG>
  );
};
