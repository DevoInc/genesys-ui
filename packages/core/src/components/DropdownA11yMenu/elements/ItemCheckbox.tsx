import * as React from 'react';

import { MenuItem } from '../components/MenuItem';
import {
  StyledItem,
  StyledShortcut,
  StyledCheckIcon,
  StyledTag,
} from '../styled';

interface ItemCheckboxProps {
  /** Forward item reference to manage the item's accessibility actions */
  forwardedRef?: React.Ref<HTMLElement> | null;
  /** Label of the item checkbox */
  label?: string;
  /** Tooltip on item hover. This is object with the tooltip confg: Label, position, ... */
  tooltip?: { label: string; config: { [key: string]: any } }; // TODO add config types
  /** If the item is checked.  */
  checked?: boolean;
  /** onChange callback to be performed by the item when pressed on it (Mouse click and keyboard).
   * This callback has to handle the checked property of the component */
  onChange?: any;
  /** If the item is disabled.  */
  disabled?: boolean;
  /** Shortcut text for the item. */
  shortcut?: string;
  /** AppendTag config for the item. This is object with the appendTag confgi: Label, color, ... */
  appendTag?: { [key: string]: any };
  /** If the item is highlighted.  */
  highlighted?: boolean;
}

export const ItemCheckbox = ({
  forwardedRef,
  label,
  tooltip,
  onChange,
  checked,
  disabled,
  highlighted,
  shortcut,
  appendTag,
}: ItemCheckboxProps) => {
  const actionEvent = React.useCallback(
    (event) => {
      onChange(event);
      event.stopPropagation();
    },
    [onChange]
  );

  return (
    <MenuItem
      disabled={disabled}
      highlighted={highlighted}
      selected={checked}
      role={'menuitemcheckbox'}
      forwardedRef={forwardedRef}
      action={actionEvent}
      aria-checked={checked}
      tooltip={tooltip}
      label={label}
    >
      <StyledItem>
        <StyledCheckIcon
          selected={checked}
          iconId="gi-check_thick"
          aria-keyshortcuts={shortcut}
        />
        <span>{label}</span>
        {shortcut && <StyledShortcut size="sm">{shortcut}</StyledShortcut>}
        {appendTag?.label && (
          <StyledTag
            text={appendTag.label}
            colorScheme={appendTag.colorScheme || 'success'}
            size="sm"
          />
        )}
      </StyledItem>
    </MenuItem>
  );
};
