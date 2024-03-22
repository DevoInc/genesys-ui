export const tabsBasicUsageCode: string = `
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  useTabsAccessibility({ activeTab, tabsRef });
return (
  <Tabs {...props}>
    <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
      <Tabs.Item
        icon={<GIChart />}
        label="Tiny"
        onClick={() => setActiveTab(0)}
        state={activeTab === 0 ? 'selected' : undefined}
      />
      <Tabs.Item
        icon={<GICheckThick />}
        label="Tab with a very very long title"
        onClick={() => setActiveTab(1)}
        state={activeTab === 1 ? 'selected' : undefined}
      />
      <Tabs.Item
        label="Normal tab"
        onClick={() => setActiveTab(2)}
        state={activeTab === 2 ? 'selected' : undefined}
      />
      <Tabs.Item
        label="Disabled tab"
        onClick={() => setActiveTab(3)}
        state="disabled"
      />
    </Tabs.List>
  </Tabs>
);
`;

export const tabsMarkCode: string = `
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  const { markRef } = useTabsMark({ activeTabIndex, tabsRef });
  useTabsAccessibility({ activeTab, tabsRef });
return (
  <CustomTabs>
    <CustomTabsList ref={tabsRef} activeTabIndex={activeTab}>
      <Tabs.Item
        label="Tiny"
        onClick={() => setActiveTab(0)}
        state={activeTab === 0 ? 'selected' : undefined}
      />
      <Tabs.Item
        label="Tab with a very very long title"
        onClick={() => setActiveTab(1)}
        state={activeTab === 1 ? 'selected' : undefined}
      />
      <Tabs.Item
        label="Normal tab"
        onClick={() => setActiveTab(2)}
        state={activeTab === 2 ? 'selected' : undefined}
      />
    </CustomTabsList>
    <Tabs.Mark ref={markRef} />
  </CustomTabs>
);
`;
