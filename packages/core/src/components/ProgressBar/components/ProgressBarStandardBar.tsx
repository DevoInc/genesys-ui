import * as React from 'react';

import {
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
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    StyledProgressBarStandardProps {}

export const ProgressBarStandardBar: React.FC<ProgressBarStandardBarProps> = ({
  animated,
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
    <StyledProgressBarStandard
      {...nativeProps}
      animated={animated}
      colorScheme={colorScheme}
      css={styles}
      indeterminate={indeterminate}
      percent={percent}
      showInfo={showInfo}
      size={size}
      status={status}
      title={`${percent}%`}
    />
  );
};
