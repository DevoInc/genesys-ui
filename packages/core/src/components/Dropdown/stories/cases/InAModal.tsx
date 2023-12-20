import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { Dropdown } from '../../Dropdown';
import { Button } from '../../../Button';
import { Panel } from '../../../Panel';
import { Menu } from '../../../Menu';
import { Modal } from '../../../Modal';

export const ModalSimple = ({ ...props }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const closeModal = (msg: string) => {
    action(msg);
    setOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Modal
          footerButtons={[
            <Button
              colorScheme={'quiet'}
              key={'cancel'}
              onClick={() => {
                closeModal('cancel');
              }}
            >
              Cancel
            </Button>,
            <Button
              colorScheme={'accent'}
              key={'apply'}
              onClick={() => {
                closeModal('apply');
              }}
            >
              Apply
            </Button>,
          ]}
          onRequestClose={() => closeModal('onRequestClose')}
        >
          Your modal content goes here&nbsp;
          <Dropdown {...props}>
            {({ toggle, ref }) => (
              <Button size="sm" onClick={toggle()} ref={ref}>
                TriggerElement
              </Button>
            )}
            <Panel.Container width={'200px'}>
              <Menu>
                <Menu.Item label="Option 1" />
                <Menu.Item label="Option 2" />
                <Menu.Item label="Option 3" />
              </Menu>
            </Panel.Container>
          </Dropdown>
        </Modal>
      )}
      <Button onClick={() => setOpen(true)} colorScheme="accent-high">
        Open modal
      </Button>
    </>
  );
};
