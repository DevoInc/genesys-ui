import * as React from 'react';

import { PANEL_CLOSE_CLASS_NAME_BASE } from '../../../../constants';
import type { IPanelHeaderAttrs, IPanelCloseAttrs } from '../../declarations';
import type { IPanelBaseAttrs } from '../../../../declarations';
import { Flex } from '../../../../../Flex';
import { Box } from '../../../../../Box';
import {
  IconButtonClose,
  IconButtonCloseProps,
} from '../../../../../IconButton';

export interface PanelHeaderCloseProps
  extends Pick<IPanelCloseAttrs, 'cssTranslate'>,
    Omit<IconButtonCloseProps, 'size'>,
    Pick<IPanelBaseAttrs, 'className'>,
    Pick<IPanelHeaderAttrs, 'size'> {}

export const PanelHeaderClose: React.FC<PanelHeaderCloseProps> = ({
  className,
  cssTranslate,
  size = 'md',
  style,
  ...restIconButtonCloseProps
}) => {
  const classNames = [
    `${PANEL_CLOSE_CLASS_NAME_BASE} `,
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Flex
      alignItems="flex-start"
      alignSelf="stretch"
      className={classNames}
      flex="0 0 auto"
      marginLeft="auto"
    >
      <Box cssTranslate={cssTranslate}>
        <IconButtonClose {...restIconButtonCloseProps} size={size} />
      </Box>
    </Flex>
  );
};
