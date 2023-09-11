import * as React from 'react';

import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

import {
  FormButtons,
  FormDistributor,
  FormDistributorProps,
  FormGroup,
  FormLegend,
  FormItem,
} from './components';
import { FormAttrProps, FormEventAttrs } from './declarations';

export interface FormProps
  extends FormAttrProps,
    FormEventAttrs,
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<
      FormDistributorProps,
      'alignItems' | 'justifyContent' | 'direction' | 'itemsGap'
    > {
  /** Text as heading for the form. */
  heading?: string;
  /** If the fields or other form groups are displayed in a row or in a column. */
  children: React.ReactNode;
}

const PartForm: React.FC<FormProps> = ({
  alignItems,
  children,
  direction = 'column',
  heading,
  itemsGap = 'md',
  justifyContent,
  tooltip,
  ...formNativeProps
}) => {
  return (
    <form {...formNativeProps} title={tooltip}>
      {heading && <FormLegend text={heading} />}
      <FormDistributor
        alignItems={alignItems}
        direction={direction}
        itemsGap={itemsGap}
        justifyContent={justifyContent}
      >
        {children}
      </FormDistributor>
    </form>
  );
};

export const Form = PartForm as typeof PartForm & {
  Buttons: typeof FormButtons;
  Group: typeof FormGroup;
  Item: typeof FormItem;
  Legend: typeof FormLegend;
};

Form.Buttons = FormButtons;
Form.Group = FormGroup;
Form.Item = FormItem;
Form.Legend = FormLegend;
