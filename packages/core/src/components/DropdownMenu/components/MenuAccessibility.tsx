import * as React from 'react';

import { AccessibilityRolesProp } from '../declarations';
import {
  actionItemByKeyBoard,
  navigateBetweenSubMenuByKeyBoard,
  killEvent,
  navigateBetweenMenuItemByKeyboard,
} from '../helpers';

export interface MenuAccessibilityProps {
  /** Tabindex item */
  tabIndex?: number;
  /** Polymorphic prop to create a different tag or styled component
   * https://styled-components.com/docs/api#as-polymorphic-prop */
  as?: any; //TODO
  /** item's accessibility role: (menuitem, menucheckbox, ...) */
  role: AccessibilityRolesProp;
  /** action to be performed by the item when pressed on it (Mouse click and keyboard). */
  action: (event: React.MouseEvent<HTMLElement>) => void;
  /** The function when the item is hovered */
  actionOver?: (event: React.MouseEvent<HTMLElement>) => void;
  /** The function when the mouse leaves the item */
  actionLeave?: (event: React.MouseEvent<HTMLElement>) => void;
  /** If the item is disabled.  */
  disabled?: boolean;
  children?: React.ReactNode;
}

export const MenuAccessibility = React.forwardRef<
  HTMLElement,
  MenuAccessibilityProps
>(
  (
    {
      role,
      disabled,
      action,
      actionOver,
      actionLeave,
      children,
      as: Component = 'div',
      tabIndex = 1,
      ...rest
    },
    ref
  ) => {
    const hasPopup = rest?.['aria-haspopup'];
    let type: AccessibilityRolesProp | 'submenuitem' | 'item' = role;
    if (role === 'menuitem' && hasPopup) {
      type = 'submenuitem';
    } else if (role === 'menuitem' || role === 'menuitemcheckbox') {
      type = 'item';
    }

    const nextAction = React.useCallback(
      (event, actions) =>
        disabled ? killEvent(event) : actions[type]?.(event),
      [disabled, type]
    );

    const actionClick = React.useCallback(
      (event) => {
        const clickActionsTypes = {
          submenuitem: (event) => {
            if (
              event.target.closest(["[role='menuitem']"]) ===
              (ref as any).current // TODO: to refact
            ) {
              event.stopPropagation();
            }
          },
          item: (event) => {
            event.preventDefault();
            action(event);
          },
        };
        nextAction(event, clickActionsTypes);
      },
      [action, nextAction, ref]
    );

    const actionHover = React.useCallback(
      (event) => {
        const overActionsTypes = {
          submenuitem: actionOver,
        };

        const leaveActionsTypes = {
          submenuitem: actionLeave,
        };
        const MOUSE_HOVER_ACTIONS = {
          mouseover: overActionsTypes,
          mouseleave: leaveActionsTypes,
        };
        const mouseAction = MOUSE_HOVER_ACTIONS[event.type];
        nextAction(event, mouseAction);
      },
      [actionLeave, actionOver, nextAction]
    );

    const actionKeyBoard = React.useCallback(
      (event) => {
        const keydownActionsTypes = {
          menu: (event) => navigateBetweenMenuItemByKeyboard(event, action),
          submenuitem: (event) =>
            navigateBetweenSubMenuByKeyBoard(
              event,
              action,
              rest['aria-expanded'],
              ref
            ),
          item: (event) => actionItemByKeyBoard(event, action),
        };
        nextAction(event, keydownActionsTypes);
      },
      [action, nextAction, ref, rest]
    );

    return (
      <Component
        role={role}
        ref={ref}
        tabIndex={tabIndex}
        onKeyDown={actionKeyBoard}
        onClick={actionClick}
        onMouseOver={actionHover}
        onMouseLeave={actionHover}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

MenuAccessibility.displayName = 'MenuAccessibility';
