import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';
import { EditableContent } from '../../../EditableContent';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Heading> = {
  title: 'Components/Text/Typography/Block/Heading',
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const BaseHeading: Story = {
  args: {
    children: 'Heading',
  },
};

export const HeadingEditable: Story = {
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
          <Heading>This a heading with edition available</Heading>
        </EditableContent>
      );
    })(),
};
