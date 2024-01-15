import * as React from 'react';

import { Typography, InlineMessage, HelperProps } from '..';
import { HELPER_ICON_BUTTON_SIZE_MAP } from '../Helper/constants';
import { hasStatus } from '../../utils/validations';

export const FloatingHelper: React.FC<HelperProps> = ({
  id,
  message,
  size = 'md',
  status = 'base',
  tooltip,
}) => {
  return (
    <InlineMessage
      id={id}
      trigger={{ size: HELPER_ICON_BUTTON_SIZE_MAP[size] }}
      status={hasStatus(status) ? status : 'help'}
      tooltip={tooltip}
    >
      <InlineMessage.Panel>
        <Typography.Paragraph gutterBottom="0">{message}</Typography.Paragraph>
      </InlineMessage.Panel>
    </InlineMessage>
  );
};
