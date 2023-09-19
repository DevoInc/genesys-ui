import * as React from 'react';

import {
  MouseEventAttrProps,
  StyledOverloadCssProps,
} from '../../../declarations';

import { Box, IconButtonRemove } from '../../index';

export interface BannerCloseProps
  extends StyledOverloadCssProps,
    Pick<MouseEventAttrProps, 'onClick'> {
  tooltip?: string;
}

export const BannerClose: React.FC<BannerCloseProps> = ({
  onClick,
  tooltip,
  styles,
}) => {
  // const theme = useTheme();
  return (
    <Box
      position="absolute"
      // positionRight={theme.cmp.boxMessage.close.space.offset.right}
      // positionTop={theme.cmp.boxMessage.close.space.offset.top}
      styles={styles}
    >
      <IconButtonRemove onClick={onClick} tooltip={tooltip} size={'sm'} />
    </Box>
  );
};
