import * as React from 'react';
import { useTheme } from 'styled-components';

import { StyledOverloadCssProps } from '../../../../declarations';

import { useDetectScroll } from '../../../../hooks';

import {
  inlineMessagePanelBodyMixin,
  inlineMessagePanelFooterMixin,
  inlineMessagePanelHeaderMixin,
  inlineMessagePanelMixinProps,
} from './helpers';

import { Panel } from '../../../Panel';
import { Typography } from '../../../Typography';

interface InlineMessagePanelProps
  extends StyledOverloadCssProps,
    Pick<inlineMessagePanelMixinProps, 'hasScroll'> {
  actions?: React.ReactElement[];
  children?: React.ReactNode;
  className?: string;
  helpUrl?: string;
  icon?: string;
  id?: string;
  onClose?: () => void;
  onCloseTooltip?: string;
  subtitle?: string;
  title?: string;
}

export const InlineMessagePanel: React.FC<InlineMessagePanelProps> = ({
  actions,
  children,
  helpUrl,
  icon,
  id,
  onClose,
  onCloseTooltip,
  subtitle,
  styles,
  title,
}) => {
  const theme = useTheme();
  const { hasScroll, targetElRef } = useDetectScroll();
  return (
    <Panel.Container
      elevation={'ground'}
      heightScheme={{ maxHeight: '40rem' }}
      id={id}
      styles={styles}
      widthScheme={{
        width: 'fit-content',
        minWidth: '30rem',
        maxWidth: '40rem',
      }}
    >
      {
        <Panel.Header
          closeSettings={
            onClose
              ? {
                  cssTranslate: '1.8rem, -1rem',
                  onClick: onClose,
                  tooltip: onCloseTooltip,
                }
              : null
          }
          hasBoxShadow={hasScroll}
          subtitle={subtitle}
          title={title}
          size="sm"
          helpUrl={helpUrl}
          icon={icon}
          styles={inlineMessagePanelHeaderMixin({ hasScroll, theme })}
        />
      }
      <Panel.Body
        hasScroll={hasScroll}
        panelBodyRef={targetElRef}
        styles={inlineMessagePanelBodyMixin({ hasScroll, theme })}
      >
        {typeof children === 'string' ? (
          <Typography.Paragraph>{children}</Typography.Paragraph>
        ) : (
          children
        )}
      </Panel.Body>
      <Panel.Footer
        hasBoxShadow={hasScroll}
        size="sm"
        styles={inlineMessagePanelFooterMixin({ hasScroll, theme })}
        actions={actions}
      />
    </Panel.Container>
  );
};
