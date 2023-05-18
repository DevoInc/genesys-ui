import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { EditableContent, Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.Heading> = {
  title: 'Components/Core/Text/Typography/Block/Heading/Cases',
  component: Typography.Heading,
};

export default meta;
type Story = StoryObj<typeof Typography.Heading>;

export const Editable: Story = {
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
          tooltip="Click to edit this heading"
        >
          <Typography.Heading>
            This a heading with edition available
          </Typography.Heading>
        </EditableContent>
      );
    })(),
};
