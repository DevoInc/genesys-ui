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
import { GroupBase } from 'react-select';

interface SelectControlProps
  extends InnerSelectControlProps,
    //native
    FieldAriaProps,
    GlobalAriaProps,
    GlobalAttrProps {}

export const SelectControl: React.FC<SelectControlProps> = ({
  components,
  styles,
  value,
  isClearable,
  ...rest
}) => {
  const defaultStyles = React.useMemo(
    () => ({
      menuPortal: (base) => ({
        ...base,
        zIndex: rest.menuAppendToBody ? 10000 : '',
      }),
      menuList: (base) => ({
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

  const areThereFixedOptions = React.useMemo(
    () => Array.isArray(value) && value.some(({ fixed }) => fixed),
    [value]
  );

  const onChange =
    areThereFixedOptions &&
    wrapperOnChange({ onChange: rest.onChange, value: value });

  const clearable = React.useMemo(
    () =>
      isClearable === undefined && areThereFixedOptions
        ? value.some(({ fixed }) => !fixed)
        : isClearable,
    [areThereFixedOptions, isClearable, value]
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
    <InnerSelectControl
      {...rest}
      minMenuHeight={0}
      size="sm"
      menuPortalTarget={menuPortalTarget}
      isClearable={clearable}
      {...(onChange && { onChange })}
      styles={{ ...defaultStyles, ...styles }}
      value={findValue(value, rest.options, rest.isMulti)}
      components={
        { ...defaultComponents, ...components } as Partial<
          SelectComponents<SelectOption, boolean, GroupBase<SelectOption>>
        >
      }
      closeMenuOnScroll={handleCloseMenuOnScroll}
    />
  );
};
