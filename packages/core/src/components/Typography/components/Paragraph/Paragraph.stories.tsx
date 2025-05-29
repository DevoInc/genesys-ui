import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Paragraph } from './Paragraph';
import { EditableContent } from '../../../EditableContent';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Text/Typography/Components/Block/Paragraph',
  component: Paragraph,
  args: {
    children: lorem,
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Playground: Story = {};

export const ParagraphEditable: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [editConfig, setEditConfig] = React.useState({
        editing: false,
        content: lorem,
      });
      return (
        <EditableContent
          onBlur={(e) =>
            setEditConfig({
              editing: false,
              content: e.currentTarget.textContent,
            })
          }
          onFocus={() =>
            setEditConfig({
              ...editConfig,
              editing: true,
            })
          }
          tooltip="Click to edit this paragraph"
        >
          <Paragraph {...props}>{lorem}</Paragraph>
        </EditableContent>
      );
    })(args),
};
