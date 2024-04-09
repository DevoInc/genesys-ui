import { PickUnion } from '../../typeFunctions';

import type { TBaseSize, TGlobalSize } from '../../declarations';

import type {
  TBlendColorScheme,
  TBrandColorScheme,
  TDataColorScheme,
  TUIColorScheme,
  TNeutralColorScheme,
} from '../../declarations';
import type { TBadgeColorScheme, TBadgeSize } from '../Badge';
import * as React from 'react';

export type TAvatarColorScheme =
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TUIColorScheme
  | TDataColorScheme;

export type TAvatarSize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xxxs' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'xxxl'>;

export type TAvatarCustomSize = {
  square?: string;
  width?: string;
  height?: string;
};

export type TAvatarVariant = 'circle' | 'square' | 'rounded';

export type TAvatarFit = 'cover' | 'contain';

export type TAvatarBadgeFn = (props: {
  colorScheme: TBadgeColorScheme;
  size: TBadgeSize;
}) => React.ReactNode;

export interface IAvatar {
  /** A Badge block to be shown over the Avatar. We recommend passing a function which renders a Badge
   * component, but you can render any component or node. The function has default values for 'size' and 'colorScheme'.
   * This Badge may be used to indicate status, presence... etc.*/
  badge?: TAvatarBadgeFn;
  /** If the Avatar has a border to differentiate it from the background. */
  bordered?: boolean;
  /** Color scheme: background color, text color, badge color scheme... etc. */
  colorScheme?: TAvatarColorScheme;
  children: React.ReactNode;
  /** The custom size (width and height) defined by an object.
   * If the variable square is defined, then it's assigned that value to the width and to the height. */
  customSize?: TAvatarCustomSize;
  disabled?: boolean;
  /** Icon to be shown on hover-focus of the avatar.E.g. a pencil icon to denote it's editable. */
  iconOnHover?: React.ReactNode;
  /** The way of the background image fits the space */
  imageFit?: TAvatarFit;
  /** Path of the image file. */
  imageSrc?: string;
  /** If there is no image provided you can use instead one or two characters (as maximum) as a content. */
  initials?: string;
  /** If the Avatar is clickable as a button or link. */
  isClickable?: boolean;
  /** Name of the Avatar used for image alt, default initials, aria-label... etc. */
  name: string;
  /** The size of the avatar: a group of predefined width-height squared combinations. */
  size?: TAvatarSize;
  /** The shape variant of the avatar: circular, square... etc. */
  variant?: TAvatarVariant;
}
