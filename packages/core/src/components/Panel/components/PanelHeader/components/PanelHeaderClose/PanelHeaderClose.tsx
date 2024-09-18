import * as React from 'react';
import { useTheme } from 'styled-components';

import { IPanelHeaderAttrs, IPanelCloseAttrs } from '../../declarations';
import { panelHeaderAppendMixin } from '../../helpers';
import { Flex } from '../../../../../Flex';
import { Box } from '../../../../../Box';
import {
  IconButtonClose,
  IconButtonCloseProps,
} from '../../../../../IconButton';
import { mergeStyles } from '../../../../../../helpers';

export interface PanelHeaderCloseProps
  extends Pick<IPanelCloseAttrs, 'cssTranslate'>,
    Omit<IconButtonCloseProps, 'size'>,
    Pick<IPanelHeaderAttrs, 'size'> {}

export const PanelHeaderClose: React.FC<PanelHeaderCloseProps> = ({
  cssTranslate,
  size = 'md',
  style,
  ...restIconButtonCloseProps
}) => {
  const theme = useTheme();
  const baseStyles = panelHeaderAppendMixin({ size, theme });
  return (
    <Flex
      alignItems="flex-start"
      alignSelf="stretch"
      style={mergeStyles(baseStyles, style)}
      flex="0 0 auto"
      marginLeft="auto"
    >
      <Box cssTranslate={cssTranslate}>
        <IconButtonClose {...restIconButtonCloseProps} size={size} />
      </Box>
    </Flex>
  );
};
