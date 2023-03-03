import { PickUnion } from '../../typeFunctions';
import { BaseSize, GlobalSize } from '../../declarations';
import { BadgeProps } from '../Badge';
import {
  BlendColorScheme,
  BrandColorScheme,
  DataColorScheme,
  UIColorScheme,
  NeutralColorScheme,
} from '../../declarations';

export type AvatarColorScheme =
  | BrandColorScheme
  | NeutralColorScheme
  | BlendColorScheme
  | UIColorScheme
  | DataColorScheme;

export type AvatarBadge = {
  text: string;
  icon: string;
  colorScheme: AvatarColorScheme;
  component: React.ComponentType<BadgeProps>;
};

export type AvatarSize =
  | BaseSize
  | PickUnion<GlobalSize, 'xxxs' | 'xxs' | 'xs' | 'xl' | 'xxl' | 'xxxl'>;

export type CustomSize = {
  square?: string;
  width?: string;
  height?: string;
};

export type AvatarVariant = 'circle' | 'square' | 'rounded';

export type AvatarFit = 'cover' | 'contain';
