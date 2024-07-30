import * as React from 'react';

import type {
  TBaseSize,
  TBlendColorScheme,
  TBrandColorScheme,
  TDataColorScheme,
  TNeutralColorScheme,
  TUIColorScheme,
} from '../../declarations';

export type TPartitionsSize = TBaseSize;

export type TPartitionsColorScheme =
  | TBrandColorScheme
  | TNeutralColorScheme
  | TBlendColorScheme
  | TUIColorScheme
  | TDataColorScheme;

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
