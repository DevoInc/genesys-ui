import * as React from 'react';

import { Typography } from '../../../../';
import { PanelSize } from '../../../declarations';
import { StyledPanelFooterContentBody } from '../StyledPanelFooterContent';

export interface PanelFooterContentBodyProps {
  children?: React.ReactElement;
  size?: PanelSize;
}

export const PanelFooterContentBody: React.FC<PanelFooterContentBodyProps> = ({
  children,
  size,
}) => {
  return (
    <StyledPanelFooterContentBody>
      {typeof children === 'string' ? (
        <Typography.Paragraph truncateLine={1} size={size}>
          {children}
        </Typography.Paragraph>
      ) : (
        children
      )}
    </StyledPanelFooterContentBody>
  );
};
