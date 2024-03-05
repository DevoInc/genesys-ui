import { HeadingType } from '../../../../Typography/constants';
import { TPanelSize } from '../../../declarations';

interface PanelHeaderSizes {
  xs: { title: HeadingType; subtitle: { size: TPanelSize } };
  sm: { title: HeadingType; subtitle: { size: TPanelSize } };
  md: { title: HeadingType; subtitle: { size: TPanelSize } };
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
