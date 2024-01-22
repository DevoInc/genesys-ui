import React, { AllHTMLAttributes } from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';
import { HTMLTag } from './commonProps';

/** ---------------------------------------------
 * Polymorphic props for styled components
 * --------------------------------------------- */
export interface StyledPolymorphicProps<T = any> {
  /** Polymorphic prop to create a different HTML tag based in the styled components one:
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  as?: HTMLTag | React.ComponentType<T>;
}

/** ---------------------------------------------
 * Css overload props for styled components
 * --------------------------------------------- */
export interface StyledOverloadCssProps {
  /** Sometimes you don't want to create an extra component just to apply a bit of styling. The styles prop is a convenient way to iterate on your components without settling on fixed component boundaries yet. */
  styles?: CSSProp<DefaultTheme>;
}

/**
 * Record of css props for dot notation components to apply styles to subcomponents.
 */
type StyledOverloadRecordCssProp<T extends string = string> = {
  [key in T]?: CSSProp<DefaultTheme>;
};

/**
 * Union of the two possible ways to pass css to a dot notation component.
 * @example
 * <AppBar styles={{ color: 'red' }} /> or <AppBar styles='color: red; height: auto' />
 * <AppBar subcomponentStyles={{ container: { color: 'red' } }} /> or <AppBar subcomponentStyles={{ container: 'color: red'}} />
 */
export type StyledOverloadCssPropsWithRecord<T extends string> =
  | {
      styles?: StyledOverloadCssProps['styles'];
      subcomponentStyles?: never;
    }
  | {
      styles?: never;
      subcomponentStyles?: StyledOverloadRecordCssProp<T>;
    };
