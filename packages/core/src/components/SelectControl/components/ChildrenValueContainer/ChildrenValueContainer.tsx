import * as React from 'react';

import { Typography } from '../../../Typography';
import { HFlex } from '../../../HFlex';
import type { ICommonSelectCmps, TSelectOption } from '../../declarations';
import { css, useTheme } from 'styled-components';

type ChildrenValueContainer = {
  multipleSubtle: boolean;
  values: TSelectOption[];
  children: React.ReactNode;
  size: ICommonSelectCmps['size'];
  status: ICommonSelectCmps['status'];
};

export const ChildrenValueContainer: React.FC<ChildrenValueContainer> = ({
  multipleSubtle,
  values,
  children,
  size,
  status,
}) => {
  const theme = useTheme();
  const cmpTokens = theme.cmp.selectControl;
  const square = cmpTokens.size.height[size];
  return (
    <HFlex
      maxWidth="100%"
      spacing="cmp-xxs"
      paddingLeft={values.length ? 'cmp-md' : undefined}
    >
      {multipleSubtle && values.length > 0 && (
        <Typography.Caption
          colorScheme="weaker"
          style={css`
            position: absolute;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: ${square};
            height: ${square};
            padding: 0
              ${cmpTokens.multiValueContainer.space.padding.hor.isSubtle};
            background-color: ${cmpTokens.color.background[status].enabled};
          `}
        >
          ({values.length})
        </Typography.Caption>
      )}
      {children}
    </HFlex>
  );
};
