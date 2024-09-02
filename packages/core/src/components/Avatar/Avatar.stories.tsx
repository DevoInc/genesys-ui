import { Meta, StoryObj } from '@storybook/react';

import {
  AVATAR_COLOR_SCHEME_DEFAULT_VALUE,
  AVATAR_IMAGE_FIT_DEFAULT_VALUE,
  AVATAR_IMAGE_POSITION_DEFAULT_VALUE,
  AVATAR_SIZE_DEFAULT_VALUE,
  AVATAR_VARIANT_DEFAULT_VALUE,
} from './constants';

const EXAMPLE_AVATAR_IMG = 'https://i.pravatar.cc/300';
import { Avatar, Badge, Modal, Typography } from '../';
import {
  GIDiamondPrizeAwardJewelleryRing,
  GIPencilEdit,
  GIZoomExpandMaximizeWindow,
} from '@devoinc/genesys-icons';
import * as React from 'react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Media/Avatar',
  component: Avatar,
  args: {
    colorScheme: AVATAR_COLOR_SCHEME_DEFAULT_VALUE,
    imageFit: AVATAR_IMAGE_FIT_DEFAULT_VALUE,
    imagePosition: AVATAR_IMAGE_POSITION_DEFAULT_VALUE,
    imageSrc: EXAMPLE_AVATAR_IMG,
    name: 'Rick Sanchez',
    size: AVATAR_SIZE_DEFAULT_VALUE,
    variant: AVATAR_VARIANT_DEFAULT_VALUE,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Base: Story = {};

export const CustomUsage: Story = {
  tags: ['isHidden'],
  args: {
    size: 'xl',
  },
  render: (args) =>
    ((args) => (
      <Avatar._Container {...args}>
        <Avatar._Image alt="example" />
        <Avatar._ScreenReadersOnly>Rick Sanchez</Avatar._ScreenReadersOnly>
        <Avatar._Badge size="lg" style={{ backgroundColor: 'orange' }} />
      </Avatar._Container>
    ))(args),
};

export const CustomSizeSquare: Story = {
  tags: ['isHidden'],
  args: {
    customSize: { square: '12rem' },
    name: 'Rick Sanchez',
  },
};

export const CustomSizeSpecificSize: Story = {
  tags: ['isHidden'],
  args: {
    customSize: { width: '12rem', height: '3rem' },
    name: 'Rick Sanchez',
    variant: 'rounded',
  },
};

export const CustomSizeOnlyOne: Story = {
  tags: ['isHidden'],
  args: {
    customSize: { width: '12rem' },
    name: 'Rick Sanchez',
    variant: 'rounded',
  },
};

export const CustomSizeSVG: Story = {
  tags: ['isHidden'],
  args: {
    customSize: { width: '5.1rem', height: '7rem' },
    name: 'Download file',
    variant: 'square',
    imageSrc:
      'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/pencil.svg',
  },
};

export const WithBadgeText: Story = {
  tags: ['isHidden'],
  args: {
    name: 'Rick Sanchez :: version 9',
    badge: ({ colorScheme, size }) => (
      <Badge colorScheme={colorScheme} size={size} text={'9'} />
    ),
  },
};

export const WithBadgeIcon: Story = {
  tags: ['isHidden'],
  args: {
    name: 'Rick Sanchez :: version 9',
    badge: ({ colorScheme, size }) => (
      <Badge
        colorScheme={colorScheme}
        size={size}
        icon={<GIDiamondPrizeAwardJewelleryRing />}
      />
    ),
  },
};

export const WithBadgeCustomColor: Story = {
  tags: ['isHidden'],
  args: {
    name: 'Rick Sanchez :: online',
    badge: ({ size }) => <Badge colorScheme="success" size={size} />,
    imageSrc: EXAMPLE_AVATAR_IMG,
  },
};

export const InitialsInsteadImage: Story = {
  tags: ['isHidden'],
  args: { name: 'Rick Sanchez', imageSrc: undefined },
};

export const WithColorScheme: Story = {
  tags: ['isHidden'],
  args: {
    name: 'Rick Sanchez',
    colorScheme: 'data-teal',
    imageSrc: undefined,
  },
};

export const ButtonEditable: Story = {
  tags: ['isHidden'],
  args: {
    'aria-controls': 'modaleditprofile',
    'aria-haspopup': true,
    customSize: { square: '8rem' },
    name: 'Edit profile',
    iconOnHover: <GIPencilEdit />,
  },
  render: (args) =>
    ((args) => {
      const [isOpen, setOpen] = React.useState(false);
      return (
        <>
          {isOpen && (
            <Modal onRequestClose={() => setOpen(false)}>
              <Modal.Header title="Avatar edition" />
              <Modal.Body>
                <Typography.Paragraph>
                  (Your avatar edition form goes here)
                </Typography.Paragraph>
              </Modal.Body>
            </Modal>
          )}
          <Avatar {...args} onClick={() => setOpen(true)} />
        </>
      );
    })(args),
};

export const ButtonExpandable: Story = {
  tags: ['isHidden'],
  args: {
    'aria-controls': 'lightbox',
    'aria-haspopup': true,
    customSize: { square: '8rem' },
    name: 'Expand avatar image',
    iconOnHover: <GIZoomExpandMaximizeWindow />,
    onClick: () => {
      // eslint-disable-next-line no-console
      console.info('Opening lightbox to expand profile image');
    },
  },
};

export const Clickable: Story = {
  tags: ['isHidden'],
  args: {
    'aria-controls': 'lightbox',
    'aria-haspopup': true,
    bordered: false,
    colorScheme: 'neutral',
    customSize: { square: '12rem' },
    disabled: false,
    iconOnHover: <GIZoomExpandMaximizeWindow />,
    imageFit: 'cover',
    imageSrc: EXAMPLE_AVATAR_IMG,
    name: 'Expand avatar image',
    onClick: () => {
      // eslint-disable-next-line no-console
      console.info('Opening lightbox to expand profile image');
    },
    size: 'md',
    variant: 'circle',
  },
};

export const Link: Story = {
  tags: ['isHidden'],
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
    rel: 'noopener noreferrer',
    size: 'md',
    target: '_blank',
    variant: 'circle',
  },
};
