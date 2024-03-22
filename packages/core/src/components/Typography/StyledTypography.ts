import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import type { ITypography } from './declarations';

import { getHeadingCategoryAndType, getTypoCss } from './utils';
import { getSpacingPropCss } from '../../helpers';
import { srOnlyMixin } from '../../styled/mixins';

export const StyledAbbr = styled.abbr`
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
`;

export interface StyledBlockQuoteProps
  extends Pick<ITypography, 'gutterBottom' | 'textAlign'> {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
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
      margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledCodeBlockWrapperProps
  extends Pick<ITypography, 'gutterBottom'> {}

export const StyledCodeBlockWrapper = styled.div<StyledCodeBlockWrapperProps>`
  ${({ gutterBottom, theme }) => {
    const aliasTokens = theme.alias;
    const spacingTokens = aliasTokens.space;
    return css`
      margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
      padding: ${spacingTokens.cmp.sm} ${spacingTokens.cmp.md};
      background: ${aliasTokens.color.background.surface.base.raised};

      &:last-child {
        margin-bottom: 0;
      }
    `;
  }}
`;

export interface StyledCodeBlockProps
  extends Pick<ITypography, 'gutterBottom' | 'textAlign' | 'truncateLine'> {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const StyledCodeBlock = styled.code<StyledCodeBlockProps>`
  ${({ size, textAlign, theme, truncateLine }) => css`
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

export interface StyledListProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'listStyle' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
}

export const StyledList = styled.ul<StyledListProps>`
  ${({ colorScheme, gutterBottom, listStyle, size, textAlign, theme }) => css`
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
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

export interface StyledParagraphProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
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
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
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

export interface StyledHeadingProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['headingSize'];
}

export const StyledHeading = styled.div<StyledHeadingProps>`
  ${({
    colorScheme,
    gutterBottom,
    size = 'h4',
    textAlign,
    theme,
    truncateLine,
  }) => css`
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
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

export interface StyledLeadProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
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
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
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

export interface StyledCaptionProps
  extends Pick<
    ITypography,
    'colorScheme' | 'gutterBottom' | 'textAlign' | 'truncateLine'
  > {
  /** This property defines multiple styles: font-size, line-height... etc. */
  size?: ITypography['bodySize'];
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
    margin-bottom: ${getSpacingPropCss(theme)(gutterBottom)};
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
