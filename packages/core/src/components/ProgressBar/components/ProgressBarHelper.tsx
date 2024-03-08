import * as React from 'react';

import { STATUS_COLOR_SCHEME_MAP } from '../constants';

import type { IBaseProgressBar } from '../declarations';
import type {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../../declarations/styled';

import type { GlobalAttrProps } from '../../../declarations/htmlAttrs';

import { Flex } from '../../Flex';
import { Helper } from '../../Helper';

export interface ProgressBarHelperProps
  extends Pick<GlobalAttrProps, 'id'>,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<Partial<IBaseProgressBar>, 'status' | 'size' | 'statusHelper'> {}

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
