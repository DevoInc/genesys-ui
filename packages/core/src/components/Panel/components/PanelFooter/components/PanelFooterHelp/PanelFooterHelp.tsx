import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IPanelHelpAttrs } from '../../../../declarations';
import type { IPanelFooterAttrs } from '../../declarations';
import { Flex } from '../../../../../Flex';
import {
  IconButtonGoToDocs,
  type IconButtonGoToDocsProps,
} from '../../../../../IconButton';
import { Typography } from '../../../../../Typography';
import { mergeStyles } from '../../../../../../helpers';

export interface PanelFooterHelpProps
  extends Omit<IconButtonGoToDocsProps, 'href' | 'size' | 'tooltip'>,
    Pick<IPanelFooterAttrs, 'size' | 'children'>,
    IPanelHelpAttrs {}

export const PanelFooterHelp: React.FC<PanelFooterHelpProps> = ({
  children,
  helpTooltip,
  helpUrl,
  size = 'md',
  style,
  ...restIconButtonGoToDocsProps
}) => {
  const theme = useTheme();
  return (
    <Flex.Item
      flex="0 0 auto"
      style={mergeStyles(
        `margin-right: ${theme.cmp.panel.footerPrepend.space.marginRight[size]};`,
        style,
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
