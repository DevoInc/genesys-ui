import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SelectControl } from '..';

const meta: Meta<typeof SelectControl> = {
  title: 'Components/Core/Form/SelectControl/Cases',
  component: SelectControl,
  args: {
    menuAppendToBody: true,
    menuLevel: 3,
    menuPlacement: 'auto',
    options: [
      { value: 1, label: 'Option one' },
      { value: 2, label: 'Option two' },
      { value: 3, label: 'Option three', disabled: true },
      { value: 4, label: 'Option four' },
      { value: 5, label: 'Option five' },
      { value: 6, label: 'Option six' },
      { value: 7, label: 'Option seven' },
    ],
    size: 'md',
    status: 'base',
  },
  argTypes: {
    addonToLeft: { control: { type: 'text' } },
    addonToRight: { control: { type: 'text' } },
  },
};

export default meta;
type Story = StoryObj<typeof SelectControl>;

export const SingleWithOptionsGroups: Story = {
  render: (args) =>
    ((args) => {
      const demoOptionsWithGroups = [
        { value: 1, label: 'Option one' },
        {
          label: 'Option two',
          options: [
            { value: 21, label: 'Option two-one' },
            { value: 22, label: 'Option two-two' },
          ],
        },
        {
          label: 'Option four',
          options: [
            { value: 41, label: 'Option four-one' },
            { value: 42, label: 'Option four-two' },
          ],
        },
        { value: 5, label: 'Option five' },
      ];
      const [state, setState] = React.useState({ value: undefined });
      return (
        <SelectControl
          {...args}
          onChange={(opt) => setState({ value: opt.value })}
          options={demoOptionsWithGroups}
          value={state.value}
        />
      );
    })(args),
};

export const MultipleBasic: Story = {
  render: (args) =>
    ((args) => {
      const getOptions = (optionsNumber) => {
        return Array(optionsNumber)
          .fill(null)
          .map((el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [state, setState] = React.useState({ value: undefined });
      return (
        <SelectControl
          {...args}
          isMulti
          onChange={(value) => setState({ value })}
          options={getOptions(50)}
          value={state.value}
        />
      );
    })(args),
};

export const MultipleSortable: Story = {
  render: (args) =>
    ((args) => {
      const getOptions = (optionsNumber) => {
        return Array(optionsNumber)
          .fill(null)
          .map((el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [state, setState] = React.useState({
        value: ['item0', 'item1', 'item2'],
      });
      return (
        <SelectControl
          {...args}
          isMulti
          sortable
          onChange={(value) => {
            setState({ value });
          }}
          options={getOptions(10)}
          value={state.value}
        />
      );
    })(args),
};

export const MultipleCreatable: Story = {
  render: (args) =>
    ((args) => {
      const getOptions = (optionsNumber) => {
        return Array(optionsNumber)
          .fill(null)
          .map((el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [state, setState] = React.useState({ value: ['item0', 'item1'] });
      return (
        <SelectControl
          {...args}
          isMulti
          creatable
          onChange={(value) => setState({ value })}
          options={getOptions(10)}
          value={state.value}
        />
      );
    })(args),
};

export const MultipleSelectAll: Story = {
  render: (args) =>
    ((args) => {
      const getOptions = (optionsNumber) => {
        return Array(optionsNumber)
          .fill(null)
          .map((el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [state, setState] = React.useState({ value: undefined });
      return (
        <SelectControl
          {...args}
          isMulti
          hideSelectedOptions={false}
          menuIsOpen
          menuLevel={0}
          onChange={(value) => setState({ value })}
          options={getOptions(20)}
          selectAllBtn
          value={state.value}
        />
      );
    })(args),
};

export const MultipleFixedOptions: Story = {
  render: (args) =>
    ((args) => {
      const options = Array(20)
        .fill(20)
        .map((el, idx) => ({
          fixed: idx === 5 || idx === 8,
          value: `item${idx}`,
          label: `Item ${idx}`,
        }));
      const [selectedOptions, setSelectedOptions] = React.useState(
        options.filter(({ fixed }) => fixed)
      );
      const onChange = (opts) => setSelectedOptions(opts);
      return (
        <SelectControl
          {...args}
          onChange={onChange}
          options={options}
          value={selectedOptions}
          isMulti
          sortable
        />
      );
    })(args),
};
