import * as React from 'react';

import type { IFormAttrs, IFormEventAttrs } from './declarations';
import { FlexItem } from '../Flex/components';
import {
  FormButtons,
  FormDistributor,
  type FormDistributorProps,
  FormGroup,
  FormLegend,
} from './components';
import { FormFloatingHelper } from './components/FormFloatingHelper';
import { FormRequiredMark } from './components/FormRequiredMark';

export interface FormProps
  extends IFormAttrs,
    IFormEventAttrs,
    FormDistributorProps {
  /** Text as heading for the form. */
  heading?: string;
}

const PartForm: React.FC<FormProps> = ({
  acceptCharset,
  action,
  autoComplete,
  children,
  encType,
  method,
  name,
  noValidate,
  onReset,
  onSubmit,
  rel,
  target,
  direction = 'column',
  heading,
  itemsGap = 'md',
  tooltip,
  ...flexProps
}) => (
  <form
    acceptCharset={acceptCharset}
    action={action}
    autoComplete={autoComplete}
    encType={encType}
    method={method}
    name={name}
    noValidate={noValidate}
    onReset={onReset}
    onSubmit={onSubmit}
    rel={rel}
    target={target}
    title={tooltip}
  >
    {heading && <FormLegend text={heading} />}
    <FormDistributor {...flexProps} direction={direction} itemsGap={itemsGap}>
      {children}
    </FormDistributor>
  </form>
);

export const Form = PartForm as typeof PartForm & {
  Buttons: typeof FormButtons;
  FloatingHelper: typeof FormFloatingHelper;
  Group: typeof FormGroup;
  Item: typeof FlexItem;
  Legend: typeof FormLegend;
  RequiredMark: typeof FormRequiredMark;
};

Form.Buttons = FormButtons;
Form.FloatingHelper = FormFloatingHelper;
Form.Group = FormGroup;
Form.Item = FlexItem;
Form.Legend = FormLegend;
Form.RequiredMark = FormRequiredMark;

PartForm.displayName = 'Form';
Form.Buttons.displayName = 'Form.Buttons';
Form.FloatingHelper.displayName = 'Form.FloatingHelper';
Form.Group.displayName = 'Form.Group';
Form.Item.displayName = 'Form.Item';
Form.Legend.displayName = 'Form.Legend';
Form.RequiredMark.displayName = 'Form.RequiredMark';
