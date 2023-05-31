import React, { AllHTMLAttributes } from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';
import { HTMLTag } from './commonProps';

/** ---------------------------------------------
 * Polimorphic props for styled components
 * --------------------------------------------- */
export interface StyledPolymorphicProps<T = any> {
  /** Polymorphic prop to create a different HTML tag based in the styled components one:
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  as?: HTMLTag | React.ComponentType<T>;
  /** Only it's necessary when we need to use the polymorphic props 'as'. A string containing one or more class names for the element, used for CSS styling. */
  className?: AllHTMLAttributes<T>['className'];
}

/** ---------------------------------------------
 * Css overload props for styled components
 * --------------------------------------------- */
export interface StyledOverloadCssProps {
  /** Sometimes you don't want to create an extra component just to apply a bit of styling. The styles prop is a convenient way to iterate on your components without settling on fixed component boundaries yet. */
  styles?: CSSProp<DefaultTheme>;
}
