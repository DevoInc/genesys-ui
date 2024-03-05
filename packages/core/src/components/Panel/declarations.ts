import * as React from 'react';

import type {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations/styled';
import type { GlobalSize } from '../../declarations/commonProps';
import type {
  GlobalAttrProps,
  LinkAttrProps,
} from '../../declarations/htmlAttrs';
import { PickUnion } from '../../typeFunctions';

export type TPanelSize = PickUnion<GlobalSize, 'xs' | 'sm' | 'md'>;
export type TPanelRemoveSpace = boolean;
export type TPanelBordered = boolean;
export type TPanelBoxShadow = boolean;
export type TPanelChildren = React.ReactNode;
export type TPanelActions = React.ReactElement[];
export type TPanelIcon = React.ReactNode;

export interface IPanelHelpAttrs {
  helpTooltip?: GlobalAttrProps['tooltip'];
  helpUrl?: LinkAttrProps['href'];
}

export interface IPanelBaseAttrs
  extends StyledPolymorphicProps,
    StyledOverloadCssProps {}

export interface IPanelContainerAttrs {
  /** Apply border at the top of the footer or bottom of the header */
  bordered?: TPanelBordered;
  /** Configuration for the header/footer actions */
  actions?: TPanelActions;
  /** Apply box-shadow at the top of the footer or bottom of the header */
  hasBoxShadow?: TPanelBoxShadow;
  /** Set the size for Panel header/footer components: spacing, size of internals... etc. */
  size?: TPanelSize;
  children?: TPanelChildren;
}
