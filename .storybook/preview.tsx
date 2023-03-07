import * as React from 'react';
import { Preview } from '@storybook/react';
// import { DocsContainer } from '@storybook/addon-docs';
// import { BackToTop, TableOfContents } from 'storybook-docs-toc';
import { create } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '@devoinc/genesys-brand-devo';
import '@devoinc/genesys-base-styles/dist/styles.css';
import '@devoinc/genesys-icons/dist/gi-styles.css';

// Styles
// import './assets/styles/preview/preview.scss'; // This styles should only apply in the documentation
// import { DocsContainerDefault } from '../components/DocsContainer';
import './preview.scss';

import { Box } from '../packages/core/src/';

// Ad-hoc styles for SB documentation
const customTheme = create({
  base: 'light',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',

  // Text colors
  textColor: '#5B6870',
  textInverseColor: 'rgba(255,255,255,0.9)',
});

const preview: Preview = {
  parameters: {
    a11y: {
      element: '#root',
      manual: false,
    },
    controls: {
      expanded: true,
      hideNoControlsWarning: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      // container: ({ children, ...rest }) => (
      //   <React.Fragment>
      //     <DocsContainer {...rest}>
      //       <TableOfContents config={{ headingSelector: '#docContent h2' }} />
      //       <div id='docContent'>{children}</div>
      //       <BackToTop />
      //     </DocsContainer>
      //   </React.Fragment>
      // ),
      previewSource: 'open',
      source: {
        excludeDecorators: true,
        state: 'open',
        dark: true,
      },
      theme: customTheme,
      canvas: {
        withToolbar: true,
      },
    },
    info: {
      disable: true,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting started',
          ['Overview', 'Installation', 'Usage', 'Design resources'],
          'Components',
          ['Core', ['Form', ['Chip', ['Docs', 'Base']]], 'Form', 'Datetime'],
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <Box padding={'cmp-md'}>
        <Story />
      </Box>
    ),
    (Story, { globals }) => (
      <ThemeProvider
        theme={{ tokens: globals.theme === 'light' ? light : dark }}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'light' },
          { value: 'dark', title: 'dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
