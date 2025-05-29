import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { StrictMode } from 'react';
import { Preview } from '@storybook/react-vite';
import { DocsContainer, DocsContainerProps } from '@storybook/addon-docs';
import { create } from 'storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import { light, dark } from '@devoinc/genesys-brand-devo';
import '@devoinc/genesys-base-styles/dist/css/styles.css';
import '@devoinc/genesys-icons/dist/gi-styles.css';
import 'react-toastify/dist/ReactToastify.css';

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
    layout: 'fullscreen',
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
      codePanel: true,
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
        method: 'alphabetical',
        includeNames: true,
        order: [
          'Getting started',
          ['Overview', 'Installation', 'Troubleshooting', 'Usage', 'Resources'],
          'Components',
          [
            'Button',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
            'Feedback',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
            'Form',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
            'Layout',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
            'Media',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
            'Navigation',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
            'Text',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
            'Datetime',
            [
              'Overview',
              'Calendar',
              ['Overview', 'Playground'],
              'Time',
              ['Overview', 'Playground'],
              'MonthSelector',
              ['Overview', 'Playground'],
              'RealTimeButton',
              ['Overview', 'Playground'],
              'Presets',
              ['Overview', 'Playground'],
              'DateTime',
              ['Overview', 'Playground'],
              'DateTimeInput',
              ['Overview', 'Playground'],
              'DateTimePicker',
              ['Overview', 'Playground'],
              'DateTimeFloatingPicker',
              ['Overview', 'Playground'],
              'DateTimeRange',
              ['Overview', 'Playground'],
              'DateTimeRangeInput',
              ['Overview', 'Playground'],
              'DateTimeRangeFloatingPicker',
              ['Overview', 'Playground'],
            ],
            'Code',
            ['Overview', '*', ['Overview', 'Playground', 'Components']],
          ],
          'Develop',
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
          bgMode={parameters.parameters.bgMode || 'surface'}
          padding={parameters.parameters.padding || 'cmp-md'}
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
