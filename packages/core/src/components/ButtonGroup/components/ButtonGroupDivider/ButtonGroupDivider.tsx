import * as React from 'react';
import { useTheme } from 'styled-components';
import { ButtonGroupContext } from '../../context';
import { Divider, type DividerProps } from '../../../Divider';

export interface ButtonGroupDividerProps
  extends Omit<DividerProps, 'vertical'> {}

export const ButtonGroupDivider: React.FC<ButtonGroupDividerProps> = ({
  height = undefined,
  margin = '0',
  ...restDividerProps
}) => {
  const { size } = React.useContext(ButtonGroupContext);
  const buttonHeight = useTheme().cmp.button.size.height[size];
  const evalHeight = height || buttonHeight;
  return (
    <Divider
      {...restDividerProps}
      margin={margin}
      height={evalHeight}
      vertical
    />
  );
};
