import * as React from 'react';
import { get } from 'lodash';

import { CUSTOM_HEIGHT } from './constants';

import { wrapperOnChange, findValue } from './utils';
import { getFieldContextProps } from '../Field';
import { FieldContext } from '../Field/context';

import * as defaultComponents from './components';
import {
  InnerSelectControl,
  InnerSelectControlProps,
} from './InnerSelectControl';

import type {
  FieldAriaProps,
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
} from '../../declarations';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { TSelectOption } from './declarations';
import {
  CSSObjectWithLabel,
  GroupBase,
  mergeStyles,
  MultiValue,
  PropsValue,
  StylesConfig,
} from 'react-select';

export interface SelectControlProps<
  Option extends TSelectOption = TSelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
> extends Omit<
      InnerSelectControlProps<Option, IsMulti, Group>,
      'value' | 'option'
    >,
    //native
    FieldAriaProps,
    GlobalAriaProps,
    StyledOverloadCssProps,
    Omit<GlobalAttrProps, 'tooltip'> {
  value?: PropsValue<Option> | Option['value'];
  onChange?: (value: PropsValue<Option>) => void;
}

export const SelectControl = <
  Option extends TSelectOption = TSelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  'aria-errormessage': ariaErrorMessage,
  'aria-describedby': ariaDescribedBy,
  'aria-labelledby': ariaLabelledBy,
  components,
  isDisabled,
  componentStyles,
  id,
  styles,
  value,
  isClearable,
  required,
  status,
  size,
  menuAppendToBody = true,
  menuPlacement = 'auto',
  menuLevel = 3,
  ...rest
}: SelectControlProps<Option, IsMulti, Group>) => {
  const defaultStyles = React.useMemo(
    () => ({
      menuPortal: (base: CSSObjectWithLabel) => ({
        ...base,
        zIndex: menuAppendToBody ? 10000 : '',
      }),
      menuList: (base: CSSObjectWithLabel) => ({
        ...base,
        maxHeight: rest.maxMenuHeight
          ? rest.selectAllBtn
            ? rest.maxMenuHeight - CUSTOM_HEIGHT[size]
            : rest.maxMenuHeight
          : rest.selectAllBtn
            ? 200 - CUSTOM_HEIGHT[size]
            : 200,
        minHeight:
          rest.minMenuHeight && rest.selectAllBtn
            ? rest.minMenuHeight - CUSTOM_HEIGHT[size]
            : rest.minMenuHeight,
      }),
      multiValueRemove: () => ({}),
    }),
    [
      rest.maxMenuHeight,
      menuAppendToBody,
      rest.minMenuHeight,
      rest.selectAllBtn,
      size,
    ],
  );

  const hasFixedOptions = React.useMemo(
    () => Array.isArray(value) && value.some(({ fixed }) => fixed),
    [value],
  );

  const onChange =
    hasFixedOptions &&
    wrapperOnChange({
      onChange: rest.onChange,
      value: value as MultiValue<Option>,
    });

  const clearable = React.useMemo(
    () =>
      isClearable === undefined && hasFixedOptions
        ? (value as MultiValue<Option>).some(({ fixed }) => !fixed)
        : isClearable,
    [hasFixedOptions, isClearable, value],
  );

  const menuPortalTarget = React.useMemo(
    () => (menuAppendToBody ? document.body : rest.menuPortalTarget),
    [menuAppendToBody, rest.menuPortalTarget],
  );

  const handleCloseMenuOnScroll = React.useCallback(
    // To avoid closing of dropdown menu when the scroll is within itself
    (ev) =>
      (menuAppendToBody || rest.closeMenuOnScroll) &&
      // Only return true when an open menu is detected, otherwise
      // react-select will be constantly changing the state and re-rendering
      // all the selects, even the closed ones.
      ev != null &&
      get(ev, 'srcElement.classList') != null &&
      ev.srcElement.getElementsByClassName(
        `${rest.classNamePrefix}__control--menu-is-open`,
      ).length &&
      !ev.srcElement.classList.contains(`${rest.classNamePrefix}__menu-list`),
    [rest.classNamePrefix, rest.closeMenuOnScroll, menuAppendToBody],
  );
  const fieldContext = React.useContext(FieldContext);
  const contextBasedProps = getFieldContextProps({
    ariaDescribedBy,
    ariaErrorMessage,
    ariaLabelledBy,
    disabled: isDisabled,
    context: fieldContext,
    id,
    required,
    size,
    status,
  });
  const evalStatus = contextBasedProps.status;
  console.info(evalStatus);
  return (
    <InnerSelectControl<Option, IsMulti, Group>
      {...rest}
      aria-describedby={contextBasedProps.ariaDescribedBy}
      aria-errormessage={
        evalStatus === 'error' ? contextBasedProps.ariaErrorMessage : undefined
      }
      aria-labelledby={contextBasedProps.ariaLabelledBy}
      isDisabled={contextBasedProps.disabled}
      menuAppendToBody={menuAppendToBody}
      menuPlacement={menuPlacement}
      menuLevel={menuLevel}
      minMenuHeight={0}
      required={contextBasedProps.required}
      size={contextBasedProps.size}
      status={evalStatus}
      menuPortalTarget={rest.menuRelative ? null : menuPortalTarget}
      isClearable={clearable}
      {...(onChange && { onChange })}
      componentStyles={mergeStyles(
        defaultStyles as StylesConfig,
        componentStyles,
      )}
      {...(value && { value: findValue(value, rest.options, rest.isMulti) })}
      components={
        { ...defaultComponents, ...components } as Partial<
          SelectComponents<Option, IsMulti, Group>
        >
      }
      closeMenuOnScroll={handleCloseMenuOnScroll}
      styles={styles}
    />
  );
};
