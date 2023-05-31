import * as React from 'react';

import {
  FieldAriaProps,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

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
