import * as React from 'react';
import { useTheme } from 'styled-components';

import { Overlay, OverlayProps } from '../Overlay';

import type {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations';
import type {
  LoaderSize,
  LoaderColorScheme,
  LoaderBasicColorScheme,
} from './declarations';

import { LoaderContext } from './context';

import {
  LoaderDevoLogoSpinner,
  LoaderGradientContainer,
  LoaderProgressBar,
  LoaderSpinner,
} from './components';
import { getLoaderContentColorScheme } from './utils';

export interface LoaderProps
  extends Pick<
      OverlayProps,
      'alignItems' | 'fixed' | 'zIndex' | 'justifyContent' | 'padding'
    >,
    // native
    GlobalAttrProps,
    GlobalAriaProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps {
  children: React.ReactElement;
  /** The definition of color scheme: based in the scheme of the theme (inherited), light, dark... etc. It defines if the overlay is dark and the content light or vice versa.*/
  colorScheme?: LoaderColorScheme;
  /** If the Overlay is opaque.*/
  opaque?: boolean;
  /** The pre-defined size for its children: Spinner, ProgressBar... etc. .*/
  size?: LoaderSize;
}

const InternalLoader: React.FC<LoaderProps> = ({
  alignItems,
  children,
  colorScheme = 'inherited',
  fixed,
  justifyContent,
  opaque,
  padding,
  size = 'md',
  zIndex = 10,
  role,
  styles,
  tooltip,
  ...nativeProps
}) => {
  const theme = useTheme();
  const evalColorScheme =
    colorScheme === 'inherited'
      ? (theme.meta.scheme as LoaderBasicColorScheme)
      : colorScheme;
  const hasGradient = children.type === LoaderGradientContainer;
  const evalDefaultPadding = hasGradient ? '0' : 'cmp-lg';
  return (
    <Overlay
      {...nativeProps}
      alignItems={alignItems}
      bgColorScheme={evalColorScheme}
      bgColor={hasGradient && 'transparent'}
      fixed={fixed}
      hasInteractionBehind={hasGradient}
      justifyContent={justifyContent}
      opacity={opaque ? 1 : 0.8}
      padding={String(padding) || evalDefaultPadding}
      role={role}
      styles={styles}
      tooltip={tooltip}
      zIndex={zIndex || (fixed ? 99999 : undefined)}
    >
      <LoaderContext.Provider
        value={{
          size,
          colorScheme: getLoaderContentColorScheme({
            colorScheme,
            theme,
          }),
        }}
      >
        {children}
      </LoaderContext.Provider>
    </Overlay>
  );
};

export const Loader = InternalLoader as typeof InternalLoader & {
  DevoLogoSpinner: typeof LoaderDevoLogoSpinner;
  GradientContainer: typeof LoaderGradientContainer;
  ProgressBar: typeof LoaderProgressBar;
  Spinner: typeof LoaderSpinner;
};

Loader.DevoLogoSpinner = LoaderDevoLogoSpinner;
Loader.GradientContainer = LoaderGradientContainer;
Loader.ProgressBar = LoaderProgressBar;
Loader.Spinner = LoaderSpinner;

InternalLoader.displayName = 'Loader';
Loader.DevoLogoSpinner.displayName = 'Loader.DevoLogoSpinner';
Loader.GradientContainer.displayName = 'Loader.GradientContainer';
Loader.ProgressBar.displayName = 'Loader.ProgressBar';
Loader.Spinner.displayName = 'Loader.Spinner';
