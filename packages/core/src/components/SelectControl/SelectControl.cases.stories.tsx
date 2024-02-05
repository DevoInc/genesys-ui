import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Props, PropsValue } from 'react-select';

import { SelectOption } from './declarations';

import { SelectControl, SelectControlProps } from './SelectControl';

// TODO: QUV-2116 Problem using components as value for options object
//import { ESFlag, EUFlag, PTFlag, USFlag } from './__stories__/assets';

interface SelectControlOption extends SelectOption {
  isDisabled?: boolean;
  fixed?: boolean;
}

const meta: Meta<SelectControlProps<SelectControlOption>> = {
  title: 'Components/Core/Form/SelectControl/Cases',
  component: SelectControl,
  args: {
    menuAppendToBody: true,
    menuLevel: 3,
    menuPlacement: 'auto',
    options: [
      { value: 1, label: 'Option one' },
      { value: 2, label: 'Option two' },
      { value: 3, label: 'Option three', isDisabled: true },
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
type Story = StoryObj<SelectControlProps>;

export const SingleOption: Story = {
  name: 'Single selection',
  render: (args) =>
    ((args) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <SelectControl
          {...args}
          onChange={(opt: SelectOption) => setValue(opt.value)}
          options={[
            { value: 1, label: 'Option one' },
            { value: 2, label: 'Option two' },
            { value: 3, label: 'Option three' },
            { value: 4, label: 'Option four' },
          ]}
          value={value}
        />
      );
    })(args),
};

export const SingleOptionWithIcons: Story = {
  name: 'Single selection with option/value icons',
  render: (args) =>
    ((args) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <SelectControl
          {...args}
          onChange={(opt: SelectOption) => setValue(opt.value)}
          options={[
            { value: 1, label: 'Option one', icon: 'gi-check_ok_rounded' },
            { value: 2, label: 'Option two', icon: 'gi-info_round' },
            {
              value: 3,
              label: 'Option three',
              icon: 'gi-attention_error_alert_caution',
            },
            {
              value: 4,
              label: 'Option four',
              icon: 'gi-delete_exit_remove_close_rounded',
            },
          ]}
          value={value}
        />
      );
    })(args),
};

export const SingleOptionWithPrependContent: Story = {
  name: 'Single selection with option/value prepend contents',
  render: (args) =>
    ((args) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        // TODO: QUV-2116 Problem using components as value for options object
        <SelectControl
          {...args}
          onChange={(opt: SelectOption) => setValue(opt.value)}
          options={[
            {
              value: 1,
              label: 'Spain',
              //prependContent: <ESFlag />,
            },
            {
              value: 2,
              label: 'Portugal',
              //prependContent: <PTFlag />,
            },
            {
              value: 3,
              label: 'USA',
              //prependContent: <USFlag />,
            },
            {
              value: 4,
              label: 'EU',
              //prependContent: <EUFlag />,
            },
          ]}
          value={value}
        />
      );
    })(args),
};

export const SingleWithOptionsGroups: Story = {
  name: 'Single selection with options group',
  render: (args) =>
    ((args) => {
      const demoOptionsWithGroups: Props<SelectControlOption>['options'] = [
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
      const [value, setValue] = React.useState<PropsValue<SelectControlOption>>(
        { value: 41, label: 'Option four-one' },
      );
      return (
        <SelectControl
          {...args}
          onChange={(value) => setValue(value)}
          options={demoOptionsWithGroups}
          value={value}
        />
      );
    })(args),
};

export const MultipleBasic: Story = {
  name: 'Multiple selection',
  render: (args) =>
    ((args) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...args}
          closeMenuOnSelect={false}
          isMulti
          onChange={(value) => setValue(value)}
          options={getOptions(50)}
          value={value}
        />
      );
    })(args),
};

export const MultipleSubtle: Story = {
  name: 'Multiple selection subtle variant',
  render: (args) =>
    ((args) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...args}
          isMulti
          multipleSubtle
          menuIsOpen
          closeMenuOnSelect={false}
          selectAllBtn
          hideSelectedOptions={false}
          onChange={(value) => setValue(value)}
          options={getOptions(50)}
          value={value}
        />
      );
    })(args),
};

export const MultipleSortable: Story = {
  name: 'Multiple selection sortable',
  render: (args) =>
    ((args) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...args}
          isMulti
          sortable
          onChange={(value) => {
            setValue(value);
          }}
          options={getOptions(10)}
          value={value}
        />
      );
    })(args),
};

export const MultipleCreatable: Story = {
  name: 'Multiple selection creatable',
  render: (args) =>
    ((args) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...args}
          isMulti
          creatable
          onChange={(value) => setValue(value)}
          options={getOptions(10)}
          value={value}
        />
      );
    })(args),
};

export const MultipleSelectAll: Story = {
  name: 'Multiple selection with select all',
  render: (args) =>
    ((args) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...args}
          isMulti
          hideSelectedOptions={false}
          menuIsOpen
          menuLevel={0}
          onChange={(value) => setValue(value)}
          options={getOptions(20)}
          selectAllBtn
          value={value}
        />
      );
    })(args),
};

export const MultipleFixedOptions: Story = {
  name: 'Multiple selection with fixed options',
  render: (args) =>
    ((args) => {
      const options: Props<SelectControlOption>['options'] = Array(20)
        .fill(20)
        .map((el, idx) => ({
          fixed: idx === 5 || idx === 8,
          value: `item${idx}`,
          label: `Item ${idx}`,
        }));
      const [value, setValue] = React.useState<PropsValue<SelectControlOption>>(
        [
          { value: 'item5', label: 'Item 5' },
          { value: 'item8', label: 'Item 8' },
        ],
      );
      const onChange = (opts) => setValue(opts);
      return (
        <SelectControl
          {...args}
          onChange={onChange}
          options={options}
          value={value}
          isMulti
          sortable
        />
      );
    })(args),
};

export const VirtualizedOptions: Story = {
  name: 'Multiple selection with virtualized options',
  render: (args) =>
    ((args) => {
      const options: Props<SelectControlOption>['options'] = Array(20000)
        .fill(null)
        .map((el, idx) => ({
          value: `item${idx}`,
          label: `Item ${idx}`,
        }));
      const [value, setValue] = React.useState();
      const onChange = (opts) => setValue(opts);
      return (
        <SelectControl<SelectControlOption>
          {...args}
          onChange={onChange}
          options={options}
          value={value}
          virtualizeOptions={true}
        />
      );
    })(args),
};
