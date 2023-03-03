import * as React from 'react';

import { TagProps } from '../../';

import { MenuItem } from '../components/MenuItem';
import { StyledItem, StyledIcon, StyledShortcut, StyledTag } from '../styled';

interface ItemProps {
  /** Forward item reference to manage the item's accessibility actions */
  forwardedRef: React.Ref<HTMLElement> | null;
  /** Label of the item */
  label: string;
  /** Tooltip on item hover. This is object with the tooltip confg: Label, position, ... */
  tooltip?: { label: string; config: { [key: string]: any } }; // TODO add config types
  /** action to be performed by the item when pressed on it (Mouse click and keyboard). */
  action: (event: React.MouseEvent<HTMLElement>) => void;
  /** Icon for the item. */
  icon: string;
  /** Shortcut text for the item. */
  shortcut: string;
  /** AppendTag config for the item. This is object with the appendTag confgi: Label, color, ... */
  appendTag: {
    label?: TagProps['text'];
    colorScheme?: TagProps['colorScheme'];
  };
  /** If the item is disabled */
  disabled: boolean;
  /** If the item is highlighted */
  highlighted: boolean;
}

export const Item: React.FC<ItemProps> = ({
  forwardedRef,
  label,
  action,
  icon,
  shortcut,
  tooltip,
  appendTag,
  disabled,
  highlighted,
}) => {
  return (
    <MenuItem
      disabled={disabled}
      highlighted={highlighted}
      forwardedRef={forwardedRef}
      role={'menuitem'}
      action={action}
      aria-keyshortcuts={shortcut}
      tooltip={tooltip}
      label={label}
    >
      <StyledItem>
        {icon && <StyledIcon aria-hidden="true" iconId={icon} />}
        <span>{label}</span>
        {shortcut && (
          <StyledShortcut aria-hidden="true" size="sm">
            {shortcut}
          </StyledShortcut>
        )}
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
