import * as React from 'react';

import type { IKeyValue } from '../../declarations';
import { KeyValueContext } from '../../context';
import { Flex, FlexItemProps } from '../../../Flex';
import { Typography, TypographyProps } from '../../../Typography';
import { KeyValueUnit } from '../KeyValueUnit';

export interface KeyValueTextProps
  extends Pick<FlexItemProps, 'order'>,
    Omit<TypographyProps, 'children'>,
    Pick<IKeyValue, 'children' | 'unit' | 'size'> {
  bold?: boolean;
}

export const KeyValueText: React.FC<KeyValueTextProps> = ({
  bold,
  children,
  colorScheme,
  format,
  unit,
  order,
  size,
  ...restTypographyProps
}) => {
  const context = React.useContext(KeyValueContext);
  const evalSize = size || context.size;
  return (
    <Flex.Item minWidth="0" order={order}>
      <Typography
        {...restTypographyProps}
        bold={bold}
        colorScheme={colorScheme || (bold ? 'stronger' : 'weak')}
        truncateLine={1}
        format={format || `body-${evalSize}`}
      >
        <>
          {children}
          {unit && <KeyValueUnit>{unit}</KeyValueUnit>}
        </>
      </Typography>
    </Flex.Item>
  );
};
