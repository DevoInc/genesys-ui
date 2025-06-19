import * as React from 'react';
import { useTheme } from 'styled-components';

import {
  Container as ReactGridContainer,
  ContainerProps as ReactGridContainerProps,
  ScreenClass,
  setConfiguration,
} from 'react-grid-system';

import {
  BREAKPOINTS_DEFAULT_VALUES,
  CONTAINER_WIDTH_DEFAULT_VALUES,
} from '../constants';
import { TContainerSpacing } from '../declarations';
import { IGlobalAttrs } from '../../../declarations';

import { getSpacingPropCss } from '../../../helpers';
import { getPxFromRem } from '../../../helpers';
import { RowProps } from '../Row';
import type { Resolve } from '../../../typeFunctions';

export interface ContainerProps
  extends Omit<ReactGridContainerProps, 'component'>,
    Pick<IGlobalAttrs<HTMLDivElement>, 'tooltip'> {
  /** The gutter between the different cols.*/
  gutter?: TContainerSpacing;
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginBottom?: TContainerSpacing;
  /** Css margin-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginTop?: TContainerSpacing;
  maxScreen?: ScreenClass;
  /** Css padding-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingBottom?: TContainerSpacing;
  /** Css padding-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingTop?: TContainerSpacing;
  /** Content of the container (Rows) */
  children?: React.ReactElement<RowProps> | React.ReactElement<RowProps>[];
  ref?: React.LegacyRef<ReactGridContainer> & React.Ref<HTMLDivElement>;
}

export const Container = React.forwardRef<HTMLElement, Resolve<ContainerProps>>(
  (
    {
      children,
      gutter = 'layout-sm',
      marginBottom,
      marginTop,
      maxScreen = 'xxl',
      paddingBottom,
      paddingTop,
      style,
      tooltip,
      ...reactGridContainerProps
    },
    ref,
  ) => {
    const theme = useTheme();
    const layoutSpaceTokens = theme.alias.space.layout;
    const gutterSizeNumber =
      gutter === '0'
        ? 0
        : getPxFromRem(layoutSpaceTokens[gutter.replace('layout-', '')]);

    setConfiguration({
      breakpoints: Object.values(BREAKPOINTS_DEFAULT_VALUES),
      containerWidths: Object.values(CONTAINER_WIDTH_DEFAULT_VALUES),
      gridColumns: 12,
      maxScreenClass: maxScreen,
    });
    return (
      <ReactGridContainer
        {...reactGridContainerProps}
        ref={
          ref as React.LegacyRef<HTMLDivElement> &
            React.LegacyRef<ReactGridContainer>
        }
        style={{
          ...style,
          marginBottom: marginBottom && getSpacingPropCss(theme)(marginBottom),
          marginTop: marginTop && getSpacingPropCss(theme)(marginTop),
          paddingBottom:
            paddingBottom && getSpacingPropCss(theme)(paddingBottom),
          paddingLeft: `${gutterSizeNumber / 2}px`,
          paddingRight: `${gutterSizeNumber / 2}px`,
          paddingTop: marginTop && getSpacingPropCss(theme)(paddingTop),
        }}
        title={tooltip}
      >
        {React.Children.map(children, (child, idx) => {
          return React.cloneElement(child, {
            key: idx,
            gutter: child.props.gutter || gutter,
          });
        })}
      </ReactGridContainer>
    );
  },
);
