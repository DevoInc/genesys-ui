import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { EditableContent, Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.Paragraph> = {
  title: 'Components/Text/Typography/Block/Paragraph/Cases',
  component: Typography.Paragraph,
};

export default meta;
type Story = StoryObj<typeof Typography.Paragraph>;

export const ParagraphEditable: Story = {
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
          <Typography.Paragraph>{lorem}</Typography.Paragraph>
        </EditableContent>
      );
    })(),
};
