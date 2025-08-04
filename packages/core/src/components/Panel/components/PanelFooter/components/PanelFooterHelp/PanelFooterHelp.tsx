import * as React from 'react';

import { PANEL_FOOTER_HELP_CLASS_NAME_BASE } from '../../../../constants';
import type { IPanelHelpAttrs } from '../../../../declarations';
import type { IPanelFooterAttrs } from '../../declarations';
import { Flex, type FlexItemProps } from '../../../../../Flex';
import {
  IconButtonGoToDocs,
  type IconButtonGoToDocsProps,
} from '../../../../../IconButton';
import { Typography } from '../../../../../Typography';

export interface PanelFooterHelpProps
  extends Omit<IconButtonGoToDocsProps, 'href' | 'size' | 'tooltip'>,
    Pick<IPanelFooterAttrs, 'size' | 'children'>,
    Pick<FlexItemProps, 'className'>,
    IPanelHelpAttrs {}

export const PanelFooterHelp: React.FC<PanelFooterHelpProps> = ({
  children,
  className,
  helpTooltip,
  helpUrl,
  size = 'md',
  style,
  ...restIconButtonGoToDocsProps
}) => {
  const classNames = [
    `${PANEL_FOOTER_HELP_CLASS_NAME_BASE} `,
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Flex.Item flex="0 0 auto" className={classNames}>
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
