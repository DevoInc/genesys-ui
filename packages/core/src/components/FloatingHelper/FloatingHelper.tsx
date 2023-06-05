import * as React from 'react';

import { Typography, InlineMessage, HelperProps } from '..';
import { HELPER_ICON_BUTTON_SIZE_MAP } from '../Helper/constants';
import { hasStatus } from '../../utils/validations';

export interface FloatingHelperProps extends HelperProps {
  visible?: boolean;
  setVisible?: (isVisible: boolean) => void;
}

export const FloatingHelper: React.FC<FloatingHelperProps> = ({
  id,
  visible = false,
  message,
  size = 'md',
  setVisible,
  status = 'base',
  tooltip,
}) => {
  return (
    <InlineMessage
      id={id}
      setVisible={setVisible}
      trigger={{ size: HELPER_ICON_BUTTON_SIZE_MAP[size] }}
      status={hasStatus(status) ? status : 'help'}
      tooltip={tooltip}
      visible={visible}
    >
      <InlineMessage.Panel>
        <Typography.Paragraph>{message}</Typography.Paragraph>
      </InlineMessage.Panel>
    </InlineMessage>
  );
};
