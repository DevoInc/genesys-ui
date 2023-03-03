import styled, { css } from 'styled-components';
import { Row, RowProps } from 'react-grid-system';

import { ContainerSpacing } from '../declarations';
import { getSpacingPropCss } from '../../../utils/spacing';
import { StyledPolymorphicProps } from '../../../declarations';

export interface StyledRowProps
  extends RowProps,
    // native props
    StyledPolymorphicProps {
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginBottom?: ContainerSpacing;
  /** Css margin-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginTop?: ContainerSpacing;
  /** Css padding-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingBottom?: ContainerSpacing;
  /** Css padding-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingTop?: ContainerSpacing;
}

export const StyledRow = styled(Row)<StyledRowProps>`
  ${({ marginBottom, marginTop, paddingBottom, paddingTop, theme }) => css`
    margin-top: ${marginTop && getSpacingPropCss(marginTop, theme)};
    margin-bottom: ${marginBottom && getSpacingPropCss(marginBottom, theme)};
    padding-top: ${paddingTop && getSpacingPropCss(paddingTop, theme)};
    padding-bottom: ${paddingBottom && getSpacingPropCss(paddingBottom, theme)};
  `};
`;
