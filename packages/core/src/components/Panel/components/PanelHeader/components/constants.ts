import {
  THeadingType,
  TTypographyFormat,
} from '../../../../Typography/declarations';
import type { TPanelSize } from '../../../declarations';

interface PanelHeaderSizes {
  xs: { title: THeadingType; subtitle: { size: TPanelSize } };
  sm: { title: THeadingType; subtitle: { size: TPanelSize } };
  md: { title: THeadingType; subtitle: { size: TPanelSize } };
}

interface PanelHeaderFormats {
  xs: { title: TTypographyFormat; subtitle: { size: TTypographyFormat } };
  sm: { title: TTypographyFormat; subtitle: { size: TTypographyFormat } };
  md: { title: TTypographyFormat; subtitle: { size: TTypographyFormat } };
}

export const PANEL_HEADER_SIZES: PanelHeaderSizes = {
  xs: {
    title: 'h6',
    subtitle: {
      size: 'xs',
    },
  },
  sm: {
    title: 'h5',
    subtitle: {
      size: 'sm',
    },
  },
  md: {
    title: 'h4',
    subtitle: {
      size: 'md',
    },
  },
};

export const PANEL_HEADER_FORMATS: PanelHeaderFormats = {
  xs: {
    title: 'heading-h6',
    subtitle: {
      size: 'body-xs',
    },
  },
  sm: {
    title: 'heading-h5',
    subtitle: {
      size: 'body-sm',
    },
  },
  md: {
    title: 'heading-h4',
    subtitle: {
      size: 'body-md',
    },
  },
};
