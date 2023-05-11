import styled, { css } from 'styled-components';
import { rgba } from 'polished';

// global constants
import { TypoBodySize } from '../../declarations';

// local constants
import {
  GutterBottom,
  HeadingType,
  ListStyle,
  TypoColorScheme,
} from './constants';

// utils
import { getHeadingCategoryAndType, getTypoCss } from './utils';
import { getSpacingPropCss } from '../../utils/spacing';
import { srOnlyMixin } from '../../styled/mixins/utilsMixins';

export const StyledAbbr = styled.abbr`
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
`;

export interface StyledBlockQuoteProps {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: TypoBodySize;
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
}

export const StyledBlockQuote = styled.blockquote<StyledBlockQuoteProps>`
  ${({ gutterBottom, size, textAlign, theme }) => {
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    return css`
      ${getTypoCss({ variant: 'lead', textAlign, theme, size })};

      padding: ${textAlign === 'right'
        ? `0 ${spacingTokens.cmp.xxl} 0 0`
        : `0 0 0 ${spacingTokens.cmp.xxl}`};
      margin-bottom: ${getSpacingPropCss(gutterBottom, theme)};

      &:last-child {
        margin-bottom: 0;
      }

      &:before {
        content: '"';
        position: absolute;
        left: ${textAlign === 'right' ? 'auto' : '0'};
        right: ${textAlign === 'right' && '0'};
        top: 0;
        font-size: 7.8rem;
        text-align: ${textAlign};
        font-family: cursive;
        line-height: 1;
        color: ${rgba(aliasTokens.color.text.body.weakest, 0.3)};
      }
    `;
  }}
`;

export interface StyledCodeBlockWrapperProps {
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
}

export const StyledCodeBlockWrapper = styled.div<StyledCodeBlockWrapperProps>`
  ${({ gutterBottom, theme }) => {
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    return css`
      margin-bottom: ${getSpacingPropCss(gutterBottom, theme)};
      padding: ${spacingTokens.cmp.sm} ${spacingTokens.cmp.md};
      background: ${aliasTokens.color.background.surface.base.raised};

      &:last-child {
        margin-bottom: 0;
      }
    `;
  }}
`;

export interface StyledCodeBlockProps {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: TypoBodySize;
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
  /** The number of lines before get truncated text with overflow to ellipsis (Css line-clamp property). */
  truncateLine?: number;
}

export const StyledCodeBlock = styled.code<StyledCodeBlockProps>`
  ${({ size, textAlign, theme, truncateLine }) =>
    css`
      ${getTypoCss({
        variant: 'mono',
        textAlign,
        theme,
        truncateLine,
        size,
      })};
      display: block;
      word-break: break-word;
    `}
`;

export const StyledCodeInline = styled.code`
  ${({ theme }) => {
    const cmpTokens = theme.cmp.codeInline;
    const typoTokens = theme.alias.typographies.typo;
    return css`
      padding: 0 ${theme.alias.space.cmp.xxs};
      border-radius: ${cmpTokens.shape.borderRadius};
      border: ${cmpTokens.shape.border} solid ${cmpTokens.color.border};
      background: ${cmpTokens.color.background};
      font-family: ${typoTokens.fontFamily.mono.fontFaceName};
    `;
  }}
`;

export const StyledDeleted = styled.del`
  text-decoration: line-through;
`;

export const StyledInserted = styled.ins`
  ${({ theme }) => css`
    background: ${theme.cmp.inserted.color.background};
    color: inherit;
    text-decoration: none;
  `}
`;

export const StyledHighlighted = styled.mark`
  ${({ theme }) => css`
    background: ${theme.cmp.highlighted.color.background};
    color: inherit;
  `}
`;

export const StyledItalic = styled.em`
  font-style: italic;
`;

export interface StyledListProps {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: TypoBodySize;
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
  /** Css List style type. */
  listStyle: ListStyle;
  /** Pre defined color scheme for the text: base, weak, error... etc. */
  colorScheme?: TypoColorScheme;
}

