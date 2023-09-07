import styled, { css } from 'styled-components';
import { FieldAddonPosition } from '../declarations';
import { typoMixin } from '../../../styled/mixins';
import {
  FieldSize,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../../declarations';
import { disabledMixin } from '../../../styled/';

export interface StyledFieldAddonProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** Class name html attribute of the tag */
  children: React.ReactNode;
  /** If the addon belongs to a disabled field (transient prop version) */
  $disabled?: boolean;
  /** The position on the form field */
  position?: FieldAddonPosition;
  /** Size of the input: height, padding, font-size... etc. */
  size?: FieldSize;
}

export const StyledFieldAddon = styled.span<StyledFieldAddonProps>`
  ${({ $disabled, position, size = 'md', theme }) => {
    const aliasTokens = theme.alias;
    const fieldTokens = aliasTokens.fields;
    const borderWidth = fieldTokens.shape.borderSize.base;

    return css`
      ${typoMixin({
        theme,
        size,
      })};
      flex: 0 0 auto;
      align-items: center;
      display: flex;
      border: solid ${fieldTokens.color.border.base.enabled};
      border-width: ${borderWidth};
      border-radius: ${fieldTokens.shape.borderRadius};
      height: ${fieldTokens.size.height[size]};
      padding: 0 ${fieldTokens.space.padding.hor[size]};
      background: ${aliasTokens.color.background.surface.base.raised};
      color: ${fieldTokens.color.text.base.enabled};

      ${$disabled &&
      css`
        ${disabledMixin(theme)};
      `}

      ${position === 'left'
        ? css`
            transform: translate(${borderWidth}, 0);
            border-right-width: 0;
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
          `
        : css`
            transform: translate(-${borderWidth}, 0);
            border-left-width: 0;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
          `}
    `;
  }}
`;
