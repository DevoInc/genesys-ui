import * as React from 'react';

import { IStyledOverloadCss } from '../../../../declarations';

import { Panel } from '../../../Panel';

interface InlineMessagePanelProps extends IStyledOverloadCss {
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
  return (
    <Panel
      elevation={'ground'}
      maxHeight="40rem"
      id={id}
      styles={styles}
      width="fit-content"
      minWidth="30rem"
      maxWidth="40rem"
      size="sm"
    >
      {
        <Panel.Header
          closeSettings={
            onClose
              ? {
                  cssTranslate: '0.6rem, -0.6rem',
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
      }
      <Panel.Body>{children}</Panel.Body>
      <Panel.Footer actions={actions} />
    </Panel>
  );
};
