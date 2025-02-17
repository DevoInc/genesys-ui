import { Props } from 'react-select';

import { TSelectOption } from '../../declarations';
import { InnerSelectControlProps } from '../../InnerSelectControl';
import { findValueArray } from './findValueArray';

/**
 * A recursive function that flattens a nested options array into
 * a single-level array by either concatenating
 * the nested options or adding the option to the accumulator."
 */
const flattenOptionsFn = <Option extends TSelectOption>(
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
export const findValue = <Option extends TSelectOption>(
  value: InnerSelectControlProps<Option>['value'],
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
                
          return findValueArray(val, options as Option[]);
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
