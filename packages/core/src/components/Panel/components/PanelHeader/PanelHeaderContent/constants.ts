import { HeadingType } from '../../../../Typography/constants';
import { PanelSize } from '../../../declarations';

interface HeaderSizes {
  xs: { title: HeadingType; subtitle: { size: PanelSize } };
  sm: { title: HeadingType; subtitle: { size: PanelSize } };
  md: { title: HeadingType; subtitle: { size: PanelSize } };
}

export const HEADER_SIZES: HeaderSizes = {
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
