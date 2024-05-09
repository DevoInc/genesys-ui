import { Meta, StoryObj } from '@storybook/react';

import {
  AVATAR_COLOR_SCHEME_DEFAULT_VALUE,
  AVATAR_IMAGE_FIT_DEFAULT_VALUE,
  AVATAR_IMAGE_POSITION_DEFAULT_VALUE,
  AVATAR_SIZE_DEFAULT_VALUE,
  AVATAR_VARIANT_DEFAULT_VALUE,
} from './constants';

const EXAMPLE_AVATAR_IMG = 'https://i.pravatar.cc/300';
import { Avatar } from '../';

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
