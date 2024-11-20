import * as React from 'react';

import type { IGlobalAttrs } from '../../declarations';
import type { IKeyValue } from './declarations';
import {
  KeyValueContainer,
  KeyValueSupportingVisual,
  KeyValueText,
  KeyValueTextContainer,
  KeyValueUnit,
} from './components';

export interface KeyValueProps
  extends IGlobalAttrs,
    Omit<IKeyValue, 'children'> {}

export const InternalKeyValue: React.FC<KeyValueProps> = ({
  boldScheme = 'key',
  format = 'base',
  id,
  invertOrder,
  keyContent,
  keyTruncateLine = 1,
  keyWidth,
  role,
  size = 'md',
  supportingVisual,
  supportingVisualAlign,
  tooltip,
  unit,
  valueContent,
  valueTruncateLine = 1,
  valueWidth,
}) => (
  <KeyValueContainer
    format={format}
    id={id}
    role={role}
    size={size}
    tooltip={tooltip}
  >
    {supportingVisual && (
      <KeyValueSupportingVisual
        supportingVisualAlign={supportingVisualAlign}
        format={format}
      >
        {supportingVisual}
      </KeyValueSupportingVisual>
    )}
    <KeyValueTextContainer format={format} size={size}>
      <KeyValueText
        bold
        order={
          invertOrder && boldScheme === 'value'
            ? 1
            : boldScheme === 'value'
              ? 2
              : invertOrder
                ? 2
                : 1
        }
        truncateLine={
          invertOrder && boldScheme === 'value'
            ? keyTruncateLine
            : boldScheme === 'value'
              ? valueTruncateLine
              : invertOrder
                ? valueTruncateLine
                : keyTruncateLine
        }
        width={
          invertOrder && boldScheme === 'value'
            ? keyWidth
            : boldScheme === 'value'
              ? valueWidth
              : invertOrder
                ? valueWidth
                : keyWidth
        }
        size={size}
      >
        {boldScheme === 'key' ? keyContent : valueContent}
      </KeyValueText>
      <KeyValueText
        order={
          invertOrder && boldScheme === 'value'
            ? 1
            : boldScheme === 'value'
              ? 1
              : invertOrder
                ? 1
                : 2
        }
        truncateLine={
          invertOrder && boldScheme === 'value'
            ? keyTruncateLine
            : boldScheme === 'value'
              ? keyTruncateLine
              : invertOrder
                ? keyTruncateLine
                : valueTruncateLine
        }
        width={
          invertOrder && boldScheme === 'value'
            ? keyWidth
            : boldScheme === 'value'
              ? keyWidth
              : invertOrder
                ? keyWidth
                : valueWidth
        }
        size={size}
        unit={unit}
      >
        {boldScheme === 'value' ? keyContent : valueContent}
      </KeyValueText>
    </KeyValueTextContainer>
  </KeyValueContainer>
);

export const KeyValue = InternalKeyValue as typeof InternalKeyValue & {
  _Container: typeof KeyValueContainer;
  _SupportingVisual: typeof KeyValueSupportingVisual;
  _Text: typeof KeyValueText;
  _TextContainer: typeof KeyValueTextContainer;
  _Unit: typeof KeyValueUnit;
};

KeyValue._Container = KeyValueContainer;
KeyValue._SupportingVisual = KeyValueSupportingVisual;
KeyValue._Text = KeyValueText;
KeyValue._TextContainer = KeyValueTextContainer;
KeyValue._Unit = KeyValueUnit;

InternalKeyValue.displayName = 'KeyValue';
KeyValue._Container.displayName = 'KeyValue.Container';
KeyValue._SupportingVisual.displayName = 'KeyValue.SupportingVisual';
KeyValue._Text.displayName = 'KeyValue.Text';
KeyValue._TextContainer.displayName = 'KeyValue.TextContainer';
KeyValue._Unit.displayName = 'KeyValue.Unit';
