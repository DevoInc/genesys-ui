import { BaseSize } from '../../../../declarations';
import { LinkSize } from '../../../Link/declarations';
import { MenuItemSize } from '../../declarations';

export const getMenuSizes = (
  size: BaseSize = 'md'
): {
  itemHeadingSpaceTop: string;
  itemHeadingPaddingLeft: string;
  itemBoxedSpace: string;
  marginSeparator: string;
} => {
  const marginSeparator =
    size === 'lg' ? '1rem' : size === 'sm' ? '.4rem' : '.8rem';
  return {
    itemHeadingSpaceTop: 'calc(' + marginSeparator + ' * 2.5)',
    itemHeadingPaddingLeft: getLinkBoxSizes({ size }).paddingLeft,
    itemBoxedSpace: getLinkBoxSizes({ size }).paddingVer,
    marginSeparator: marginSeparator,
  };
};

interface LinkBoxSizesEntry {
  paddingVer: string;
  paddingVerBoxed: string;
  paddingHor: string;
  paddingHorBoxed: string;
  iconFs: string;
  iconSelected: string;
  iconExpand: string;
}

// TODO: get rid of this
const linkBoxSizesMap: { [key in MenuItemSize]: LinkBoxSizesEntry } = {
  sm: {
    paddingVer: '.4rem',
    paddingVerBoxed: '.8rem',
    paddingHor: '.8rem',
    paddingHorBoxed: '1.2rem',
    iconFs: '1.2rem',
    iconSelected: '1.2rem',
    iconExpand: '.8rem',
  },
  md: {
    paddingVer: '.8rem',
    paddingVerBoxed: '1rem',
    paddingHor: '1.2rem',
    paddingHorBoxed: '1.6rem',
    iconFs: '1.4rem',
    iconSelected: '1.4rem',
    iconExpand: '1rem',
  },
  lg: {
    paddingVer: '1.4rem',
    paddingVerBoxed: '1.8rem',
    paddingHor: '1.8rem',
    paddingHorBoxed: '2.2rem',
    iconFs: '1.6rem',
    iconSelected: '1.6rem',
    iconExpand: '1.2rem',
  },
} as const;

// TODO: get rid of this
const getLinkBoxSizes = ({
  boxed,
  leftSpaced,
  selectable,
  size = 'md',
}: {
  boxed?: boolean;
  leftSpaced?: boolean;
  selectable?: boolean;
  size?: LinkSize;
}) => {
  const leftSpacing = 'calc(' + linkBoxSizesMap[size].paddingHorBoxed + ' * 2)';
  return {
    paddingVer: boxed
      ? linkBoxSizesMap[size].paddingVerBoxed
      : linkBoxSizesMap[size].paddingVer,
    paddingHor: boxed
      ? linkBoxSizesMap[size].paddingHorBoxed
      : linkBoxSizesMap[size].paddingHor,
    paddingLeft:
      leftSpaced || selectable ? leftSpacing : linkBoxSizesMap[size].paddingHor,
    paddingExpand: 'calc(' + linkBoxSizesMap[size].paddingHorBoxed + ' * 2)',
    iconFs: linkBoxSizesMap[size].iconFs,
    iconSquare: leftSpacing,
    iconSelected: linkBoxSizesMap[size].iconSelected,
    iconExpand: linkBoxSizesMap[size].iconExpand,
  };
};
