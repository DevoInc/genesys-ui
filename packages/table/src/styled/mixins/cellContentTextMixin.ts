import { AllHTMLAttributes } from 'react';
import { DefaultTheme, css } from 'styled-components';
import { typoColorMixin, typoMixin } from '@devoinc/genesys-ui';
import { cellSize } from '../declarations';
import { ColumnType } from '../../components/declarations';

export interface CellContentTextMixinProps<T = Element> {
  contentEditable?: AllHTMLAttributes<T>['contentEditable'];
  expanded?: boolean;
  size?: cellSize;
  theme?: DefaultTheme;
  typeProp?: ColumnType;
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
    flex: ${(expanded || !typeProp) && '1'};
    display: ${editable && typeProp === 'tags' && 'flex'};

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
