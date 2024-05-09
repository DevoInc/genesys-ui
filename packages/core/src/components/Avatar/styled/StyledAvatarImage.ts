import styled, { css } from 'styled-components';

import type { IImageAttrs } from '../../../declarations';
import type { IAvatar } from '../declarations';
import { getAvatarSizeConfig } from '../utils';

export interface StyledAvatarImageProps
  extends Pick<IImageAttrs, 'src' | 'alt'>,
    Pick<
      IAvatar,
      'customSize' | 'imageFit' | 'imagePosition' | 'size' | 'variant'
    > {}

export const StyledAvatarImage = styled.img<StyledAvatarImageProps>`
  ${({ customSize, imageFit, imagePosition, size, theme, variant }) => {
    const aliasTokens = theme?.alias;
    const width = getAvatarSizeConfig({ customSize, size }).width;
    const height = getAvatarSizeConfig({ customSize, size }).height;
    const borderRadius =
      aliasTokens.shape.borderRadius[
        variant === 'circle' ? 'full' : variant === 'rounded' ? 'md' : '0'
      ];
    return css`
      border-radius: ${borderRadius};
      object-fit: ${imageFit};
      object-position: ${imagePosition};
      width: ${width};
      height: ${height};
    `;
  }}
`;
