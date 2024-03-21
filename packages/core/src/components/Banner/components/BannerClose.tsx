import * as React from 'react';
import { useTheme } from 'styled-components';

import { IMouseEventAttrs, IStyledOverloadCss } from '../../../declarations';

import { IconButtonRemove } from '../../IconButton';
import { Box } from '../../Box';

export interface BannerCloseProps
  extends IStyledOverloadCss,
    Pick<IMouseEventAttrs, 'onClick'> {
  tooltip?: string;
}

export const BannerClose: React.FC<BannerCloseProps> = ({
  onClick,
  tooltip,
  styles,
}) => {
  const theme = useTheme();
  return (
    <Box
      position="absolute"
      positionRight={theme.cmp.boxMessage.close.space.offset.right}
      positionTop={theme.cmp.boxMessage.close.space.offset.top}
      styles={styles}
    >
      <IconButtonRemove onClick={onClick} tooltip={tooltip} size={'sm'} />
    </Box>
  );
};
