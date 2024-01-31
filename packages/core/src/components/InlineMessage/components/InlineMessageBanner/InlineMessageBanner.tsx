import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Banner, BannerProps } from '../../../Banner';
import { inlineMessageBannerMixin } from './helpers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InlineMessageBannerProps
  extends Omit<BannerProps, 'children' | 'subcomponentStyles'> {}

export const InlineMessageBanner: React.FC<InlineMessageBannerProps> = ({
  actions,
  content,
  id,
  status,
  styles,
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
      styles={concat(inlineMessageBannerMixin({ theme }), styles)}
      title={title}
    />
  );
};
