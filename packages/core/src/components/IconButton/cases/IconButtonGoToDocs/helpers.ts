import { css, DefaultTheme } from 'styled-components';
import icons from '@devoinc/genesys-icons/dist/icon-variables.js';

import { ButtonSize, ButtonState } from '../../../Button';
import { getMarkerSize } from './utils';
import { iconButtonStatusMixin } from '../IconButtonStatus/helpers';
import { iconFontMixin } from '../../../../styled';

interface IconButtonGoToDocsMixinProps {
  size?: ButtonSize;
  state?: ButtonState;
  theme: DefaultTheme;
}

/**
 * Get the custom IconButtonGoToDocs styles.
 *
 * @param props The object param
 * @param props.size The size of the element
 * @param props.state The state of the element
 * @param props.theme The common theme object with all the tokens
 * @return object with the css.
 */
export const iconButtonGoToDocsMixin = ({
  size = 'md',
  state = 'enabled',
  theme,
}: IconButtonGoToDocsMixinProps) => {
  const markerTokens = theme.cmp.iconButtonGoToDocs.marker;
  const fontSize =
    size && getMarkerSize({ tokens: markerTokens, size }).fontSize;
  const offset = size && getMarkerSize({ tokens: markerTokens, size }).offset;
  const offsetHovered =
    size && getMarkerSize({ tokens: markerTokens, size }).offsetHovered;
  return css`
    overflow: inherit;

    // icon button status styles
    ${iconButtonStatusMixin({
      state,
      colorScheme: 'help',
      theme,
    })};

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
};
