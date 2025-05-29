import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Drawer } from './Drawer';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { VFlex } from '../VFlex';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Layout/Drawer',
  component: Drawer,
  args: {
    position: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Playground: Story = {
  args: {
    children: (
      <VFlex padding="cmp-md cmp-lg">
        <Typography.Heading size="h4">FloatPanel</Typography.Heading>
        <Typography.Paragraph>
          Culture science Euclid intelligent beings hydrogen atoms citizens of
          distant epochs. Cosmic ocean stirred by starlight extraordinary claims
          require extraordinary evidence at the edge of forever a very small
          stage in a vast cosmic arena extraplanetary. Vanquish the impossible
          tesseract permanence of the stars permanence of the stars invent the
          universe across the centuries. The only home we have ever known
          emerged into consciousness a mote of dust suspended in a sunbeam dream
          of the minds eye a mote of dust suspended in a sunbeam made in the
          interiors of collapsing stars and billions upon billions upon billions
          upon billions upon billions upon billions upon billions.
        </Typography.Paragraph>
      </VFlex>
    ),
  },
};

export const Closable: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [closed, setClosed] = React.useState(false);
      return closed ? (
        <Button onClick={() => setClosed(false)}>Open FloatPanel</Button>
      ) : (
        <Drawer position="left">
          <Panel elevation="ground" height="100%">
            <Panel.Header
              bordered
              title="FloatPanel"
              closeSettings={{ onClick: () => setClosed(true) }}
            />
            <Panel.Body>
              <Typography.Paragraph>
                Culture science Euclid intelligent beings hydrogen atoms
                citizens of distant epochs. Cosmic ocean stirred by starlight
                extraordinary claims require extraordinary evidence at the edge
                of forever a very small stage in a vast cosmic arena
                extraplanetary. Vanquish the impossible tesseract permanence of
                the stars permanence of the stars invent the universe across the
                centuries. The only home we have ever known emerged into
                consciousness a mote of dust suspended in a sunbeam dream of the
                minds eye a mote of dust suspended in a sunbeam made in the
                interiors of collapsing stars and billions upon billions upon
                billions upon billions upon billions upon billions upon
                billions.
              </Typography.Paragraph>
            </Panel.Body>
          </Panel>
        </Drawer>
      );
    })(),
};
