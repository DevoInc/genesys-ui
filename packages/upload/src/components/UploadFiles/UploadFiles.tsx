import * as React from 'react';

// utils
import { buildErrorMessage, detectUnknownTypes } from './utils';

// components and declarations
import { Box, Field, FieldAttrProps, FieldProps } from '@devoinc/genesys-ui';

// styled and filepond
import {
  FilePondProps,
  StyledUploadFiles,
  StyledUploadFilesProps,
} from './StyledUploadFiles';

export interface UploadFilesProps
  extends Omit<FieldProps, 'children' | 'role'>,
    Pick<FieldAttrProps, 'name'>,
    Omit<StyledUploadFilesProps, 'disabled'>,
    Partial<
      Pick<
        FilePondProps,
        | 'server'
        | 'fileValidateTypeDetectType'
        | 'acceptedFileTypes'
        | 'allowFileSizeValidation'
        | 'allowImagePreview'
        | 'allowMultiple'
        | 'imagePreviewHeight'
        | 'imagePreviewMaxFileSize'
        | 'imagePreviewMaxHeight'
        | 'imagePreviewMinHeight'
        | 'imagePreviewTransparencyIndicator'
        | 'maxFileSize'
        | 'maxTotalFileSize'
        | 'minFileSize'
      >
    > {}

export const UploadFiles: React.FC<UploadFilesProps> = (props) => {
  const {
    disabled,
    hasFloatingHelper,
    helper,
    hideLabel,
    id,
    label,
    labelPosition = 'top',
    name,
    onClick,
    onMouseDown,
    onMouseLeave,
    onMouseMove,
    onMouseOut,
    onMouseOver,
    onMouseUp,
    required,
    requiredMarkTooltip,
    size = 'md',
    status = 'base',
    styles,
    tooltip,
    // FilePondProps
    acceptedFileTypes,
    allowFileSizeValidation,
    allowImagePreview = true,
    allowMultiple = false,
    imagePreviewHeight = null,
    imagePreviewMaxFileSize,
    imagePreviewMaxHeight = 150,
    imagePreviewMinHeight = 44,
    imagePreviewTransparencyIndicator,
    maxFileSize,
    maxTotalFileSize,
    minFileSize,
    // styled props
    height,
    maxHeight,
    showLabelIcon,
    ...restNativeProps
  } = props;
  const detectType = detectUnknownTypes(acceptedFileTypes);
  const errorMessage = buildErrorMessage(acceptedFileTypes);

  return (
    <Field
      disabled={disabled}
      hasFloatingHelper={hasFloatingHelper}
      helper={helper}
      hideLabel={hideLabel}
      id={id}
      label={label}
      labelPosition={labelPosition}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      required={required}
      requiredMarkTooltip={requiredMarkTooltip}
      size={size}
      status={status}
      styles={styles}
      tooltip={tooltip}
    >
      <Box flex="1 1 100%">
        <StyledUploadFiles
          {...restNativeProps}
          acceptedFileTypes={acceptedFileTypes}
          allowFileSizeValidation={allowFileSizeValidation}
          allowFileTypeValidation={(acceptedFileTypes || []).length > 0}
          allowImagePreview={allowImagePreview}
          allowMultiple={allowMultiple}
          disabled={disabled}
          fileValidateTypeDetectType={detectType}
          fileValidateTypeLabelExpectedTypes={errorMessage}
          height={height}
          iconProcess='<i class="gi-upload_load_share" />'
          iconRemove='<i class="gi-exit_close" />'
          iconRetry='<i class="gi-rotate_sync" />'
          iconUndo='<i class="gi-undo_reset" />'
          id={id}
          imagePreviewHeight={imagePreviewHeight}
          imagePreviewMaxFileSize={imagePreviewMaxFileSize}
          imagePreviewMaxHeight={imagePreviewMaxHeight}
          imagePreviewMinHeight={imagePreviewMinHeight}
          imagePreviewTransparencyIndicator={imagePreviewTransparencyIndicator}
          labelButtonAbortItemProcessing='<i class="gi-exit_close" />'
          labelButtonRemoveItem=""
          labelButtonRetryItemProcessing=""
          maxFileSize={maxFileSize}
          maxHeight={maxHeight}
          maxTotalFileSize={maxTotalFileSize}
          minFileSize={minFileSize}
          name={name}
          required={required}
          showLabelIcon={showLabelIcon}
        />
      </Box>
    </Field>
  );
};
