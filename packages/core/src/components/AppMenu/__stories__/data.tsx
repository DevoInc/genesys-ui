import * as React from 'react';
import {
  GIAlerts,
  GIAutomations,
  GICalendarMonthDayPlannerEvents,
  GIChipCpuProcessor,
  GIClipboardBoxArchiveDocuments,
  GIDeeptrace,
  GIExchange,
  GIFlow,
  GIGaugeDashboardFullFuel,
  GIHeartPulseRateHealth,
  GIHomeHouse,
  GIIdentityCardPhotoUserProfile,
  GIIngestionCollectLayers,
  GIMachineLearningModels,
  GIPhoneCallNumberDialer,
  GISearchFindZoom,
  GIUeba,
  GIWindowNewExternFullScreenMaximize,
} from '@devoinc/genesys-icons';
import { Panel } from '../../Panel';
import { Menu } from '../../Menu';
import { AppMenu } from '../AppMenu';
import { Divider } from '../../Divider';
import { Typography } from '../../Typography';
import { InputControl } from '../../InputControl';
import { IconButton } from '../../IconButton';

const popoverItemActions = [
  <IconButton
    key="popover-actions"
    icon={<GIWindowNewExternFullScreenMaximize />}
    size="xs"
    colorScheme="quiet"
    href="#"
    target="_blank"
    tooltip="Open in a new browser tab"
  />,
];

export const appMenuData = [
  {
    id: 'home',
    featured: true,
    href: '#',
    icon: <GIHomeHouse />,
    label: 'Home',
    isCurrent: true,
    tooltip: 'Home',
  },
  {
    isSeparator: true,
  },
  {
    isHeading: true,
    text: 'Investigation',
    collapsedText: 'Inv.',
  },
  {
    id: 'search',
    href: '#',
    icon: <GISearchFindZoom />,
    label: 'Search',
    tooltip: 'Search',
  },
  {
    id: 'alerts',
    href: '#',
    icon: <GIAlerts />,
    label: 'Alerts',
    tooltip: 'Alerts',
    counter: '+99',
  },
  {
    id: 'cases',
    href: '#',
    icon: <GIClipboardBoxArchiveDocuments />,
    label: 'Cases',
    tooltip: 'Cases',
    isBeta: true,
  },
  {
    isSeparator: true,
  },
  {
    isHeading: true,
    text: 'Analytics',
    collapsedText: 'Analyt.',
  },
  {
    id: 'activeboards',
    href: '#',
    icon: <GIGaugeDashboardFullFuel />,
    label: 'Activeboards',
    tooltip: 'Activeboards',
  },
  {
    id: 'reports',
    href: '#',
    icon: <GICalendarMonthDayPlannerEvents />,
    label: 'Reports',
    tooltip: 'Reports',
  },
  {
    id: 'ueba',
    href: '#',
    icon: <GIUeba />,
    label: 'Behavioral analytics (UEBA)',
    tooltip: 'Behavioral analytics (UEBA)',
  },
  {
    id: 'deeptrace',
    href: '#',
    icon: <GIDeeptrace />,
    label: 'Deeptrace',
    tooltip: 'Deeptrace',
  },
  {
    isSeparator: true,
  },
  {
    isHeading: true,
    text: 'Monitoring',
  },
  {
    id: 'usage',
    href: '#',
    icon: <GIHeartPulseRateHealth />,
    label: 'Usage insights',
    tooltip: 'Usage insights',
  },
  {
    isSeparator: true,
  },
  {
    isHeading: true,
    text: 'Apps',
  },
  {
    id: 'apps',
    icon: <GIPhoneCallNumberDialer />,
    label: 'Installed apps',
    tooltip: 'Installed apps (expand)',
    expandable: true,
    popoverContent: (
      <Panel.Body>
        <Typography.Heading gutterBottom="cmp-xs" size="h6">
          Devo suite
        </Typography.Heading>
        <Menu>
          <AppMenu.PopoverItem
            featuredIcon
            icon={<GIFlow />}
            label="Flow Editor"
            description="Correlation engine for real-time data processing."
            actions={popoverItemActions}
          />
          <AppMenu.PopoverItem
            featuredIcon
            icon={<GIMachineLearningModels />}
            label="Machine learning models"
            description="Autonomous alert investigations and threat hunting."
            actions={popoverItemActions}
          />
        </Menu>
        <Divider margin="cmp-xs 0" />
        <Typography.Heading gutterBottom="cmp-xs" size="h6">
          All apps
        </Typography.Heading>
        <InputControl
          type="search"
          aria-label="Search app"
          placeholder="Search app..."
        />
        <Menu marginTop="cmp-sm" height="20rem" overflow="auto">
          <AppMenu.PopoverItem
            label="Behaviour analytics"
            actions={popoverItemActions}
            href="#"
          />
          <AppMenu.PopoverItem
            label="Firewall report"
            actions={popoverItemActions}
          />
          <AppMenu.PopoverItem
            label="Firewall Sentinel"
            actions={popoverItemActions}
          />
          <AppMenu.PopoverItem
            label="MITRE Attack adviser"
            actions={popoverItemActions}
          />
          <AppMenu.PopoverItem
            label="MysticGuard Security monitor"
            actions={popoverItemActions}
          />
          <AppMenu.PopoverItem
            label="Production deployments"
            actions={popoverItemActions}
          />
          <AppMenu.PopoverItem
            label="Security insights"
            actions={popoverItemActions}
          />
        </Menu>
      </Panel.Body>
    ),
  },
  {
    id: 'marketplace',
    href: '#',
    icon: <GIExchange />,
    label: 'Marketplace',
    tooltip: 'Marketplace',
  },
  {
    isSeparator: true,
  },
  {
    isHeading: true,
    text: 'Administration',
  },
  {
    id: 'access',
    href: '#',
    icon: <GIIdentityCardPhotoUserProfile />,
    label: 'Access control',
    tooltip: 'Access control',
  },
  {
    id: 'automations',
    href: '#',
    icon: <GIAutomations />,
    label: 'Automations',
    isBeta: true,
    tooltip: 'Automations',
  },
  {
    id: 'data',
    href: '#',
    icon: <GIChipCpuProcessor />,
    label: 'Data processes',
    tooltip: 'Data processes',
  },
  {
    id: 'ingestion',
    href: '#',
    icon: <GIIngestionCollectLayers />,
    label: 'Ingestion',
    tooltip: 'Ingestion',
  },
];
