import * as React from 'react';

import {
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  LinkAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
  TriggerAriaProps,
} from '../../declarations';

import { StyledLink, StyledLinkProps } from './StyledLink';

export interface LinkProps
  extends StyledPolymorphicProps,
    StyledOverloadCssProps,
    GlobalAttrProps,
    GlobalAriaProps,
    LinkAttrProps,
    TriggerAriaProps,
    FocusEventAttrProps,
    MouseEventAttrProps,
    StyledLinkProps {
  /** Children to be passed */
  children?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  colorScheme = 'base',
  children,
  href,
  lineClamp,
  onClick,
  size = 'md',
  state = 'enabled',
  styles,
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
      css={styles}
      href={href || (onClick && '#')}
      lineClamp={lineClamp}
      onClick={onLinkClick}
      size={size}
      state={state}
      tabIndex={state === 'disabled' ? -1 : 0}
      title={tooltip}
      underlined={underlined}
    >
      {children}
    </StyledLink>
  );
};
