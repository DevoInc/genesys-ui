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
  StyledProgressBarStandard,
  StyledProgressBarStandardProps,
} from '../styled';

export interface ProgressBarStandardBarProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<FieldAriaProps, 'aria-errormessage' | 'aria-invalid'>,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    StyledProgressBarStandardProps {}

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
  return (
    <StyledProgressBarStandard
      {...nativeProps}
      animated={animated}
      colorScheme={colorScheme}
      css={styles}
      indeterminate={indeterminate}
      percent={percent}
      showStatus={showStatus}
      size={size}
      status={status}
      title={`${percent}%`}
    />
  );
};
