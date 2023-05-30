import * as React from 'react';

import { ICON_CIRCULAR_SIZE_MAP, ICON_STANDARD_SIZE_MAP } from '../constants';
import { BaseProgressBarProps } from '../declarations';

import { getPercent, getColorScheme } from '../utils';

import { Box, Flex, FlexProps, Icon, IconProps, Typography } from '../../';

export interface ProgressBarInfoProps
  extends FlexProps,
    Pick<
      BaseProgressBarProps,
      'indeterminate' | 'size' | 'percent' | 'status' | 'type'
    > {
  icon?: IconProps['iconId'];
}

export const ProgressBarInfo: React.FC<ProgressBarInfoProps> = ({
  alignItems = 'center',
  children,
  flexDirection,
  flexWrap = 'wrap',
  icon,
  indeterminate,
  justifyContent,
  marginLeft,
  percent,
  position,
  size,
  status,
  type,
  ...restFlexProps
}) => {
  const colorSchemeEval = getColorScheme({ percent, status });
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      flexDirection={flexDirection || (type === 'circular' ? 'column' : 'row')}
      flexWrap={flexWrap}
      justifyContent={
        justifyContent || (type === 'circular' ? 'center' : 'space-between')
      }
      marginLeft={marginLeft || (type === 'circular' ? '0' : 'cmp-md')}
      position={position || (type === 'circular' ? 'absolute' : 'relative')}
    >
      {children ? (
        typeof children === 'string' ? (
          <Typography.Paragraph as="span" size={size}>
            {children}
          </Typography.Paragraph>
        ) : (
          children
        )
      ) : (
        <>
          {icon && (
            <Box
              as="span"
              margin={type === 'circular' ? 'cmp-xxs 0 0 0' : '0 cmp-xs 0 0'}
            >
              <Icon
                size={
                  type === 'circular'
                    ? ICON_CIRCULAR_SIZE_MAP[size]
                    : ICON_STANDARD_SIZE_MAP[size]
                }
                iconId={icon}
                colorScheme={colorSchemeEval}
              />
            </Box>
          )}
          {!indeterminate && (
            <Typography.Paragraph
              as="span"
              colorScheme={colorSchemeEval}
              size={size}
              styles={
                type === 'circular' && status === 'complete'
                  ? 'display: none;'
                  : null
              }
            >
              {getPercent({ percent, status })}%
            </Typography.Paragraph>
          )}
        </>
      )}
    </Flex>
  );
};
