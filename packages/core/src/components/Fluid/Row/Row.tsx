import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  Row as ReactGridRow,
  RowProps as ReactGridRowProps,
} from 'react-grid-system';

import type { IGlobalAttrs } from '../../../declarations';
import type { TContainerSpacing, TFluidAs } from '../declarations';
import { getSpacingPropCss } from '../../../helpers';
import { getPxFromRem } from '../../../helpers';
import type { Resolve } from '../../../typeFunctions';

export interface RowProps
  extends Omit<ReactGridRowProps, 'component' | 'gutterWidth'>,
    Pick<IGlobalAttrs<HTMLDivElement>, 'tooltip'> {
  as?: TFluidAs;
  /** The gutter between the different cols.*/
  gutter?: TContainerSpacing;
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginBottom?: TContainerSpacing;
  /** Css margin-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginTop?: TContainerSpacing;
  /** Css padding-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingBottom?: TContainerSpacing;
  /** Css padding-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingTop?: TContainerSpacing;
  /** Content of row */
  children?: React.ReactNode;
}

export const Row = React.forwardRef<HTMLDivElement, Resolve<RowProps>>(
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
        ref={ref as React.LegacyRef<ReactGridRow> & React.Ref<HTMLDivElement>}
        component={as}
        gutterWidth={gutter ? gutterSizeNumber : undefined}
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
