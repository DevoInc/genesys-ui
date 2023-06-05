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
import { ContainerSpacing } from '../declarations';
import { GlobalAttrProps } from '../../../declarations';

import { getSpacingPropCss } from '../../../utils/spacing';
import { getPxFromRem } from '../../../styled/functions';
import { RowProps } from '../Row';

export interface ContainerProps
  extends Omit<ReactGridContainerProps, 'component'>,
    Pick<GlobalAttrProps<HTMLDivElement>, 'tooltip'> {
  /** The gutter between the different cols.*/
  gutter?: ContainerSpacing;
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginBottom?: ContainerSpacing;
  /** Css margin-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginTop?: ContainerSpacing;
  maxScreen?: ScreenClass;
  /** Css padding-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingBottom?: ContainerSpacing;
  /** Css padding-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingTop?: ContainerSpacing;
  /** Content of the container (Rows) */
  children?: React.ReactElement<RowProps> | React.ReactElement<RowProps>[];
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
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
    ref
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
    console.info('gutter: ', gutter);
    console.info('gutterNumber: ', gutterSizeNumber);
    return (
      <ReactGridContainer
        {...reactGridContainerProps}
        ref={
          ref as React.LegacyRef<ReactGridContainer> &
            React.LegacyRef<HTMLDivElement>
        }
        style={{
          ...style,
          marginBottom: marginBottom && getSpacingPropCss(marginBottom, theme),
          marginTop: marginTop && getSpacingPropCss(marginTop, theme),
          paddingBottom:
            paddingBottom && getSpacingPropCss(paddingBottom, theme),
          paddingLeft: `${gutterSizeNumber / 2}px`,
          paddingRight: `${gutterSizeNumber / 2}px`,
          paddingTop: marginTop && getSpacingPropCss(paddingTop, theme),
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
  }
);

Container.displayName = 'Container';
