import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Holo } from '@devoinc/holo';

import { BasicTable, TColDef, TData } from '../../src';

import { AppBar, AppLayout, PanelSection, Tabs } from '@devoinc/genesys-ui';

const meta: Meta<typeof BasicTable> = {
  title: 'Components/Layout/Table/Tabs',
  component: BasicTable,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BasicTable>;

const initialData1 = Holo.of()
  .schema({
    name: 'name',
    age: 'age',
    company: 'company',
    profession: 'profession',
    email: 'email',
    quote: 'sentence',
  })
  .repeat(20)
  .generate() as TData;

const initialData2 = Holo.of()
  .schema({
    name: 'name',
    age: 'age',
    company: 'company',
    profession: 'profession',
    email: 'email',
    quote: 'sentence',
  })
  .repeat(20)
  .generate() as TData;

const colDefsInitial1: TColDef[] = [
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
  },
  {
    id: 'age',
    headerName: 'Age',
    preset: 'number',
  },
  {
    id: 'company',
    headerName: 'Company',
    preset: 'text',
  },
  {
    id: 'profession',
    headerName: 'profession',
    preset: 'text',
  },
  {
    id: 'email',
    headerName: 'email',
    preset: 'text',
  },
  {
    id: 'quote',
    headerName: 'quote',
    preset: 'text',
  },
];

const colDefsInitial2: TColDef[] = [
  {
    id: 'name',
    headerName: 'Name',
    preset: 'text',
  },
  {
    id: 'age',
    headerName: 'Age',
    preset: 'number',
  },
  {
    id: 'company',
    headerName: 'Company',
    preset: 'text',
  },
  {
    id: 'profession',
    headerName: 'profession',
    preset: 'text',
  },
  {
    id: 'email',
    headerName: 'email',
    preset: 'text',
  },
  {
    id: 'quote',
    headerName: 'quote',
    preset: 'text',
  },
];

const DeletingTab = () => {
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar sticky>
          <AppBar.Navigation id="bar-navigation">
            <Tabs colorScheme="primary">
              <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
                <Tabs.Item
                  key="1"
                  label="Users"
                  onClick={() => setActiveTab(0)}
                  size="lg"
                  state={activeTab === 0 ? 'selected' : undefined}
                />
                <Tabs.Item
                  key="2"
                  onClick={() => setActiveTab(1)}
                  state={activeTab === 1 ? 'selected' : undefined}
                  size="lg"
                  label="Info"
                />
              </Tabs.List>
            </Tabs>
          </AppBar.Navigation>
        </AppBar>
      </AppLayout.Bar>
      <AppLayout.Content>
        {activeTab === 0 && (
          <PanelSection title={'Users'} subtitle={'Registro de usuarios'}>
            <BasicTable
              id={'tableDeletingTabStorie-tab1'}
              data={initialData1}
              colDefs={colDefsInitial1}
            />
          </PanelSection>
        )}
        {activeTab === 1 && (
          <PanelSection title={'Info'} subtitle={'Informacion de usuarios'}>
            <BasicTable
              id={'tableDeletingTabStorie-tab2'}
              data={initialData2}
              colDefs={colDefsInitial2}
            />
          </PanelSection>
        )}
      </AppLayout.Content>
    </AppLayout>
  );
};

export const DeletingTabCmp: Story = {
  render: () => <DeletingTab />,
};

const MaintainingTab = () => {
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar sticky>
          <AppBar.Navigation id="bar-navigation">
            <Tabs colorScheme="primary">
              <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
                <Tabs.Item
                  key="1"
                  label="Users"
                  onClick={() => setActiveTab(0)}
                  size="lg"
                  state={activeTab === 0 ? 'selected' : undefined}
                />
                <Tabs.Item
                  key="2"
                  onClick={() => setActiveTab(1)}
                  state={activeTab === 1 ? 'selected' : undefined}
                  size="lg"
                  label="Info"
                />
              </Tabs.List>
            </Tabs>
          </AppBar.Navigation>
        </AppBar>
      </AppLayout.Bar>
      <AppLayout.Content>
        <BasicTable
          id={'tableMaintainingTabStorie'}
          data={activeTab === 0 ? initialData1 : initialData2}
          colDefs={activeTab === 0 ? colDefsInitial1 : colDefsInitial2}
        />
      </AppLayout.Content>
    </AppLayout>
  );
};

export const MaintainingTabComponent: Story = {
  render: () => <MaintainingTab />,
};
