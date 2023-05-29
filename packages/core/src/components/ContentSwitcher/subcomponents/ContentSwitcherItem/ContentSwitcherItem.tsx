import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

// constants
import { CONTENT_SWITCHER_ITEM_SIZE_MAP } from '../../constants';

// declarations
import { Button, ButtonProps } from '../../..';
import {
  BaseSize,
  FocusEventAttrProps,
  GlobalAttrProps,
  MouseEventAttrProps,
  StyledOverloadCssProps,
  TriggerAriaProps,
} from '../../../../declarations';

// helpers
import {
  contentSwitcherItemMixin,
  ContentSwitcherItemMixinProps,
} from './contentSwitcherItemMixin';

export interface ContentSwitcherItemProps
  extends FocusEventAttrProps,
    MouseEventAttrProps,
    Pick<TriggerAriaProps, 'aria-controls'>,
    Omit<GlobalAttrProps, 'role'>,
    Pick<ButtonProps, 'children' | 'icon' | 'onChange'>,
    StyledOverloadCssProps,
    Omit<ContentSwitcherItemMixinProps, 'theme'> {
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
  styles,
  tooltip,
  wide,
}) => {
  const theme = useTheme();
  const selected = state === 'selected';
  return (
    <Button
      aria-controls={ariaControls}
      aria-selected={selected}
      as="label"
      colorScheme="quiet"
      icon={icon}
      id={id}
      onChange={onChange}
      onClick={onClick}
      role="tab"
      selectionScheme="single"
      size={CONTENT_SWITCHER_ITEM_SIZE_MAP[size]}
      state={selected ? 'selected' : state}
      styles={concat(contentSwitcherItemMixin({ state, theme, wide }), styles)}
      tooltip={tooltip}
      wide={wide}
    >
      {children}
    </Button>
  );
};
