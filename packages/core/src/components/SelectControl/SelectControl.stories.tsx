import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Props, PropsValue } from 'react-select';

import {
  GIAttentionErrorAlertCaution,
  GICheckOkRounded,
  GIDeleteExitRemoveCloseRounded,
  GIInfoRound,
} from '@devoinc/genesys-icons';

import { TSelectOption } from './declarations';
import { SelectControl, SelectControlProps } from './SelectControl';
import { Button } from '../Button';
import { VFlex } from '../VFlex';

// TODO: QUV-2116 Problem using components as value for options object
//import { ESFlag, EUFlag, PTFlag, USFlag } from './__stories__/assets';

const meta: Meta<SelectControlProps> = {
  title: 'Components/Form/SelectControl',
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

export const Playground: Story = {
  tags: ['multiple', 'single', 'simple', 'select', 'chips'],
};

export const SingleOption: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <SelectControl
          {...props}
          onChange={(opt: TSelectOption) => setValue(opt.value)}
          options={[
            { value: 1, label: 'Option one' },
            { value: 2, label: 'Option two' },
            { value: 3, label: 'Option three' },
            { value: 4, label: 'Option four', isDisabled: true },
          ]}
          value={value}
        />
      );
    })(args),
};

export const SingleOptionWithReset: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <VFlex childrenFitFullWidth={false}>
          <SelectControl
            {...props}
            selectWidth="md"
            onChange={(opt: TSelectOption) => {
              setValue(opt.value);
            }}
            options={[
              { value: 1, label: 'Option one' },
              { value: 2, label: 'Option two' },
              { value: 3, label: 'Option three' },
              { value: 4, label: 'Option four' },
            ]}
            value={value}
          />
          <Button onClick={() => setValue(undefined)}>RESET</Button>
        </VFlex>
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

export const SingleOptionWithSeparator: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<SelectControlProps['value']>();
      return (
        <SelectControl
          {...props}
          onChange={(opt: TSelectOption) => setValue(opt.value)}
          options={[
            { value: 1, label: 'Assigned to me' },
            { value: 2, label: 'Unassigned' },
            { isSeparator: true },
            { value: 3, label: 'Rick Sanchez' },
            { value: 4, label: 'Morty Smith', isDisabled: true },
          ]}
          value={value}
        />
      );
    })(args),
};

export const SingleWithOptionsGroups: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const demoOptionsWithGroups: Props<TSelectOption>['options'] = [
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
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>({
        value: 41,
        label: 'Option four-one',
      });
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

export const SingleWithOptionsDesc: Story = {
  tags: ['isHidden'],
  args: {
    multipleSubtle: true,
  },
  render: (args) =>
    ((props) => {
      const demoOptionsWithGroups: Props<TSelectOption>['options'] = [
        {
          value: 1,
          label: 'Willie Morton',
          description: 'willie.morton@devo.com',
        },
        {
          value: 2,
          label: 'Elmer Rose',
          description: 'elmer.rose@devo.com',
        },
        {
          value: 3,
          label: 'Paul Mendoza',
          description: 'paul.mendoza@devo.com',
          isDisabled: true,
        },
        {
          value: 4,
          label: 'Hattie Flores',
          description: 'hattie.flores@devo.com',
        },
        {
          value: 5,
          label: 'Esther Oliver',
          description: 'esther.oliver@devo.com',
        },
        {
          value: 6,
          label: 'Birdie Hardy',
          description: 'birdie.hardy@devo.com',
        },
        {
          value: 7,
          label: 'Maggie Clayton',
          description: 'maggie.clayton@devo.com',
        },
      ];
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>({
        value: 41,
        label: 'Option four-one',
      });
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
  render: (args) =>
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<TSelectOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_el, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>();
      return (
        <SelectControl
          {...props}
          closeMenuOnSelect={false}
          isMulti
          sortable
          onChange={(val) => setValue(val)}
          options={getOptions(50)}
          value={value}
        />
      );
    })(args),
};

export const MultipleGroup: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>();
      return (
        <SelectControl
          {...props}
          closeMenuOnSelect={false}
          isMulti
          sortable
          onChange={(val) => setValue(val)}
          options={[
            {
              label: 'ENTERPRISE',
              options: [
                {
                  value: 'TA0040',
                  label: 'Impact (TA0040)',
                },
                {
                  value: 'TA0042',
                  label: 'Resource Development (TA0042)',
                },
                {
                  value: 'TA0011',
                  label: 'Command and Control (TA0011)',
                },
                {
                  value: 'TA0010',
                  label: 'Exfiltration (TA0010)',
                },
                {
                  value: 'TA0043',
                  label: 'Reconnaissance (TA0043)',
                },
              ],
            },
            {
              label: 'ICS',
              options: [
                {
                  value: 'TA0103',
                  label: 'Evasion (TA0103)',
                },
              ],
            },
            {
              label: 'MOBILE',
              options: [
                {
                  value: 'TA0031',
                  label: 'Credential Access (TA0031)',
                },
              ],
            },
          ]}
          value={value}
        />
      );
    })(args),
};

export const MultipleSubtle: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<TSelectOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_el, idx) => ({
            value: `item${idx}`,
            label: `'Option three with a name much more large to get ellipsis  to see what happen', Item ${idx}`,
          }));
      };
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>();
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
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<TSelectOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>();
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
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<TSelectOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>();
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
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const getOptions = (
        optionsNumber: number,
      ): Props<TSelectOption>['options'] => {
        return Array(optionsNumber)
          .fill(null)
          .map((_, idx) => ({
            value: `item${idx}`,
            label: `Item ${idx}`,
          }));
      };
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>();
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
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const options: Props<TSelectOption>['options'] = Array(20)
        .fill(20)
        .map((_, idx) => ({
          fixed: idx === 5 || idx === 8,
          value: `item${idx}`,
          label: `Item ${idx}`,
        }));
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>([
        { value: 'item5', label: 'Item 5' },
        { value: 'item8', label: 'Item 8' },
      ]);
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
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const options: Props<TSelectOption>['options'] = Array(20000)
        .fill(null)
        .map((_, idx) => ({
          value: `item${idx}`,
          label: `Item ${idx}`,
        }));
      const [value, setValue] = React.useState<PropsValue<TSelectOption>>();
      return (
        <SelectControl<TSelectOption>
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
