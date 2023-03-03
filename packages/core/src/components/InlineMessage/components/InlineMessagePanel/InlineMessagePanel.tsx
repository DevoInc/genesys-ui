import * as React from 'react';

import { Panel } from '../../../Panel';
import { Typography } from '../../../Typography';
import { StyledInlineMessagePanel } from './StyledInlineMessagePanel';

interface InlineMessagePanelProps {
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
  className,
  children,
  helpUrl,
  icon,
  id,
  onClose,
  onCloseTooltip,
  subtitle,
  title,
}) => {
  return (
    <Panel
      forwardedAs={StyledInlineMessagePanel}
      className={className}
      closeSettings={{
        cssTranslate: '1.8rem, -1rem',
        onClick: onClose,
        tooltip: onCloseTooltip,
      }}
      elevation={'ground'}
      footerSettings={{
        actions: actions,
        hasShadowStyle: true,
      }}
      headerSettings={{
        hasShadowStyle: true,
      }}
      heightScheme={{ maxHeight: '40rem' }}
      helpUrl={helpUrl}
      icon={icon}
      id={id}
      size="sm"
      subtitle={subtitle}
      title={title}
      widthScheme={{
        width: 'fit-content',
        minWidth: '30rem',
        maxWidth: '40rem',
      }}
    >
      {typeof children === 'string' ? (
        <Typography.Paragraph>{children}</Typography.Paragraph>
      ) : (
        children
      )}
    </Panel>
  );
};
