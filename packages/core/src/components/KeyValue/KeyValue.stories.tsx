import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  GIAlerts,
  GIUserRoleAdmin,
  GIUsersProfileGroupTwo,
  GIWeatherSunSummer,
} from '@devoinc/genesys-icons';

import exampleSVG from './__stories__/undraw_cooking.svg';
import { KeyValue } from './KeyValue';
import { HFlex } from '../HFlex';
import { Avatar } from '../Avatar';
import { KeyValueText, KeyValueTextContainer } from './components';
import { VFlex } from '../VFlex';

const meta: Meta<typeof KeyValue> = {
  title: 'Components/Feedback/KeyValue',
  component: KeyValue,
  args: { size: 'md' },
};

export default meta;
type Story = StoryObj<typeof KeyValue>;

export const Playground: Story = {
  args: {
    keyContent: 'Weekly new users',
    valueContent: '2440',
  },
};

export const TitleDescription: Story = {
  tags: ['isHidden'],
  args: {
    keyContent: '277 new alerts',
    valueContent: 'Since last update',
  },
};

export const WithUnit: Story = {
  tags: ['isHidden'],
  args: {
    keyContent: 'Monday',
    valueContent: '28',
    supportingVisual: <GIWeatherSunSummer />,
    unit: 'ºC',
  },
};

export const Formats: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <HFlex spacing="layout-md">
        <KeyValue
          {...args}
          keyContent="Key content"
          valueContent="Value content"
          supportingVisual={<GIWeatherSunSummer />}
          supportingVisualAlign="flex-start"
        />
        <KeyValue
          {...args}
          keyContent="Key content"
          valueContent="Value content"
          supportingVisual={<GIWeatherSunSummer />}
          format="row"
        />
        <KeyValue
          {...args}
          keyContent="Key content"
          valueContent="Value content"
          supportingVisual={<GIWeatherSunSummer />}
          format="column"
        />
      </HFlex>
    ))(args),
};

export const BoldContent: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <HFlex spacing="layout-md">
        <KeyValue
          {...args}
          keyContent="Temp"
          valueContent="28"
          boldScheme="value"
          unit="ºC"
          supportingVisual={<GIWeatherSunSummer />}
        />
        <KeyValue
          {...args}
          keyContent="Weekly new users"
          valueContent="480"
          supportingVisual={<GIUsersProfileGroupTwo />}
        />
      </HFlex>
    ))(args),
};

export const SupportingVisual: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <HFlex spacing="layout-md">
        <KeyValue
          {...args}
          keyContent="User name"
          valueContent="This is my role"
          supportingVisual={<GIUserRoleAdmin />}
        />
        <KeyValue
          {...args}
          keyContent="User name"
          valueContent="This is my role"
          supportingVisual={
            <img width={40} height={40} alt="svg" src={exampleSVG} />
          }
        />
        <KeyValue
          {...args}
          keyContent="User name"
          valueContent="This is my role"
          supportingVisual={
            <Avatar
              size="md"
              name="Example"
              imageSrc="https://i.pravatar.cc/300"
            />
          }
        />
      </HFlex>
    ))(args),
};

export const InvertedOrder: Story = {
  tags: ['isHidden'],
  args: {
    boldScheme: 'value',
    keyContent: 'Weekly new users',
    valueContent: '2440',
    supportingVisual: <GIUsersProfileGroupTwo />,
    invertOrder: true,
  },
};

export const Custom: Story = {
  tags: ['isHidden'],
  args: {
    format: 'base',
  },
  render: (args) =>
    ((args) => (
      <KeyValue._Container {...args}>
        <KeyValue._SupportingVisual>
          <GIAlerts />
        </KeyValue._SupportingVisual>
        <KeyValueTextContainer>
          <KeyValueText>New alerts</KeyValueText>
          <KeyValueText colorScheme="success" format="heading-h1">
            33
          </KeyValueText>
        </KeyValueTextContainer>
      </KeyValue._Container>
    ))(args),
};

export const DescriptionList: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => (
      <VFlex width="50rem">
        <KeyValue
          keyContent="Description"
          keyWidth="25%"
          valueContent="Add the execution metadata for the current execution to the table. Currently only execution start time and end time in millis are added. This operation works for both Playbook-authoring mode and for batch executions."
          valueTruncateLine="none"
          valueWidth="75%"
          format="row"
        />
        <KeyValue
          keyContent="Signature"
          keyWidth="25%"
          valueContent="function addExecutionMetadata(table:TableReference)"
          valueTruncateLine="none"
          valueWidth="75%"
          format="row"
        />
        <KeyValue
          keyContent="Parameters"
          keyWidth="25%"
          valueContent="able (TableReference)	-	A table."
          valueTruncateLine="none"
          valueWidth="75%"
          format="row"
        />
        <KeyValue
          keyContent="Returns"
          keyWidth="25%"
          valueContent="The input table with an additional lhub_execution_metadata column is returned. lhub_execution_metadata is a JSON object and contains values of execution metadata fields like interval start, end time in milliseconds, and URL that links to the result page of the batch execution."
          valueTruncateLine="none"
          valueWidth="75%"
          format="row"
        />
      </VFlex>
    ))(),
};
