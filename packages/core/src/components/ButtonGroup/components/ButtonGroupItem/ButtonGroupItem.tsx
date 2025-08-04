import * as React from 'react';

import type { TButtonSize } from '../../../Button';
import { BUTTON_GROUP_ITEM_CLASS_NAME_BASE } from '../../constants';
import { Flex, type FlexItemProps } from '../../../Flex';
import { ButtonGroupContext } from '../../context';

export interface ButtonGroupItemProps extends Omit<FlexItemProps, 'children'> {
  children: React.ReactNode;
  /** If the child action has 'quiet' colorScheme. */
  hasQuietButton?: boolean;
  /** The size of the action/s */
  size?: TButtonSize;
}

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = ({
  as = 'li',
  children,
  className,
  hasQuietButton,
  size,
  ...restFlexItemProps
}) => {
  const context = React.useContext(ButtonGroupContext);
  const evalSize = size || context.size || 'md';
  const classNameBase = BUTTON_GROUP_ITEM_CLASS_NAME_BASE;
  const classNames = [
    `${classNameBase} `,
    `${classNameBase}--${evalSize} `,
    hasQuietButton ? `${classNameBase}--has-quiet-child ` : '',
    className && `${className} `,
  ]
    .join('')
    .trim();
  return (
    <Flex.Item {...restFlexItemProps} as={as} className={classNames}>
      {children}
    </Flex.Item>
  );
};
