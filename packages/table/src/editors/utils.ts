import { FieldSize } from '@devoinc/genesys-ui';
import { TableVisualOptions } from '../declarations';

/**
 * Returns the value of the size for the edit form control based in visual options of the Table
 *
 * @param {Object} visualOptions Object with the visual options of the Table tokens
 * @return {String} the value of the prop size for the edit control
 */
export const getEditControlSize = (
  visualOptions: TableVisualOptions,
): FieldSize =>
  visualOptions?.density === 'compact' && visualOptions?.rowHeight === 'md'
    ? 'sm'
    : 'md';
