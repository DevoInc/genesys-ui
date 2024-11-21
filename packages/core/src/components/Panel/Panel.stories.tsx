import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  GIArrowLeft,
  GIChartFlame,
  GIMenuAltVertical,
} from '@devoinc/genesys-icons';

import { Panel } from './Panel';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';
import { TextBlock, TextBlockSM } from './__stories__/helpers';
import { lorem, lorem2 } from '../../../stories/utils/fillerTexts';

const meta: Meta<typeof Panel> = {
  title: 'Components/Layout/Panel',
  component: Panel,
  args: {
    elevation: 'raised',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Playground: Story = {
  args: {
    children: [
      <Panel.Header key="header-1" bordered title="Header tittle" />,
      <Panel.Body key="body-1">{lorem}</Panel.Body>,
      <Panel.Footer
        key="footer-1"
        bordered
        actions={[
          <Button key={1} colorScheme="quiet">
            Cancel
          </Button>,
          <Button key={2} colorScheme="accent">
            Apply
          </Button>,
        ]}
      />,
    ],
  },
};

export const Playground2: Story = {
  args: {
    children: [
      <Panel.Header
        key="header-1"
        bordered
        icon={<GIChartFlame />}
        title="Header tittle"
        actions={[
          <IconButton
            colorScheme="quiet"
            key="header-action-1"
            hasBoldIcon
            circular
            icon={<GIMenuAltVertical />}
            size="sm"
          />,
        ]}
        subtitle="Intelligent beings from which we spring bits of moving fluff paroxysm of global death."
      />,
      <Panel.Body key="body-1">{TextBlock}</Panel.Body>,
      <Panel.Footer
        key="footer-1"
        bordered
        helpUrl="https://docs.devo.com/"
        actions={[
          <Button
            key={1}
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Cancel click');
            }}
            colorScheme="quiet"
          >
            Cancel
          </Button>,
          <Button
            key={2}
            onClick={() => {
              // eslint-disable-next-line no-alert
              alert('Apply click');
            }}
            colorScheme="accent"
          >
            Apply
          </Button>,
        ]}
      />,
    ],
    height: '50rem',
    width: '50rem',
  },
};

export const Closable: Story = {
  render: () =>
    (() => {
      const [closed, setClosed] = React.useState(false);
      return closed ? (
        <Button colorScheme="accent" onClick={() => setClosed(false)}>
          Show the Panel
        </Button>
      ) : (
        <Panel width="36rem">
          <Panel.Header
            bordered
            icon={<GIChartFlame />}
            title="Header tittle"
            closeSettings={{ onClick: () => setClosed(true) }}
          />
          <Panel.Body>
            <Typography.Paragraph gutterBottom="cmp-md">
              {lorem}
            </Typography.Paragraph>
            <Typography.Paragraph gutterBottom="cmp-md">
              {lorem2}
            </Typography.Paragraph>
          </Panel.Body>
        </Panel>
      );
    })(),
};

export const BackwardNavigation: Story = {
  name: 'With backward navigation',
  args: {
    width: '36rem',
    children: [
      <Panel.Header
        key="header-2"
        bordered
        icon={<GIChartFlame />}
        title="Header tittle"
        actions={[
          <Button
            key="btn-back"
            hasBoldIcon
            icon={<GIArrowLeft />}
            colorScheme="quiet"
            size="sm"
          >
            Previous
          </Button>,
        ]}
      />,
      <Panel.Body key="body-2">{TextBlockSM}</Panel.Body>,
    ],
  },
};

export const OnlyContent: Story = {
  name: 'Without header and footer',
  args: {
    width: '36rem',
    children: [<Panel.Body key="body-3">{TextBlockSM}</Panel.Body>],
  },
};
