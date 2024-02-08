import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ModalContainer } from './ModalContainer';
import { Button } from '../../../Button';

const meta: Meta<typeof ModalContainer> = {
  title: 'Components/Layout/Modal/Subcomponents',
  component: ModalContainer,
};

export default meta;

type Story = StoryObj<typeof ModalContainer>;

export const Container: Story = {
  render: (args) =>
    ((args) => {
      const [open, setOpen] = React.useState(false);
      return (
        <>
          {open && (
            <ModalContainer
              {...args}
              onRequestClose={() => setOpen(false)}
            ></ModalContainer>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal container
          </Button>
        </>
      );
    })(args),
};
