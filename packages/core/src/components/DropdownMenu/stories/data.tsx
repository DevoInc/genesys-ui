import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { DropdownItem } from '../declarations';
import { Tag } from '../../Tag';

export const data: DropdownItem[] = [
  {
    type: 'itemSelectable',
    label: 'Pixel grid',
    shortcut: "⌘ '",
    title: 'Tooltip',
    state: 'featured',
    appendContent: <Tag text="Warning" colorScheme="warning" size="sm" />,
    onChange: () => {
      action('checkbox has changed');
    },
    defaultChecked: true,
  },
  {
    label: 'Layout Grids',
    title: 'Tooltip',
    shortcut: '^ G',
    appendContent: <Tag text="NEW" colorScheme="success" size="sm" />,
    onClick: () => {
      action('DropdownA11yMenu Item')('Clicked in Layout Grids!');
    },
  },
  {
    label: 'Delete Layout',
    icon: 'gi-bin_trash_recycle_delete_garbage_empty',
    shortcut: '⌘ E',
    onClick: () => {
      action('DropdownA11yMenu Item')('Clicked in Delete');
    },
  },
  {
    label: 'Mask Outlines',
    state: 'disabled',
    onClick: () => {
      action('DropdownA11yMenu Item')('Clicked in Mask Outlines');
    },
  },
  {
    label: 'Frame Outlines',
    highlighted: true,
    hidden: true,
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Frames');
    },
  },
  {
    label: 'Resource Use',
    state: 'disabled',
    onClick: () => {
      action('DropdownA11yMenu Item')('Clicked in Resource');
    },
  },
  {
    label: 'Rulers',
    shortcut: '⇧ R',
    onClick: () => {
      action('DropdownA11yMenu Item')('Clicked in Rulers');
    },
  },
  {
    label: 'Outlines',
    shortcut: '⌘ Y',
    onClick: () => {
      action('DropdownA11yMenu Item')('Clicked in Outlines');
    },
  },
  {
    type: 'itemSubMenu',
    label: 'Copy as',
    subMenu: [
      {
        type: 'itemSubMenu',
        label: 'Template 1',
        shortcut: '⌘ + s',
        subMenu: [
          {
            label: 'Template 2',
            shortcut: '⌘ + s',
            onClick: () => {
              action('DropdownA11yMenu Item')('Clicked in Template2');
            },
          },
          {
            label: 'Outlines 2.1',
            shortcut: '⌘ Y',
            onClick: () => {
              action('DropdownA11yMenu Item')('Clicked in 2.1');
            },
          },
        ],
      },
      {
        label: 'Outlines 1',
        shortcut: '⌘ Y',
        onClick: () => {
          action('DropdownA11yMenu Item')('Clicked outlines1');
        },
      },
      {
        label: 'Outlines 1.1',
        shortcut: '⌘ Y',
        onClick: () => {
          action('DropdownA11yMenu Item')('Clicked in 1.1');
        },
      },
    ],
  },
  { type: 'asSeparator' },
  {
    type: 'itemSelectable',
    label: 'Show/Hide UI 1',
    shortcut: '⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    type: 'itemSelectable',
    label: 'Show/Hide UI 2',
    shortcut: '⇧ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    type: 'itemSelectable',
    label: 'Show/Hide UI 3',
    shortcut: '⌥ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  { type: 'asSeparator' } as any,
  {
    label: 'Zoom In',
    shortcut: '+',
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Zoom IN');
    },
  },
  {
    label: 'Zoom out',
    shortcut: '-',
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in ZOom out');
    },
  },
  {
    label: 'Help',
    href: '/help',
    tooltip: {
      label: 'Text tooltip!!!',
      config: {
        effect: 'solid',
      },
    },
    target: '_blank',
    shortcut: '^ G',
    highlighted: true,
    appendTag: { label: 'NEW', colorScheme: 'success' },
  },
];
