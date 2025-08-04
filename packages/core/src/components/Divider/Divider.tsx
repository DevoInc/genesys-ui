import * as React from 'react';

import type { IClassName, IStyleAttr } from '../../declarations';
import type { IDivider } from './declarations';
import { DIVIDER_CLASS_NAME_BASE } from './constants';
import {
  getBasedCssVariablesStyle,
  getVariableBasedClassNames,
} from '../../helpers';

export interface DividerProps extends IDivider, IStyleAttr, IClassName {}

export const Divider: React.FC<DividerProps> = ({
  className,
  colorScheme = 'base',
  customColor,
  height,
  margin,
  style,
  vertical,
  width,
}) => {
  const classNameBase = DIVIDER_CLASS_NAME_BASE;
  const classNames = [
    `${classNameBase} `,
    `${classNameBase}--${vertical ? 'ver' : 'hor'} `,
    margin ? `${classNameBase}--spacing-${margin} ` : '',
    colorScheme ? `${classNameBase}--${colorScheme} ` : '',
    ...getVariableBasedClassNames({
      backgroundColor: customColor,
      height,
      width,
    }),
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <hr
      className={classNames}
      style={{
        ...getBasedCssVariablesStyle({
          backgroundColor: customColor,
          width,
          height,
        }),
        ...style,
      }}
    />
  );
};
