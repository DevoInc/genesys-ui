import { ChipSize } from '../../../src/components/Chip/declarations';
import { FieldSize } from '../../declarations';

import { SelectOption, SelectValue } from './declarations';

/**
 * A function that takes an object with onChange and value properties as input
 * and returns a higher-order function that handles the onChange event of a select component.
 * The returned function filters the change action based on if it is a remove or clear action
 * and the value of fixed before calling the original onChange function if it exists."
 */
export const wrapperOnChange =
  ({ onChange, value }) =>
  (opts: any, actionMeta: any) => {
    const isRemoveAction =
      actionMeta.action === 'remove-value' || actionMeta.action === 'pop-value';
    const isClearAction = actionMeta.action === 'clear';

    if (isRemoveAction && actionMeta.removedValue.fixed) return;
    if (isClearAction) opts = value.filter(({ fixed }) => fixed);

    onChange?.(opts, actionMeta);
  };

/**
 * A function that takes selectProps object as input and returns a boolean value
 * indicating whether the menu and dropdown of a select component should be shown
 * or not based on the values of its properties such as isMulti, hideSelectedOptions,
 * creatable, value, and options."
 */
export const showMenuAndDropDown = (selectProps: any) => {
  return (
    (selectProps.isMulti &&
      selectProps.hideSelectedOptions &&
      (selectProps.creatable ||
        selectProps.value.length !== selectProps.options.length)) ||
    !selectProps.isMulti ||
    !selectProps.hideSelectedOptions
  );
};

/**
 * A recursive function that flattens a nested options array into
 * a single-level array by either concatenating
 * the nested options or adding the option to the accumulator."
 */
const flattenOptionsFn = (acc, option) => {
  if (option.options)
    return [...acc, ...option.options.reduce(flattenOptionsFn, [])];
  else return [...acc, option];
};

/**
 * Selects an existing value from the combo.
 * If the options collection is defined then the value is searched on them.
 * If not the provided value is used.
 * It takes into account multi valued inputs.
 * Values are always initialized as '' when undefined inputs are found
 */
export const findValue = (
  value: SelectValue = '',
  options: SelectOption[],
  isMulti: boolean
) => {
  const defaultValue = value || '';
  // If options are defined search the value inside them.
  if (options) {
    // Handle multi values of two types:
    // [{ value: ..., label: ... }, ...]
    // ['value','value',...]
    if (isMulti && Array.isArray(value)) {
      return value
        .map((val) => {
          if (val?.__isNew__) return val;

          return options.find((option) =>
            val instanceof Object
              ? option.value === val.value
              : option.value === val
          );
        })
        .filter((el) => el !== undefined);

      // Handle simple values of two types:
      // { value: ..., label: ... }
      // 'value'
    } else {
      //We need to handle grouped options
      const flattenedOptions = options.reduce(flattenOptionsFn, []);
      /**
       * If the value is not found within the select options, then
       * we have to return an empty string, otherwise it will
       * show the previous value but the real value will not
       * be the previous one, so it can lead to a misunderstanding.
       */
      const found = flattenedOptions.find((option) =>
        value instanceof Object
          ? option.value === value.value || ''
          : option.value === value || ''
      );
      return found || defaultValue;
    }
  } else {
    return defaultValue;
  }
};

/**
 * A function that takes an object with size and chipSize properties as input
 * and returns the ChipSize based on the values of chipSize and size.
 * If chipSize is present, it returns chipSize, otherwise,
 * it returns the ChipSize based on the value of size with a default of 'xs' if no match is found."
 */
export const getChipContainerSize = ({
  size,
  chipSize,
}: {
  size?: FieldSize | ChipSize;
  chipSize?: ChipSize;
}): ChipSize => {
  if (chipSize) return chipSize;

  switch (size) {
    case 'xxs':
      return 'xxs';
    case 'xs':
      return 'xxs';
    case 'sm':
      return 'xs';
    case 'md':
      return 'sm';
    case 'lg':
      return 'md';
    default:
      return 'xs';
  }
};

/**
 * A function that takes an object with size and chipSize properties as input
 * and returns the ChipSize for the remove button based on the values of chipSize and size.
 * If chipSize is present, it returns chipSize, otherwise,
 * it returns the ChipSize based on the value of size with a default of 'xxs' if no match is found."
 */
export const getChipRemoveSize = ({
  size,
  chipSize,
}: {
  size?: FieldSize | ChipSize;
  chipSize?: ChipSize;
}): ChipSize => {
  if (chipSize) return chipSize;

  switch (size) {
    case 'xxs':
      return 'xxs';
    case 'xs':
      return 'xxs';
    case 'sm':
      return 'xxs';
    case 'md':
      return 'xs';
    case 'lg':
      return 'sm';
    default:
      return 'xxs';
  }
};
