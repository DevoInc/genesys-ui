import * as React from 'react';
import { useTheme } from 'styled-components';

import { HELPER_ICON_SIZE_MAP, HELPER_SIZE_SPACE_MAP } from './constants';
import type {
  IDataAttrs,
  IGlobalAttrs,
  TGlobalStatus,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import type { THelperSize } from './declarations';
import { hasStatus } from '../../utils/validations';
import { getLineHeight } from '../../styled';
import { getHelperStatusIcon } from './utils';
import { Flex } from '../Flex';
import { HFlex } from '../HFlex';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

export interface HelperProps
  extends IGlobalAttrs,
    IDataAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss {
  /** Content of the helper message. */
  message: string | React.ReactNode;
  /** Size of the helper: spacing, font-size... etc. */
  size?: THelperSize;
  /** This property defines the status color schema for the helper */
  status?: TGlobalStatus;
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
        <Flex height={getLineHeight({ tokens, size })} alignItems="center">
          <Icon
            color={
              iconColorTokens[status][
                status === 'warning' ? 'strong' : 'stronger'
              ]
            }
            size={HELPER_ICON_SIZE_MAP[size]}
          >
            {getHelperStatusIcon(status)}
          </Icon>
        </Flex>
      )}
      {React.isValidElement(message) ? (
        message
      ) : (
        <Typography.Paragraph
          colorScheme={status === 'error' ? 'error' : 'weak'}
          size={size}
        >
          {message}
        </Typography.Paragraph>
      )}
    </HFlex>
  );
};
