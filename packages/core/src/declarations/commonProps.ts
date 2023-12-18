import { ReactHTML } from 'react';
import { PickUnion } from '../typeFunctions';
import { GLOBAL_SPACING } from '../constants';
import { FieldAttrProps, GlobalAttrProps } from './htmlAttrs';
import { FieldAriaProps, GlobalAriaProps } from './ariaAttrs';
import {
  FieldEventAttrProps,
  FocusEventAttrProps,
  MouseEventAttrProps,
} from './htmlEventAttrs';
import { StyledOverloadCssProps, StyledPolymorphicProps } from './styled';

/** ---------------------------------------------
 * COMMON PROPS
 * --------------------------------------------- */
export type HTMLTag = keyof ReactHTML;
export type GlobalSize =
  | 'xxxxs'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl';
export type BaseSize = PickUnion<GlobalSize, 'sm' | 'md' | 'lg'>;
export type TypoBodySize =
  | BaseSize
  | PickUnion<GlobalSize, 'xxs' | 'xs' | 'xl' | 'xxl'>;
export type TypoHeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'H5' | 'H6';
export type TypoSize = TypoBodySize | TypoHeadingSize;

/** ---------------------------------------------
 * Global status declaration
 * --------------------------------------------- */
export type GlobalStatus = 'base' | ActiveStatus;

/** ---------------------------------------------
 * Active status declaration: status for components with required UI context
 * --------------------------------------------- */
export type ActiveStatus = 'success' | 'error' | 'warning' | 'help' | 'info';

/** ---------------------------------------------
 * Global Spacing declaration: space values for props as margin, padding, gap... etc.
 * --------------------------------------------- */
export type GlobalSpacing = (typeof GLOBAL_SPACING)[number];

/** ---------------------------------------------
 * Field size declaration: size for all the field controls and components: InputControl, Input, Switch... etc.
 * --------------------------------------------- */
export type FieldSize = BaseSize;

/** ---------------------------------------------
 * Field status declaration: size for all the field controls and components: InputControl, Input, Switch... etc.
 * --------------------------------------------- */
export type FieldStatus = PickUnion<
  GlobalStatus,
  'base' | 'success' | 'error' | 'warning'
>;

/** ---------------------------------------------
 * Width of the field control based in predefined values as 'xxs', 'xs', 'sm'... etc. or directly in a css value. It should reflect the length of the content you expect the user to enter.
 * --------------------------------------------- */
export type ControlWidth = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;

/** ---------------------------------------------
 * Feedback components size declaration: tag, Badge... etc.
 * --------------------------------------------- */
export type FeedbackSize = BaseSize;

/** ---------------------------------------------
 * Common scheme spacing declaration: space values for props as margin, padding, gap... etc.
 * --------------------------------------------- */
export type CommonSpacing = PickUnion<GlobalSpacing, '0' | 'auto' | 'inherit'>;

/** ---------------------------------------------
 * Component scheme spacing declaration: space values for props as margin, padding, gap... etc.
 * --------------------------------------------- */
export type CmpSpacing = PickUnion<
  GlobalSpacing,
  | 'cmp-xxs'
  | 'cmp-xs'
  | 'cmp-sm'
  | 'cmp-md'
  | 'cmp-lg'
  | 'cmp-xl'
  | 'cmp-xxl'
  | 'cmp-xxxl'
>;

/** ---------------------------------------------
 * Layout scheme spacing declaration: space values for props as margin, padding, gap... etc.
 * --------------------------------------------- */
export type LayoutSpacing = PickUnion<
  GlobalSpacing,
  | 'layout-xxs'
  | 'layout-xs'
  | 'layout-sm'
  | 'layout-md'
  | 'layout-lg'
  | 'layout-xl'
  | 'layout-xxl'
  | 'layout-xxxl'
>;

/** ---------------------------------------------
 * States for form and interactive components
 * --------------------------------------------- */
export type GlobalState =
  | BasicState
  | MouseState
  | ExpandedState
  | SelectedState
  | LoadingState
  | ReadonlyState;

export type BasicState = 'disabled' | 'enabled';

export type MouseState = 'focused' | 'hovered' | 'pressed';

export type LoadingState = 'loading' | 'loading-error' | 'loading-success';

export type SelectedState = 'selected';

export type ExpandedState = 'expanded';

export type FeaturedState = 'featured';

export type ActiveState = 'active';

export type ReadonlyState = 'readonly';

export type UIState = 'created' | 'deleted';

/** ---------------------------------------------
 * Selection behavior: checkbox (multiple) or radio (single)
 * --------------------------------------------- */
export type SelectionScheme = 'multiple' | 'single';

/** ---------------------------------------------
 * colorScheme to define background, text color, border color... etc.
 * --------------------------------------------- */
export type BodyColorScheme =
  | 'base'
  | 'inverse'
  | 'strong'
  | 'stronger'
  | 'weak'
  | 'weaker'
  | 'weakest';

export type UIColorScheme = 'success' | 'error' | 'warning' | 'help' | 'info';

export type UIStrongColorScheme =
  | 'success-strong'
  | 'error-strong'
  | 'warning-strong'
  | 'help-strong'
  | 'info-strong';

export type UIWeakColorScheme =
  | 'success-weak'
  | 'error-weak'
  | 'warning-weak'
  | 'help-weak'
  | 'info-weak';

export type BrandColorScheme = 'primary' | 'secondary';

export type NeutralColorScheme = 'neutral';

export type BlendColorScheme = 'blend-base' | 'blend-inverse';

export type DataColorScheme =
  | 'data-blue'
  | 'data-bronze'
  | 'data-dusk'
  | 'data-green'
  | 'data-indigo'
  | 'data-magenta'
  | 'data-purple'
  | 'data-red'
  | 'data-sky'
  | 'data-slate'
  | 'data-teal';

export type FeedbackColorScheme =
  | BrandColorScheme
  | NeutralColorScheme
  | BlendColorScheme
  | UIColorScheme
  | DataColorScheme;

export type AllColorScheme =
  | BodyColorScheme
  | UIColorScheme
  | UIStrongColorScheme
  | UIWeakColorScheme
  | BrandColorScheme
  | NeutralColorScheme
  | BlendColorScheme
  | DataColorScheme;

/** ---------------------------------------------
 * Coordinates to position elements.
 * --------------------------------------------- */
export type BaseCoords = 'top' | 'bottom' | 'left' | 'right';

export type Coords =
  | 'all'
  | BaseCoords
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

/** ---------------------------------------------
 * Elevation to define box-shadow, z-index, shape... etc.
 * --------------------------------------------- */
export type Elevation =
  | 'ground'
  | 'raised'
  | 'stickyTop'
  | 'stickyRight'
  | 'stickyBottom'
  | 'stickyLeft'
  | 'activated'
  | 'draggable'
  | 'overlay'
  | 'popOut';

/** ---------------------------------------------
 * Form field controls: InputControl, CheckboxControl... etc. common interface
 * --------------------------------------------- */
export interface FieldControlCommonProps<T = Element>
  extends GlobalAttrProps<T>,
    Pick<GlobalAriaProps, 'aria-describedby' | 'aria-labelledby'>,
    Required<Pick<GlobalAriaProps, 'aria-label'>>,
    Omit<FieldAriaProps, 'aria-required'>,
    FieldAttrProps<T>,
    FieldEventAttrProps<T>,
    FocusEventAttrProps<T>,
    MouseEventAttrProps<T>,
    StyledPolymorphicProps,
    StyledOverloadCssProps {}
