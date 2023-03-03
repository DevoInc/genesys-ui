import * as React from 'react';

import { Box, FlexItem, HFlex, IconButtonRemove, Typography } from '../';
import { StyledBoxMessage, StyledBoxMessageProps } from './StyledBoxMessage';
import { statusIconMap } from '../../styled/functions/utils';
import { StyledBoxMessageIcon } from './StyledBoxMessageIcon';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

export interface BoxMessageProps
  extends StyledBoxMessageProps,
    // native
    StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps {
  /** BoxMessage actions */
  actions?: React.ReactElement[];
  /** onClick function for close button */
  close?: () => void;
  /** Tooltip for close button */
  closeTooltip?: string;
  /** BoxMessage content */
  content?: string | React.ReactNode;
  /** This prop hides the BoxMessage icon */
  hideIcon?: boolean;
}

export const BoxMessage: React.FC<BoxMessageProps> = ({
  actions,
  close,
  closeTooltip = 'Remove message',
  content,
  hideIcon,
  title,
  status = 'info',
  ...nativeProps
}) => (
  <StyledBoxMessage {...nativeProps} title={title} status={status}>
    {!hideIcon && (
      <FlexItem alignSelf="flex-start" flex="0 0 auto" marginRight="cmp-sm">
        <StyledBoxMessageIcon
          status={status}
          className={`gi-${statusIconMap.filled[status]}` || ''}
          aria-hidden
        />
      </FlexItem>
    )}
    <FlexItem flex="1 1 auto">
      {title && (
        <Typography.Heading gutterBottom="cmp-sm" size="h5">
          {title}
        </Typography.Heading>
      )}
      {content &&
        (typeof content === 'string' ? (
          <Typography.Paragraph gutterBottom="0">
            {content}
          </Typography.Paragraph>
        ) : (
          content
        ))}
      {actions && (
        <HFlex
          alignItems="center"
          justifyContent="flex-end"
          marginTop="cmp-sm"
          spacing="cmp-xs"
        >
          {React.Children.map(
            actions,
            (action, idx) =>
              action &&
              React.cloneElement(action, {
                key: idx,
                size: action.props.size || 'sm',
                colorScheme: action.props.colorScheme || status,
              })
          )}
        </HFlex>
      )}
    </FlexItem>

    {close && (
      <Box position="absolute" positionRight="1.2rem" positionTop="1rem">
        <IconButtonRemove onClick={close} title={closeTooltip} size={'sm'} />
      </Box>
    )}
  </StyledBoxMessage>
);
