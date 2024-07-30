import * as React from 'react';
import { useTheme } from 'styled-components';

import { Banner, type BannerProps } from '../../../Banner';
import { inlineMessageBannerMixin } from './helpers';
import { mergeStyles } from '../../../../helpers';

export interface InlineMessageBannerProps
  extends Omit<BannerProps, 'children'> {}

export const InlineMessageBanner: React.FC<InlineMessageBannerProps> = ({
  actions,
  content,
  id,
  status,
  style,
  title,
}) => {
  const theme = useTheme();
  return (
    <Banner
      actions={actions}
      content={content}
      hideIcon
      id={id}
      status={status}
      style={mergeStyles(inlineMessageBannerMixin({ theme }), style)}
      title={title}
    />
  );
};
