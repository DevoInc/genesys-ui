import * as React from 'react';

import { Tag } from '../../Tag';
import { ProgressBar } from '../../ProgressBar';
import { MenuItemsObj } from '../declarations';

const appendContent = <Tag text="NEW" colorScheme="success" size="sm" />;

export const defaultData: MenuItemsObj = [
  {
    title: 'eventdate',
    meta: '~15,716',
    shortcut: '⌘ + D',
    appendContent,
    tooltip: 'This is the event date in ' + 'dd/MM/YYYY format',
  },
  { title: 'machine', icon: 'real_time', shortcut: '⌘ + D' },
  { isHeading: true, heading: 'More items' },
  { title: 'environment', expandable: true },
  {
    title: 'title with larger text to test truncate behavior',
    meta: '~15,716',
    shortcut: '⌘ + D',
  },
  {
    title: 'message',
    expandable: true,
    description:
      'Citizens of distant epochs vastness is bearable only through love Drake Equation',
  },
];

export const extraContentData = defaultData.map((data) =>
  data.hasOwnProperty('title')
    ? { ...data, extraContent: <ProgressBar size="sm" percent={60} /> }
    : data
);

export const selectableData = defaultData.map((data) =>
  data.hasOwnProperty('title')
    ? { ...data, selectable: true, selected: false }
    : data
);

export const dropdownData: MenuItemsObj = [
  {
    title: 'Pixel grid',
    shortcut: "⌘ '",
    appendContent: appendContent,
    selectable: true,
    selected: true,
  },
  { title: 'Layout Grids', shortcut: '^ G' },
  {
    title: 'Delete Layout',
    icon: 'bin_trash_recycle_delete_garbage_empty',
    shortcut: '⌘ E',
  },
  { title: 'Mask Outlines', highlighted: true },
  { title: 'Frame Outlines', highlighted: true },
  { title: 'Resource Use', disabled: true },
  { title: 'Rulers', shortcut: '⇧ R' },
  { title: 'Outlines', shortcut: '⌘ Y' },
  { title: 'Copy as', expandable: true },
  { asSeparator: true },
  {
    title: 'Show/Hide UI',
    shortcut: '⌘ \\',
    selectable: true,
    selected: true,
  },
  { title: 'Show/Hide UI', shortcut: '⇧ ⌘ \\', selectable: true },
  { title: 'Show/Hide UI', shortcut: '⌥ ⌘ \\', selectable: true },
  { asSeparator: true },
  { title: 'Zoom In', shortcut: '+' },
  { title: 'Zoom out', shortcut: '-' },
];
