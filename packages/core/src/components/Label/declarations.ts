import * as React from 'react';
import { PickUnion } from '../../typeFunctions';
import type {
  TBaseSize,
  TBodyColorScheme,
  TGlobalSize,
  TUIColorScheme,
} from '../../declarations/commonProps';
import type { ILabelAttrs } from '../../declarations';

export type TLabelSize =
  | TBaseSize
  | PickUnion<TGlobalSize, 'xxs' | 'xs' | 'xl'>;

export interface ILabel {
  /** The HTML attribute to connect the label with a field control setting the same value of this last one's id.*/
  htmlFor?: ILabelAttrs['htmlFor'];
  /** This property defines the color scheme for the Label.
   * There are predefined types: base, error... etc.
   * It's possible to use a custom color too.*/
  colorScheme?: TBodyColorScheme | TUIColorScheme;
  /** The CSS cursor type for the label. */
  cursor?: React.CSSProperties['cursor'];
  /** Size of the Label which affects mostly to its typographic properties.*/
  size?: TLabelSize;
  /** The label is hidden but accessible for screen-readers.*/
  srOnly?: boolean;
  /** The text alignment of the label.*/
  textAlign?: React.CSSProperties['textAlign'];
  /** If the text of the label doesn't fit then there is a text ellipsis.*/
  truncated?: boolean;
}
