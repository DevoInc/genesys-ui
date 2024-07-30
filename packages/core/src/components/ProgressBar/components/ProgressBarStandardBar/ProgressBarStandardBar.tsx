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
import type { IBaseProgressBar } from '../../declarations';
import { ProgressBarContext } from '../../context';
import { StyledProgressBarStandard } from './StyledProgressBarStandard';

export interface ProgressBarStandardBarProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    Pick<IFieldAriaAttrs, 'aria-errormessage' | 'aria-invalid'>,
    IStyledPolymorphic,
    IStyledOverloadCss,
    Pick<
      IBaseProgressBar,
      | 'animated'
      | 'colorScheme'
      | 'indeterminate'
      | 'percent'
      | 'status'
      | 'showStatus'
      | 'size'
    > {}

export const ProgressBarStandardBar: React.FC<ProgressBarStandardBarProps> = ({
  animated,
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
  return (
    <StyledProgressBarStandard
      {...nativeProps}
      animated={animated}
      colorScheme={colorScheme || context.colorScheme}
      css={style}
      indeterminate={indeterminate}
      percent={percent || context.percent}
      showStatus={showStatus}
      size={size || context.size}
      status={status || context.status}
      title={`${percent}%`}
    />
  );
};
