import * as React from 'react';
import { useTheme } from 'styled-components';

import type { FieldProps } from '../../../Field';
import type { IStyledOverloadCss } from '../../../../declarations/styled';
import type {
  IFieldAttrs,
  IGlobalAttrs,
} from '../../../../declarations/htmlAttrs';
import type { TLegendPosition } from '../../declarations';
import { Flex, type FlexProps } from '../../../Flex';
import { Field } from '../../../Field';
import { FloatingHelper } from '../../../FloatingHelper';
import {
  FormDistributor,
  type FormDistributorProps,
} from '../FormDistributor/FormDistributor';
import { FormLegend } from '../FormLegend';
import { Helper } from '../../../Helper';
import { hasStatus } from '../../../../utils/validations';
import { StyledFormGroup, type StyledFormGroupProps } from './StyledFormGroup';
import { StyledFormGroupContainer } from './StyledFormGroupContainer';
import { Collapse } from '../../../Collapse';
import { formGroupCollapseMixin } from './helpers';

export interface FormGroupProps
  extends IStyledOverloadCss,
    IGlobalAttrs,
    Pick<FieldProps, 'helper' | 'hasFloatingHelper' | 'status'>,
    Pick<FlexProps, 'marginLeft' | 'marginTop'>,
    Pick<
      FormDistributorProps,
      'alignItems' | 'direction' | 'flexWrap' | 'itemsGap' | 'justifyContent'
    >,
    Omit<IFieldAttrs, 'required'> {
  /** If the form group is boxed. */
  boxed?: StyledFormGroupProps['$boxed'];
  /** If the children fit full width of the form group parent. */
  childrenFitFullWidth?: boolean;
  /** If the form group is collapsable and this way the legend acts as a Collapse component which collapse/uncollapse
   * the fields. */
  collapsable?: boolean;
  /** If the form group legend has label format. Usually when the form group is
   * a checkbox or radio group. */
  hasLegendLabelFormat?: boolean;
  /** You can hide the legend, but maintaining it accessible by this prop. */
  hideLegend?: boolean;
  /** If the form group acts as a field, and it's required. Usually when the
   * form group is a checkbox or radio group. */
  required?: boolean;
  /** Text as legend for the group of fields. You can add it, but maintaining it
   * hidden and accessible by the 'hideLegend' prop. */
  legend?: React.ReactNode;
  /** The position of the legend relative to the group. */
  legendPosition?: TLegendPosition;
  /** Children */
  children: React.ReactNode;
  /** It defines if the group is rendered as a fieldset, and therefore it can
   * get its related html attributes.*/
  asFieldset?: boolean;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  alignItems,
  asFieldset = false,
  boxed = false,
  children,
  childrenFitFullWidth = true,
  collapsable,
  direction = 'column',
  disabled,
  flexWrap,
  form,
  hasFloatingHelper = false,
  hasLegendLabelFormat = false,
  helper,
  hideLegend = false,
  itemsGap = 'md',
  required = false,
  justifyContent,
  legend,
  legendPosition = 'top',
  marginLeft,
  marginTop,
  name,
  status = 'base',
  style,
  tooltip,
  ...restNativeAttrProps
}) => {
  // to get vertically aligned the label with the control block anyway
  const theme = useTheme();
  const labelLineHeight = theme.cmp.field.labelHelper.size.minHeight.sm;
  const [expanded, setExpanded] = React.useState(false);
  const FloatingHelperBlock = (
    <Flex inline height={labelLineHeight} marginLeft="cmp-xxs">
      <FloatingHelper
        message={helper}
        status={hasStatus(status) ? status : 'help'}
      />
    </Flex>
  );
  const RequiredMarkBlock = (
    <Field._RequiredMark colorScheme={hasStatus(status) ? status : 'info'} />
  );

  return (
    <StyledFormGroupContainer
      {...restNativeAttrProps}
      $childrenFitFullWidth={childrenFitFullWidth}
      css={style}
      form={asFieldset ? form : undefined}
      disabled={asFieldset ? disabled : undefined}
      name={asFieldset ? name : undefined}
      as={asFieldset ? 'fieldset' : 'div'}
      $legendPosition={legendPosition}
      $marginLeft={marginLeft}
      $marginTop={marginTop}
      title={tooltip}
      $asFieldset={asFieldset}
    >
      {legend && !collapsable && (
        <FormLegend
          asLegend={asFieldset}
          srOnly={hideLegend}
          text={legend}
          hasLabelFormat={hasLegendLabelFormat}
          requiredMark={required ? RequiredMarkBlock : undefined}
          helper={helper && hasFloatingHelper ? FloatingHelperBlock : undefined}
        />
      )}
      <StyledFormGroup
        $boxed={collapsable || boxed}
        $collapsable={collapsable}
        $expanded={expanded}
      >
        {collapsable && legend && (
          <Collapse
            disabled={disabled}
            expanded={expanded}
            quiet
            onClick={() => {
              setExpanded(!expanded);
            }}
            heading={
              <FormLegend
                asLegend={asFieldset}
                srOnly={hideLegend}
                text={legend}
                hasLabelFormat={hasLegendLabelFormat}
                requiredMark={required ? RequiredMarkBlock : undefined}
                helper={
                  helper && hasFloatingHelper ? FloatingHelperBlock : undefined
                }
              />
            }
            style={formGroupCollapseMixin({ theme })}
          />
        )}
        {((collapsable && expanded) || !collapsable) && (
          <FormDistributor
            disabled={disabled}
            paddingTop={expanded ? 'cmp-sm' : null}
            alignItems={alignItems}
            direction={direction}
            flexWrap={flexWrap}
            itemsGap={itemsGap}
            justifyContent={justifyContent}
          >
            {children}
            {(!legend || hideLegend) &&
              helper &&
              hasFloatingHelper &&
              FloatingHelperBlock}
          </FormDistributor>
        )}
      </StyledFormGroup>
      {helper && !hasFloatingHelper && (
        <Helper message={helper} status={status} />
      )}
    </StyledFormGroupContainer>
  );
};
