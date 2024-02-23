import { HeadingType } from '../../../../Typography/constants';
import { PanelSize } from '../../../declarations';

interface PanelHeaderSizes {
  xs: { title: HeadingType; subtitle: { size: PanelSize } };
  sm: { title: HeadingType; subtitle: { size: PanelSize } };
  md: { title: HeadingType; subtitle: { size: PanelSize } };
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
