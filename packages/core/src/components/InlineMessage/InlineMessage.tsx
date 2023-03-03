import * as React from 'react';
import { useTheme } from 'styled-components';
import * as PopperJS from '@popperjs/core';

import { IconButtonStatusProps, Popper } from '../';
import { ButtonExpandableState, ButtonSize } from '../Button';
import {
  InlineMessageBanner,
  InlineMessagePanel,
  InlineMessageTrigger,
} from './components';

import { StyledInlineMessage } from './StyledInlineMessage';
import { StyledInlineMessageArrow } from './StyledInlineMessageArrow';
import { GlobalAttrProps } from '../../declarations';
import { WithRequired } from '../../typeFunctions';

export interface InlineMessageProps
  extends WithRequired<Omit<GlobalAttrProps, 'title'>, 'id'> {
  appendTo?: HTMLElement;
  children?: React.ReactNode;
  disabled?: boolean;
  focused?: boolean;
  hovered?: boolean;
  visible?: boolean;
  placement?: PopperJS.Placement;
  setVisible?: (visible: boolean) => void;
  state?: ButtonExpandableState;
  status?: IconButtonStatusProps['colorScheme'];
  strategy?: PopperJS.PositioningStrategy;
  tooltip?: string;
  trigger?: {
    Component?: React.ReactNode;
    icon?: string;
    size?: ButtonSize;
    secondaryText?: string;
    text?: string;
    title?: string;
  };
  zIndex?: React.CSSProperties['zIndex'];
}
const PartInlineMessage: React.FC<InlineMessageProps> = ({
  appendTo,
  children,
  id,
  visible,
  placement = 'right',
  setVisible,
  state = 'enabled',
  status = 'help',
  strategy,
  trigger,
  zIndex,
}) => {
  const { tokens } = useTheme();
  const zIndexDefault = tokens.alias.elevation.zIndex.depth.activated;
  return (
    <Popper
      appendTo={appendTo}
      arrow={<StyledInlineMessageArrow status={status} />}
      id={id}
      visible={visible}
      placement={placement}
      setIsVisible={setVisible}
      strategy={strategy}
      trigger={
        <InlineMessageTrigger
          aria-activedescendant={id}
          aria-expanded={visible}
          aria-controls={id}
          icon={trigger?.icon}
          id={`${id}__trigger`}
          size={trigger?.size}
          state={state}
          status={status}
          secondaryText={trigger?.secondaryText}
          text={trigger?.text}
          title={trigger?.title}
          Trigger={trigger?.Component}
        />
      }
      zIndex={zIndex || zIndexDefault}
    >
      <StyledInlineMessage
        elevation={'activated'}
        placement={placement}
        role={status === 'error' ? 'alert' : null}
        status={status}
        zIndex={zIndex}
      >
        {children}
      </StyledInlineMessage>
    </Popper>
  );
};

export const InlineMessage: typeof PartInlineMessage & {
  Banner?: typeof InlineMessageBanner;
  Panel?: typeof InlineMessagePanel;
} = PartInlineMessage;

InlineMessage.Banner = InlineMessageBanner;
InlineMessage.Panel = InlineMessagePanel;
