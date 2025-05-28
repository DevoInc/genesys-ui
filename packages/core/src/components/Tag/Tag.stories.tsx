import { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';

import { GITagPriceSale } from '@devoinc/genesys-icons';

import { Tag } from './Tag';
import { HFlex } from '../HFlex';
import { Wrap } from '../Wrap';
import { VFlex } from '../VFlex';

const meta: Meta<typeof Tag> = {
  title: 'Components/Feedback/Tag',
  component: Tag,
  args: {
    size: 'md',
    colorScheme: 'info',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    text: 'Category tag',
  },
};

export const WithIcon: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GITagPriceSale />,
    text: 'Category',
  },
};

export const Quiet: Story = {
  tags: ['isHidden'],
  args: {
    colorScheme: 'success',
    quiet: true,
    text: 'Quiet tag',
  },
};

export const CustomColor: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex>
          <Tag {...props} colorScheme="lightpink" text="Custom light color" />
          <Tag {...props} colorScheme="darkcyan" text="Custom dark color" />
        </HFlex>
      );
    })(args),
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <HFlex>
          <Tag {...props} size="sm" text="Size sm" />
          <Tag {...props} text="Size md" />
          <Tag {...props} size="lg" text="Size lg" />
        </HFlex>
      );
    })(args),
};

export const Wide: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <VFlex>
          <VFlex.Item>
            <Tag {...props} wide text="Wide tag" />
          </VFlex.Item>
          <HFlex>
            <Tag {...props} wide text="Wide tag one" />
            <Tag {...props} wide text="Wide tag two" />
            <Tag {...props} wide text="Wide tag three" />
          </HFlex>
        </VFlex>
      );
    })(args),
};

export const ColorSchemes: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      return (
        <Wrap>
          <Tag {...props} colorScheme="primary" text="Primary" />
          <Tag {...props} colorScheme="secondary" text="Secondary" />
          <Tag {...props} colorScheme="neutral" text="Neutral" />
          <Tag {...props} colorScheme="blend-base" text="Blend base" />
          <Tag {...props} colorScheme="blend-inverse" text="Blend inverse" />
          <Tag {...props} colorScheme="success" text="Success" />
          <Tag {...props} colorScheme="error" text="Error" />
          <Tag {...props} colorScheme="warning" text="Warning" />
          <Tag {...props} colorScheme="help" text="Help" />
          <Tag {...props} colorScheme="info" text="Info" />
          <Tag {...props} colorScheme="data-blue" text="Data blue" />
          <Tag {...props} colorScheme="data-bronze" text="Data bronze" />
          <Tag {...props} colorScheme="data-dusk" text="Data dusk" />
          <Tag {...props} colorScheme="data-green" text="Data green" />
          <Tag {...props} colorScheme="data-indigo" text="Data indigo" />
          <Tag {...props} colorScheme="data-magenta" text="Data magenta" />
          <Tag {...props} colorScheme="data-purple" text="Data purple" />
          <Tag {...props} colorScheme="data-red" text="Data red" />
          <Tag {...props} colorScheme="data-sky" text="Data sky" />
          <Tag {...props} colorScheme="data-slate" text="Data slate" />
          <Tag {...props} colorScheme="data-teal" text="Data teal" />
        </Wrap>
      );
    })(args),
};
