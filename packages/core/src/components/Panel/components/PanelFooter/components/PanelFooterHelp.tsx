import * as React from 'react';
import { css, useTheme } from 'styled-components';

import {
  Flex,
  IconButtonGoToDocs,
  IconButtonGoToDocsProps,
  Typography,
} from '../../../../index';

import { PanelFooterSize } from '../declarations';

export interface PanelFooterHelpProps
  extends Omit<IconButtonGoToDocsProps, 'href' | 'size' | 'tooltip'> {
  children?: React.ReactNode;
  /** URL for the help icon */
  helpUrl?: IconButtonGoToDocsProps['href'];
  /** Title attribute for the help icon */
  helpTooltip?: IconButtonGoToDocsProps['tooltip'];
  /** Footer size */
  size?: PanelFooterSize;
}

export const PanelFooterHelp: React.FC<PanelFooterHelpProps> = ({
  children,
  helpTooltip,
  helpUrl,
  size = 'md',
  styles,
  ...restIconButtonGoToDocsProps
}) => {
  const theme = useTheme();
  return (
    <Flex.Item
      flex="0 0 auto"
      styles={
        styles ||
        css`
          margin-right: ${theme.cmp.panel.footerPrepend.space.marginRight[
            size
          ]};
        `
      }
    >
      {children ? (
        typeof children === 'string' ? (
          <Typography.Paragraph truncateLine={1} size={size}>
            {children}
          </Typography.Paragraph>
        ) : (
          children
        )
      ) : (
        <IconButtonGoToDocs
          {...restIconButtonGoToDocsProps}
          href={helpUrl}
          size={size}
          tooltip={helpTooltip}
        />
      )}
    </Flex.Item>
  );
};
