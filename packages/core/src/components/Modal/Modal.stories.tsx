import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AnimatePresence, motion } from 'framer-motion';

import {
  GIAutoLayers,
  GICheckOkRoundedFilled,
  GIToBack,
} from '@devoinc/genesys-icons';

import type { TModalStatus } from './declarations';
import type { TUIColorScheme } from '../../declarations';
import { Button } from '../Button';
import { Modal } from './Modal';
import { Typography } from '../Typography';
import { Input } from '../Input';
import {
  IconButton,
  IconButtonClose,
  IconButtonGoToDocs,
  IconButtonStatus,
} from '../IconButton';
import { useTheme } from 'styled-components';
import { Flex } from '../Flex';
import { ButtonGroup } from '../ButtonGroup';
import { Box } from '../Box';
import { ModalDemoContent } from './__stories__/components';
import { SelectControl } from '../SelectControl';

const meta: Meta<typeof Modal> = {
  title: 'Components/Layout/Modal',
  component: Modal,
  args: {
    status: 'base',
    disableCloseOnOverlayClick: false,
    windowSize: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  render: (args) =>
    ((props) => {
      return (
        <Modal {...props}>
          <Modal.Header title="Modal title" />
          <Modal.Body>
            <Typography.Paragraph gutterBottom="cmp-md">
              A still more glorious dawn awaits finite but unbounded Hypatia
              Cambrian explosion white dwarf the carbon in our apple pies.
              Vanquish the impossible the sky calls to us Flatland two ghostly
              white figures in coveralls and helmets are softly dancing are
              creatures of the cosmos tendrils of gossamer clouds?
            </Typography.Paragraph>
            <Typography.Paragraph gutterBottom="cmp-md">
              A still more glorious dawn awaits finite but unbounded Hypatia
              Cambrian explosion white dwarf the carbon in our apple pies.
              Vanquish the impossible the sky calls to us Flatland two ghostly
              white figures in coveralls and helmets are softly dancing are
              creatures of the cosmos tendrils of gossamer clouds?
            </Typography.Paragraph>
            <Input label="Demo input" id="demo-input" />
            <SelectControl
              menuAppendToBody
              menuPlacement="auto"
              options={[
                { value: 1, label: 'pepe' },
                { value: 1, label: 'pepe' },
                { value: 1, label: 'pepe' },
                { value: 1, label: 'pepe' },
                { value: 1, label: 'pepe' },
              ]}
              aria-label="Demo input"
              id="demo-input"
            />
          </Modal.Body>
        </Modal>
      );
    })(args),
};

export const OpenedByTrigger: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [isOpen, setOpen] = React.useState<boolean>(false);
      const closeModal = (msg: string) => {
        action(msg);
        setOpen(false);
      };

      return (
        <>
          {isOpen && (
            <Modal
              {...props}
              onRequestClose={() => closeModal('onRequestClose')}
            >
              <Modal.Header title="Modal title" />
              <Modal.Body>
                <Typography.Paragraph gutterBottom="cmp-md">
                  A still more glorious dawn awaits finite but unbounded Hypatia
                  Cambrian explosion white dwarf the carbon in our apple pies.
                  Vanquish the impossible the sky calls to us Flatland two
                  ghostly white figures in coveralls and helmets are softly
                  dancing are creatures of the cosmos tendrils of gossamer
                  clouds?
                </Typography.Paragraph>
                <Input label="Demo input" id="demo-input" />
              </Modal.Body>
            </Modal>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal
          </Button>
        </>
      );
    })(args),
};

const ModalWithButtons = ({
  applyText = 'Apply',
  content = ModalDemoContent,
  status = 'base',
  title = 'Modal title',
  triggerText = 'Open modal',
}: {
  applyText?: string;
  content?: React.ReactNode;
  status?: TModalStatus;
  title?: string;
  triggerText?: string;
}) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const closeModal = (msg: string) => {
    action(msg);
    setOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Modal
          onRequestClose={() => closeModal('onRequestClose')}
          status={status}
        >
          <Modal.Header title={title} />
          <Modal.Body>{content}</Modal.Body>
          <Modal.Footer
            actions={[
              <Button
                colorScheme="quiet"
                key={'cancel'}
                onClick={() => {
                  closeModal('cancel');
                }}
              >
                Cancel
              </Button>,
              <Button
                colorScheme={
                  status !== 'base' ? (status as TUIColorScheme) : 'accent'
                }
                key={'apply'}
                onClick={() => {
                  closeModal('apply');
                }}
              >
                {applyText}
              </Button>,
            ]}
          />
        </Modal>
      )}
      <Button
        onClick={() => setOpen(true)}
        colorScheme={
          status !== 'base' ? (status as TUIColorScheme) : 'accent-high'
        }
      >
        {triggerText}
      </Button>
    </>
  );
};

