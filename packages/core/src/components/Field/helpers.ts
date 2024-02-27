import * as React from 'react';

import { DefaultTheme } from 'styled-components';
import { FieldSize, GlobalState, GlobalStatus } from '../../declarations';
import { typoMixin, getTypoObject } from '../../styled/mixins/typography';

export const getFieldControlTypo = ({
  textAlign,
  theme,
  size,
}: {
  textAlign?: React.CSSProperties['textAlign'];
  theme: DefaultTheme;
  size?: FieldSize;
}) =>
  typoMixin({
    textAlign,
    theme,
    size,
  });

export const getFieldState = ({
  readOnly,
  state,
}: {
  readOnly?: boolean;
  state?: GlobalState;
}): GlobalState => {
  if (state) return state;
  if (readOnly) return 'readonly';
  return 'enabled';
};

export const getFieldControlTypoObj = ({
  theme,
  size,
}: {
  theme: DefaultTheme;
  size?: FieldSize;
}) => getTypoObject({ theme, size: size });

export const getFieldStatus = (status: GlobalStatus = 'base') => {
  if (status === 'help') return 'base';
  return status;
};
