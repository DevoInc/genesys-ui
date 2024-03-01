import * as React from 'react';

import { StyledOverloadCssPropsWithRecord } from '../../declarations';

import {
  BannerActions,
  BannerActionsProps,
  BannerClose,
  BannerCloseProps,
  BannerContainer,
  BannerContainerProps,
  BannerContent,
  BannerContentProps,
  BannerContentContainer,
  BannerHeading,
  BannerHeadingProps,
  BannerIcon,
} from './components';

import { BannerContext } from './context';

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
  /** To define the Banner based in internal components */
  children?: BannerContainerProps['children'];
}

export type BannerProps = BaseBannerProps &
  StyledOverloadCssPropsWithRecord<
    'container' | 'actions' | 'close' | 'content' | 'heading' | 'icon'
  >;

export const InternalBanner: React.FC<BannerProps> = ({
  actions,
  as,
  children,
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
      {children ? (
        <BannerContext.Provider value={{ status }}>
          {children}
        </BannerContext.Provider>
      ) : (
        <>
          {!hideIcon && (
            <BannerIcon status={status} styles={subcomponentStyles?.icon} />
          )}
          <BannerContentContainer>
            {title && (
              <BannerHeading styles={subcomponentStyles?.heading}>
                {title}
              </BannerHeading>
            )}
            {content && (
              <Banner._Content styles={subcomponentStyles?.content}>
                {content}
              </Banner._Content>
            )}
            {actions && (
              <Banner._Actions
                actions={actions}
                status={status}
                styles={subcomponentStyles?.actions}
              />
            )}
          </BannerContentContainer>
          {close && (
            <BannerClose
              onClick={close}
              tooltip={closeTooltip}
              styles={subcomponentStyles?.close}
            />
          )}
        </>
      )}
    </BannerContainer>
  );
};

export const Banner = InternalBanner as typeof InternalBanner & {
  _Actions: typeof BannerActions;
  _Close: typeof BannerClose;
  _Container: typeof BannerContainer;
  _Content: typeof BannerContent;
  _ContentContainer: typeof BannerContentContainer;
  _Heading: typeof BannerHeading;
  _Icon: typeof BannerIcon;
};

Banner._Actions = BannerActions;
Banner._Close = BannerClose;
Banner._Container = BannerContainer;
Banner._Content = BannerContent;
Banner._ContentContainer = BannerContentContainer;
Banner._Heading = BannerHeading;
Banner._Icon = BannerIcon;

InternalBanner.displayName = 'Banner';
