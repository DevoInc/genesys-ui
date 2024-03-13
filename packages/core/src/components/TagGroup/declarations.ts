import { TagProps } from '../Tag';

export type TLabelPosition = 'left' | 'top';

export interface CommonTagGroupProps extends Pick<TagProps, 'size'> {
  /** Position of the label text relative to the tags */
  labelPosition?: TLabelPosition;
}
