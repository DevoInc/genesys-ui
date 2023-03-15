import * as React from 'react';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';
import {
  CommonSelectCmpsProps,
  SelectGroupOption,
  SelectSingleOption,
} from './declarations';
import {
  StyledSelectControl,
  StyledSelectControlProps,
} from './styled/StyledSelectControl';

// React-select requires a concrete theme schema which is not compatible with ours.
export interface InnerSelectControlProps
  extends Omit<StyledSelectControlProps, 'theme'>,
    Omit<
      CreatableProps<SelectSingleOption, boolean, SelectGroupOption>,
      'theme'
    >,
    CommonSelectCmpsProps {
  /** HTML required prop */
  required?: boolean;
  /** Allow the user to edit values */
  creatable?: boolean;
  /** If it's set to true then the portal for dropdown menu is appended
   * to body*/
  menuAppendToBody?: boolean;
  /** Tooltip text */
  'data-tip'?: string;
}

export const InnerSelectControl: React.FC<InnerSelectControlProps> = ({
  creatable,
  ...restProps
}) => {
  return creatable ? (
    <StyledSelectControl as={CreatableSelect} {...restProps} />
  ) : (
    <StyledSelectControl {...restProps} />
  );
};
