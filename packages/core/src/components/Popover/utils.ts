import { POPOVER_ARROW_SIZE } from './constants';
import { ComputedPlacement } from '@popperjs/core';

export const getMarginByPlacement = (placement: ComputedPlacement) => {
  if (placement?.includes('top')) return { marginBottom: POPOVER_ARROW_SIZE };
  if (placement?.includes('bottom')) return { marginTop: POPOVER_ARROW_SIZE };
  if (placement?.includes('left')) return { marginRight: POPOVER_ARROW_SIZE };
  if (placement?.includes('right')) return { marginLeft: POPOVER_ARROW_SIZE };
  return {};
};
