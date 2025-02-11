import * as React from 'react';

import type { IStyledOverloadCss } from '../../../../declarations';
import { Panel } from '../../../Panel';
import {
  IPanelHelpAttrs,
  IPanelContainerAttrs,
  TPanelChildren,
  TPanelActions,
} from '../../../Panel/declarations';
import type {
  IPanelCloseAttrs,
  IPanelHeadingAttrs,
} from '../../../Panel/components/PanelHeader/declarations';

interface InlineMessagePanelProps extends IStyledOverloadCss {
  actions?: TPanelActions;
  children?: TPanelChildren;
  helpUrl?: IPanelHelpAttrs['helpUrl'];
  icon?: IPanelHeadingAttrs['icon'];
  id?: string;
  onClose?: IPanelCloseAttrs['onClick'];
  onCloseTooltip?: IPanelCloseAttrs['tooltip'];
  size?: IPanelContainerAttrs['size'];
  subtitle?: IPanelHeadingAttrs['subtitle'];
  title?: IPanelHeadingAttrs['title'];
}

export const InlineMessagePanel: React.FC<InlineMessagePanelProps> = ({
  actions,
  children,
  helpUrl,
  icon,
  id,
  onClose,
  onCloseTooltip,
  size,
  subtitle,
  style,
  title,
}) => {
  const hasSimpleContent =
    typeof children === 'string' || typeof children === 'number';
  return (
    <Panel
      elevation={'ground'}
      maxHeight="40rem"
      id={id}
      style={style}
      width="fit-content"
      minWidth="30rem"
      maxWidth="40rem"
      size={size || (hasSimpleContent ? 'sm' : 'md')}
    >
      <Panel.Header
        bordered
        closeSettings={
          onClose
            ? {
                cssTranslate: '0.6rem, -0.2rem',
                onClick: onClose,
                tooltip: onCloseTooltip,
              }
            : null
        }
        subtitle={subtitle}
        title={title}
        helpUrl={helpUrl}
        icon={icon}
      />
      <Panel.Body>{children}</Panel.Body>
      <Panel.Footer actions={actions} bordered />
    </Panel>
  );
};
