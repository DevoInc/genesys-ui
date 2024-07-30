import * as React from 'react';

import type { TTypoBodySize } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type TKeyValueBoldScheme = 'key' | 'value';
export type TKeyValueFormat = 'base' | 'row' | 'column';

export interface IKeyValue {
  /** To define if we want the key or the value to be the bold content. */
  boldScheme?: TKeyValueBoldScheme;
  /** To define the distribution of the blocks: all in row or only the symbol
   * and the text content, as a column... etc. */
  format?: TKeyValueFormat;
  /** The content for the component based in internal components, not in content
   * props. */
  children?: React.ReactNode;
  /** If we want to invert the order from key-value to value-key. */
  invertOrder?: boolean;
  /** The content for the key block. */
  keyContent?: React.ReactNode;
  /** The size of the component which defines font-size, spacing, line-height...
   * etc. */
  size?: PickUnion<TTypoBodySize, 'xs' | 'sm' | 'md'>;
  /** The size of the icon when it's used as a React component from genesys-icons
   * library. */
  iconSize?: string;
  /** To define the unit of the value if it's necessary: €, $, ºC... etc. */
  unit?: React.ReactNode;
  /** The content for the value block. */
  valueContent?: React.ReactNode;
  /** The supporting visual: icon, image, SVG... etc. at the beginning of the
   * component (if it's React Icon component from genesys-icons library it will
   * inherit the perfect size from context). */
  supportingVisual?: React.ReactNode;
}
