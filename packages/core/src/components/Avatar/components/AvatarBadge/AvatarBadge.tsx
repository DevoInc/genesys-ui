import * as React from 'react';

import { AVATAR_SIZE_BADGE_MAP } from '../../constants';
import type { IAvatar } from '../../declarations';
import { AvatarContext } from '../../context';
import { Badge, type BadgeProps } from '../../../Badge';
import { Box, type BoxProps } from '../../../Box';

export interface AvatarBadgeProps
  extends Omit<BadgeProps, 'colorScheme' | 'size'>,
    Pick<IAvatar, 'colorScheme' | 'size' | 'variant'>,
    Pick<
      BoxProps,
      | 'children'
      | 'cssTranslate'
      | 'position'
      | 'positionLeft'
      | 'positionTop'
      | 'zIndex'
    > {}

export const AvatarBadge: React.FC<AvatarBadgeProps> = ({
  children,
  cssTranslate,
  position = 'absolute',
  positionLeft = '100%',
  positionTop = '100%',
  size,
  variant,
  zIndex = 1,
  ...restBadgeProps
}) => {
  const context = React.useContext(AvatarContext);
  const evalVariant = variant || context.variant;
  const evalSize = size || context.size;
  return (
    <Box
      as="span"
      position={position}
      positionLeft={positionLeft}
      positionTop={positionTop}
      cssTranslate={
        cssTranslate || (evalVariant === 'circle' ? '-75%,-75%' : '-50%,-50%')
      }
      zIndex={zIndex}
    >
      {children || (
        <Badge {...restBadgeProps} size={AVATAR_SIZE_BADGE_MAP[evalSize]} />
      )}
    </Box>
  );
};
