import { UploadFilesProps } from './UploadFiles';

export const detectUnknownTypes =
  (
    extensions: UploadFilesProps['acceptedFileTypes'],
  ): UploadFilesProps['fileValidateTypeDetectType'] =>
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
  extensionTypes: UploadFilesProps['acceptedFileTypes'] = [],
): string => `Expects: ${extensionTypes.map((x) => `${x}`).join(', ')}`;
