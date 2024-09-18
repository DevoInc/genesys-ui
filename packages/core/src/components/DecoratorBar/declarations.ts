export type TDirection = 'horizontal' | 'vertical';

export interface IDecoratorBar {
  /** Horizontal or Vertical direction **/
  direction?: TDirection;
  /** Css width or height base on direction prop **/
  size?: React.CSSProperties['height'];
}

export interface IDecoratorBarStyled {
  /** Horizontal or Vertical direction **/
  $direction?: TDirection;
  /** Css width or height base on direction prop **/
  $size?: React.CSSProperties['height'];
}
