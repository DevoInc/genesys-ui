import * as React from 'react';
import { useTheme } from 'styled-components';

import { LOADER_SIZE_MAP } from './constants';

import {
  Box,
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

import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';
import {
  LoaderSize,
  LoaderType,
  LoaderColorScheme,
  GradientConfig,
  LoaderBasicColorScheme,
} from './declarations';
import { getSize } from './utils';

export interface LoaderProps
  extends Pick<
      OverlayProps,
      | 'alignItems'
      | 'className'
      | 'fixed'
      | 'zIndex'
      | 'justifyContent'
      | 'padding'
    >,
    Pick<ProgressBarProps, 'iconComplete'>,
    // native
    GlobalAttrProps,
    GlobalAriaProps {
  /** The definition of color scheme: based in the scheme of the theme (inherited), light, dark... etc. It defines if the overlay is dark and the content light or vice versa.*/
  colorScheme?: LoaderColorScheme;
  gradientConfig?: GradientConfig;
  loadPercent?: ProgressBarProps['percent'];
  opaque?: boolean;
  size?: LoaderSize;
  type?: LoaderType;
}

const InternalLoader: React.FC<LoaderProps> = ({
  alignItems,
  className,
  colorScheme = 'inherited',
  fixed,
  gradientConfig,
  iconComplete,
  justifyContent,
  loadPercent,
  opaque,
  padding,
  size = 'md',
  type = 'spinner',
  zIndex = 10,
  //native
  role,
  ...nativeProps
}) => {
  const theme = useTheme();
  const evalColorScheme =
    colorScheme === 'inherited'
      ? (theme.meta.scheme as LoaderBasicColorScheme)
      : colorScheme;
  const contentColor = evalColorScheme === 'dark' ? 'light' : 'dark';
  const contentSize = size;
  const tokens = useTheme();
  const gradientColor = tokens.alias.color.background.surface.base.base;
  const getContent = () => {
    if (type === 'progress' || loadPercent) {
      return (
        <ProgressBar
          {...nativeProps}
          colorScheme={contentColor}
          iconComplete={iconComplete}
          percent={loadPercent}
          showInfo
          size={LOADER_SIZE_MAP[size].progress}
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
        />
      );
    }

    return (
      <SpinnerLoader
        {...nativeProps}
        role={role}
        colorScheme={contentColor}
        size={getSize(contentSize).spinner}
      />
    );
  };
  const renderContent = () => {
    if (gradientConfig) {
      return (
        <Box
          height={gradientConfig.height || '16rem'}
          width="100%"
          position="relative"
        >
          <Overlay
            alignItems="center"
            bgGradient={`linear-gradient(to top, ${gradientColor} 0%, ${gradientColor} 3.2rem,rgba(0,0,0,0) 100%)`}
            hasInteractionBehind
            justifyContent="flex-end"
            padding={String(padding)}
          >
            {getContent()}
          </Overlay>
        </Box>
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
      className={className}
      fixed={fixed}
      hasInteractionBehind={Boolean(gradientConfig)}
      justifyContent={gradientConfig ? 'flex-end' : justifyContent}
      opacity={opaque ? 1 : 0.8}
      padding={gradientConfig ? '0' : String(padding)}
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
Loader.ContextualScroll = ContextualScrollLoader;
Loader.Global = GlobalLoader;
