import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import { Preview } from '@storybook/react';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { create } from '@storybook/theming';

import { light, dark } from '@devoinc/genesys-brand-devo';
import '@devoinc/genesys-base-styles/dist/styles.css';
import '@devoinc/genesys-icons/dist/gi-styles.css';

import { BackToTop, TableOfContents } from './docs/blocks';
import { StoryWrapper } from '../packages/core/stories/components/StoryWrapper';

// Styles
// import './assets/styles/preview/preview.scss'; // This styles should only apply in the documentation
// import { DocsContainerDefault } from '../components/DocsContainer';
import './preview.scss';

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
      container: ({
        children,
        ...rest
      }: DocsContainerProps & { children: React.ReactNode }) => {
        return (
          <DocsContainer {...rest}>
            <TableOfContents />
            {children}
            <BackToTop />
          </DocsContainer>
        );
      },
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
      storySort: (a, b) => {
        const storySortOrder = ['Docs', 'Base', 'Cases', 'Hooks', 'Components'];

        // Lower depth goes first
        const aDepth = a.title.split('/').length;
        const bDepth = b.title.split('/').length;

        if (aDepth > bDepth) return 1;
        if (aDepth < bDepth) return -1;

        // Then sort by storySortOrder
        const aMatch = storySortOrder.indexOf(a.name);
        const bMatch = storySortOrder.indexOf(b.name);

        const aPriority = aMatch === -1 ? Infinity : aMatch;
        const bPriority = bMatch === -1 ? Infinity : bMatch;

        if (aPriority < bPriority) return -1;
        return 1;
      },
    },
  },
  decorators: [
    (Story) => (
      <StrictMode>
        <StoryWrapper padding={'cmp-md'} position="relative">
          <Story />
        </StoryWrapper>
      </StrictMode>
    ),
    (Story, { globals }) => (
      <ThemeProvider theme={{ ...(globals.theme === 'light' ? light : dark) }}>
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
