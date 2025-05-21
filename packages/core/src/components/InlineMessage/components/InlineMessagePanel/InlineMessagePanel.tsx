import * as React from 'react';
import { useTheme } from 'styled-components';

import { InlineMessageContext } from '../../context';
import type { IStyledOverloadCss } from '../../../../declarations';
import type { BoxProps } from '../../../Box';
import type { TInlineMessageSize } from '../../declarations';
import type {
  IPanelHelpAttrs,
  TPanelChildren,
  TPanelActions,
} from '../../../Panel/declarations';
import type {
  IPanelCloseAttrs,
  IPanelHeadingAttrs,
} from '../../../Panel/components/PanelHeader/declarations';
import { getStatusIcon } from './helpers';
import type { Resolve } from '../../../../typeFunctions';
import { Panel } from '../../../Panel';
import { mergeStyles } from '../../../../helpers';

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
  showIcon?: boolean;
  size?: TInlineMessageSize;
  subtitle?: IPanelHeadingAttrs['subtitle'];
  title?: IPanelHeadingAttrs['title'];
}

export const InlineMessagePanel = React.forwardRef<
  HTMLDivElement,
  Resolve<InlineMessagePanelProps>
>(
  (
    {
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
      showIcon,
      size,
      subtitle,
      style,
      title,
      width = 'fit-content',
    },
    ref,
  ) => {
    const theme = useTheme();
    const context = React.useContext(InlineMessageContext);

    return (
      <Panel
        ref={ref}
        elevation={'ground'}
        height={height}
        id={id}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        minHeight={minHeight}
        minWidth={minWidth}
        size={size || context.size}
        style={mergeStyles(
          {
            borderRadius: theme.cmp.panel.shape.borderRadius,
          },
          style,
        )}
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
          icon={
            showIcon
              ? icon || (title && getStatusIcon(theme)[context.colorScheme])
              : undefined
          }
        />
        <Panel.Body>{children}</Panel.Body>
        <Panel.Footer actions={actions} bordered />
      </Panel>
    );
  },
);
