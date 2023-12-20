import { Meta, StoryObj } from '@storybook/react';

import { TextAreaEditor } from './TextAreaEditor';

const meta: Meta<typeof TextAreaEditor> = {
  title: 'Components/Table/Editors/TextAreaEditor',
  component: TextAreaEditor,
  argTypes: { onChange: { action: 'onChange' } },
};

export default meta;
type Story = StoryObj<typeof TextAreaEditor>;

export const Base: Story = {
  args: {
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed egestas libero, vitae suscipit justo. Quisque eu cursus nunc. Curabitur et magna nec nunc luctus elementum vitae ac purus. Duis accumsan porta elit quis cursus. Fusce maximus at justo sed interdum. Sed facilisis neque lectus, at suscipit neque imperdiet sit amet. Etiam commodo nunc est, id dapibus nisl pharetra vel. Morbi eu lectus dignissim, ultricies nisi consequat, pulvinar nulla. Vivamus ultrices, risus et bibendum euismod, libero felis elementum nisi, quis iaculis nunc libero sodales neque. Aenean porttitor posuere est ut aliquet. Praesent dictum elit in leo ornare ornare. Nam maximus felis vitae leo viverra faucibus. Proin a sodales ligula, nec aliquet massa. Quisque hendrerit consequat interdum. Aliquam pharetra mi sagittis lacinia porttitor.',
  },
};
