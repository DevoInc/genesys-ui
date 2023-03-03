import * as React from 'react';

import { BoxMessage, BoxMessageProps } from '../../../BoxMessage';
import { StyledInlineMessageBanner } from './StyledInlineMessageBanner';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InlineMessageBannerProps extends BoxMessageProps {}

export const InlineMessageBanner: React.FC<InlineMessageBannerProps> = ({
  actions,
  className,
  content,
  id,
  status,
  title,
}) => {
  return (
    <BoxMessage
      actions={actions}
      as={StyledInlineMessageBanner}
      className={className}
      content={content}
      hideIcon
      id={id}
      status={status}
      title={title}
    />
  );
};
