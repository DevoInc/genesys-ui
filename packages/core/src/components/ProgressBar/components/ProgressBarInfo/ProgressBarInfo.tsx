import * as React from 'react';

import {
  ICON_CIRCULAR_SIZE_MAP,
  ICON_STANDARD_SIZE_MAP,
} from '../../constants';
import { IBaseProgressBar } from '../../declarations';
import { getColorSchemeFromStatus } from '../../utils';
import { Box } from '../../../Box';
import { Flex, type FlexProps } from '../../../Flex';
import { FloatingHelper } from '../../../FloatingHelper';
import { Icon, type IconProps } from '../../../Icon';
import { Typography } from '../../../Typography';
import { ProgressBarContext } from '../../context';

export interface ProgressBarInfoProps
  extends FlexProps,
    Pick<
      IBaseProgressBar,
      | 'floatingStatusHelperTooltip'
      | 'floatingStatusHelperId'
      | 'hasFloatingStatusHelper'
      | 'indeterminate'
      | 'percent'
      | 'size'
      | 'status'
      | 'statusHelper'
      | 'type'
    > {
  icon?: IconProps['children'];
}

export const ProgressBarInfo: React.FC<ProgressBarInfoProps> = ({
  alignItems = 'center',
  children,
  flexDirection,
  flexWrap = 'wrap',
  floatingStatusHelperId,
  floatingStatusHelperTooltip,
  hasFloatingStatusHelper,
  icon,
  indeterminate,
  justifyContent,
  marginLeft,
  percent,
  position,
  size,
  status,
  statusHelper,
  type,
  ...restFlexProps
}) => {
  const context = React.useContext(ProgressBarContext);
  const evalSize = size || context.size;
  const evalType = type || context.type;
  const evalStatus = status || context.status;
  const evalPercent = percent || context.percent;
  const colorSchemeEval = getColorSchemeFromStatus({
    percent: evalPercent,
    status: evalStatus,
  });
  return (
    <Flex
      {...restFlexProps}
      alignItems={alignItems}
      flexDirection={
        flexDirection || (evalType === 'circular' ? 'column' : 'row')
      }
      flexWrap={flexWrap}
      gap="cmp-xs"
      justifyContent={
        justifyContent || (evalType === 'circular' ? 'center' : 'flex-end')
      }
      marginLeft={marginLeft || (evalType === 'circular' ? '0' : 'cmp-md')}
      position={position || (evalType === 'circular' ? 'absolute' : 'relative')}
    >
      {children ? (
        typeof children === 'string' ? (
          <Typography.Paragraph as="span" size={evalSize}>
            {children}
          </Typography.Paragraph>
        ) : (
          children
        )
      ) : (
        <>
          {icon && !statusHelper && (
            <Flex
              as="span"
              margin={
                evalStatus === 'complete'
                  ? '0'
                  : evalType === 'circular'
                    ? evalSize === 'sm'
                      ? '0 0 cmp-xxs 0'
                      : '0 0 cmp-xs 0'
                    : '0 0 0 cmp-xs'
              }
            >
              <Icon
                size={
                  evalType === 'circular'
                    ? ICON_CIRCULAR_SIZE_MAP[evalSize]
                    : ICON_STANDARD_SIZE_MAP[evalSize]
                }
                colorScheme={colorSchemeEval}
              >
                {icon}
              </Icon>
            </Flex>
          )}
          {!indeterminate && (
            <Typography.Paragraph
              as="span"
              colorScheme={evalStatus === 'error' ? colorSchemeEval : 'base'}
              size={evalSize}
              style={
                evalType === 'circular' && evalStatus === 'complete'
                  ? 'display: none;'
                  : evalType === 'circular'
                    ? 'line-height: 1;'
                    : null
              }
            >
              {evalPercent}%
            </Typography.Paragraph>
          )}
          {statusHelper && hasFloatingStatusHelper && (
            <Box
              as="span"
              margin={
                evalStatus === 'complete'
                  ? '0'
                  : evalType === 'circular'
                    ? evalSize === 'sm'
                      ? '0 0 cmp-xxs 0'
                      : '0 0 cmp-xs 0'
                    : '0 0 0 cmp-xs'
              }
            >
              <FloatingHelper
                id={floatingStatusHelperId}
                message={statusHelper}
                status={colorSchemeEval}
                size={evalSize}
                tooltip={floatingStatusHelperTooltip}
              />
            </Box>
          )}
        </>
      )}
    </Flex>
  );
};
