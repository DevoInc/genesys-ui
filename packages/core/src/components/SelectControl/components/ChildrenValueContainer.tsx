import * as React from 'react';

import { Typography } from '../../Typography';
import { HFlex } from '../../HFlex';
import { TSelectOption } from '../declarations';

type ChildrenValueContainer = {
  multipleSubtle: boolean;
  values: TSelectOption[];
  children: React.ReactNode;
};

export const ChildrenValueContainer: React.FC<ChildrenValueContainer> = ({
  multipleSubtle,
  values,
  children,
}) => (
  <HFlex spacing="cmp-xxs">
    {multipleSubtle && values.length > 0 && (
      <Typography.Caption colorScheme="weaker">
        ({values.length})
      </Typography.Caption>
    )}
    {children}
  </HFlex>
);
