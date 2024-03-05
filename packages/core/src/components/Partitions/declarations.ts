import * as React from 'react';
import {
  BaseSize,
  BlendColorScheme,
  BrandColorScheme,
  DataColorScheme,
  NeutralColorScheme,
  UIColorScheme,
} from '../../declarations';

export type TPartitionsSize = BaseSize;

export type TPartitionsColorScheme =
  | BrandColorScheme
  | NeutralColorScheme
  | BlendColorScheme
  | UIColorScheme
  | DataColorScheme;

export interface IPartitions {
  /** The size of the partitions. */
  size?: TPartitionsSize;
  /** If there is visual separators between the partitions items. */
  hasSeparators?: boolean;
}

export interface IPartitionsItem {
  /** The width in percentage [0-1]. The sum of all item widths must be one. */
  width?: number;
  /** The specific background color or pre-defined background-color scheme for the partitions item. */
  color?: React.CSSProperties['backgroundColor'];
}
