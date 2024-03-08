import * as React from 'react';

import type {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations/styled';
import type {
  FieldAriaProps,
  GlobalAriaProps,
} from '../../../declarations/ariaAttrs';
import type { GlobalAttrProps } from '../../../declarations/htmlAttrs';

import {
  StyledProgressBarCircular,
  StyledProgressBarCircularCircleInner,
  StyledProgressBarCircularCircleInnerProps,
  StyledProgressBarCircularProps,
  StyledProgressBarCircularSVG,
  StyledProgressBarCircularSVGProps,
} from '../styled';
import { getCxy, getRadiant, getRadio, getStroke } from '../utils';
import { SQUARE } from '../constants';
import { ProgressBarContext } from '../context';

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
  const context = React.useContext(ProgressBarContext);
  const evalSize = size || context.size;
  const evalStatus = status || context.status;
  const evalPercent = percent || context.percent;
  return (
    <StyledProgressBarCircularSVG
      {...nativeProps}
      css={styles}
      indeterminate={indeterminate}
      percent={evalPercent}
      status={evalStatus}
      showStatus={showStatus}
      width={SQUARE[evalSize]}
      height={SQUARE[evalSize]}
      data-tip={!showStatus ? evalPercent + '%' : null}
    >
      <StyledProgressBarCircular
        colorScheme={colorScheme || context.colorScheme}
        status={evalStatus}
        size={evalSize}
        cx={getCxy(evalSize)}
        cy={getCxy(evalSize)}
        strokeWidth={getStroke(evalSize)}
        r={getRadio(evalSize)}
        fill={'none'}
      />
      <StyledProgressBarCircularCircleInner
        indeterminate={indeterminate}
        percent={evalPercent}
        status={evalStatus}
        cx={getCxy(evalSize)}
        cy={getCxy(evalSize)}
        strokeWidth={getStroke(evalSize)}
        r={getRadio(evalSize)}
        rad={getRadiant(evalSize)}
        fill={'none'}
      />
    </StyledProgressBarCircularSVG>
  );
};
