import * as React from 'react';

import type {
  IButtonAttrs,
  IClassName,
  IDataAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILinkAttrs,
  IMouseEventAttrs,
  IStyleAttr,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
  ITriggerEventAttrs,
} from '../../../../declarations';

import { StyledButtonContainer } from './StyledButtonContainer';
import type { IButtonContainer } from './declarations';
import { Resolve } from '../../../../typeFunctions';
import { PANEL_HEADER_CLASS_NAME_BASE } from '../../../Panel/constants';
import { getSpacingClassNames } from '../../../../helpers';
import {
  BUTTON_CLASS_NAME_BASE,
  BUTTON_COLOR_SCHEME_DEFAULT,
  BUTTON_SIZE_DEFAULT,
  BUTTON_STATE_DEFAULT,
} from '../../constants';

export interface ButtonContainerProps
  extends IDataAttrs,
    IStyledPolymorphic,
    IStyleAttr,
    IClassName,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    Omit<ITriggerAriaAttrs, 'aria-selected'>,
    IFocusEventAttrs,
    IMouseEventAttrs,
    ITriggerEventAttrs,
    ILinkAttrs,
    Omit<IButtonAttrs, 'disabled' | 'name'>,
    IButtonContainer {
  /** Main content of the button */
  children?: React.ReactNode;
}

export const ButtonContainer = React.forwardRef<
  HTMLButtonElement,
  Resolve<ButtonContainerProps>
>(
  (
    {
      'aria-expanded': ariaExpanded,
      'aria-label': ariaLabel,
      as: Component,
      children,
      className,
      colorScheme = BUTTON_COLOR_SCHEME_DEFAULT,
      hasDropdown,
      href,
      icon,
      id,
      circular,
      squared,
      wide,
      onBlur,
      onFocus,
      selectionScheme,
      size = BUTTON_SIZE_DEFAULT,
      state = BUTTON_STATE_DEFAULT,
      style,
      tooltip,
      ...restNativeProps
    },
    ref,
  ) => {
    const classNameBase = BUTTON_CLASS_NAME_BASE;
    const classNames = [
      `${classNameBase} `,
      hasDropdown ? `${classNameBase}--has-dropdown ` : '',
      colorScheme !== BUTTON_COLOR_SCHEME_DEFAULT
        ? `${classNameBase}--${colorScheme} `
        : '',
      state !== BUTTON_STATE_DEFAULT ? `${classNameBase}--${state} ` : '',
      size !== BUTTON_SIZE_DEFAULT ? `${classNameBase}--${size} ` : '',
      squared ? `${classNameBase}--squared ` : '',
      circular ? `${classNameBase}--circular ` : '',
      wide ? `${classNameBase}--wide ` : '',
      className && `${className} `,
    ]
      .join('')
      .trim();
    const EvalComponent =
      Component || (selectionScheme ? 'label' : href ? 'a' : 'button');
    return (
      <EvalComponent
        {...restNativeProps}
        className={classNames}
        aria-expanded={state === 'expanded' || ariaExpanded}
        aria-label={tooltip || ariaLabel}
        data-squared={squared}
        disabled={state === 'disabled' || state === 'loading'}
        href={href}
        id={id}
        onFocus={selectionScheme ? null : onFocus}
        onBlur={selectionScheme ? null : onBlur}
        ref={ref}
        $selectionScheme={selectionScheme}
        style={style}
        title={tooltip}
      >
        {children}
      </EvalComponent>
    );
  },
);
