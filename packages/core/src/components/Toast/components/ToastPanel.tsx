import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { TOAST_ELEVATION_LEVEL } from '../constants';
import type { IStyledOverloadCss } from '../../../declarations';
import type { IToast } from '../declarations';

import { getFooterActions } from '../utils';
import { toastPanelMixin } from './helpers';
import { Panel, type PanelProps } from '../../Panel';
import { ToastBadge } from './ToastBadge';
import { ToastContent } from './ToastContent';
import { ToastHeader } from './ToastHeader';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ToastPanelProps
  extends IStyledOverloadCss,
    Pick<PanelProps, 'maxHeight'>,
    IToast {}

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
          <ToastHeader
            closeToast={closeToast}
            closeTooltip={closeTooltip}
            collapsable={collapsable}
            collapseTooltip={collapseTooltip}
            expandTooltip={expandTooltip}
            collapsed={collapsed}
            onCollapse={onCollapse}
            status={status}
            subtitle={subtitle}
            title={title}
          />
        </Panel.Header>
        <Panel.Body removeSpace={showCollapsed}>
          <ToastContent content={content} collapsed={showCollapsed} />
        </Panel.Body>
        <Panel.Footer actions={footerActions} />
      </Panel>
    </>
  );
};
