import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './Paragraph';
import { EditableContent } from '../../../EditableContent';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Text/Typography/Block',
  component: Paragraph,
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const BaseParagraph: Story = {
  tags: ['isHidden'],
  args: {
    children: lorem,
  },
};

export const ParagraphEditable: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
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
          <Paragraph>{lorem}</Paragraph>
        </EditableContent>
      );
    })(),
};
