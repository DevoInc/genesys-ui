import * as React from 'react';

import { Elevation, GlobalSpacing } from './commonProps';
import { GlobalAttrProps, LayoutAttrProps } from './htmlAttrs';
import {
  ContainerEventAttrProps,
  DragDropEventAttrProps,
  FocusEventAttrProps,
  MouseEventAttrProps,
} from './htmlEventAttrs';
import {
  DragAndDropAriaProps,
  GlobalAriaProps,
  LayoutAriaProps,
  TriggerAriaProps,
} from './ariaAttrs';
import { StyledOverloadCssProps, StyledPolymorphicProps } from './styled';

export interface ILayoutBoxCss {
  /** The align-self CSS property overrides a flex item's align-items value. In Flexbox, it aligns the item on the cross axis.*/
  alignSelf?: React.CSSProperties['alignSelf'];
  /** Css display */
  display?: React.CSSProperties['display'];
  /** The elevation level of the element, related with its box-shadow, shape... etc. */
  elevation?: Elevation;
  /** This is the shorthand for flex-grow, flex-shrink and flex-basis combined.
   * The second and third parameters (flex-shrink and flex-basis) are optional.
   * Use only when its parent has display flex or flex-inline.
   * The default is 0 1 auto.*/
  flex?: React.CSSProperties['flex'];
  /** Css height */
  height?: React.CSSProperties['height'];
  /** Css margin. Use in the same way you assign margin in css, but using the
   * alias values used in the other margin types e.g. 'cmp-xs cmp-md' */
  margin?: string;
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginBottom?: GlobalSpacing;
  /** Css margin-left */
  marginLeft?: GlobalSpacing;
  /** Css margin-right */
  marginRight?: GlobalSpacing;
  /** Css margin-top */
  marginTop?: GlobalSpacing;
  /** Css max-height */
  maxHeight?: React.CSSProperties['maxHeight'];
  /** Css max-width */
  maxWidth?: React.CSSProperties['maxWidth'];
  /** Css min-height */
  minHeight?: React.CSSProperties['minHeight'];
  /** Css min-width */
  minWidth?: React.CSSProperties['minWidth'];
  /** Css opacity */
  opacity?: React.CSSProperties['opacity'];
  /** Css overflow */
  overflow?: React.CSSProperties['overflow'];
  /** Css overflow-x */
  overflowX?: React.CSSProperties['overflowX'];
  /** Css overflow-y */
  overflowY?: React.CSSProperties['overflowY'];
  /** Css padding. Use in the same way you assign padding in css, but using the
   * alias values used in the other padding types e.g. 'cmp-xs cmp-md' */
  padding?: string;
  /** Css padding-bottom */
  paddingBottom?: GlobalSpacing;
  /** Css padding-left */
  paddingLeft?: GlobalSpacing;
  /** Css padding-right */
  paddingRight?: GlobalSpacing;
  /** Css padding-top */
  paddingTop?: GlobalSpacing;
  /** Css position */
  position?: React.CSSProperties['position'];
  /** Position coordinates: top */
  positionTop?: React.CSSProperties['top'];
  /** Position coordinates: right */
  positionRight?: React.CSSProperties['right'];
  /** Position coordinates: bottom */
  positionBottom?: React.CSSProperties['bottom'];
  /** Position coordinates: left */
  positionLeft?: React.CSSProperties['left'];
  /** Css translate transformation. Only the part inside the parentheses of the 'translate(${translate})' expression. E.g. '0, 50%'*/
  cssTranslate?: string;
  /** Css vertical alignment */
  verticalAlign?: React.CSSProperties['verticalAlign'];
  /** Css visibility */
  visibility?: React.CSSProperties['visibility'];
  /** Css width */
  width?: React.CSSProperties['width'];
  /** Css z-index number */
  zIndex?: React.CSSProperties['zIndex'];
}

export interface ILayoutFlexCss {
  /** The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis. This property has no effect on single line flex containers (i.e. ones with flex-wrap: nowrap).*/
  alignContent?: React.CSSProperties['alignContent'];
  /** The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.*/
  alignItems?: React.CSSProperties['alignItems'];
  /** The desired css flex property value for the children. */
  childrenFlex?: string;
  /** The column-gap CSS property sets the size of the gap (gutter) between an element's columns. Use in the same way you assign spacing props as padding, margin...etc. using the alias values e.g. 'cmp-sm, cmp-md...etc.'*/
  columnGap?: GlobalSpacing;
  /** The flex CSS shorthand property sets how a flex item will grow or shrink to fit the space available in its flex container.*/
  flex?: React.CSSProperties['flex'];
  /** The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).*/
  flexDirection?: React.CSSProperties['flexDirection'];
  /** The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.*/
  flexWrap?: React.CSSProperties['flexWrap'];
  /** The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap. Use in the same way you assign spacing props padding, margin...etc. using the alias values e.g. 'cmp-sm, cmp-xs cmp-md...etc.' */
  gap?: string;
  /** The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container.*/
  justifyContent?: React.CSSProperties['justifyContent'];
  /** If it is set to true, then the display is inline-flex instead of flex. */
  inline?: boolean;
  /** The row-gap CSS property sets the size of the gap (gutter) between an element's rows. Use in the same way you assign spacing props as padding, margin...etc. using the alias values e.g. 'cmp-sm, cmp-md... etc.' */
  rowGap?: GlobalSpacing;
}