export const StyledList = styled.ul<StyledListProps>`
  ${({ colorScheme, gutterBottom, listStyle, size, textAlign, theme }) => css`
    margin-bottom: ${getSpacingPropCss(gutterBottom, theme)};
    padding-left: ${theme.alias.space.cmp.md};
    ${() => {
      if (listStyle === 'ordered')
        return css`
          list-style: decimal none outside;
        `;
      if (listStyle === 'none')
        return css`
          list-style: none;
          padding-left: 0;
        `;
      return css`
        list-style: disc none outside;
      `;
    }};

    ${getTypoCss({
      variant: 'body',
      colorScheme,
      textAlign,
      theme,
      size,
    })};

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const StyledListItem = styled.li`
  & + & {
    margin-top: ${({ theme }) => theme.alias.space.cmp.xxs};
  }
`;

export interface StyledParagraphProps {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: TypoBodySize;
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
  /** Pre-defined color scheme for the text: base, weak, error... etc. */
  colorScheme?: TypoColorScheme;
  /** The number of lines before get truncated text with overflow to ellipsis (Css line-clamp property). */
  truncateLine?: number;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  ${({
    colorScheme,
    gutterBottom,
    size,
    textAlign,
    theme,
    truncateLine,
  }) => css`
    margin-bottom: ${getSpacingPropCss(gutterBottom, theme)};
    ${getTypoCss({
      variant: 'body',
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size,
    })};

    word-break: break-word;
    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export interface StyledHeadingProps {
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
  /** Pre defined color scheme for the text: base, weak, error... etc. */
  colorScheme?: TypoColorScheme;
  /** The number of lines before get truncated text with overflow to ellipsis (Css line-clamp property). */
  truncateLine?: number;
  /** Type of the Heading: h1-h8, hero, caps... which defines the specific styles of the heading: bold, uppercase... etc. */
  size?: HeadingType;
}

export const StyledHeading = styled.div<StyledHeadingProps>`
  ${({
    colorScheme,
    gutterBottom,
    size,
    textAlign,
    theme,
    truncateLine,
  }) => css`
    margin-bottom: ${getSpacingPropCss(gutterBottom, theme)};
    ${getTypoCss({
      variant: getHeadingCategoryAndType(size).category,
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size: getHeadingCategoryAndType(size).type,
    })};
  `}
`;

export interface StyledLeadProps {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: TypoBodySize;
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
  /** Pre defined color scheme for the text: base, weak, error... etc. */
  colorScheme?: TypoColorScheme;
  /** The number of lines before get truncated text with overflow to ellipsis (Css line-clamp property). */
  truncateLine?: number;
}

export const StyledLead = styled.p<StyledLeadProps>`
  ${({
    colorScheme,
    gutterBottom,
    size,
    textAlign,
    theme,
    truncateLine,
  }) => css`
    margin-bottom: ${getSpacingPropCss(gutterBottom, theme)};
    ${getTypoCss({
      variant: 'lead',
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size,
    })};
    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export interface StyledCaptionProps {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: TypoBodySize;
  /** Css text-align property. */
  textAlign?: React.CSSProperties['textAlign'];
  /** Bottom margin to separate from another components. */
  gutterBottom?: GutterBottom;
  /** Pre defined color scheme for the text: base, weak, error... etc. */
  colorScheme?: TypoColorScheme;
  /** The number of lines before get truncated text with overflow to ellipsis (Css line-clamp property). */
  truncateLine?: number;
}

export const StyledCaption = styled.span<StyledCaptionProps>`
  ${({
    colorScheme,
    gutterBottom,
    size,
    textAlign,
    theme,
    truncateLine,
  }) => css`
    display: inline-block;
    margin-bottom: ${getSpacingPropCss(gutterBottom, theme)};
    ${getTypoCss({
      variant: 'body',
      colorScheme,
      textAlign,
      theme,
      truncateLine,
      size,
    })};
  `}
`;

export const StyledSmall = styled.small`
  font-size: 75%;
`;

export const StyledSrOnly = styled.div`
  ${srOnlyMixin}
`;

interface StyledStringProps {
  bolder: boolean;
}

export const StyledStrong = styled.strong<StyledStringProps>`
  ${({ bolder, theme }) => {
    const cmpTokens = theme.cmp.strong;
    return css`
      font-weight: ${bolder
        ? cmpTokens.typo.fontWeight.strong
        : cmpTokens.typo.fontWeight.base};
    `;
  }}
`;

export const StyledSub = styled.sub`
  line-height: 1;
  vertical-align: sub;
  font-size: 70%;
`;

export const StyledSup = styled.sup`
  line-height: 1;
  vertical-align: super;
  font-size: 70%;
`;

export const StyledUnderlined = styled.u`
  text-decoration: underline;
`;
