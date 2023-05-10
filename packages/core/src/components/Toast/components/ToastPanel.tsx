import * as React from 'react';

import { ToastAction } from '../declarations';
import { ToastBadge, ToastBadgeProps } from './ToastBadge';
import { ToastContent, ToastContentProps } from './ToastContent';
import { StyledContent, StyledContentProps } from '../styled';
import { getHeaderContent, getFooterActions } from '../utils';
import { ToastHeaderProps } from './ToastHeader';
import { useTheme } from 'styled-components';

export interface ToastPanelProps
  extends ToastHeaderProps,
    Pick<ToastBadgeProps, 'updates'>,
    Pick<ToastContentProps, 'content'>,
    Pick<StyledContentProps, 'accent' | 'showProgressBar'> {
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
      <StyledContent
        accent={accent}
        colorScheme={backgroundColor}
        bodySettings={{ removeSpace: showCollapsed }}
        elevation="popOut"
        footerSettings={{ hasShadowStyle: true, actions: footerActions }}
        headerSettings={{ hasShadowStyle: true, renderContent: headerContent }}
        expanded={collapsable && !collapsed}
        heightScheme={{ maxHeight }}
        showProgressBar={showProgressBar}
        status={status}
      >
        <ToastContent content={content} collapsed={showCollapsed} />
      </StyledContent>
    </>
  );
};
