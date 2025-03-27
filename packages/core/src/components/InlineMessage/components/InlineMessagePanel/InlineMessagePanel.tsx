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
import { BoxProps } from '../../../Box';

interface InlineMessagePanelProps
  extends IStyledOverloadCss,
    Pick<
      BoxProps,
      | 'height'
      | 'maxHeight'
      | 'minHeight'
      | 'maxWidth'
      | 'minWidth'
      | 'width'
      | 'onMouseDown'
      | 'onMouseLeave'
      | 'onMouseMove'
      | 'onMouseOut'
      | 'onMouseOver'
      | 'onMouseUp'
    > {
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
  height,
  helpUrl,
  icon,
  id,
  maxHeight = '40rem',
  maxWidth = '40rem',
  minHeight,
  minWidth = '30rem',
  onClose,
  onCloseTooltip,
  size,
  subtitle,
  style,
  title,
  width = 'fit-content',
}) => {
  const hasSimpleContent =
    typeof children === 'string' || typeof children === 'number';
  return (
    <Panel
      elevation={'ground'}
      height={height}
      id={id}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      minHeight={minHeight}
      minWidth={minWidth}
      size={size || (hasSimpleContent ? 'sm' : 'md')}
      style={style}
      width={width}
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
