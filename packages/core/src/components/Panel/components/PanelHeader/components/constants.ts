import { THeadingType } from '../../../../Typography/constants';
import { TPanelSize } from '../../../declarations';

interface PanelHeaderSizes {
  xs: { title: THeadingType; subtitle: { size: TPanelSize } };
  sm: { title: THeadingType; subtitle: { size: TPanelSize } };
  md: { title: THeadingType; subtitle: { size: TPanelSize } };
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
