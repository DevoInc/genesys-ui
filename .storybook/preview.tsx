import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import { Preview } from '@storybook/react';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { create } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { light, dark } from '@devoinc/genesys-brand-devo';
import '@devoinc/genesys-base-styles/dist/css/styles.css';
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
      storySort: {
        includeNames: true,
        order: [
          'Getting started',
          ['Overview', 'Installation'],
          'Components',
          ['Layout', 'Navigation', 'Media', 'Feedback'],
        ],
      },
    },
  },
  decorators: [
    (Story) => (
      <StrictMode>
        <Story />
      </StrictMode>
    ),
    (Story, parameters) => {
      return !parameters.tags.includes('noWrap') ? (
        <StoryWrapper
          display={
            parameters.parameters.layout === 'centered' ? 'flex' : undefined
          }
          padding={'cmp-md'}
          position="relative"
          height={
            parameters.parameters.layout === 'centered' ? '100%' : undefined
          }
          width={
            parameters.parameters.layout === 'centered' ? '100%' : undefined
          }
          alignItems={
            parameters.parameters.layout === 'centered' ? 'center' : undefined
          }
          justifyContent={
            parameters.parameters.layout === 'centered' ? 'center' : undefined
          }
        >
          <Story />
        </StoryWrapper>
      ) : (
        <Story />
      );
    },
    withThemeFromJSXProvider({
      themes: { light, dark },
      defaultTheme: 'light',
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
