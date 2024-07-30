import * as React from 'react';
import { useTheme } from 'styled-components';

import type {
  IGlobalAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
} from '../../../../declarations';

import { IconButtonRemove } from '../../../IconButton';
import { Box } from '../../../Box';
import { IBanner } from '../../declarations';
import { BannerContext } from '../../context';

export interface BannerCloseProps
  extends IStyledOverloadCss,
    Pick<IGlobalAttrs, 'tooltip'>,
    Pick<IMouseEventAttrs, 'onClick'>,
    Pick<IBanner, 'subtle'> {}

export const BannerClose: React.FC<BannerCloseProps> = ({
  onClick,
  style,
  subtle,
  tooltip,
}) => {
  const theme = useTheme();
  const context = React.useContext(BannerContext);
  const evalSubtle = subtle || context.subtle;
  return (
    <Box
      position={evalSubtle ? 'relative' : 'absolute'}
      positionRight={
        evalSubtle ? '0' : theme.cmp.boxMessage.close.space.offset.right
      }
      positionTop={
        evalSubtle ? undefined : theme.cmp.boxMessage.close.space.offset.top
      }
      style={style}
    >
      <IconButtonRemove
        onClick={onClick}
        tooltip={tooltip}
        size={evalSubtle ? 'xs' : 'sm'}
      />
    </Box>
  );
};
