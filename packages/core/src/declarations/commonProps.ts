import { ReactHTML } from 'react';
import { PickUnion } from '../typeFunctions';
import type { IDataAttrs, IFieldAttrs, IGlobalAttrs } from './htmlAttrs';
import type { IFieldAriaAttrs, IGlobalAriaAttrs } from './ariaAttrs';
import type {
  IFieldEventAttrs,
  IFocusEventAttrs,
  IMouseEventAttrs,
} from './htmlEventAttrs';
import type { IStyledOverloadCss, IStyledPolymorphic } from './styled';

/** ---------------------------------------------
 * COMMON PROPS
 * --------------------------------------------- */
export type HTMLTag = keyof ReactHTML;

export type TGlobalSize =
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

export type TBaseSize = PickUnion<TGlobalSize, 'sm' | 'md' | 'lg'>;

export type TTypoBodySize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xxs' | 'xs' | 'xl'>;

export type TTypoHeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TTypoSize = TTypoBodySize | TTypoHeadingSize;

/** ---------------------------------------------
 * Global status declaration
 * --------------------------------------------- */
export type TGlobalStatus = 'base' | TActiveStatus;

/** ---------------------------------------------
 * Active status declaration: status for components with required UI context
 * --------------------------------------------- */
export type TActiveStatus = 'success' | 'error' | 'warning' | 'help' | 'info';

/** ---------------------------------------------
 * Global Spacing declaration: space values for props as margin, padding, gap... etc.
 * --------------------------------------------- */
export type TGlobalSpacing =
  | '0'
  | 'auto'
  | 'inherit'
  | 'cmp-xxs'
  | 'cmp-xs'
  | 'cmp-sm'
  | 'cmp-md'
  | 'cmp-lg'
  | 'cmp-xl'
  | 'cmp-xxl'
  | 'cmp-xxxl'
  | 'layout-xxs'
  | 'layout-xs'
  | 'layout-sm'
  | 'layout-md'
  | 'layout-lg'
  | 'layout-xl'
  | 'layout-xxl'
  | 'layout-xxxl';

/** ---------------------------------------------
 * Field size declaration: size for all the field controls and components: InputControl, Input, Switch... etc.
 * --------------------------------------------- */
export type TFieldSize = TBaseSize;

/** ---------------------------------------------
 * Field status declaration: size for all the field controls and components: InputControl, Input, Switch... etc.
 * --------------------------------------------- */
export type TFieldStatus = PickUnion<
  TGlobalStatus,
  'base' | 'success' | 'error' | 'warning'
>;

/** ---------------------------------------------
 * Width of the field control based in predefined values as 'xxs', 'xs', 'sm'... etc. or directly in a css value. It should reflect the length of the content you expect the user to enter.
 * --------------------------------------------- */
export type TControlWidth =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'wide'
  | string;

/** ---------------------------------------------
 * Feedback components size declaration: tag, Badge... etc.
 * --------------------------------------------- */
export type TFeedbackSize = TBaseSize;

/** ---------------------------------------------
 * Common scheme spacing declaration: space values for props as margin, padding, gap... etc.
 * --------------------------------------------- */
export type TCommonSpacing = PickUnion<
  TGlobalSpacing,
  '0' | 'auto' | 'inherit'
>;

/** ---------------------------------------------
 * Component scheme spacing declaration: space values for props as margin, padding, gap... etc.
 * --------------------------------------------- */
export type TCmpSpacing = PickUnion<
  TGlobalSpacing,
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
export type TLayoutSpacing = PickUnion<
  TGlobalSpacing,
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
export type TGlobalState =
  | TBasicState
  | TMouseState
  | TExpandedState
  | TSelectedState
  | TLoadingState
  | TReadonlyState;

export type TBasicState = 'disabled' | 'enabled';

export type TMouseState = 'focused' | 'hovered' | 'pressed';

export type TLoadingState = 'loading' | 'loading-error' | 'loading-success';

export type TSelectedState = 'selected';

export type TExpandedState = 'expanded';

export type TFeaturedState = 'featured';

export type TActiveState = 'active';

export type TReadonlyState = 'readonly';

export type TUIState = 'created' | 'deleted';

/** ---------------------------------------------
 * Selection behavior: checkbox (multiple) or radio (single)
 * --------------------------------------------- */
export type TSelectionScheme = 'multiple' | 'single';

/** ---------------------------------------------
 * colorScheme to define background, text color, border color... etc.
 * --------------------------------------------- */
export type TBodyColorScheme =
  | 'base'
  | 'inverse'
  | 'strong'
  | 'stronger'
  | 'weak'
  | 'weaker'
  | 'weakest';

export type TUIColorScheme = 'success' | 'error' | 'warning' | 'help' | 'info';

export type TUIStrongColorScheme =
  | 'success-strong'
  | 'error-strong'
  | 'warning-strong'
  | 'help-strong'
  | 'info-strong';

export type TUIWeakColorScheme =
  | 'success-weak'
  | 'error-weak'
  | 'warning-weak'
  | 'help-weak'
  | 'info-weak';

export type TBrandColorScheme = 'primary' | 'secondary';

export type TNeutralColorScheme = 'neutral';

export type TBlendColorScheme = 'blend-base' | 'blend-inverse';

export type TDataColorScheme =
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

export type TFeedbackColorScheme =
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TUIColorScheme
  | TDataColorScheme;

export type TAllColorScheme =
  | TBodyColorScheme
  | TUIColorScheme
  | TUIStrongColorScheme
  | TUIWeakColorScheme
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TDataColorScheme;

/** ---------------------------------------------
 * Coordinates to position elements.
 * --------------------------------------------- */
export type TBaseCoords = 'top' | 'bottom' | 'left' | 'right';

export type TCoords =
  | 'all'
  | TBaseCoords
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

/** ---------------------------------------------
 * TElevation to define box-shadow, z-index, shape... etc.
 * --------------------------------------------- */
export type TElevation =
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
export interface IFieldControl<T = Element>
  extends IGlobalAttrs<T>,
    Pick<IGlobalAriaAttrs, 'aria-describedby' | 'aria-labelledby'>,
    Required<Pick<IGlobalAriaAttrs, 'aria-label'>>,
    IDataAttrs,
    Omit<IFieldAriaAttrs, 'aria-required'>,
    IFieldAttrs<T>,
    IFieldEventAttrs<T>,
    IFocusEventAttrs<T>,
    IMouseEventAttrs<T>,
    IStyledPolymorphic,
    IStyledOverloadCss {}
