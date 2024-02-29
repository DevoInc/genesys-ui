import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import type { GlobalAttrProps } from '../../declarations/htmlAttrs';
import type {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations/styled';

import { WithRequired } from '../../typeFunctions';
import { inlineMessageContainerMixin } from './helpers';

import { Popover, type PopoverProps } from '../Popover';
import type { IconButtonStatusProps } from '../IconButton';
import type { ButtonExpandableState, ButtonSize } from '../Button';

import {
  InlineMessageArrow,
  InlineMessageBanner,
  InlineMessagePanel,
  InlineMessageTrigger,
} from './components';

export interface InlineMessageProps
  extends WithRequired<Omit<GlobalAttrProps, 'title'>, 'id'>,
    StyledOverloadCssProps,
    StyledPolymorphicProps,
    Omit<PopoverProps, 'children'> {
  children?:
    | React.ReactNode
    | ((props: {
        toggle: (ev: React.MouseEvent<HTMLElement>) => void;
        isOpened: boolean;
        setOpened: React.Dispatch<React.SetStateAction<boolean>>;
      }) => React.ReactNode);
  disabled?: boolean;
  focused?: boolean;
  hovered?: boolean;
  state?: ButtonExpandableState;
  status?: IconButtonStatusProps['colorScheme'];
  tooltip?: string;
  trigger?: {
    Component?: React.ReactNode;
    icon?: string;
    size?: ButtonSize;
    secondaryText?: string;
    text?: string;
    tooltip?: string;
  };
}
const PartInlineMessage: React.FC<InlineMessageProps> = ({
  appendTo,
  as,
  children,
  id,
  isOpened,
  placement = 'right',
  state = 'enabled',
  status = 'help',
  strategy = 'fixed',
  styles,
  tooltip,
  trigger,
  zIndex,
}) => {
  const theme = useTheme();
  return (
    <Popover
      appendTo={appendTo}
      id={id}
      placement={placement}
      arrowConfig={{
        component: ({ placement: innerPlacement, size }) => (
          <InlineMessage.Arrow
            placement={innerPlacement}
            size={size}
            status={status}
          />
        ),
        size: 6,
      }}
      isOpened={isOpened}
      strategy={strategy}
      zIndex={zIndex}
    >
      {({ toggle, ref, isOpened: innerIsOpened }) => (
        <InlineMessage.Trigger
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
          id={`${id}__content`}
          padding="0"
          role={status === 'error' ? 'alert' : null}
          styles={concat(
            ...inlineMessageContainerMixin({
              placement: innerPlacement,
              status,
              theme,
            }),
            styles,
          )}
          width="auto"
        >
          {React.isValidElement(children)
            ? children
            : typeof children === 'function'
              ? children({
                  toggle,
                  isOpened: innerIsOpened,
                  setOpened,
                })
              : null}
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
