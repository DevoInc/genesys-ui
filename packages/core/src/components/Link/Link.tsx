import * as React from 'react';

import {
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LinkAttrProps,
  MouseEventAttrProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

import { StyledLink, StyledLinkProps } from './StyledLink';

export interface LinkProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    LinkAttrProps,
    TriggerAriaProps,
    FocusEventAttrProps,
    MouseEventAttrProps,
    StyledLinkProps {
  /** Children to be passed */
  children?: React.ReactNode;
  /** Tooltip value */
  tooltip?: string;
}

export const Link: React.FC<LinkProps> = ({
  colorScheme = 'base',
  children,
  href,
  lineClamp,
  onClick,
  size = 'md',
  state = 'enabled',
  tooltip,
  underlined,
  ...restNativeProps
}) => {
  const onLinkClick = (event) => {
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
      colorScheme={colorScheme}
      data-tip={tooltip}
      href={href || (onClick && '#')}
      lineClamp={lineClamp}
      onClick={onLinkClick}
      size={size}
      state={state}
      tabIndex={state === 'disabled' ? -1 : 0}
      underlined={underlined}
    >
      {children}
    </StyledLink>
  );
};
