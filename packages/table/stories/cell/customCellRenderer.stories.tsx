import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  Avatar,
  Box,
  HFlex,
  KeyValue,
  Panel,
  Popover,
  SelectControl,
  type TSelectOption,
  Typography,
  VFlex,
} from '@devoinc/genesys-ui';

import {
  GIEmailMailPostCard,
  GIPhoneCallContact,
  GIUserProfileAvatarManMale,
} from '@devoinc/genesys-icons';

import {
  BasicTable,
  type TColDef,
  type TCellRenderer,
  type TRowDef,
} from '../../src';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Cell/customCellRenderer',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const users = [
  {
    id: '0',
    name: 'Sally Pratt',
    imageId: 26,
    email: 'sally.pratt@devo.com',
    phone: '+22 456 789',
    job: 'Security Analyst, Security Architect, Incident Responder',
  },
  {
    id: '1',
    name: 'Gabriel Clayton',
    imageId: 18,
    email: 'gabriel.clayton@devo.com',
    phone: '+22 456 789',
    job: 'Security Analyst',
  },
  {
    id: '2',
    name: 'Lettie May',
    imageId: 35,
    email: 'lettie.may@devo.com',
    phone: '+22 456 789',
    job: 'UX-UI designer, UI developer',
  },
  {
    id: '3',
    name: 'Robert Pascual',
    imageId: 28,
    email: 'robert.pascual@devo.com',
    phone: '+22 456 789',
    job: 'Product manager',
  },
];

const initialData = [
  {
    id: '0',
    user: users[0].id,
    booleanValue: true,
  },
  {
    id: '1',
    user: users[1].id,
    booleanValue: true,
  },
  {
    id: '2',
    user: users[2].id,
    booleanValue: false,
  },
];

const editionOptions: TSelectOption[] = [
  { value: users[3].id, label: `${users[3].name} (assign to me)` },
  { value: null, label: 'Unassigned' },
  { isSeparator: true },
  { value: users[0].id, label: users[0].name },
  { value: users[1].id, label: users[1].name },
  { value: users[2].id, label: users[2].name },
];

const renderUserInfo = ({ colDef, value, rowDef, rowIndex }) => {
  const setOpenedMenu = React.useRef(null);
  return value ? (
    <Popover placement="bottom-start" id="custom-col-menu">
      {({ toggle, ref, isOpened, setOpened }) => {
        setOpenedMenu.current = setOpened;
        return (
          <Box
            ref={ref}
            onMouseOut={toggle}
            onClick={() => setOpenedMenu.current(!isOpened)}
            onMouseOver={() => setOpenedMenu.current(true)}
            tooltip={`${colDef?.headerName}: ${users[value].name}`}
          >
            <KeyValue
              supportingVisual={
                <Avatar
                  size="xxs"
                  name={users[value].name}
                  imageSrc={`https://i.pravatar.cc/150?img=${users[value].imageId}`}
                  bordered={rowDef?.preset === 'created'}
                />
              }
              valueContent={`${rowIndex + 1}. ${users[value].name}`}
            />
          </Box>
        );
      }}
      <Panel width="28rem">
        <Panel.Body>
          <VFlex>
            <HFlex spacing="cmp-sm">
              <Avatar
                size="sm"
                name={users[value].name}
                imageSrc={`https://i.pravatar.cc/150?img=${users[value].imageId}`}
              />
              <Typography.Heading>{users[value].name}</Typography.Heading>
            </HFlex>
            <VFlex spacing="cmp-xs">
              <KeyValue
                supportingVisual={<GIEmailMailPostCard size={16} />}
                valueContent={users[value].email}
              />
              <KeyValue
                supportingVisual={<GIPhoneCallContact size={16} />}
                valueContent={users[value].phone}
              />
              <KeyValue
                supportingVisual={<GIUserProfileAvatarManMale size={16} />}
                supportingVisualAlign="flex-start"
                valueTruncateLine="none"
                valueContent={users[value].job}
              />
            </VFlex>
          </VFlex>
        </Panel.Body>
      </Panel>
    </Popover>
  ) : (
    <KeyValue
      supportingVisual={
        <Avatar
          size="xxs"
          name={'Unassigned'}
          imageSrc="https://i1.wp.com/devo-static-files-dev.s3.amazonaws.com/static/v4.1/assets/img/components/navigation/default_user.jpg?ssl=1"
          bordered={rowDef?.preset === 'created'}
        />
      }
      valueContent={`${rowIndex + 1}. Unassigned`}
    />
  );
};

const colDefsInitial: TColDef[] = [
  {
    id: 'user',
    editable: true,
    headerName: 'Assigned to',
    cellRenderer: ({ colDef, value, rowDef, rowIndex }: TCellRenderer) =>
      renderUserInfo({ colDef, value, rowDef, rowIndex }),
    cellEditor: ({ value, onChange }) => {
      return (
        <SelectControl
          autoFocus
          id={'test'}
          aria-label={'custom'}
          placeholder={'Select user option'}
          menuAppendToBody
          defaultMenuIsOpen
          onChange={(event) => {
            onChange(event.value);
          }}
          options={editionOptions}
          value={value ? String(value) : null}
        />
      );
    },
    context: {
      options: {
        3: { label: `${users[3].name} (me)` },
        null: { label: 'Unassigned' },
        0: { label: users[0].name },
        1: { label: users[1].name },
        2: { label: users[2].name },
      },
    },
  },
  {
    id: 'booleanValue',
    preset: 'boolean',
    headerName: 'Editing permissions',
    width: 140,
  },
];

const rowDefsInitial: TRowDef[] = [
  {
    id: '1',
    preset: 'created',
  },
];

const BasicCmp = () => {
  const [newData, setNewData] = React.useState(initialData);
  return (
    <VFlex spacing="cmp-md" height={'auto'}>
      <BasicTable
        id={'custom-cell-renderer'}
        data={newData}
        colDefs={colDefsInitial}
        rowDefs={rowDefsInitial}
        onCellDataChange={({ colDef, value, rowIndex }) => {
          setNewData(
            newData.map((data, index) => {
              if (index === rowIndex) {
                data[colDef.id] = value;
              }
              return data;
            }),
          );
        }}
      />
    </VFlex>
  );
};

export const Base: Story = {
  render: () => <BasicCmp />,
};
