import * as React from 'react';

// declarations
import {
  GlobalAriaProps,
  GlobalAttrProps,
  GlobalSpacing,
  MouseEventAttrProps,
  StyledPolymorphicProps,
  TriggerEventAttrProps,
} from '../../declarations';
import { IconSize } from '../Icon';

// components
import { VFlex } from '../VFlex/';
import { HFlex } from '../HFlex/';
import { FlexItem } from '../FlexItem/';
import { Icon } from '../Icon/';
import { Button } from '../Button/';
import { Heading, Paragraph } from '../Typography/components/block';

// styled
import {
  StyledStatusMessage,
  StyledStatusMessageProps,
} from './StyledStatusMessage';

export interface StatusMessageProps
  extends StyledPolymorphicProps,
    GlobalAttrProps,
    GlobalAriaProps,
    MouseEventAttrProps,
    Pick<TriggerEventAttrProps, 'onClick'>,
    StyledStatusMessageProps {
  padding?: GlobalSpacing;
  /** This property defines the font size of the icon */
  iconSize?: IconSize;
  /** Title block of the status message */
  msgTitle: string;
  /** Description block of status message */
  msgDescription?: string;
  /** Button of the status message */
  msgButton?: string;
  /** If the button of the status message is at the right of the content*/
  msgButtonRight?: boolean;
  /** Icon for the top of the panel */
  icon?: string;
  /** If it's true then the content box is not centered and it's scrollable */
  longMessage?: boolean;
}

export const StatusMessage = ({
  msgTitle,
  bordered,
  icon,
  iconSize,
  longMessage,
  margin,
  msgButton,
  msgButtonRight,
  msgDescription,
  onClick,
  padding,
  status,
  width,
  ...restNativeProps
}: StatusMessageProps) => {
  const FlexWrapper = msgButtonRight ? HFlex : VFlex;

  const getWrapperPadding = () => {
    if (longMessage) return 'cmp-xl';
    if (msgButton) return 'cmp-md';
    return padding || 'cmp-xs cmp-sm';
  };

  const getIconSize = () => {
    if (iconSize) return iconSize;
    if (msgButton && msgButtonRight) return '2rem';
    return '3.75rem';
  };

  return (
    <StyledStatusMessage
      {...restNativeProps}
      bordered={bordered}
      margin={margin}
      status={status}
      width={width}
    >
      <FlexWrapper
        alignItems="center"
        justifyContent="center"
        margin={String(margin)}
        padding={getWrapperPadding()}
      >
        <VFlex>
          <Icon iconId={icon || 'no_data'} size={getIconSize()} />
          {msgTitle && (
            <Heading colorScheme={status} textAlign="center">
              {msgTitle}
            </Heading>
          )}
          {msgDescription && (
            <Paragraph
              colorScheme="weak"
              textAlign={longMessage ? 'left' : 'center'}
            >
              {msgDescription}
            </Paragraph>
          )}
        </VFlex>
        {msgButton && (
          <FlexItem flex="1 0 auto" alignSelf="center">
            <Button
              colorScheme={status === 'base' ? 'neutral' : status}
              onClick={onClick}
            >
              {msgButton}
            </Button>
          </FlexItem>
        )}
      </FlexWrapper>
    </StyledStatusMessage>
  );
};
