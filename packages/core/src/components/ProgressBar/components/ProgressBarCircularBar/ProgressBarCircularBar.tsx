import * as React from 'react';

import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../../../declarations/styled';
import type {
  IFieldAriaAttrs,
  IGlobalAriaAttrs,
} from '../../../../declarations/ariaAttrs';
import type { IGlobalAttrs } from '../../../../declarations/htmlAttrs';
import { StyledProgressBarCircularSVG } from './StyledProgressBarCircularSvg';
import { StyledProgressBarCircularCircleInner } from './StyledProgressBarCircularCircleInner';
import { StyledProgressBarCircular } from './StyledProgressBarCircularCircle';
import { getCxy, getRadiant, getRadio, getStroke } from '../../utils';
import { SQUARE } from '../../constants';
import { ProgressBarContext } from '../../context';
import type { IBaseProgressBar } from '../../declarations';

export interface ProgressBarCircularBarProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<IFieldAriaAttrs, 'aria-errormessage' | 'aria-invalid'>,
    IStyledPolymorphic,
    IStyledOverloadCss,
    Pick<
      IBaseProgressBar,
      | 'colorScheme'
      | 'indeterminate'
      | 'percent'
      | 'showStatus'
      | 'size'
      | 'status'
    > {}

export const ProgressBarCircularBar: React.FC<ProgressBarCircularBarProps> = ({
  colorScheme,
  indeterminate,
  percent,
  showStatus,
  size,
  status,
  style,
  ...nativeProps
}) => {
  const context = React.useContext(ProgressBarContext);
  const evalSize = size || context.size;
  const evalStatus = status || context.status;
  const evalPercent = percent || context.percent;
  return (
    <StyledProgressBarCircularSVG
      {...nativeProps}
      css={style}
      $indeterminate={indeterminate}
      $percent={evalPercent}
      $status={evalStatus}
      $showStatus={showStatus}
      width={SQUARE[evalSize]}
      height={SQUARE[evalSize]}
      data-tip={!showStatus ? evalPercent + '%' : null}
    >
      <StyledProgressBarCircular
        $colorScheme={colorScheme || context.colorScheme}
        $status={evalStatus}
        $size={evalSize}
        cx={getCxy(evalSize)}
        cy={getCxy(evalSize)}
        strokeWidth={getStroke(evalSize)}
        r={getRadio(evalSize)}
        fill={'none'}
      />
      <StyledProgressBarCircularCircleInner
        $indeterminate={indeterminate}
        $percent={evalPercent}
        $status={evalStatus}
        cx={getCxy(evalSize)}
        cy={getCxy(evalSize)}
        strokeWidth={getStroke(evalSize)}
        r={getRadio(evalSize)}
        $rad={getRadiant(evalSize)}
        fill={'none'}
      />
    </StyledProgressBarCircularSVG>
  );
};
