import * as React from 'react';

// constants
import { CONTENT_SWITCHER_ITEM_SIZE_MAP } from '../../constants';

// declarations
import { Button, ButtonProps } from '../../..';
import {
  BaseSize,
  FocusEventAttrProps,
  GlobalAttrProps,
  MouseEventAttrProps,
  TriggerAriaProps,
} from '../../../../declarations';

// styled
import {
  StyledContentSwitcherItem,
  StyledContentSwitcherItemProps,
} from './StyledContentSwitcherItem';

export interface ContentSwitcherItemProps
  extends FocusEventAttrProps,
    MouseEventAttrProps,
    Pick<TriggerAriaProps, 'aria-controls'>,
    Omit<GlobalAttrProps, 'role'>,
    Pick<ButtonProps, 'children' | 'icon' | 'onChange'>,
    StyledContentSwitcherItemProps {
  /** Size options for icon, text, padding... etc. */
  size?: BaseSize;
}

export const ContentSwitcherItem: React.FC<ContentSwitcherItemProps> = ({
  'aria-controls': ariaControls,
  children,
  icon,
  id,
  onChange,
  onClick,
  size = 'md',
  state = 'enabled',
  title,
  wide,
}) => {
  const selected = state === 'selected';
  return (
    <Button
      aria-controls={ariaControls}
      aria-selected={selected}
      as={StyledContentSwitcherItem}
      forwardedAs={'label'}
      colorScheme="quiet"
      icon={icon}
      id={id}
      onChange={onChange}
      onClick={onClick}
      role="tab"
      selectionScheme="single"
      size={CONTENT_SWITCHER_ITEM_SIZE_MAP[size]}
      state={selected ? 'selected' : state}
      title={title}
      type="button"
      wide={wide}
    >
      {children}
    </Button>
  );
};
