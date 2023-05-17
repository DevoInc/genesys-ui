import * as React from 'react';
import { ScreenClass, setConfiguration } from 'react-grid-system';

import { ContainerSpacing, FluidProp } from '../declarations';
import {
  BREAKPOINTS_DEFAULT_VALUES,
  CONTAINER_WIDTH_DEFAULT_VALUES,
  RESET_STYLES,
} from '../constants';
import { StyledContainer, StyledContainerProps } from './StyledContainer';
import {
  ContainerEventAttrProps,
  DragAndDropAriaProps,
  DragDropEventAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LayoutAriaProps,
  LayoutAttrProps,
  MouseEventAttrProps,
  StyledPolymorphicProps,
} from '../../../declarations';

export interface ContainerExtendedProps
  extends StyledContainerProps,
    // native props
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    DragAndDropAriaProps,
    LayoutAttrProps,
    LayoutAriaProps,
    ContainerEventAttrProps<HTMLDivElement>,
    FocusEventAttrProps<HTMLDivElement>,
    DragDropEventAttrProps<HTMLDivElement>,
    MouseEventAttrProps<HTMLDivElement> {
  /** Fluid */
  fluidProp?: FluidProp;
  /** Number of children by row. This will generate a grid of child elements with same width columns.*/
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
  /** This prop remove the horizontal padding set by default taking into account
   * the gutter size. */
  removeHorizontalSpace?: boolean;
  /** Content of the container */
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerExtendedProps> = ({
  children,
  fluidProp = false,
  gutter = 'layout-sm',
  marginBottom,
  marginTop,
  maxScreen = 'xxl',
  paddingBottom,
  paddingTop,
  removeHorizontalSpace = false,
  tooltip,
  ...styledProps
}) => {
  const hasFluidObject = typeof fluidProp === 'object';
  const getConfig = () => {
    setConfiguration({
      breakpoints: Object.values(BREAKPOINTS_DEFAULT_VALUES),
      containerWidths: Object.values(CONTAINER_WIDTH_DEFAULT_VALUES),
      gridColumns: 12,
      maxScreenClass: maxScreen,
    });
  };

  React.useEffect(getConfig, [maxScreen]);

  return (
    <StyledContainer
      {...styledProps}
      fluid={typeof fluidProp === 'boolean' && fluidProp}
      gutter={gutter}
      lg={hasFluidObject ? fluidProp?.lg : null}
      $marginBottom={marginBottom}
      $marginTop={marginTop}
      md={hasFluidObject ? fluidProp?.md : null}
      $paddingBottom={paddingBottom}
      $paddingTop={paddingTop}
      $removeHorizontalSpace={removeHorizontalSpace}
      sm={hasFluidObject ? fluidProp?.sm : null}
      style={RESET_STYLES.PADDING}
      title={tooltip}
      xl={hasFluidObject ? fluidProp?.xl : null}
      xs={hasFluidObject ? fluidProp?.xs : null}
      xxl={hasFluidObject ? fluidProp?.xxl : null}
    >
      {children}
    </StyledContainer>
  );
};
