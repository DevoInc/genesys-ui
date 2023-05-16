import { action } from '@storybook/addon-actions';
import { DropdownItem } from '../declarations';

export const data: DropdownItem[] = [
  {
    type: 'itemCheckbox',
    label: 'Pixel grid',
    shortcut: "⌘ '",
    tooltip: {
      label: 'Text tooltip!!!',
      config: {
        effect: 'solid',
      },
    },
    highlighted: true,
    appendTag: { label: 'NEW', colorScheme: 'success' },

    onChange: () => {
      action('checkbox has changed');
    },
    checked: false,
  },
  {
    type: 'item',
    label: 'Layout Grids',
    tooltip: {
      label: 'Text tooltip!!!',
      config: {
        effect: 'solid',
      },
    },
    shortcut: '^ G',
    appendTag: { label: 'NEW', colorScheme: 'success' },
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Layout Grids!');
    },
  },
  {
    type: 'item',
    label: 'Delete Layout',
    icon: 'gi-bin_trash_recycle_delete_garbage_empty',
    shortcut: '⌘ E',
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Delete');
    },
  },
  {
    type: 'item',
    label: 'Mask Outlines',
    disabled: true,
    highlighted: true,
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Mask Outlines');
    },
  },
  {
    type: 'item',
    label: 'Frame Outlines',
    highlighted: true,
    hidden: true,
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Frames');
    },
  },
  {
    type: 'item',
    label: 'Resource Use',
    disabled: true,
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Resource');
    },
  },
  {
    type: 'item',
    label: 'Rulers',
    shortcut: '⇧ R',
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Rulers');
    },
  },
  {
    type: 'item',
    label: 'Outlines',
    shortcut: '⌘ Y',
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Outlines');
    },
  },
  {
    type: 'itemSubMenu',
    label: 'Copy as',
    subMenuDirection: 'right',
    subMenu: [
      {
        type: 'itemSubMenu',
        label: 'Template 1',
        shortcut: '⌘ + s',
        subMenu: [
          {
            type: 'item',
            label: 'Template 2',
            shortcut: '⌘ + s',
            action: () => {
              action('DropdownA11yMenu Item')('Clicked in Template2');
            },
          },
          {
            type: 'item',
            label: 'Outlines 2.1',
            shortcut: '⌘ Y',
            action: () => {
              action('DropdownA11yMenu Item')('Clicked in 2.1');
            },
          },
        ],
      },
      {
        type: 'item',
        label: 'Outlines 1',
        shortcut: '⌘ Y',
        action: () => {
          action('DropdownA11yMenu Item')('Clicked outlines1');
        },
      },
      {
        type: 'item',
        label: 'Outlines 1.1',
        shortcut: '⌘ Y',
        action: () => {
          action('DropdownA11yMenu Item')('Clicked in 1.1');
        },
      },
    ],
  },
  { type: 'separator' },
  {
    type: 'itemCheckbox',
    label: 'Show/Hide UI 1',
    shortcut: '⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    type: 'itemCheckbox',
    label: 'Show/Hide UI 2',
    shortcut: '⇧ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  {
    type: 'itemCheckbox',
    label: 'Show/Hide UI 3',
    shortcut: '⌥ ⌘ \\',
    checked: false,
    onChange: () => ({}),
  },
  { type: 'separator' } as any,
  {
    type: 'item',
    label: 'Zoom In',
    shortcut: '+',
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in Zoom IN');
    },
  },
  {
    type: 'item',
    label: 'Zoom out',
    shortcut: '-',
    action: () => {
      action('DropdownA11yMenu Item')('Clicked in ZOom out');
    },
  },
  {
    type: 'itemLink',
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
