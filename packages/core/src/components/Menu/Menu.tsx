import * as React from 'react';

import { StyledMenuNav, StyledMenuNavProps } from './styled';
import { MenuList, MenuLink, MenuListProps } from './elements';

export interface MenuProps
  extends Partial<
      Pick<
        MenuListProps,
        | 'boxed'
        | 'data'
        | 'expand'
        | 'expandIconFade'
        | 'leftSpaced'
        | 'menuLinkCmp'
        | 'menuLinkContent'
        | 'onChange'
        | 'separators'
        | 'size'
        | 'titleLinkStyle'
      >
    >,
    Partial<Pick<StyledMenuNavProps, 'margin' | 'flex'>> {}

export const Menu: React.FC<MenuProps> = ({
  boxed,
  data,
  expand,
  expandIconFade,
  flex,
  leftSpaced,
  margin,
  menuLinkCmp,
  menuLinkContent,
  onChange,
  separators,
  size,
  titleLinkStyle,
}) => {
  const MenuLinkCmp = menuLinkCmp || MenuLink;
  return (
    <StyledMenuNav margin={margin} flex={flex}>
      <MenuList
        boxed={boxed}
        data={data}
        expand={expand}
        expandIconFade={expandIconFade}
        leftSpaced={leftSpaced}
        menuLinkCmp={MenuLinkCmp}
        menuLinkContent={menuLinkContent}
        onChange={onChange}
        separators={separators}
        size={size}
        titleLinkStyle={titleLinkStyle}
      />
    </StyledMenuNav>
  );
};
