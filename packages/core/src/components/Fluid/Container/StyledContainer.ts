import styled, { css } from 'styled-components';
import { Container, ContainerProps } from 'react-grid-system';

import { ContainerSpacing } from '../declarations';
import { getSpacingPropCss } from '../../../utils/spacing';
import { StyledRow } from '../Row/StyledRow';
import { StyledCol } from '../Col/StyledCol';

export interface StyledContainerProps extends ContainerProps {
  /** Number of children by row. This will generate a grid of child elements with same width columns.*/
  gutter?: ContainerSpacing;
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  $marginBottom?: ContainerSpacing;
  /** Css margin-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  $marginTop?: ContainerSpacing;
  /** Css padding-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  $paddingBottom?: ContainerSpacing;
  /** Css padding-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  $paddingTop?: ContainerSpacing;
  /** This prop remove the horizontal padding set by default taking into account
   * the gutter size. */
  $removeHorizontalSpace?: boolean;
}

export const StyledContainer = styled(Container)<StyledContainerProps>`
  ${({
    gutter,
    $marginBottom,
    $marginTop,
    $paddingBottom,
    $paddingTop,
    $removeHorizontalSpace = false,
    theme,
  }) => {
    const layoutSpaceTokens = theme.alias.space.layout;
    const GUTTER_SIZE = layoutSpaceTokens[gutter.replace('layout-', '')];
    if ('undefined' !== typeof console)
      console.log(`${$marginTop && getSpacingPropCss($marginTop, theme)}`);
    return css`
      --gutter: ${gutter === '0' ? 0 : `calc(${GUTTER_SIZE} / 2)`};

      margin-top: ${$marginTop && getSpacingPropCss($marginTop, theme)};
      margin-bottom: ${$marginBottom &&
      getSpacingPropCss($marginBottom, theme)};
      padding-top: ${$paddingTop && getSpacingPropCss($paddingTop, theme)};
      padding-bottom: ${$paddingBottom &&
      getSpacingPropCss($paddingBottom, theme)};
      ${!$removeHorizontalSpace &&
      `
        padding-left: var(--gutter);
        padding-right: var(--gutter);
      `};

      ${StyledRow} {
        margin-left: calc(var(--gutter) * -1);
        margin-right: calc(var(--gutter) * -1);
      }

      ${StyledCol} {
        padding-left: var(--gutter);
        padding-right: var(--gutter);
      }
    `;
  }};
`;
