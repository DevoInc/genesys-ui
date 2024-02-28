import * as React from 'react';
import { concat } from 'lodash';
import { css, useTheme } from 'styled-components';

import { Icon, type IconProps } from '../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastHeaderIconProps extends IconProps {}

export const ToastHeaderIcon: React.FC<ToastHeaderIconProps> = ({
  colorScheme,
  iconId,
  styles,
  ...restIconProps
}) => {
  const tokensToast = useTheme().cmp.toast;
  const baseStyles = css`
    align-items: flex-start;
    font-size: ${tokensToast.headerIcon.typo.fontSize.md};
    color: ${tokensToast.headerIcon.color.text[colorScheme]};
  `;
  return (
    <Icon
      {...restIconProps}
      iconId={iconId}
      styles={concat(baseStyles, styles)}
    />
  );
};
