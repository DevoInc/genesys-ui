import * as React from 'react';
import { useTheme } from 'styled-components';

import { AppMenu } from '../AppMenu';
import { appMenuData } from './index';
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { Panel } from '../../Panel';

export const StoryChildren = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'right',
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift()],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
  ]);

  const theme = useTheme();
  const popoverId = 'menu-popover';
  return (
    <>
      <AppMenu.Header
        logoAlt="Devo Logo"
        logo="../../../../../.storybook/assets/images/devo-logo-dark.svg"
        collapsedLogo="../../../../../.storybook/assets/images/devo-logo-symbol-dark.svg"
      />
      <AppMenu.Body>
        {appMenuData.map((menuItem, idx) => {
          return menuItem.popoverContent ? (
            <React.Fragment key={idx}>
              <AppMenu.Item
                ref={refs.setReference}
                {...getReferenceProps()}
                aria-controls={`item-${idx}-${popoverId}`}
                aria-haspopup
                counter={menuItem.counter}
                expandable={Boolean(menuItem.popoverContent)}
                icon={menuItem.icon}
                isBeta={menuItem.isBeta}
                label={menuItem.label}
                state={
                  menuItem.isCurrent
                    ? 'active'
                    : isOpen
                      ? 'expanded'
                      : 'enabled'
                }
                tooltip={menuItem.tooltip}
              />
              {isOpen && (
                <FloatingPortal>
                  <div
                    ref={refs.setFloating}
                    {...getFloatingProps()}
                    style={{
                      ...floatingStyles,
                      zIndex: theme.alias.elevation.zIndex.depth.activated,
                    }}
                    id={`item-${idx}-${popoverId}`}
                  >
                    <Panel elevation="activated" minWidth="22rem" width="38rem">
                      {menuItem.popoverContent}
                    </Panel>
                  </div>
                </FloatingPortal>
              )}
            </React.Fragment>
          ) : menuItem.isSeparator ? (
            <AppMenu.Separator key={idx} />
          ) : menuItem.isHeading ? (
            <AppMenu.Heading
              key={idx}
              text={menuItem.text}
              collapsedText={menuItem.collapsedText}
            />
          ) : (
            <AppMenu.Item
              href={menuItem.href}
              counter={menuItem.counter}
              key={idx}
              icon={menuItem.icon}
              isBeta={menuItem.isBeta}
              label={menuItem.label}
              state={menuItem.isCurrent ? 'active' : 'enabled'}
              tooltip={menuItem.tooltip}
            />
          );
        })}
      </AppMenu.Body>
      <AppMenu.Footer />
    </>
  );
};
