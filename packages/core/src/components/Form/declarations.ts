import type { DOMAttributes, FormHTMLAttributes } from 'react';
import { PickUnion } from '../../typeFunctions';
import type { TGlobalSize } from '../../declarations/commonProps';

export type TFormGap = PickUnion<TGlobalSize, 'xxs' | 'xs' | 'sm' | 'md'>;
export type TLegendPosition = 'top' | 'left';

export interface IFormAttrs {
  /** The character encoding the form will submit the data in */
  acceptCharset?: FormHTMLAttributes<HTMLFormElement>['acceptCharset'];
  /** The URL to which the form's data will be sent */
  action?: FormHTMLAttributes<HTMLFormElement>['action'];
  /** A string indicating whether the form should have autocomplete on or off */
  autoComplete?: FormHTMLAttributes<HTMLFormElement>['autoComplete'];
  /** The encoding type for the form data */
  encType?: FormHTMLAttributes<HTMLFormElement>['encType'];
  /** The HTTP method to use when submitting the form */
  method?: FormHTMLAttributes<HTMLFormElement>['method'];
  /** The name of the form */
  name?: FormHTMLAttributes<HTMLFormElement>['name'];
  /** A boolean indicating whether the form should be validated when submitted */
  noValidate?: FormHTMLAttributes<HTMLFormElement>['noValidate'];
  /** The relationship of the form to the document's context */
  rel?: FormHTMLAttributes<HTMLFormElement>['rel'];
  /** The browsing context in which the form will be opened */
  target?: FormHTMLAttributes<HTMLFormElement>['target'];
}

export interface IFormEventAttrs {
  /** A function that is called when the form is reset */
  onReset?: DOMAttributes<HTMLFormElement>['onReset'];
  /** A function that is called when the form is submitted */
  onSubmit?: DOMAttributes<HTMLFormElement>['onSubmit'];
}
