import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { IPanelHelpAttrs } from '../../../declarations';
import { IPanelFooterAttrs } from '../declarations';

import { Flex } from '../../../../Flex';
import {
  IconButtonGoToDocs,
  IconButtonGoToDocsProps,
} from '../../../../IconButton';
import { Typography } from '../../../../Typography';

export interface PanelFooterHelpProps
  extends Omit<IconButtonGoToDocsProps, 'href' | 'size' | 'tooltip'>,
    Pick<IPanelFooterAttrs, 'size' | 'children'>,
    IPanelHelpAttrs {}

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
      styles={concat(
        `
          margin-right: ${theme.cmp.panel.footerPrepend.space.marginRight[size]};
        `,
        styles,
      )}
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
