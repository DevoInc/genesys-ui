import React, { AllHTMLAttributes } from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';

/** ---------------------------------------------
 * Polimorphic props for styled components
 * --------------------------------------------- */
export interface StyledPolymorphicProps<T = any> {
  /** Polymorphic prop to create a different tag or styled component
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  as?: string | React.ComponentType<T>;
  /** If you choose to wrap another component with the styled() HOC that also accepts an "as" prop,
   * use "forwardedAs" to pass along the desired prop to the wrapped component.
   * https://styled-components.com/docs/api#forwardedas-prop */
  forwardedAs?: string | React.ComponentType<T>;
  /** Only it's necessary when we need to use the polymorphic props 'as' and 'forwardedAs'. A string containing one or more class names for the element, used for CSS styling. */
  className?: AllHTMLAttributes<T>['className'];
}

/** ---------------------------------------------
 * Css overload props for styled components
 * --------------------------------------------- */
export interface StyledOverloadCssProps {
  /** Sometimes you don't want to create an extra component just to apply a bit of styling. The css prop is a convenient way to iterate on your components without settling on fixed component boundaries yet. */
  css?: CSSProp<DefaultTheme>;
}
