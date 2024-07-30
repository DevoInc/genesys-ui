import * as React from 'react';

import type { IBanner } from './declarations';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';

import {
  BannerAction,
  BannerActions,
  BannerClose,
  BannerContainer,
  BannerContent,
  BannerContentContainer,
  BannerHeading,
  BannerIcon,
  BannerSubtleAction,
} from './components';

export interface BannerProps
  extends IStyledPolymorphic,
    IStyledOverloadCss,
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IBanner {}

export const InternalBanner: React.FC<BannerProps> = ({
  actions,
  as,
  children,
  close,
  closeTooltip,
  content,
  hideIcon,
  id,
  role,
  status = 'info',
  style,
  subtle,
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
      style={style}
      subtle={subtle}
      tooltip={tooltip}
    >
      {children || (
        <>
          {!hideIcon && (
            <BannerIcon status={status} style={{ flex: '0 0 auto' }} />
          )}
          <BannerContentContainer subtle={subtle}>
            {title && <BannerHeading subtle={subtle}>{title}</BannerHeading>}
            {content && (
              <BannerContent subtle={subtle}>{content}</BannerContent>
            )}
            {actions && <BannerActions>{actions}</BannerActions>}
          </BannerContentContainer>
          {close && <BannerClose onClick={close} tooltip={closeTooltip} />}
        </>
      )}
    </BannerContainer>
  );
};

export const Banner = InternalBanner as typeof InternalBanner & {
  _Actions: typeof BannerActions;
  Action: typeof BannerAction;
  _Close: typeof BannerClose;
  _Container: typeof BannerContainer;
  _Content: typeof BannerContent;
  _ContentContainer: typeof BannerContentContainer;
  _Heading: typeof BannerHeading;
  _Icon: typeof BannerIcon;
  SubtleAction: typeof BannerSubtleAction;
};

Banner.Action = BannerAction;
Banner._Actions = BannerActions;
Banner._Close = BannerClose;
Banner._Container = BannerContainer;
Banner._Content = BannerContent;
Banner._ContentContainer = BannerContentContainer;
Banner._Heading = BannerHeading;
Banner._Icon = BannerIcon;
Banner.SubtleAction = BannerSubtleAction;

InternalBanner.displayName = 'Banner';
Banner.Action.displayName = 'Banner.Action';
Banner._Actions.displayName = 'Banner._Actions';
Banner._Close.displayName = 'Banner._Close';
Banner._Container.displayName = 'Banner._Container';
Banner._Content.displayName = 'Banner._Content';
Banner._ContentContainer.displayName = 'Banner._ContentContainer';
Banner._Heading.displayName = 'Banner._Heading';
Banner._Icon.displayName = 'Banner._Icon';
Banner.SubtleAction.displayName = 'Banner.SubtleAction';
