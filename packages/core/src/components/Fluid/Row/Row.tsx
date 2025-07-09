import * as React from 'react';
import {
  Row as ReactGridRow,
  RowProps as ReactGridRowProps,
} from 'react-grid-system';

import type { IGlobalAttrs } from '../../../declarations';
import type { TContainerSpacing, TFluidAs } from '../declarations';
import { ROW_CLASS_NAME_BASE } from '../constants';
import { getSpacingClassNames } from '../../../helpers';

export interface RowProps
  extends Omit<ReactGridRowProps, 'component' | 'gutterWidth'>,
    Pick<IGlobalAttrs<HTMLDivElement>, 'tooltip'> {
  as?: TFluidAs;
  /** The gutter between the different cols.*/
  gutter?: TContainerSpacing;
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginBottom?: TContainerSpacing;
  /** Css margin-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginTop?: TContainerSpacing;
  /** Css padding-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingBottom?: TContainerSpacing;
  /** Css padding-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingTop?: TContainerSpacing;
  /** Content of row */
  children?: React.ReactNode;
}

export const Row = React.forwardRef<HTMLElement, RowProps>(
  (
    {
      as,
      children,
      className,
      gutter,
      marginBottom,
      marginTop,
      paddingBottom,
      paddingTop,
      tooltip,
      ...reactGridRowProps
    },
    ref,
  ) => {
    const classNames = [
      `${ROW_CLASS_NAME_BASE} `,
      ...getSpacingClassNames({
        gap: gutter,
        marginBottom,
        marginTop,
        paddingBottom,
        paddingTop,
      }),
      className && `${className} `,
    ]
      .join('')
      .trim();
    return (
      <ReactGridRow
        {...reactGridRowProps}
        ref={ref as React.LegacyRef<ReactGridRow> & React.Ref<HTMLDivElement>}
        component={as}
        className={classNames}
        //gutterWidth={gutter ? gutterSizeNumber : undefined}
        title={tooltip}
      >
        {children}
      </ReactGridRow>
    );
  },
);
