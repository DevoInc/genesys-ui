import * as React from 'react';
import { useTheme } from 'styled-components';

import { Typography, Icon, Flex, HFlex } from '../';
import {
  HELPER_ICON_SIZE_MAP,
  HELPER_ICON_STATUS_MAP,
  HELPER_SIZE_SPACE_MAP,
} from './constants';
import {
  GlobalAttrProps,
  GlobalStatus,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';
import { HelperSize } from './declarations';
import { getLineHeight } from '../../styled';
import { hasStatus } from '../../utils/validations';

export interface HelperProps
  extends GlobalAttrProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  /** Content of the helper message. */
  message: React.ReactNode;
  /** Size of the helper: spacing, font-size... etc. */
  size?: HelperSize;
  /** This property defines the status color schema for the helper */
  status?: GlobalStatus;
}

export const Helper: React.FC<HelperProps> = ({
  message,
  role,
  size = 'md',
  status = 'base',
  tooltip,
  ...restNativeProps
}) => {
  const tokens = useTheme();
  const iconColorTokens = tokens.alias.color.background.feedback;

  return (
    <HFlex
      {...restNativeProps}
      alignItems={'flex-start'}
      role={role || (status === 'error' ? 'alert' : undefined)}
      spacing={HELPER_SIZE_SPACE_MAP[size]}
      tooltip={tooltip}
    >
      {hasStatus(status) && (
        <Flex height={getLineHeight({ tokens, size })}>
          <Icon
            color={
              iconColorTokens[status][
                status === 'warning' ? 'strong' : 'stronger'
              ]
            }
            iconId={HELPER_ICON_STATUS_MAP[status]}
            size={HELPER_ICON_SIZE_MAP[size]}
          />
        </Flex>
      )}
      <Typography.Paragraph
        colorScheme={status === 'error' ? 'error' : 'weak'}
        size={size}
      >
        {message}
      </Typography.Paragraph>
    </HFlex>
  );
};
