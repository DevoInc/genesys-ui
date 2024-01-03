import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { ToastAction } from '../declarations';
import { TOAST_ELEVATION_LEVEL } from '../constants';
import { ToastBadge, ToastBadgeProps } from './ToastBadge';
import { ToastContent, ToastContentProps } from './ToastContent';
import { getHeaderContent, getFooterActions } from '../utils';
import { ToastHeaderProps } from './ToastHeader';
import { Panel } from '../../Panel';
import { ToastPanelMixinProps, toastPanelMixinProps } from './helpers';
import { StyledOverloadCssProps } from '../../../declarations';

export interface ToastPanelProps
  extends StyledOverloadCssProps,
    ToastHeaderProps,
    Pick<ToastBadgeProps, 'updates'>,
    Pick<ToastContentProps, 'content'>,
    Pick<ToastPanelMixinProps, 'accent' | 'showProgressBar'> {
  /** Apply action */
  actionApply?: ToastAction;
  /** Reject action */
  actionReject?: ToastAction;
  /** Max height that panel body could have. */
  maxHeight?: string;
  /** Show the progress bar */
  showProgressBar?: boolean;
}

export const ToastPanel: React.FC<ToastPanelProps> = ({
  accent,
  actionApply,
  actionReject,
  closeToast,
  closeTooltip = 'Close',
  collapsable,
  collapseTooltip = 'Collapse',
  content,
  expandTooltip = 'Expand',
  maxHeight = '30rem',
  showProgressBar,
  subtitle,
  title,
  status,
  styles,
  updates,
}) => {
  const [collapsed, setCollapsed] = React.useState(true);

  const onCollapse = () => setCollapsed(!collapsed);
  const showCollapsed = collapsable && collapsed;
  const theme = useTheme();
  const backgroundColor = accent
    ? theme.cmp.toast.color.background[status]
    : undefined;

  const headerContent = getHeaderContent({
    closeToast,
    closeTooltip,
    collapsable,
    collapseTooltip,
    expandTooltip,
    collapsed,
    onCollapse,
    status,
    subtitle,
    title,
  });

  const footerActions = showCollapsed
    ? undefined
    : getFooterActions({
        accent,
        actionApply,
        actionReject,
        closeToast,
        status,
      });
  return (
    <>
      <ToastBadge status={status} updates={updates} />
      <Panel
        ref={null}
        colorScheme={backgroundColor}
        bodySettings={{ removeSpace: showCollapsed }}
        elevation={TOAST_ELEVATION_LEVEL}
        footerSettings={{ hasBoxShadow: true, actions: footerActions }}
        headerSettings={{
          hasBoxShadow: collapsable ? collapsable && !collapsed : undefined,
          removeSpace: true,
          renderContent: headerContent,
        }}
        maxHeight={maxHeight}
        styles={concat(
          toastPanelMixinProps({
            accent,
            showProgressBar,
            status,
            theme,
          }),
          styles,
        )}
      >
        <ToastContent content={content} collapsed={showCollapsed} />
      </Panel>
    </>
  );
};
