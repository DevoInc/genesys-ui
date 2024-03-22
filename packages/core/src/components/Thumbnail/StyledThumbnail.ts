import styled, { css } from 'styled-components';
import type { IThumbnail } from './declarations';

export interface StyledThumbnailProps
  extends Pick<
    IThumbnail,
    'borderRadius' | 'display' | 'objectFit' | 'objectPosition'
  > {
  /** Makes the thumbnail img disabled */
  $disabled?: IThumbnail['disabled'];
}

export const StyledThumbnail = styled.img<StyledThumbnailProps>`
  ${({
    borderRadius,
    display,
    width,
    height,
    objectFit,
    objectPosition,
    $disabled,
  }) => {
    return css`
      position: relative;
      flex-shrink: 0;
      display: ${display};
      border-radius: ${borderRadius};
      max-width: 100%;
      width: ${width};
      height: ${height};
      object-fit: ${objectFit};
      object-position: ${objectPosition};
      opacity: ${$disabled && '0.4'};
    `;
  }}
`;
