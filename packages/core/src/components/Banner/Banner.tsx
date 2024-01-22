import * as React from 'react';

import { BannerHeadingProps } from './components';
import {
  BannerActions,
  BannerActionsProps,
  BannerClose,
  BannerCloseProps,
  BannerContainer,
  BannerContainerProps,
  BannerContent,
  BannerContentProps,
  BannerHeading,
  BannerIcon,
} from './components';
import { Flex } from '../';
import { StyledOverloadCssPropsWithRecord } from '../../declarations';

export interface BaseBannerProps
  extends Omit<BannerContainerProps, 'children'>,
    Pick<BannerActionsProps, 'actions'> {
  /** onClick function for close button */
  close?: BannerCloseProps['onClick'];
  /** Tooltip for close button */
  closeTooltip?: BannerCloseProps['tooltip'];
  /** Banner content */
  content?: BannerContentProps['children'];
  /** This prop hides the Banner icon */
  hideIcon?: boolean;
  /** Banner title content */
  title?: BannerHeadingProps['children'];
}

export type BannerProps = BaseBannerProps &
  StyledOverloadCssPropsWithRecord<
    'container' | 'actions' | 'close' | 'content' | 'heading' | 'icon'
  >;

export const InternalBanner: React.FC<BannerProps> = ({
  actions,
  as,
  close,
  closeTooltip = 'Remove message',
  content,
  hideIcon,
  id,
  role,
  status = 'info',
  styles,
  subcomponentStyles,
  title,
  tooltip,
  ...ariaProps
}) => {
  return (
    <BannerContainer
      {...ariaProps}
      as={as}
      id={id}
      role={role}
      status={status}
      styles={subcomponentStyles?.container || styles}
      tooltip={tooltip}
    >
      {!hideIcon && (
        <Flex.Item alignSelf="flex-start" flex="0 0 auto">
          <BannerIcon status={status} styles={subcomponentStyles?.icon} />
        </Flex.Item>
      )}
      <Flex.Item flex="1 1 auto">
        {title && (
          <BannerHeading styles={subcomponentStyles?.heading}>
            {title}
          </BannerHeading>
        )}
        {content && (
          <BannerContent styles={subcomponentStyles?.content}>
            {content}
          </BannerContent>
        )}
        {actions && (
          <BannerActions
            actions={actions}
            status={status}
            styles={subcomponentStyles?.actions}
          />
        )}
      </Flex.Item>

      {close && (
        <BannerClose
          onClick={close}
          tooltip={closeTooltip}
          styles={subcomponentStyles?.close}
        />
      )}
    </BannerContainer>
  );
};

export const Banner = InternalBanner as typeof InternalBanner & {
  Actions: typeof BannerActions;
  Close: typeof BannerClose;
  Container: typeof BannerContainer;
  Content: typeof BannerContent;
  Heading: typeof BannerHeading;
  Icon: typeof BannerIcon;
};

Banner.Actions = BannerActions;
Banner.Close = BannerClose;
Banner.Container = BannerContainer;
Banner.Content = BannerContent;
Banner.Heading = BannerHeading;
Banner.Icon = BannerIcon;
