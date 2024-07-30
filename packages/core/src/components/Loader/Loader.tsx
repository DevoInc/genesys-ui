import * as React from 'react';
import { useTheme } from 'styled-components';

import { Overlay, type OverlayProps } from '../Overlay';
import type {
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
  IStyledPolymorphic,
} from '../../declarations';
import type {
  TLoaderSize,
  TLoaderColorScheme,
  TLoaderBasicColorScheme,
} from './declarations';
import { getLoaderContentColorScheme } from './utils';
import { LoaderContext } from './context';
import {
  LoaderDevoLogoSpinner,
  LoaderGradientContainer,
  LoaderProgressBar,
  LoaderSpinner,
} from './components';

export interface LoaderProps
  extends Pick<
      OverlayProps,
      'alignItems' | 'fixed' | 'zIndex' | 'justifyContent' | 'padding'
    >,
    // native
    IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledPolymorphic,
    IStyledOverloadCss {
  children: React.ReactElement;
  /** The definition of color scheme: based in the scheme of the theme (inherited), light, dark... etc. It defines if the overlay is dark and the content light or vice versa.*/
  colorScheme?: TLoaderColorScheme;
  /** If the Overlay is opaque.*/
  opaque?: boolean;
  /** The pre-defined size for its children: Spinner, ProgressBar... etc. .*/
  size?: TLoaderSize;
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
  style,
  tooltip,
  ...nativeProps
}) => {
  const theme = useTheme();
  const evalColorScheme =
    colorScheme === 'inherited'
      ? (theme.meta.scheme as TLoaderBasicColorScheme)
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
      style={style}
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
