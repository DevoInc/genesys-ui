import styled, { css } from 'styled-components';
import { ThumbSizeMap } from './constants';
import { ThumbnailSize } from './declarations';

export interface StyledThumbnailProps {
  /** The size of the avatar img */
  size?: ThumbnailSize;
  /** Makes the thumbnail img disabled */
  disabled?: boolean;
  /** Path of the image file */
  img?: string;
}

export const StyledThumbnail = styled.img<StyledThumbnailProps>`
  ${({ width, height, size, disabled, img }) => css`
    --width: ${width ? width : ThumbSizeMap[size || 'md']};
    display: block;
    max-width: 100%;
    width: var(--width);
    min-height: calc(var(--width) / 2);
    height: ${height ? height : '100%'};
    flex-shrink: 0;
    position: relative;
    opacity: ${disabled ? '.4' : ''};
    padding-left: ${width ? width : ThumbSizeMap[size || 'md']};
    overflow: hidden;
    background-image: ${'url("' + img + '")'};
    background-size: cover;
    background-position: center;
  `}
`;
