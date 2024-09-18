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
  htmlFor?: ILabelAttrs['htmlFor'];
  /** This property defines the color scheme for the Label.
   * There are predefined types: base, error... etc.
   * It's possible to use a custom color too.*/
  colorScheme?: TBodyColorScheme | TUIColorScheme;
  cursor?: React.CSSProperties['cursor'];
  /** Size of the Label.*/
  size?: TLabelSize;
  /** The label is hidden but accessible for screen-readers.*/
  srOnly?: boolean;
  textAlign?: React.CSSProperties['textAlign'];
  /** If the text of the label doesn't fit then there is a text ellipsis.*/
  truncated?: boolean;
}
