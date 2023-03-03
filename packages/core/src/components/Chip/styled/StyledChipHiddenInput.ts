import styled from 'styled-components';

import {
  CheckAttrProps,
  FieldAttrProps,
  FocusEventAttrProps,
  GlobalAriaProps,
  GlobalAttrProps,
  InputAttrProps,
  SelectionScheme,
} from '../../../declarations';

import { srOnlyMixin } from '../../../styled/mixins/utilsMixins';

export interface StyledChipHiddenInputProps
  extends Pick<GlobalAriaProps, 'aria-label'>,
    Pick<GlobalAttrProps, 'id'>,
    Pick<FocusEventAttrProps, 'onBlur' | 'onFocus'>,
    Pick<FieldAttrProps, 'disabled' | 'name'>,
    Pick<InputAttrProps, 'value'>,
    CheckAttrProps {
  selectionScheme?: SelectionScheme;
}

export const StyledChipHiddenInput = styled.input.attrs(
  ({ selectionScheme }: StyledChipHiddenInputProps) => ({
    type: selectionScheme === 'single' ? 'radio' : 'checkbox',
  })
)<StyledChipHiddenInputProps>`
  ${srOnlyMixin}
`;
