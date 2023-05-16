import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HFlex, IconButton, TextareaControl, Typography } from '../../..';
import { lorem } from '../../../../../stories/utils/fillerTexts';

const meta: Meta<typeof Typography.Paragraph> = {
  title: 'Components/Core/Text/Typography/Block/Paragraph/Cases',
  component: Typography.Paragraph,
};

export default meta;
type Story = StoryObj<typeof Typography.Paragraph>;

export const Editable: Story = {
  render: () =>
    (() => {
      const [editConfig, setEditConfig] = React.useState({
        editing: false,
        content: lorem,
      });
      return (
        <HFlex spacing="cmp-xxs" alignItems="flex-start">
          {editConfig.editing ? (
            <TextareaControl
              aria-label="Editing this paragraph"
              value={editConfig.content}
              onChange={(e) =>
                setEditConfig({ ...editConfig, content: e.target.value })
              }
            />
          ) : (
            <Typography.Paragraph>{editConfig.content}</Typography.Paragraph>
          )}
          <IconButton
            colorScheme="quiet"
            icon={editConfig.editing ? 'check_thick' : 'write_pencil_new_edit'}
            onClick={(e) =>
              setEditConfig({ ...editConfig, editing: !editConfig.editing })
            }
            size="sm"
            title={
              editConfig.editing
                ? 'Save changes'
                : 'Edit this paragraph content'
            }
          />
        </HFlex>
      );
    })(),
};
