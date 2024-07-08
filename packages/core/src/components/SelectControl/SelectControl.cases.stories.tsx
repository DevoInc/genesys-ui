import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Props, PropsValue } from 'react-select';

import { TSelectOption } from './declarations';

import { SelectControl, SelectControlProps } from './SelectControl';
import {
  GIAttentionErrorAlertCaution,
  GICheckOkRounded,
  GIDeleteExitRemoveCloseRounded,
  GIInfoRound,
} from '@devoinc/genesys-icons';

// TODO: QUV-2116 Problem using components as value for options object
//import { ESFlag, EUFlag, PTFlag, USFlag } from './__stories__/assets';

interface SelectControlOption extends TSelectOption {
  isDisabled?: boolean;
  fixed?: boolean;
}

const meta: Meta<SelectControlProps<SelectControlOption>> = {
  title: 'Components/Form/SelectControl/Cases',
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
    status: 'base',
    size: 'md',
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
    ((props) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <SelectControl
          {...props}
          //menuIsOpen
          onChange={(opt: TSelectOption) => setValue(opt.value)}
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

export const SingleOptionWithReset: Story = {
  name: 'Single selection with reset',
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <>
          <SelectControl
            {...props}
            //menuIsOpen
            onChange={(opt: TSelectOption) => {
              setValue(opt.value)
            }}
            options={[
              { value: 1, label: 'Option one' },
              { value: 2, label: 'Option two' },
              { value: 3, label: 'Option three' },
              { value: 4, label: 'Option four' },
            ]}
            value={value}
          />
          <button onClick={() => setValue(undefined)}>RESET</button>
        </>
      );
    })(args),
};

export const SingleOptionWithIcons: Story = {
  name: 'Single selection with option/value icons',
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <SelectControl
          {...props}
          onChange={(opt: TSelectOption) => setValue(opt.value)}
          options={[
            { value: 1, label: 'Option one', icon: <GICheckOkRounded /> },
            { value: 2, label: 'Option two', icon: <GIInfoRound /> },
            {
              value: 3,
              label: 'Option three',
              icon: <GIAttentionErrorAlertCaution />,
            },
            {
              value: 4,
              label: 'Option four',
              icon: <GIDeleteExitRemoveCloseRounded />,
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
    ((props) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        // TODO: QUV-2116 Problem using components as value for options object
        <SelectControl
          {...props}
          onChange={(opt: TSelectOption) => setValue(opt.value)}
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
    ((props) => {
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
          {...props}
          onChange={(val) => setValue(val)}
          options={demoOptionsWithGroups}
          value={value}
        />
      );
    })(args),
};

export const MultipleBasic: Story = {
  name: 'Multiple selection',
  render: (args) =>
    ((props) => {
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
          {...props}
          closeMenuOnSelect={false}
          isMulti
          onChange={(val) => setValue(val)}
          options={getOptions(50)}
          value={value}
        />
      );
    })(args),
};

export const MultipleSubtle: Story = {
  name: 'Multiple selection subtle variant',
  render: (args) =>
    ((props) => {
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
          {...props}
          isMulti
          multipleSubtle
          //menuIsOpen
          closeMenuOnSelect={false}
          selectAllBtn
          hideSelectedOptions={false}
          onChange={(val) => setValue(val)}
          options={getOptions(50)}
          value={value}
          id="subtle-variant"
        />
      );
    })(args),
};

export const MultipleSortable: Story = {
  name: 'Multiple selection sortable',
  render: (args) =>
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...props}
          isMulti
          sortable
          onChange={(val) => {
            setValue(val);
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
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...props}
          isMulti
          creatable
          onChange={(val) => {
            setValue(val);
          }}
          options={getOptions(10)}
          value={value}
        />
      );
    })(args),
};

export const MultipleSelectAll: Story = {
  name: 'Multiple selection with select all',
  render: (args) =>
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<SelectControlOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl
          {...props}
          isMulti
          hideSelectedOptions={false}
          menuIsOpen
          menuLevel={0}
          onChange={(val) => {
            setValue(val);
          }}
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
    ((props) => {
      const options: Props<SelectControlOption>['options'] = Array(20)
        .fill(20)
        .map((_, idx) => ({
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
      return (
        <SelectControl
          {...props}
          onChange={(val) => {
            setValue(val);
          }}
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
    ((props) => {
      const options: Props<SelectControlOption>['options'] = Array(20000)
        .fill(null)
        .map((_, idx) => ({
          value: `item${idx}`,
          label: `Item ${idx}`,
        }));
      const [value, setValue] =
        React.useState<PropsValue<SelectControlOption>>();
      return (
        <SelectControl<SelectControlOption>
          {...props}
          onChange={(val) => {
            setValue(val);
          }}
          options={options}
          value={value}
          virtualizeOptions={true}
        />
      );
    })(args),
};
