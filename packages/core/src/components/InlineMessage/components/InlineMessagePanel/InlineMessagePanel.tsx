import * as React from 'react';
import { useTheme } from 'styled-components';

import { StyledOverloadCssProps } from '../../../../declarations';

import { useDetectScroll } from '../../../../hooks';

import {
  inlineMessagePanelBodyMixin,
  inlineMessagePanelHeaderMixin,
  InlineMessagePanelMixinProps,
} from './helpers';

import { Panel } from '../../../Panel';

interface InlineMessagePanelProps
  extends StyledOverloadCssProps,
    Pick<InlineMessagePanelMixinProps, 'hasScroll'> {
  actions?: React.ReactElement[];
  children?: React.ReactNode;
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
      maxHeight="40rem"
      id={id}
      styles={styles}
      width="fit-content"
      minWidth="30rem"
      maxWidth="40rem"
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
        size="sm"
        styles={inlineMessagePanelBodyMixin({ hasScroll, theme })}
      >
        {children}
      </Panel.Body>
      <Panel.Footer hasBoxShadow={hasScroll} size="sm" actions={actions} />
    </Panel.Container>
  );
};
