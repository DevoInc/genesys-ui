import { ChipSize } from '../Chip/declarations';
import { FieldSize } from '../../declarations';

import { SingleOption, Value } from './declarations';

// TODO: types
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
 *
 * @param value the passed value
 * @param options the existing options of the select
 * @param isMulti if the select is multi valued or not
 * @returns {string|object|Array}
 */
export const findValue = (
  value: Value,
  options: SingleOption[],
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
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (val?.__isNew__) {
            return val;
          }
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
          ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            option.value === value.value || ''
          : option.value === value || ''
      );
      return found || defaultValue;
    }
  } else {
    return defaultValue;
  }
};

export const getChipContainerSize = ({
  size,
  chipSize,
}: {
  size?: FieldSize | ChipSize;
  chipSize?: ChipSize;
}) => {
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

export const getChipRemoveSize = ({
  size,
  chipSize,
}: {
  size?: FieldSize | ChipSize;
  chipSize?: ChipSize;
}) => {
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
