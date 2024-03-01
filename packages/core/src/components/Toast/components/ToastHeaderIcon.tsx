import * as React from 'react';
import { useTheme } from 'styled-components';

import { Icon, type IconProps } from '../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastHeaderIconProps extends IconProps {}

export const ToastHeaderIcon: React.FC<ToastHeaderIconProps> = ({
  colorScheme,
  children,
  size,
  ...restIconProps
}) => {
  const tokensToast = useTheme().cmp.toast;
  return (
    <Icon
      {...restIconProps}
      size={size || tokensToast.headerIcon.typo.fontSize.md}
      style={{
        alignItems: 'flex-start',
        color: tokensToast.headerIcon.color.text[colorScheme],
      }}
    >
      {children}
    </Icon>
  );
};
