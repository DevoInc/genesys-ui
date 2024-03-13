import styled from 'styled-components';

import {
  ICheckAttrs,
  IFieldAttrs,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  IInputAttrs,
  SelectionScheme,
} from '../declarations';

import { srOnlyMixin } from './mixins';

export interface StyledHiddenInputProps
  extends Pick<GlobalAriaProps, 'aria-label'>,
    Pick<GlobalAttrProps, 'id'>,
    Pick<FocusEventAttrProps, 'onBlur' | 'onFocus'>,
    Pick<IFieldAttrs, 'disabled' | 'name'>,
    Pick<IInputAttrs, 'value'>,
    ICheckAttrs {
  selectionScheme?: SelectionScheme;
}

export const StyledHiddenInput = styled.input.attrs(
  ({ selectionScheme }: StyledHiddenInputProps) => ({
    type: selectionScheme === 'single' ? 'radio' : 'checkbox',
  }),
)<StyledHiddenInputProps>`
  ${srOnlyMixin}
`;
