import * as React from 'react';
import { useTheme } from 'styled-components';
import {
  type Placement,
  type Strategy,
  FloatingArrow,
} from '@floating-ui/react';

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
import {
  InlineMessageArrow,
  InlineMessageBanner,
  InlineMessagePanel,
  InlineMessageTrigger,
} from './components';
import { InlineMessageFloatingElement } from './InlineMessageFloatingElement';
import { InlineMessagePortal } from './InlineMessagePortal';
import { InlineMessageContext } from './context';
import { useFloatingInlineMessage } from './useFloatingInlineMessage';

export interface InlineMessageProps
  extends IDataAttrs,
    WithRequired<Omit<IGlobalAttrs, 'title'>, 'id'>,
    IStyledOverloadCss,
    IStyledPolymorphic {
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
  isOpened?: boolean;
  placement?: Placement;
  strategy?: Strategy;
  zIndex?: number;
  /** Append to another `HTMLElement`, `null` for relative to its trigger and
   * `undefined` for appent to `body` */
  appendTo?: HTMLElement | null;
}

const PartInlineMessage: React.FC<InlineMessageProps> = ({
  appendTo,
  as,
  children,
  draggable,
  id,
  isOpened = false,
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

  const {
    getReferenceProps,
    getFloatingProps,
    refs,
    floatingStyles,
    middlewareData,
    context,
    isOpen,
    arrowRef,
    setIsOpen,
  } = useFloatingInlineMessage({ isOpened, placement, strategy });

  return (
    <>
      <InlineMessage.Trigger
        {...restDataProps}
        ref={refs.setReference}
        {...getReferenceProps()}
        aria-activedescendant={id}
        aria-expanded={isOpen}
        aria-controls={id}
        aria-haspopup="true"
        icon={trigger?.icon}
        id={`${id}__trigger`}
        size={trigger?.size}
        state={isOpen ? 'expanded' : state}
        status={status}
        secondaryText={trigger?.secondaryText}
        text={trigger?.text}
        tooltip={trigger?.tooltip || tooltip}
        Trigger={trigger?.Component}
      />
      {isOpen && (
        <InlineMessagePortal appendTo={appendTo}>
          <InlineMessageFloatingElement
            setFloating={refs.setFloating}
            getFloatingProps={getFloatingProps}
            floatingStyles={floatingStyles}
            zIndex={zIndex}
            as={as}
            draggable={draggable}
            id={id}
            status={status}
            middlewareData={middlewareData}
            style={style}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={theme.cmp.inlineMessage.color.border[status]}
            />
            <InlineMessageContext.Provider
              value={{ colorScheme: status, size }}
            >
              {typeof children === 'function'
                ? children({
                    toggle: () => setIsOpen((old) => !old),
                    isOpened: isOpen,
                    setOpened: setIsOpen,
                    colorScheme: status,
                    size,
                  })
                : children}
            </InlineMessageContext.Provider>
          </InlineMessageFloatingElement>
        </InlineMessagePortal>
      )}
    </>
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
