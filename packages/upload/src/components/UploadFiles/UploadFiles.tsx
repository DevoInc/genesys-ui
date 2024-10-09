import * as React from 'react';
import { useTheme } from 'styled-components';
import type { FilePondProps } from 'react-filepond';
import {
  GIExitClose,
  GIRotateSync,
  GIUndoReset,
  GIUploadLoadShare,
} from '@devoinc/genesys-icons';

import {
  Box,
  Field,
  type IFieldAttrs,
  type FieldProps,
  getCmpMarkup,
  type IDataAttrs,
} from '@devoinc/genesys-ui';

import { buildErrorMessage, detectUnknownTypes } from './utils';
import {
  StyledUploadFiles,
  type StyledUploadFilesProps,
} from './StyledUploadFiles';

export interface UploadFilesProps
  extends IDataAttrs,
    Omit<FieldProps, 'children' | 'role'>,
    Pick<IFieldAttrs, 'name'>,
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
    as,
    controlWidth,
    direction,
    disabled,
    fileValidateTypeDetectType,
    hasFloatingHelper,
    hasWideControl,
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
    server,
    size = 'md',
    status = 'base',
    style,
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
    ...dataProps
  } = props;
  const theme = useTheme();
  const detectType = detectUnknownTypes(acceptedFileTypes);
  const errorMessage = buildErrorMessage(acceptedFileTypes);

  const iconSize = '1.4rem';
  const iconProcessStaticMarkup = getCmpMarkup({
    cmp: <GIUploadLoadShare size={iconSize} stroke-width={1} />,
    theme,
  });
  const iconRemoveStaticMarkup = getCmpMarkup({
    cmp: <GIExitClose size={iconSize} stroke-width={1} />,
    theme,
  });
  const iconRetryStaticMarkup = getCmpMarkup({
    cmp: <GIRotateSync size={iconSize} stroke-width={1} />,
    theme,
  });
  const iconUndoStaticMarkup = getCmpMarkup({
    cmp: <GIUndoReset size={iconSize} stroke-width={1} />,
    theme,
  });

  return (
    <Field
      as={as}
      controlWidth={controlWidth}
      direction={direction}
      disabled={disabled}
      hasFloatingHelper={hasFloatingHelper}
      hasWideControl={hasWideControl}
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
      style={style}
      tooltip={tooltip}
    >
      <Box {...dataProps} flex="1 1 100%" position="relative">
        <StyledUploadFiles
          acceptedFileTypes={acceptedFileTypes}
          allowFileSizeValidation={allowFileSizeValidation}
          allowFileTypeValidation={(acceptedFileTypes || []).length > 0}
          allowImagePreview={allowImagePreview}
          allowMultiple={allowMultiple}
          disabled={disabled}
          fileValidateTypeDetectType={fileValidateTypeDetectType || detectType}
          fileValidateTypeLabelExpectedTypes={errorMessage}
          height={height}
          iconProcess={iconProcessStaticMarkup}
          iconRemove={iconRemoveStaticMarkup}
          iconRetry={iconRetryStaticMarkup}
          iconUndo={iconUndoStaticMarkup}
          id={id}
          imagePreviewHeight={imagePreviewHeight}
          imagePreviewMaxFileSize={imagePreviewMaxFileSize}
          imagePreviewMaxHeight={imagePreviewMaxHeight}
          imagePreviewMinHeight={imagePreviewMinHeight}
          imagePreviewTransparencyIndicator={imagePreviewTransparencyIndicator}
          labelButtonAbortItemProcessing={iconRemoveStaticMarkup}
          labelButtonRemoveItem=""
          labelButtonRetryItemProcessing=""
          maxFileSize={maxFileSize}
          maxHeight={maxHeight}
          maxTotalFileSize={maxTotalFileSize}
          minFileSize={minFileSize}
          name={name}
          required={required}
          server={server}
          showLabelIcon={showLabelIcon}
        />
      </Box>
    </Field>
  );
};
