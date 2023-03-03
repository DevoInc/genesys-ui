import * as React from 'react';

import { MenuItem } from '../components/MenuItem';
import {
  StyledItemLink,
  StyledIcon,
  StyledShortcut,
  StyledTag,
} from '../styled';

interface ItemLinkProps {
  /** Forward item reference to manage the item's accessibility actions */
  forwardedRef?: React.Ref<HTMLElement> | null;
  /** Label of the item link */
  label?: string;
  /** Tooltip on item hover. This is object with the tooltip confg: Label, position, ... */
  tooltip?: { label: string; config: { [key: string]: any } };
  /** Href of the item link */
  href?: string;
  /** Target of the item link */
  target?: '_blank' | '_self';
  /** action to be performed by the item when pressed on it (Mouse click and keyboard). */
  action?: (event: React.MouseEvent<HTMLElement>) => void;
  /** Icon for the item. */
  icon?: string;
  /** Shortcut text for the item. */
  shortcut?: string;
  /** AppendTag config for the item. This is object with the appendTag confgi: Label, color, ... */
  appendTag?: { [key: string]: any };
  /** If the item is disabled */
  disabled?: boolean;
  /** If the item is highlighted */
  highlighted?: boolean;
}

export const ItemLink = ({
  forwardedRef,
  label,
  tooltip,
  href,
  action,
  shortcut,
  disabled,
  highlighted,
  appendTag,
  icon,
  target = '_self',
}: ItemLinkProps) => {
  const navigate = React.useCallback(
    (event) => (action ? action(event) : window.open(href, target)),
    [action, href, target]
  );

  const onClick = React.useCallback(() => false, []);

  return (
    <MenuItem
      disabled={disabled}
      highlighted={highlighted}
      role={'menuitem'}
      forwardedRef={forwardedRef}
      action={navigate}
      tooltip={tooltip}
      label={label}
    >
      <StyledItemLink
        disabled={disabled}
        href={href}
        onClick={onClick}
        target={target}
        tabIndex={-1}
      >
        {icon && <StyledIcon iconId={icon} />}
        <span>{label}</span>
        {shortcut && <StyledShortcut size="sm">{shortcut}</StyledShortcut>}
        {appendTag?.label && (
          <StyledTag
            text={appendTag.label}
            colorScheme={appendTag.colorScheme || 'success'}
            size="sm"
          />
        )}
      </StyledItemLink>
    </MenuItem>
  );
};
