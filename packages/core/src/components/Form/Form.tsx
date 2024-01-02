import * as React from 'react';

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
}) => {
  return (
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
