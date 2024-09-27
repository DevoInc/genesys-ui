import type {
  TBasicState,
  TMouseState,
  TGlobalSize,
  TUIColorScheme,
  TBaseSize,
  TAllColorScheme,
} from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type TLinkColorScheme =
  | PickUnion<TAllColorScheme, 'base' | 'inverse'>
  | TUIColorScheme;

export type TLinkSize = TBaseSize | PickUnion<TGlobalSize, 'xs'>;

export type TLinkState = TBasicState | TMouseState;

export interface ILink {
  /** This property defines the color scheme for the Link. */
  colorScheme?: TLinkColorScheme;
  /** If the Link is underlined to make it more prominent. */
  underlined?: boolean;
  /** If the Link fits the full available width of its parent. Makes it behavior as a block.*/
  wide?: boolean;
  /** Size of the component. */
  size?: TLinkSize;
  /** Interaction state of the component. */
  state?: TLinkState;
  /** This property as boolean defines if the Link is shown in one line with
   * ellipsis or, as a number, it defines the number of lines before
   * ellipsis (css line-clamp). */
  lineClamp?: number;
}
