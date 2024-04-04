import type { FilePondProps } from 'react-filepond';

export const detectUnknownTypes =
  (
    extensions: FilePondProps['acceptedFileTypes'],
  ): FilePondProps['fileValidateTypeDetectType'] =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (source, type) =>
    new Promise((resolve, reject) => {
      // Do custom type detection here and return with promise
      const arr = source.name.split('.');
      const extension = `.${arr[arr.length - 1]}`;
      if (extensions?.includes(extension)) {
        resolve(extension);
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('unknown type');
      }
    });

export const buildErrorMessage = (
  extensionTypes: FilePondProps['acceptedFileTypes'] = [],
): string => `Expects: ${extensionTypes.map((x) => `${x}`).join(', ')}`;
