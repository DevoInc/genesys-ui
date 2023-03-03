import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const iconMap = {
  Components: '📱',
  'Getting started': '🚀',
};

addons.setConfig({
  // showToolbar: true,
  theme: create({
    base: 'light',
    brandTitle: '🎨 Genesys UI ',
    brandUrl: '#',
    brandImage: 'logo.png',
  }),
  sidebar: {
    renderLabel: ({ name, type, ...props }) => {
      return type === 'root'
        ? `${iconMap[name] ? iconMap[name] : ''} ${name}`
        : name;
    },
  },
});
