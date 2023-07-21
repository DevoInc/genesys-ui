import { DefaultTheme, css } from 'styled-components';

import { typoColorMixin, typoMixin } from '@devoinc/genesys-ui';
import { COLUMN_TYPE } from '../../constants/column';
import { AllHTMLAttributes } from 'react';
import { cellSize, ColumnTypeCombinerType } from '../declarations';

export interface CellContentTextMixinProps<T = Element> {
  contentEditable?: AllHTMLAttributes<T>['contentEditable'];
  expanded?: boolean;
  size?: cellSize;
  theme?: DefaultTheme;
  typeProp?: ColumnTypeCombinerType;
  editable?: boolean;
}

export const cellContentTextMixin = ({
  contentEditable,
  editable,
  expanded,
  size,
  theme,
  typeProp,
}: CellContentTextMixinProps) => {
  return css`
    position: relative;
    flex: ${(expanded || typeProp === COLUMN_TYPE.CUSTOM) && '1'};
    display: ${editable && typeProp === COLUMN_TYPE.BOOLEAN && 'flex'};

    // text styles
    ${typoMixin({ variant: 'body', theme, size })};

    // text color
    ${typoColorMixin({
      variant: 'body',
      ...(contentEditable && { colorScheme: 'strong' }),
      theme,
    })};

    ${expanded &&
    css`
      display: flex;
      align-items: center;
    `};
  `;
};
