import styled, { css } from 'styled-components';

import icons from '@devoinc/genesys-icons/dist/icon-variables.js';

import { iconFontMixin } from '../../../../styled/mixins/baseMixins';
import { getMarkerSize } from './utils';
import { iconButtonStatusMixin } from '../IconButtonStatus/utils';
import { StyledButton } from '../../../Button/StyledButton';

export const StyledIconButtonGoToDocs = styled(StyledButton)`
  ${({ colorScheme, size, state, theme }) => {
    const statusTokens = theme.cmp.iconButtonStatus;
    const markerTokens = theme.cmp.iconButtonGoToDocs.marker;
    const fontSize =
      size && getMarkerSize({ tokens: markerTokens, size }).fontSize;
    const offset = size && getMarkerSize({ tokens: markerTokens, size }).offset;
    const offsetHovered =
      size && getMarkerSize({ tokens: markerTokens, size }).offsetHovered;
    return css`
      overflow: inherit;

      // icon button status styles
      ${iconButtonStatusMixin({ tokens: statusTokens, state, colorScheme })};

      &::after {
        ${iconFontMixin()};
        content: '${icons.arrow_up_fat}';
        position: absolute;
        top: ${offset};
        right: ${offset};
        transform: rotate(45deg);
        transition: all 0.2s ease;
        font-weight: bold;
        font-size: ${fontSize};
      }

      &:hover::after,
      &:focus::after,
      &:active::after {
        top: ${offsetHovered};
        right: ${offsetHovered};
      }
    `;
  }}
`;
