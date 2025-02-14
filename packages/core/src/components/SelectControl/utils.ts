import { ActionMeta, MultiValue, Props, PropsValue } from 'react-select';

import {
  FIELD_SIZE_TO_CHIP_SIZE,
  FIELD_SIZE_TO_VALUE_ICON_SIZE,
} from './constants';
import type { TChipSize } from '../Chip/declarations';
import type { TFieldSize } from '../../declarations';
import type { TSelectOption } from './declarations';

/**
 * A function that takes an object with onChange and value properties as input
 * and returns a higher-order function that handles the onChange event of a select component.
 * The returned function filters the change action based on if it is a remove or clear action
 * and the value of fixed before calling the original onChange function if it exists."
 */

export const wrapperOnChange =
  <Option extends TSelectOption>({
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
export const showMenuAndDropDown = <Option extends TSelectOption>(
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
 * A function that takes an object with size and chipSize properties as input
 * and returns the ChipSize based on the values of chipSize and size.
 * If chipSize is present, it returns chipSize, otherwise,
 * it returns the ChipSize based on the value of size."
 */
export const getChipSize = ({
  size,
  chipSize,
}: {
  size?: TFieldSize | TChipSize;
  chipSize?: TChipSize;
}): TChipSize => chipSize || FIELD_SIZE_TO_CHIP_SIZE[size || 'xs'];

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
  size?: TFieldSize | TChipSize;
  chipSize?: TChipSize;
}): TChipSize => chipSize || FIELD_SIZE_TO_VALUE_ICON_SIZE[size || 'xxs'];
