import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { BoxMessage, BoxMessageProps } from '../../../BoxMessage';
import { inlineMessageBannerMixin } from './helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InlineMessageBannerProps extends BoxMessageProps {}

export const InlineMessageBanner: React.FC<InlineMessageBannerProps> = ({
  actions,
  className,
  content,
  id,
  status,
  styles,
  title,
}) => {
  const theme = useTheme();
  return (
    <BoxMessage
      actions={actions}
      className={className}
      content={content}
      hideIcon
      id={id}
      status={status}
      styles={concat(inlineMessageBannerMixin({ theme }), styles)}
      title={title}
    />
  );
};
