import * as React from 'react';

import { FLEX_CLASS_NAME_BASE } from './constants';
import { FLEX_PROPS_CLASS_NAMES_MAP } from '../../constants';
import type { ILayoutFlexCss } from '../../declarations';
import {
  getBasedCssVariablesStyle,
  getMappedClassNames,
  getSpacingClassNames,
  getVariableBasedClassNames,
} from '../../helpers';
import { Box, type BoxProps } from '../Box';
import { FlexItem } from './components';

export interface FlexProps extends BoxProps, ILayoutFlexCss {}

const InternalFlex = React.forwardRef<HTMLElement, FlexProps>(
  (
    {
      alignContent,
      alignItems,
      childrenFlex,
      className,
      columnGap,
      display,
      flexDirection,
      flexWrap,
      gap,
      justifyContent,
      inline = false,
      rowGap,
      children,
      style,
      ...restBoxProps
    },
    ref,
  ) => {
    const classNames = [
      `${FLEX_CLASS_NAME_BASE} `,
      ...getMappedClassNames(
        { alignContent, alignItems, flexDirection, flexWrap, justifyContent },
        FLEX_PROPS_CLASS_NAMES_MAP,
      ),
      ...getSpacingClassNames({
        columnGap,
        gap,
        rowGap,
      }),
      ...getVariableBasedClassNames({
        childrenFlex,
      }),
      className && `${className}`,
    ]
      .join('')
      .trim();

    const basedCssVariablesStyle = getBasedCssVariablesStyle({
      childrenFlex,
    });

    return (
      <Box
        {...restBoxProps}
        ref={ref}
        display={display || (inline ? 'inline-flex' : 'flex')}
        className={classNames}
        style={{ ...basedCssVariablesStyle, ...style }}
      >
        {children}
      </Box>
    );
  },
);

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;

InternalFlex.displayName = 'Flex';
Flex.Item.displayName = 'Flex.Item';
