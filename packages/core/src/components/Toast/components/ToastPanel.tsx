import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { TOAST_ELEVATION_LEVEL } from '../constants';
import type { StyledOverloadCssProps } from '../../../declarations';
import { ToastAction } from '../declarations';
import { getHeaderContent, getFooterActions } from '../utils';
import { type ToastPanelMixinProps, toastPanelMixin } from './helpers';
import { ToastBadge, type ToastBadgeProps } from './ToastBadge';
import { ToastContent, type ToastContentProps } from './ToastContent';
import { type ToastHeaderProps } from './ToastHeader';
import { Panel } from '../../Panel';

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
        elevation={TOAST_ELEVATION_LEVEL}
        maxHeight={maxHeight}
        styles={concat(
          toastPanelMixin({
            accent,
            showProgressBar,
            status,
            theme,
          }),
          styles,
        )}
      >
        <Panel.Header
          hasBoxShadow={collapsable ? collapsable && !collapsed : undefined}
          removeSpace
        >
          {headerContent}
        </Panel.Header>
        <Panel.Body removeSpace={showCollapsed}>
          <ToastContent content={content} collapsed={showCollapsed} />
        </Panel.Body>
        <Panel.Footer actions={footerActions} />
      </Panel>
    </>
  );
};
