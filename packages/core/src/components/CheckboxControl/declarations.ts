import { TFieldSize, TFieldStatus } from '../../declarations';

export interface ICheckboxControl {
  /** Icon inside the checkbox when it's selected. You have to pass it as a css
   * background-image based in 'url("data:image...' */
  checkedIcon?: string;
  /** If the checkbox has indeterminate format and state: instead of a check
   * mark, it contains an intermediate one.*/
  indeterminate?: HTMLInputElement['indeterminate'];
  /** The size for the checkbox. It affects to its width, height, font-size...
   * etc. */
  size?: TFieldSize;
  /** The status for the checkbox: success, error... etc. */
  status?: TFieldStatus;
}

export interface ICheckboxControlStyled {
  /** Icon inside the checkbox when it's selected. You have to pass it as a css
   * background-image based in 'url("data:image...' */
  $checkedIcon?: string;
  /** If the checkbox has indeterminate format and state: instead of a check
   * mark, it contains an intermediate one.*/
  $indeterminate?: HTMLInputElement['indeterminate'];
  /** The size for the checkbox. It affects to its width, height, font-size...
   * etc. */
  $size?: TFieldSize;
  /** The status for the checkbox: success, error... etc. */
  $status?: TFieldStatus;
}
