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
import { GroupBase, MultiValue } from 'react-select';

interface SelectControlProps<
  Option = SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends InnerSelectControlProps<Option, IsMulti, Group>,
    //native
    FieldAriaProps,
    GlobalAriaProps,
    GlobalAttrProps {}

export const SelectControl = <
  Option extends SelectOption,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  components,
  styles,
  value,
  isClearable,
  ...rest
}: SelectControlProps<Option, IsMulti, Group>): React.ReactElement => {
  const defaultStyles = React.useMemo(
    () => ({
      menuPortal: (base: React.CSSProperties) => ({
        ...base,
        zIndex: rest.menuAppendToBody ? 10000 : '',
      }),
      menuList: (base: React.CSSProperties) => ({
        ...base,
        maxHeight: rest.maxMenuHeight
          ? rest.selectAllBtn
            ? `calc(${rest.maxMenuHeight}px - ${CUSTOM_HEIGHT[rest.size]}px)`
            : rest.maxMenuHeight
          : rest.selectAllBtn
          ? `calc(200px - ${CUSTOM_HEIGHT[rest.size]}px)`
          : '200px',
        minHeight:
          rest.minMenuHeight && rest.selectAllBtn
            ? `calc(${rest.minMenuHeight}px - ${CUSTOM_HEIGHT[rest.size]}px)`
            : rest.minMenuHeight,
      }),
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
      value={findValue<Option>(value, rest.options, rest.isMulti)}
      components={
        { ...defaultComponents, ...components } as Partial<
          SelectComponents<Option, IsMulti, Group>
        >
      }
      closeMenuOnScroll={handleCloseMenuOnScroll}
    />
  );
};
