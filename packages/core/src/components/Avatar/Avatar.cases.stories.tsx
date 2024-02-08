import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Avatar, Badge, Modal, Typography } from '../';

const EXAMPLE_AVATAR_IMG = 'https://i.pravatar.cc/300';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Media/Avatar/Cases',
  component: Avatar,
  args: {
    bordered: false,
    disabled: false,
    colorScheme: 'neutral',
    imageFit: 'cover',
    size: 'md',
    variant: 'circle',
    imageSrc: EXAMPLE_AVATAR_IMG,
    onClick: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const CustomSizeSquare: Story = {
  args: {
    customSize: { square: '12rem' },
    name: 'Rick Sanchez',
  },
};

export const CustomSizeSpecificSize: Story = {
  args: {
    customSize: { width: '12rem', height: '3rem' },
    name: 'Rick Sanchez',
    variant: 'rounded',
  },
};

export const CustomSizeOnlyOne: Story = {
  args: {
    customSize: { width: '12rem' },
    name: 'Rick Sanchez',
    variant: 'rounded',
  },
};

export const CustomSizeSVG: Story = {
  args: {
    customSize: { width: '5.1rem', height: '7rem' },
    name: 'Download file',
    variant: 'square',
    imageSrc:
      'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/pencil.svg',
  },
};

export const WithBadgeText: Story = {
  args: {
    name: 'Rick Sanchez :: version 9',
    badge: ({ colorScheme, size }) => (
      <Badge colorScheme={colorScheme} size={size} text={'9'} />
    ),
  },
};

export const WithBadgeIcon: Story = {
  args: {
    name: 'Rick Sanchez :: version 9',
    badge: ({ colorScheme, size }) => (
      <Badge
        colorScheme={colorScheme}
        size={size}
        icon="gi-diamond_prize_award_jewellery_ring"
      />
    ),
  },
};

export const WithBadgeCustomColor: Story = {
  args: {
    name: 'Rick Sanchez :: online',
    badge: ({ size }) => <Badge colorScheme="success" size={size} />,
    imageSrc: EXAMPLE_AVATAR_IMG,
  },
};

export const InitialsInsteadImage: Story = {
  args: { name: 'Rick Sanchez', imageSrc: undefined },
};

export const WithColorScheme: Story = {
  args: {
    name: 'Rick Sanchez',
    colorScheme: 'data-teal',
    imageSrc: undefined,
  },
};

export const ButtonEditable: Story = {
  args: {
    'aria-controls': 'modaleditprofile',
    'aria-haspopup': true,
    customSize: { square: '8rem' },
    name: 'Edit profile',
    iconOnHover: 'gi-pencil_edit',
  },
  render: (args) =>
    ((args) => {
      const [isOpen, setOpen] = React.useState(false);
      return (
        <>
          {isOpen && (
            <Modal
              onRequestClose={() => setOpen(false)}
              headerTitle="Avatar edition"
            >
              <Typography.Paragraph>
                (Your avatar edition form goes here)
              </Typography.Paragraph>
            </Modal>
          )}
          <Avatar {...args} onClick={() => setOpen(true)} />
        </>
      );
    })(args),
};

export const ButtonExpandable: Story = {
  args: {
    'aria-controls': 'lightbox',
    'aria-haspopup': true,
    customSize: { square: '8rem' },
    name: 'Expand avatar image',
    iconOnHover: 'gi-zoom_expand_maximize_window',
    onClick: () => console.info('Opening lightbox to expand profile image'),
  },
};

export const Clickable: Story = {
  args: {
    'aria-controls': 'lightbox',
    'aria-haspopup': true,
    bordered: false,
    colorScheme: 'neutral',
    customSize: { square: '12rem' },
    disabled: false,
    iconOnHover: 'gi-zoom_expand_maximize_window',
    imageFit: 'cover',
    imageSrc: EXAMPLE_AVATAR_IMG,
    name: 'Expand avatar image',
    onClick: () => console.info('Opening lightbox to expand profile image'),
    size: 'md',
    variant: 'circle',
  },
};

export const Link: Story = {
  args: {
    bordered: false,
    colorScheme: 'neutral',
    customSize: { square: '12rem' },
    disabled: false,
    href: 'https://www.devo.com',
    imageFit: 'cover',
    imageSrc: EXAMPLE_AVATAR_IMG,
    name: 'Example',
    onClick: undefined,
    size: 'md',
    target: '_blank',
    variant: 'circle',
  },
};
