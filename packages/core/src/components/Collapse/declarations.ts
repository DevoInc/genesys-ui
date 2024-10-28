export type TExpanded = boolean;

export interface ICollapse {
  /** If the collapse is disabled and it's not expandable */
  disabled?: boolean;
  /** If the collapse is expanded */
  expanded?: TExpanded;
  /** If the collapse block is draggable */
  isDraggable?: boolean;
  /** If the collapse has transparent background */
  quiet?: boolean;
}
