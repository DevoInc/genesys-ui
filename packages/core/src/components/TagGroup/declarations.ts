import { ITag } from '../Tag';

export type TTagGroupLabelPosition = 'left' | 'top';

export interface ITagGroup
  extends Pick<ITag, 'colorScheme' | 'quiet' | 'size'> {
  /** Position of the label text relative to the tags. */
  labelPosition?: TTagGroupLabelPosition;
}
