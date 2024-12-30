import styled from 'styled-components';

import type {
  ICheckAttrs,
  IFieldAttrs,
  IFocusEventAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IInputAttrs,
} from '../declarations';

import { srOnlyMixin } from './mixins/screenReader';

export interface StyledHiddenInputProps
  extends Pick<IGlobalAriaAttrs, 'aria-label'>,
    Pick<IGlobalAttrs, 'id'>,
    Pick<IFocusEventAttrs, 'onBlur' | 'onFocus'>,
    Pick<IFieldAttrs, 'disabled' | 'name'>,
    Pick<IInputAttrs, 'value'>,
    ICheckAttrs {}

export const StyledHiddenInput = styled.input<StyledHiddenInputProps>`
  ${srOnlyMixin}
`;
