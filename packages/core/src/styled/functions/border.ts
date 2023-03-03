import { Coords } from '../../';

/** Params for  {@link getBorderRadius} */
interface Radius {
  /** position of the border radius */
  coords?: Coords;
  /** value of the border radius */
  value?: string;
}

/**
 * Return the specific border radius regarding the position and its value.
 */
export const getBorderRadius = ({ coords, value }: Radius = {}) =>
  ({
    all: value,
    top: `${value} ${value} 0 0`,
    left: `${value} 0 0 ${value}`,
    bottom: `0 0 ${value} ${value}`,
    right: `0 ${value} ${value} 0`,
    topLeft: `${value} 0 0 0`,
    topRight: `0 ${value} 0 0`,
    bottomLeft: `0 0 0 ${value}`,
    bottomRight: `0 0 ${value} 0`,
  }[coords] || null);

getBorderRadius({ coords: 'all', value: '12px' });
