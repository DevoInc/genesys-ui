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
  const aliasTokens = theme.alias;
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
            min-width: ${`calc(${square} - 0.4rem)`};
            height: ${square};
            padding: 0
              ${cmpTokens.multiValueContainer.space.padding.hor.isSubtle};
            background-color: ${cmpTokens.color.background[status].enabled};
            z-index: 1;
            transition: border ${cmpTokens.mutation.transitionDuration} ease;

            // to avoid overlapping with the inset box-shadow on focus
            [class*='--is-focused'] & {
              border-left: solid 0.2rem
                ${aliasTokens.color.shadow[status].focused};
              padding-left: calc(
                ${cmpTokens.multiValueContainer.space.padding.hor.isSubtle} -
                  0.2rem
              );
            }
          `}
        >
          ({values.length})
        </Typography.Caption>
      )}
      {children}
    </HFlex>
  );
};
