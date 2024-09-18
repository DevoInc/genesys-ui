import * as React from 'react';
import { CSSProp } from 'styled-components';

/** ---------------------------------------------
 * Polymorphic props for styled components
 * --------------------------------------------- */
export interface IStyledPolymorphic<T = any> {
  /** Polymorphic prop to create a different HTML tag based in the styled
   * components one:
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  as?: keyof React.ReactHTML | React.ComponentType<T>;
}

/** ---------------------------------------------
 * Css overload props for styled components
 * --------------------------------------------- */
export interface IStyledOverloadCss {
  /** Sometimes you don't want to create an extra component just to apply a bit
   * of styling. The styles prop is a convenient way to iterate on your
   * components without settling on fixed component boundaries yet. */
  style?: CSSProp;
}
