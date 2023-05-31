import * as React from 'react';

import { STATUS_COLOR_SCHEME_MAP } from '../constants';

import { BaseProgressBarProps } from '../declarations';
import {
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations';

import { Flex, Helper } from '../..';

export interface ProgressBarHelperProps
  extends Pick<GlobalAttrProps, 'id'>,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<Partial<BaseProgressBarProps>, 'status' | 'size' | 'statusHelper'> {}

export const ProgressBarHelper: React.FC<ProgressBarHelperProps> = ({
  status,
  statusHelper,
  size = 'md',
  styles,
  ...nativeProps
}) => {
  return (
    <Flex justifyContent="center" styles={styles}>
      <Helper
        {...nativeProps}
        message={statusHelper}
        size={size}
        status={STATUS_COLOR_SCHEME_MAP[status]}
      />
    </Flex>
  );
};
