import * as React from 'react';
import { useTheme } from 'styled-components';

import { TOAST_ELEVATION_LEVEL } from '../../constants';
import type { IDataAttrs, IStyledOverloadCss } from '../../../../declarations';
import type { IToast } from '../../declarations';
import { getFooterActions } from '../../utils';
import { toastPanelMixin } from './helpers';
import { Panel, type PanelProps } from '../../../Panel';
import { ToastBadge } from '../ToastBadge/ToastBadge';
import { ToastBody } from '../ToastBody/ToastBody';
import { ToastHeader } from '../ToastHeader/ToastHeader';
import { mergeStyles } from '../../../../helpers';

export interface ToastPanelProps
  extends IStyledOverloadCss,
    IDataAttrs,
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
  style,
  updates,
  ...dataProps
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
        {...dataProps}
        ref={null}
        colorScheme={backgroundColor}
        elevation={TOAST_ELEVATION_LEVEL}
        maxHeight={maxHeight}
        style={mergeStyles(
          toastPanelMixin({
            accent,
            showProgressBar,
            status,
            theme,
          }),
          style,
        )}
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
        <ToastBody content={content} collapsed={showCollapsed} />
        <Panel.Footer actions={footerActions} />
      </Panel>
    </>
  );
};
