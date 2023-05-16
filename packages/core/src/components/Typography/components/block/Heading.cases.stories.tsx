import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  Box,
  HFlex,
  Icon,
  IconButton,
  InputControl,
  TextareaControl,
  Typography,
} from '../../..';
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
        content: 'This an editable heading',
      });
      const contentReference = React.useRef(null);
      return (
        <HFlex spacing="cmp-xs" inline>
          <Typography.Heading
            forwardedRef={contentReference}
            size="h5"
            contentEditable
            onBlur={(e) =>
              setEditConfig({
                editing: false,
                content: e.currentTarget.textContent,
              })
            }
            onFocus={(e) =>
              setEditConfig({
                ...editConfig,
                editing: true,
              })
            }
          >
            {editConfig.content}
          </Typography.Heading>
          {!editConfig.editing && (
            <Box
              onClick={() => {
                !editConfig.editing ? contentReference.current.focus() : null;
                setEditConfig({
                  ...editConfig,
                  editing: !editConfig.editing,
                });
              }}
            >
              <Icon
                colorScheme="weak"
                iconId={
                  editConfig.editing ? 'check_thick' : 'write_pencil_new_edit'
                }
                size="xxxs"
                title={
                  editConfig.editing
                    ? 'Save changes'
                    : 'Edit this heading content'
                }
              />
            </Box>
          )}
        </HFlex>
      );
    })(),
};
