import * as React from 'react';

import { FieldAttrProps, FieldProps, StyledOverloadCssProps } from '../../../';

import {
  Field,
  Flex,
  FlexProps,
  FloatingHelper,
  FormDistributor,
  FormDistributorProps,
  FormLegend,
  Helper,
} from '../../';

import { StyledFormGroup, StyledFormGroupProps } from './StyledFormGroup';
import { hasStatus } from '../../../utils/validations';
import { useTheme } from 'styled-components';
import {
  StyledFormGroupContainer,
  StyledFormGroupContainerProps,
} from './StyledFormGroupContainer';

export interface FormGroupProps
  extends StyledFormGroupContainerProps,
    StyledFormGroupProps,
    StyledOverloadCssProps,
    Pick<FieldProps, 'helper' | 'hasFloatingHelper' | 'status'>,
    Pick<FlexProps, 'marginLeft' | 'marginTop'>,
    Pick<
      FormDistributorProps,
      'alignItems' | 'direction' | 'flexWrap' | 'itemsGap' | 'justifyContent'
    >,
    Omit<FieldAttrProps, 'required'> {
  /** If the form group legend has label format. Usually when the form group is a checkbox or radio group. */
  hasLegendLabelFormat?: boolean;
  /** You can hide the legend, but maintaining it accessible by this prop. */
  hideLegend?: boolean;
  /** If the form group acts as a field, and it's required. Usually when the form group is a checkbox or radio group. */
  required?: boolean;
  /** Text as legend for the group of fields. You can add it, but maintaining it hidden and accessible by the 'hideLegend' prop. */
  legend?: string;
  /** The position of the legend relative to the group. */
  legendPosition?: 'top' | 'left';
  /** Children */
  children: React.ReactNode;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  alignItems,
  asFieldset = false,
  direction = 'column',
  boxed = false,
  children,
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
  styles,
  tooltip,
  ...restNativeAttrProps
}) => {
  // to get vertically aligned the label with the control block anyway
  const labelLineHeight = useTheme().alias.typo.lineHeight.body.md;
  const FloatingHelperBlock = (
    <Flex
      inline
      verticalAlign="middle"
      height={labelLineHeight}
      marginLeft="cmp-xxs"
    >
      <FloatingHelper
        message={helper}
        status={hasStatus(status) ? status : 'help'}
      />
    </Flex>
  );
  const RequiredMarkBlock = (
    <Field.RequiredMark colorScheme={hasStatus(status) ? status : 'info'} />
  );

  return (
    <StyledFormGroupContainer
      {...restNativeAttrProps}
      css={styles}
      form={asFieldset ? form : null}
      disabled={asFieldset ? disabled : null}
      name={asFieldset ? name : null}
      as={asFieldset ? 'fieldset' : 'div'}
      legendPosition={legendPosition}
      marginLeft={marginLeft}
      marginTop={marginTop}
      title={tooltip}
    >
      {legend && (
        <FormLegend
          asLegend={asFieldset}
          srOnly={hideLegend}
          text={legend}
          hasLabelFormat={hasLegendLabelFormat}
          requiredMark={required ? RequiredMarkBlock : null}
          helper={helper && hasFloatingHelper ? FloatingHelperBlock : null}
        />
      )}
      <StyledFormGroup boxed={boxed}>
        <FormDistributor
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
      </StyledFormGroup>
      {helper && !hasFloatingHelper && (
        <Helper message={helper} status={status} />
      )}
    </StyledFormGroupContainer>
  );
};
