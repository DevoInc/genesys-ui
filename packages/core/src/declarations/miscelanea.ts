import type { AllHTMLAttributes, AriaAttributes } from 'react';

/** ---------------------------------------------------------------------------------------
 * ----------------------------------------------------------------------------------------
 * Miscelanea
 * ----------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------- */
export interface MiscelaneaProps<T = Element> {
  /** A boolean attribute indicating whether the element's contents are editable by the user */
  contentEditable: AllHTMLAttributes<T>['contentEditable'];
  /** A string attribute indicating the text directionality of the element's contents */
  dir: AllHTMLAttributes<T>['dir'];
  /** A string attribute specifying the language of the element's contents */
  lang: AllHTMLAttributes<T>['lang'];
  'aria-selected': AriaAttributes['aria-selected'];
}
