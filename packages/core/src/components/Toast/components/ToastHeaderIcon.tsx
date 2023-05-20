import * as React from 'react';
import { css, useTheme } from 'styled-components';

import { Icon, IconProps } from '../../Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastHeaderIconProps extends IconProps {}

export const ToastHeaderIcon: React.FC<ToastHeaderIconProps> = ({
  colorScheme,
  iconId,
  styles,
  ...restIconProps
}) => {
  const tokensToast = useTheme().cmp.toast;
  const defaultStyles = css`
    align-items: flex-start;
    font-size: ${tokensToast.headerIcon.typo.fontSize.md};
    color: ${tokensToast.headerIcon.color.text[colorScheme]};
  `;
  return (
    <Icon {...restIconProps} iconId={iconId} styles={styles || defaultStyles} />
  );
};
