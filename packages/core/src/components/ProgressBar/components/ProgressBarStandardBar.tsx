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
import type { IBaseProgressBar } from '../declarations';
import { ProgressBarContext } from '../context';

import { StyledProgressBarStandard } from '../styled';

export interface ProgressBarStandardBarProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<FieldAriaProps, 'aria-errormessage' | 'aria-invalid'>,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
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
  styles,
  ...nativeProps
}) => {
  const context = React.useContext(ProgressBarContext);
  return (
    <StyledProgressBarStandard
      {...nativeProps}
      animated={animated}
      colorScheme={colorScheme || context.colorScheme}
      css={styles}
      indeterminate={indeterminate}
      percent={percent || context.percent}
      showStatus={showStatus}
      size={size || context.size}
      status={status || context.status}
      title={`${percent}%`}
    />
  );
};