export const Dialog: Story = {
  tags: ['isHidden'],
  render: () => (
    <ModalWithButtons
      status="warning"
      title="Delete entity"
      applyText="Delete"
      content="You are going to delete this entity. This action can not be undone."
      triggerText="Open dialog"
    />
  ),
};

export const WithButtons: Story = {
  tags: ['isHidden'],
  render: () => <ModalWithButtons />,
};

export const WithActions: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [isOpen, setOpen] = React.useState<boolean>(false);
      const closeModal = (msg: string) => {
        action(msg);
        setOpen(false);
      };
      return (
        <>
          {isOpen && (
            <Modal onRequestClose={() => closeModal('onRequestClose')}>
              <Modal.Header
                title="Modal title"
                actions={[
                  <IconButton
                    key="back"
                    colorScheme="quiet"
                    circular
                    tooltip="Back"
                    icon={<GIToBack />}
                    onClick={() => {
                      action('back clicked');
                    }}
                  />,
                  <IconButton
                    key={'layers'}
                    colorScheme="quiet"
                    circular
                    tooltip={'Layers'}
                    icon={<GIAutoLayers />}
                    onClick={() => {
                      action('layers clicked');
                    }}
                  />,
                ]}
              />
              <Modal.Body>{ModalDemoContent}</Modal.Body>
              <Modal.Footer
                actions={[
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
              />
            </Modal>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal
          </Button>
        </>
      );
    })(),
};

export const Animated: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [isOpen, setOpen] = React.useState<boolean>(false);
      const closeModal = (msg: string) => {
        action(msg);
        setOpen(false);
      };
      return (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={'modal'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'relative',
                zIndex: 100,
              }}
            >
              <Modal onRequestClose={() => closeModal('onRequestClose')}>
                <Modal.Header title="Modal title" />
                <Modal.Body>{ModalDemoContent}</Modal.Body>
              </Modal>
            </motion.div>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal
          </Button>
        </AnimatePresence>
      );
    })(),
};

export const Custom: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [isOpen, setOpen] = React.useState<boolean>(false);
      const tokens = useTheme();
      const dialogHeaderIconTokens = tokens.cmp.dialog.headerIcon;

      return (
        <>
          {isOpen && (
            <Modal._Backdrop zIndex={100} bgColor="lightseagreen">
              <Modal._Panel style="border-radius: 0;">
                <Modal.Header onRequestClose={() => setOpen(false)}>
                  <Flex alignItems="center">
                    <Flex alignItems="center" gap="cmp-sm">
                      <GICheckOkRoundedFilled
                        size={22}
                        color={dialogHeaderIconTokens.color.background.success}
                      />
                      <Typography.Heading size="h4" truncateLine={1}>
                        My custom Modal
                      </Typography.Heading>
                    </Flex>
                    <Flex marginLeft="auto">
                      <ButtonGroup size="md" gap="lg">
                        <IconButtonStatus tooltip="Info" />
                        <IconButtonClose tooltip="Close" />
                      </ButtonGroup>
                    </Flex>
                  </Flex>
                </Modal.Header>
                <Modal.Body>{ModalDemoContent}</Modal.Body>
                <Modal.Footer>
                  <Box marginRight="auto">
                    <IconButtonGoToDocs
                      href="https://www.google.com/"
                      tooltip="Go to Docs"
                    />
                  </Box>
                  <ButtonGroup>
                    <Button colorScheme={'quiet'} key={0}>
                      Cancel
                    </Button>
                    <Button colorScheme={'accent'} key={1}>
                      Apply
                    </Button>
                  </ButtonGroup>
                </Modal.Footer>
              </Modal._Panel>
            </Modal._Backdrop>
          )}
          <Button onClick={() => setOpen(true)} colorScheme="accent-high">
            Open modal
          </Button>
        </>
      );
    })(),
};
