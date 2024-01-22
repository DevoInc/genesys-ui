import * as React from 'react';
import { useTheme } from 'styled-components';

import { LOADER_SIZE_MAP } from './constants';

import {
  DevoLogoLoader,
  Overlay,
  OverlayProps,
  ProgressBar,
  ProgressBarProps,
  SpinnerLoader,
} from '../';

import {
  ContextualLoader,
  ContextualScrollLoader,
  GlobalLoader,
} from './cases';

import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssPropsWithRecord,
  StyledPolymorphicProps,
} from '../../declarations';
import {
  LoaderSize,
  LoaderType,
  LoaderColorScheme,
  GradientConfig,
  LoaderBasicColorScheme,
} from './declarations';
import { getSize } from './utils';
import { LoaderGradientContainer, LoaderGradientOverlay } from './components';

export interface BaseLoaderProps
  extends Pick<
      OverlayProps,
      'alignItems' | 'fixed' | 'zIndex' | 'justifyContent' | 'padding'
    >,
    // native
    GlobalAttrProps,
    GlobalAriaProps,
    StyledPolymorphicProps {
  /** The definition of color scheme: based in the scheme of the theme (inherited), light, dark... etc. It defines if the overlay is dark and the content light or vice versa.*/
  colorScheme?: LoaderColorScheme;
  gradientConfig?: GradientConfig;
  loadPercent?: ProgressBarProps['percent'];
  opaque?: boolean;
  progressIcon?: ProgressBarProps['icon'];
  size?: LoaderSize;
  type?: LoaderType;
}

export type LoaderProps = BaseLoaderProps &
  StyledOverloadCssPropsWithRecord<
    | 'gradientContainer'
    | 'gradientOverlay'
    | 'overlay'
    | 'progress'
    | 'logo'
    | 'spinner'
  >;

const InternalLoader: React.FC<LoaderProps> = ({
  alignItems,
  as,
  colorScheme = 'inherited',
  fixed,
  gradientConfig,
  progressIcon,
  justifyContent,
  loadPercent,
  opaque,
  padding,
  size = 'md',
  type = 'spinner',
  zIndex = 10,
  //native
  role,
  styles,
  subcomponentStyles,
  tooltip,
  ...nativeProps
}) => {
  const theme = useTheme();
  const evalColorScheme =
    colorScheme === 'inherited'
      ? (theme.meta.scheme as LoaderBasicColorScheme)
      : colorScheme;
  const contentColor = evalColorScheme === 'dark' ? 'light' : 'dark';
  const contentSize = size;

  const getContent = () => {
    if (type === 'progress' || loadPercent) {
      return (
        <ProgressBar
          {...nativeProps}
          colorScheme={contentColor}
          icon={progressIcon}
          percent={loadPercent}
          showStatus
          size={LOADER_SIZE_MAP[size].progress}
          styles={subcomponentStyles?.progress}
          type="circular"
        />
      );
    }

    if (type === 'logo') {
      return (
        <DevoLogoLoader
          {...nativeProps}
          role={role}
          colorScheme={contentColor}
          size={size}
          styles={subcomponentStyles?.logo}
        />
      );
    }

    return (
      <SpinnerLoader
        {...nativeProps}
        role={role}
        colorScheme={contentColor}
        size={getSize(contentSize).spinner}
        styles={subcomponentStyles?.spinner}
      />
    );
  };
  const renderContent = () => {
    if (gradientConfig) {
      return (
        <LoaderGradientContainer
          as={as}
          height={gradientConfig.height}
          styles={subcomponentStyles?.gradientContainer}
        >
          <LoaderGradientOverlay styles={subcomponentStyles?.gradientOverlay}>
            {getContent()}
          </LoaderGradientOverlay>
        </LoaderGradientContainer>
      );
    } else {
      return getContent();
    }
  };
  return (
    <Overlay
      alignItems={alignItems}
      bgColorScheme={evalColorScheme}
      bgColor={gradientConfig && 'transparent'}
      fixed={fixed}
      hasInteractionBehind={Boolean(gradientConfig)}
      justifyContent={gradientConfig ? 'flex-end' : justifyContent}
      opacity={opaque ? 1 : 0.8}
      padding={gradientConfig ? '0' : String(padding)}
      styles={subcomponentStyles?.overlay || styles}
      tooltip={tooltip}
      zIndex={zIndex}
    >
      {renderContent()}
    </Overlay>
  );
};

export const Loader = InternalLoader as typeof InternalLoader & {
  Contextual: typeof ContextualLoader;
  ContextualScroll: typeof ContextualScrollLoader;
  Global: typeof GlobalLoader;
};

Loader.Contextual = ContextualLoader;
Loader.Contextual = ContextualLoader;
Loader.ContextualScroll = ContextualScrollLoader;
Loader.Global = GlobalLoader;
