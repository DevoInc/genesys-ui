import * as React from 'react';
import { get } from 'lodash';

import * as defaultComponents from './components';
import { wrapperOnChange, findValue } from './utils';
import {
  InnerSelectControl,
  InnerSelectControlProps,
} from './InnerSelectControl';
import { CUSTOM_HEIGHT } from './constants';

import type {
  FieldAriaProps,
  GlobalAriaProps,
  GlobalAttrProps,
} from '../../declarations';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { SelectOption } from './declarations';
import { GroupBase, MultiValue, PropsValue } from 'react-select';

export interface SelectControlProps<
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<
      InnerSelectControlProps<Option, IsMulti, Group>,
      'value' | 'option'
    >,
    //native
    FieldAriaProps,
    GlobalAriaProps,
    Omit<GlobalAttrProps, 'tooltip'> {
  value?: PropsValue<Option> | Option['value'];
  onChange?: (value: PropsValue<Option>) => void;
}

export const SelectControl = <
  Option extends SelectOption = SelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  components,
  styles,
  value,
  isClearable,
  ...rest
}: SelectControlProps<Option, IsMulti, Group>) => {
  const defaultStyles = React.useMemo(
    () => ({
      menuPortal: (base: React.CSSProperties) => ({
        ...base,
        zIndex: rest.menuAppendToBody ? 10000 : '',
      }),
      menuList: (base: React.CSSProperties) => {
        return {
          ...base,
          maxHeight: rest.maxMenuHeight
            ? rest.selectAllBtn
              ? rest.maxMenuHeight - CUSTOM_HEIGHT[rest.size]
              : rest.maxMenuHeight
            : rest.selectAllBtn
            ? 200 - CUSTOM_HEIGHT[rest.size]
            : 200,
          minHeight:
            rest.minMenuHeight && rest.selectAllBtn
              ? rest.minMenuHeight - CUSTOM_HEIGHT[rest.size]
              : rest.minMenuHeight,
        };
      },
      multiValueRemove: () => '',
    }),
    [
      rest.maxMenuHeight,
      rest.menuAppendToBody,
      rest.minMenuHeight,
      rest.selectAllBtn,
      rest.size,
    ]
  ) as React.CSSProperties;

  const hasFixedOptions = React.useMemo(
    () => Array.isArray(value) && value.some(({ fixed }) => fixed),
    [value]
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
    [hasFixedOptions, isClearable, value]
  );

  const menuPortalTarget = React.useMemo(
    () => (rest.menuAppendToBody ? document.body : rest.menuPortalTarget),
    [rest.menuAppendToBody, rest.menuPortalTarget]
  );

  const handleCloseMenuOnScroll = React.useCallback(
    // To avoid closing of dropdown menu when the scroll is within itself
    (ev) =>
      (rest.menuAppendToBody || rest.closeMenuOnScroll) &&
      // Only return true when an open menu is detected, otherwise
      // react-select will be constantly changing the state and re-rendering
      // all the selects, even the closed ones.
      ev != null &&
      get(ev, 'srcElement.classList') != null &&
      ev.srcElement.getElementsByClassName(
        `${rest.classNamePrefix}__control--menu-is-open`
      ).length &&
      !ev.srcElement.classList.contains(`${rest.classNamePrefix}__menu-list`),
    [rest.classNamePrefix, rest.closeMenuOnScroll, rest.menuAppendToBody]
  );

  return (
    <InnerSelectControl<Option, IsMulti, Group>
      {...rest}
      minMenuHeight={0}
      menuPortalTarget={menuPortalTarget}
      isClearable={clearable}
      {...(onChange && { onChange })}
      styles={{ ...defaultStyles, ...styles }}
      {...(value && { value: findValue(value, rest.options, rest.isMulti) })}
      components={
        { ...defaultComponents, ...components } as Partial<
          SelectComponents<Option, IsMulti, Group>
        >
      }
      closeMenuOnScroll={handleCloseMenuOnScroll}
    />
  );
};
