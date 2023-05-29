import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { PanelHeaderSize } from '../declarations';
import { BoxProps } from '../../../../Box';

import { panelHeaderAppendMixin } from '../helpers';

import {
  IconButtonClose,
  Box,
  IconButtonCloseProps,
} from '../../../../../index';
import { Flex } from '../../../../Flex';

// TODO ad the component when it's ready
//const DropDownMenu = require('../../../../../react/molecules/DropDownMenu');

export interface PanelHeaderCloseProps
  extends Pick<BoxProps, 'cssTranslate'>,
    Omit<IconButtonCloseProps, 'size'> {
  size: PanelHeaderSize;
}

export const PanelHeaderClose: React.FC<PanelHeaderCloseProps> = ({
  cssTranslate,
  size = 'md',
  styles,
  ...restIconButtonCloseProps
}) => {
  const theme = useTheme();
  const baseStyles = panelHeaderAppendMixin({ size, theme });
  return (
    <Flex
      alignItems="flex-start"
      alignSelf="stretch"
      styles={concat(baseStyles, styles)}
      flex="0 0 auto"
      marginLeft="auto"
    >
      <Box cssTranslate={cssTranslate}>
        <IconButtonClose {...restIconButtonCloseProps} size={size} />
      </Box>
    </Flex>
  );
};
