import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IDataAttrs, IGlobalAttrs } from '../../declarations/htmlAttrs';
import type {
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations/styled';
import type {
  TInlineMessageColorScheme,
  TInlineMessageSize,
} from './declarations';
import type { TButtonExpandableState, TButtonSize } from '../Button';
import { WithRequired } from '../../typeFunctions';
import { mergeStyles } from '../../helpers';
import { inlineMessageContainerMixin } from './helpers';
import { InlineMessageContext } from './context';
import { Popover, type PopoverProps } from '../Popover';
import {
  InlineMessageArrow,
  InlineMessageBanner,
  InlineMessagePanel,
  InlineMessageTrigger,
} from './components';

export interface InlineMessageProps
  extends IDataAttrs,
    WithRequired<Omit<IGlobalAttrs, 'title'>, 'id'>,
    IStyledOverloadCss,
    IStyledPolymorphic,
    Omit<PopoverProps, 'children'> {
  children?:
    | React.ReactNode
    | ((props: {
        toggle: (ev: React.MouseEvent<HTMLElement>) => void;
        isOpened: boolean;
        setOpened: React.Dispatch<React.SetStateAction<boolean>>;
        colorScheme: TInlineMessageColorScheme;
        size: TInlineMessageSize;
      }) => React.ReactNode);
  disabled?: boolean;
  draggable?: boolean;
  focused?: boolean;
  hovered?: boolean;
  size?: TInlineMessageSize;
  state?: TButtonExpandableState;
  status?: TInlineMessageColorScheme;
  tooltip?: string;
  trigger?: {
    Component?: React.ReactNode;
    icon?: React.ReactNode;
    size?: TButtonSize;
    secondaryText?: string;
    text?: string;
    tooltip?: string;
  };
}
const PartInlineMessage: React.FC<InlineMessageProps> = ({
  appendTo,
  as,
  children,
  draggable,
  id,
  isOpened,
  placement = 'right',
  state = 'enabled',
  status = 'help',
  strategy = 'fixed',
  size = 'md',
  style,
  tooltip,
  trigger,
  zIndex,
  ...restDataProps
}) => {
  const theme = useTheme();
  return (
    <Popover
      appendTo={appendTo}
      id={id}
      placement={placement}
      arrowConfig={
        draggable
          ? null
          : {
              component: ({ placement: innerPlacement, size }) => (
                <InlineMessage.Arrow
                  placement={innerPlacement}
                  size={size}
                  status={status}
                />
              ),
              size: 6,
            }
      }
      modifiers={
        draggable
          ? [
              {
                name: 'offset',
                options: {
                  offset: [0, 4],
                },
              },
            ]
          : []
      }
      isOpened={isOpened}
      strategy={strategy}
      zIndex={zIndex}
    >
      {({ toggle, ref, isOpened: innerIsOpened }) => (
        <InlineMessage.Trigger
          {...restDataProps}
          ref={ref}
          onClick={toggle}
          aria-activedescendant={id}
          aria-expanded={innerIsOpened}
          aria-controls={id}
          aria-haspopup="true"
          icon={trigger?.icon}
          id={`${id}__trigger`}
          size={trigger?.size}
          state={innerIsOpened ? 'expanded' : state}
          status={status}
          secondaryText={trigger?.secondaryText}
          text={trigger?.text}
          tooltip={trigger?.tooltip || tooltip}
          Trigger={trigger?.Component}
        />
      )}
      {({
        toggle,
        isOpened: innerIsOpened,
        placement: innerPlacement,
        setOpened,
      }) => (
        <Popover.Panel
          as={as}
          draggable={draggable}
          id={`${id}__content`}
          padding="0"
          role={status === 'error' ? 'alert' : null}
          style={mergeStyles(
            ...inlineMessageContainerMixin({
              draggable,
              placement: innerPlacement,
              status,
              theme,
            }),
            style,
          )}
          width="auto"
        >
          <InlineMessageContext.Provider value={{ colorScheme: status, size }}>
            {typeof children === 'function'
              ? children({
                  toggle,
                  isOpened: innerIsOpened,
                  setOpened,
                  colorScheme: status,
                  size,
                })
              : children}
          </InlineMessageContext.Provider>
        </Popover.Panel>
      )}
    </Popover>
  );
};

export const InlineMessage = PartInlineMessage as typeof PartInlineMessage & {
  Arrow: typeof InlineMessageArrow;
  Banner: typeof InlineMessageBanner;
  Panel: typeof InlineMessagePanel;
  Trigger: typeof InlineMessageTrigger;
};

InlineMessage.Arrow = InlineMessageArrow;
InlineMessage.Banner = InlineMessageBanner;
InlineMessage.Panel = InlineMessagePanel;
InlineMessage.Trigger = InlineMessageTrigger;

PartInlineMessage.displayName = 'InlineMessage';
InlineMessage.Arrow.displayName = 'InlineMessage.Arrow';
InlineMessage.Banner.displayName = 'InlineMessage.Banner';
InlineMessage.Panel.displayName = 'InlineMessage.Panel';
InlineMessage.Trigger.displayName = 'InlineMessage.Trigger';