export interface ILayoutFlexItem {
  /** The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.*/
  order?: React.CSSProperties['order'];
}

export interface ILayoutGridCss {
  /** The CSS align-content property sets the distribution of space between and around content items along a grid's cross-axis.*/
  alignContent?: React.CSSProperties['alignContent'];
  /** The CSS align-items property sets the align-self value on all direct children as a group. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.*/
  alignItems?: React.CSSProperties['alignItems'];
  /** The column-gap CSS property sets the size of the gap (gutter) between an element's columns. Use in the same way you assign spacing props as padding, margin...etc. using the alias values e.g. 'cmp-sm, cmp-md...etc.'*/
  columnGap?: GlobalSpacing;
  /** The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap. Use in the same way you assign spacing props padding, margin...etc. using the alias values e.g. 'cmp-sm, cmp-xs cmp-md...etc.' */
  gap?: string;
  /** The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.*/
  gridAutoFlow?: React.CSSProperties['gridAutoFlow'];
  /** The grid-template-areas CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.*/
  gridTemplateAreas?: React.CSSProperties['gridTemplateAreas'];
  /** The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.*/
  gridTemplateColumns?: React.CSSProperties['gridTemplateColumns'];
  /** The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.*/
  gridTemplateRows?: React.CSSProperties['gridTemplateRows'];
  /** LayoutContainer is an element that works as a grid container. By default, it generates a block-level grid however if this prop is true, it generates an inline-level grid.*/
  inline?: boolean;
  /** The CSS justify-content property defines how the browser distributes space between and around content items along the inline axis of a grid container.*/
  justifyContent?: React.CSSProperties['justifyContent'];
  /** The CSS justify-items property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.*/
  justifyItems?: React.CSSProperties['justifyItems'];
  /** The row-gap CSS property sets the size of the gap (gutter) between an element's rows. Use in the same way you assign spacing props as padding, margin...etc. using the alias values e.g. 'cmp-sm, cmp-md... etc.' */
  rowGap?: GlobalSpacing;
}

export interface ILayoutGridItemCss {
  /** The align-self CSS property overrides a grid item's align-items value. It aligns the item inside the grid area.*/
  alignSelf?: React.CSSProperties['alignSelf'];
  /** The grid-area CSS shorthand property specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.*/
  gridArea?: React.CSSProperties['gridArea'];
  /** The grid-column CSS shorthand property specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.*/
  gridColumn?: React.CSSProperties['gridColumn'];
  /** The grid-column-end CSS property specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.*/
  gridColumnEnd?: React.CSSProperties['gridColumnEnd'];
  /** The grid-column-start CSS property specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.*/
  gridColumnStart?: React.CSSProperties['gridColumnStart'];
  /** The grid-row CSS shorthand property specifies a grid item's size and location within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.*/
  gridRow?: React.CSSProperties['gridRow'];
  /** The grid-row-end CSS property specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.*/
  gridRowEnd?: React.CSSProperties['gridRowEnd'];
  /** The grid-row-start CSS property specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.*/
  gridRowStart?: React.CSSProperties['gridRowStart'];
  /** The CSS justify-self property sets the way a box is justified inside its alignment container along the appropriate axis.*/
  justifySelf?: React.CSSProperties['justifySelf'];
}

export interface ILayoutTransientForStyled {
  /** Css display */
  $display?: React.CSSProperties['display'];
  /** Css height */
  $height?: React.CSSProperties['height'];
  /** Css width */
  $width?: React.CSSProperties['width'];
}

export interface ILayoutBox
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    DragAndDropAriaProps,
    LayoutAttrProps,
    LayoutAriaProps,
    Pick<TriggerAriaProps, 'aria-expanded'>,
    ContainerEventAttrProps,
    FocusEventAttrProps,
    DragDropEventAttrProps,
    MouseEventAttrProps,
    ILayoutBoxCss {
  children?: React.ReactNode;
}
