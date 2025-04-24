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
import { StyledForm } from './StyledForm';

export interface FormProps
  extends IFormAttrs,
    IFormEventAttrs,
    Omit<
      FormDistributorProps,
      | 'cssTranslate'
      | 'display'
      | 'elevation'
      | 'opacity'
      | 'padding'
      | 'paddingBottom'
      | 'paddingLeft'
      | 'paddingRight'
      | 'paddingTop'
      | 'position'
      | 'positionBottom'
      | 'positionLeft'
      | 'positionRight'
      | 'positionTop'
      | 'verticalAlign'
      | 'visibility'
      | 'zIndex'
    > {
  /** Text as heading for the form. */
  heading?: string;
}

const PartForm: React.FC<FormProps> = ({
  acceptCharset,
  action,
  alignContent,
  alignItems,
  autoComplete,
  children,
  direction = 'column',
  encType,
  flexWrap,
  heading,
  height,
  itemsGap = 'md',
  justifyContent,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  maxHeight,
  maxWidth,
  method,
  minHeight,
  minWidth,
  name,
  noValidate,
  onReset,
  onSubmit,
  rel,
  style,
  target,
  tooltip,
  width,
  ...restNativeProps
}) => (
  <StyledForm
    {...restNativeProps}
    $height={height}
    $marginBottom={marginBottom}
    $marginLeft={marginLeft}
    $marginRight={marginRight}
    $marginTop={marginTop}
    $maxHeight={maxHeight}
    $maxWidth={maxWidth}
    $minHeight={minHeight}
    $minWidth={minWidth}
    $width={width}
    acceptCharset={acceptCharset}
    action={action}
    autoComplete={autoComplete}
    css={style}
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
    <FormDistributor
      alignContent={alignContent}
      alignItems={alignItems}
      direction={direction}
      flexWrap={flexWrap}
      itemsGap={itemsGap}
      justifyContent={justifyContent}
    >
      {children}
    </FormDistributor>
  </StyledForm>
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
