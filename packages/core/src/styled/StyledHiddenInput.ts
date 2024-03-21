import styled from 'styled-components';

import {
  ICheckAttrs,
  IFieldAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IInputAttrs,
  TSelectionScheme,
} from '../declarations';

import { srOnlyMixin } from './mixins/screenReader';

export interface StyledHiddenInputProps
  extends Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IFocusEventAttrs, 'onBlur' | 'onFocus'>,
    Pick<IFieldAttrs, 'disabled' | 'name'>,
    Pick<IInputAttrs, 'value'>,
    ICheckAttrs {
  selectionScheme?: TSelectionScheme;
}

export const StyledHiddenInput = styled.input.attrs(
  ({ selectionScheme }: StyledHiddenInputProps) => ({
    type: selectionScheme === 'single' ? 'radio' : 'checkbox',
  }),
)<StyledHiddenInputProps>`
  ${srOnlyMixin}
`;
