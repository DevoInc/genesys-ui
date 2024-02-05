import { ActionMeta, MultiValue, Props, PropsValue } from 'react-select';
import {
  FIELD_SIZE_TO_CHIP_SIZE,
  FIELD_SIZE_TO_VALUE_ICON_SIZE,
} from './constants';
import { ChipSize } from '../Chip/declarations';
import { FieldSize } from '../../declarations';
import { SelectOption } from './declarations';
import { SelectControlProps } from './SelectControl';

/**
 * A function that takes an object with onChange and value properties as input
 * and returns a higher-order function that handles the onChange event of a select component.
 * The returned function filters the change action based on if it is a remove or clear action
 * and the value of fixed before calling the original onChange function if it exists."
 */

export const wrapperOnChange =
  <Option extends SelectOption>({
    onChange,
    value,
  }: {
    onChange: Props<Option>['onChange'];
    value: MultiValue<Option>;
  }) =>
    (newValue: PropsValue<Option>, actionMeta: ActionMeta<Option>): void => {
      const REMOVE_ACTIONS = ['remove-value', 'pop-value'];
      const isRemoveAction = REMOVE_ACTIONS.includes(actionMeta.action);
      const isClearAction = actionMeta.action === 'clear';

      if (isRemoveAction && actionMeta.removedValue.fixed) return;

      if (isClearAction) newValue = value.filter(({ fixed }) => fixed);

      onChange?.(newValue, actionMeta);
    };

/**
 * A function that takes selectProps object as input and returns a boolean value
 * indicating whether the menu and dropdown of a select component should be shown
 * or not based on the values of its properties such as isMulti, hideSelectedOptions,
 * creatable, value, and options."
 */
export const showMenuAndDropDown = <Option extends SelectOption>(
  selectProps: Props<Option>,
): boolean => {
  return (
    (selectProps.isMulti &&
      selectProps.hideSelectedOptions &&
      (selectProps.creatable ||
        (Array.isArray(selectProps.value) &&
          selectProps.value.length !== selectProps.options.length))) ||
    !selectProps.isMulti ||
    !selectProps.hideSelectedOptions
  );
};

/**
 * A recursive function that flattens a nested options array into
 * a single-level array by either concatenating
 * the nested options or adding the option to the accumulator."
 */
const flattenOptionsFn = <Option extends SelectOption>(
  acc: Option[],
  option: Props<Option>,
) => {
  if ('options' in option && Array.isArray(option.options)) {
    return [...acc, ...option.options.reduce<Option[]>(flattenOptionsFn, [])];
  }
  return [...acc, option];
};

/**
 * Selects an existing value from the combo.
 * If the options collection is defined then the value is searched on them.
 * If not the provided value is used.
 * It takes into account multi valued inputs.
 * Values are always initialized as '' when undefined inputs are found
 */
export const findValue = <Option extends SelectOption>(
  value: SelectControlProps<Option>['value'],
  options: Props<Option>['options'],
  isMulti: boolean,
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

          return (options as Option[]).find((option) =>
            val instanceof Object
              ? option.value === val.value
              : option.value === val,
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
        value && typeof value === 'object' && 'value' in value
          ? option.value === value.value || ''
          : option.value === value || '',
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
 * it returns the ChipSize based on the value of size."
 */
export const getChipSize = ({
  size,
  chipSize,
}: {
  size?: FieldSize | ChipSize;
  chipSize?: ChipSize;
}): ChipSize => chipSize || FIELD_SIZE_TO_CHIP_SIZE[size || 'xs'];

/**
 * A function that takes an object with size and chipSize properties as input
 * and returns the value chip icon based on the values of chipSize and size.
 * If chipSize is present, it returns chipSize, otherwise,
 * it returns the ChipSize based on the value of size.
 */
export const getValueIconSize = ({
  size,
  chipSize,
}: {
  size?: FieldSize | ChipSize;
  chipSize?: ChipSize;
}): ChipSize => chipSize || FIELD_SIZE_TO_VALUE_ICON_SIZE[size || 'xxs'];
