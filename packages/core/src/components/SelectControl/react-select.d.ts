import { GroupBase } from 'react-select';
import { ICommonSelectCmps } from './declarations';

// Use module augmentation to extend the react-select types with our own.
declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>,
  > extends ICommonSelectCmps {}
}
