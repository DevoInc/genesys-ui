import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  Row as ReactGridRow,
  RowProps as ReactGridRowProps,
} from 'react-grid-system';

import { GlobalAttrProps } from '../../../declarations';
import { ContainerSpacing, FluidAs } from '../declarations';

import { getSpacingPropCss } from '../../../utils/spacing';
import { getPxFromRem } from '../../../helpers';

export interface RowProps
  extends Omit<ReactGridRowProps, 'component' | 'gutterWidth'>,
    Pick<GlobalAttrProps<HTMLDivElement>, 'tooltip'> {
  as?: FluidAs;
  /** The gutter between the different cols.*/
  gutter?: ContainerSpacing;
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
  /** Content of row */
  children?: React.ReactNode;
}

export const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (
    {
      as,
      children,
      gutter,
      marginBottom,
      marginTop,
      paddingBottom,
      paddingTop,
      style,
      tooltip,
      ...reactGridRowProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const layoutSpaceTokens = theme.alias.space.layout;
    const gutterSizeNumber =
      gutter === '0'
        ? 0
        : gutter &&
          getPxFromRem(layoutSpaceTokens[gutter.replace('layout-', '')]);

    return (
      <ReactGridRow
        {...reactGridRowProps}
        component={as}
        gutterWidth={gutter ? gutterSizeNumber : undefined}
        ref={
          ref as React.LegacyRef<ReactGridRow> & React.LegacyRef<HTMLDivElement>
        }
        style={{
          ...style,
          marginBottom: marginBottom && getSpacingPropCss(theme)(marginBottom),
          marginTop: marginTop && getSpacingPropCss(theme)(marginTop),
          paddingBottom:
            paddingBottom && getSpacingPropCss(theme)(paddingBottom),
          paddingTop: marginTop && getSpacingPropCss(theme)(paddingTop),
        }}
        title={tooltip}
      >
        {children}
      </ReactGridRow>
    );
  },
);

Row.displayName = 'Row';
