import * as React from 'react';

import {
  IconButtonGoToDocs,
  IconButtonGoToDocsProps,
  Typography,
} from '../../../../..';

import { StyledPanelFooterContentBody } from './StyledPanelFooterContentBody';
import { PanelFooterSize } from '../../declarations';
import {
  PanelFooterContentBodyPrependProps,
  PanelFooterContentBodyPrepend,
} from './PanelFooterContentBodyPrepend';
import {
  PanelFooterContentBodyAppend,
  PanelFooterContentBodyAppendProps,
} from './PanelFooterContentBodyAppend';

export interface PanelFooterContentBodyProps
  extends Omit<PanelFooterContentBodyPrependProps, 'children'>,
    PanelFooterContentBodyAppendProps {
  /** URL for the help icon */
  helpUrl?: IconButtonGoToDocsProps['href'];
  /** Title attribute for the help icon */
  helpTooltip?: IconButtonGoToDocsProps['tooltip'];
  children?: React.ReactNode;
  /** Content to add at the begining of the footer.  */
  prependContent?: React.ReactNode;
  /** Content to add at the end of the Footer.  */
  appendContent?: React.ReactNode;
  /** Footer size */
  size: PanelFooterSize;
}

export const PanelFooterContentBody: React.FC<PanelFooterContentBodyProps> = ({
  actions,
  appendContent,
  children,
  helpTooltip,
  helpUrl,
  prependContent,
  size,
}) => {
  return (
    <>
      {(helpUrl || prependContent) && (
        <PanelFooterContentBodyPrepend size={size}>
          {prependContent ? (
            prependContent
          ) : (
            <IconButtonGoToDocs
              href={helpUrl}
              size={size}
              tooltip={helpTooltip}
            />
          )}
        </PanelFooterContentBodyPrepend>
      )}
      {children && (
        <StyledPanelFooterContentBody>
          {typeof children === 'string' ? (
            <Typography.Paragraph truncateLine={1} size={size}>
              {children}
            </Typography.Paragraph>
          ) : (
            children
          )}
        </StyledPanelFooterContentBody>
      )}
      {(actions || appendContent) && (
        <PanelFooterContentBodyAppend actions={actions} size={size}>
          {appendContent}
        </PanelFooterContentBodyAppend>
      )}
    </>
  );
};
