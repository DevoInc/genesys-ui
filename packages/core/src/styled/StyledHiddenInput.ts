import styled from 'styled-components';

import {
  CheckAttrProps,
  FieldAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  InputAttrProps,
  SelectionScheme,
} from '../declarations';

import { srOnlyMixin } from './mixins';

export interface StyledHiddenInputProps
  extends Pick<GlobalAriaProps, 'aria-label'>,
    Pick<GlobalAttrProps, 'id'>,
    Pick<FocusEventAttrProps, 'onBlur' | 'onFocus'>,
    Pick<FieldAttrProps, 'disabled' | 'name'>,
    Pick<InputAttrProps, 'value'>,
    CheckAttrProps {
  selectionScheme?: SelectionScheme;
}

export const StyledHiddenInput = styled.input.attrs(
  ({ selectionScheme }: StyledHiddenInputProps) => ({
    type: selectionScheme === 'single' ? 'radio' : 'checkbox',
  }),
)<StyledHiddenInputProps>`
  ${srOnlyMixin}
`;
