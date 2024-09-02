import styled, { css, type CSSProp } from 'styled-components';

import type { IThumbnail } from './declarations';

export interface StyledThumbnailProps {
  $borderRadius?: IThumbnail['borderRadius'];
  $display?: IThumbnail['display'];
  $objectFit?: IThumbnail['objectFit'];
  $objectPosition?: IThumbnail['objectPosition'];
  /** Makes the thumbnail img disabled */
  $disabled?: boolean;
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css?: CSSProp;
}

export const StyledThumbnail = styled.img<StyledThumbnailProps>`
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
  ${({
    $borderRadius,
    $display,
    width,
    height,
    $objectFit,
    $objectPosition,
    $disabled,
  }) => css`
    display: ${$display};
    border-radius: ${$borderRadius};
    width: ${width};
    height: ${height};
    object-fit: ${$objectFit};
    object-position: ${$objectPosition};
    opacity: ${$disabled && '0.4'};
  `}
`;
