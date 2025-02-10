import * as React from 'react';

import type {
  IButtonAttrs,
  IDataAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  ILinkAttrs,
  IMouseEventAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
  ITriggerAriaAttrs,
} from '../../declarations';
import { StyledLink } from './StyledLink';
import type { ILink } from './declarations';
import type { Resolve } from '../../typeFunctions';

export interface LinkProps
  extends ILink,
    IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IDataAttrs,
    Pick<IButtonAttrs, 'tabIndex'>,
    ILinkAttrs,
    ITriggerAriaAttrs,
    IFocusEventAttrs,
    IMouseEventAttrs {
  /** Children to be passed */
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, Resolve<LinkProps>>(
  (
    {
      colorScheme = 'base',
      children,
      href,
      lineClamp,
      onClick,
      size = 'md',
      state = 'enabled',
      style,
      tabIndex,
      tooltip,
      underlined,
      wide,
      ...restNativeProps
    },
    ref
  ) => {
    const onLinkClick = (event: React.MouseEvent) => {
      if (!href) {
        event.preventDefault();
      }
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <StyledLink
        {...restNativeProps}
        ref={ref}
        $colorScheme={colorScheme}
        css={style}
        href={href}
        $lineClamp={lineClamp}
        onClick={onLinkClick}
        $size={size}
        $state={state}
        tabIndex={tabIndex || (state === 'disabled' ? -1 : 0)}
        title={tooltip}
        $underlined={underlined}
        $wide={wide}
      >
        {children}
      </StyledLink>
    );
  }
);

