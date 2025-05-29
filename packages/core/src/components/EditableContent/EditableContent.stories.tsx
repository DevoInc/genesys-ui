import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { EditableContent } from './';
import { lorem } from '../../../stories/utils/fillerTexts';
import { Typography } from '../Typography';

const meta: Meta<typeof EditableContent> = {
  title: 'Components/Text/EditableContent',
  component: EditableContent,
};

export default meta;
type Story = StoryObj<typeof EditableContent>;

export const Playground: Story = {
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
