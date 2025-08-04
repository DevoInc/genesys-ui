import * as React from 'react';

import {
  Container as ReactGridContainer,
  ContainerProps as ReactGridContainerProps,
  ScreenClass,
  setConfiguration,
} from 'react-grid-system';

import {
  BREAKPOINTS_DEFAULT_VALUES,
  CONTAINER_CLASS_NAME_BASE,
  CONTAINER_WIDTH_DEFAULT_VALUES,
} from '../constants';
import type { TContainerSpacing } from '../declarations';
import type { IGlobalAttrs } from '../../../declarations';
import type { RowProps } from '../Row';

import { getSpacingClassNames } from '../../../helpers';

export interface ContainerProps
  extends Omit<ReactGridContainerProps, 'component'>,
    Pick<IGlobalAttrs<HTMLDivElement>, 'tooltip'> {
  /** The gutter between the different cols.*/
  gutter?: TContainerSpacing;
  /** Css margin-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginBottom?: TContainerSpacing;
  /** Css margin-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  marginTop?: TContainerSpacing;
  maxScreen?: ScreenClass;
  /** Css padding-bottom. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingBottom?: TContainerSpacing;
  /** Css padding-top. More info about spacing values in
   * [Spacing tokens page](?path=/story/docs-design-tokens-spacing-tokens--page) */
  paddingTop?: TContainerSpacing;
  /** Content of the container (Rows) */
  children?: React.ReactElement<RowProps> | React.ReactElement<RowProps>[];
  ref?: React.LegacyRef<ReactGridContainer> & React.Ref<HTMLDivElement>;
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (
    {
      children,
      className,
      gutter = 'layout-sm',
      marginBottom,
      marginTop,
      maxScreen = 'xxl',
      paddingBottom,
      paddingTop,
      tooltip,
      ...reactGridContainerProps
    },
    ref,
  ) => {
    setConfiguration({
      breakpoints: Object.values(BREAKPOINTS_DEFAULT_VALUES),
      containerWidths: Object.values(CONTAINER_WIDTH_DEFAULT_VALUES),
      gridColumns: 12,
      maxScreenClass: maxScreen,
    });
    const classNames = [
      `${CONTAINER_CLASS_NAME_BASE} `,
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
      <ReactGridContainer
        {...reactGridContainerProps}
        ref={
          ref as React.LegacyRef<HTMLDivElement> &
            React.LegacyRef<ReactGridContainer>
        }
        className={classNames}
        title={tooltip}
      >
        {React.Children.map(children, (child, idx) => {
          return React.cloneElement(child, {
            key: idx,
            gutter: child.props.gutter || gutter,
          });
        })}
      </ReactGridContainer>
    );
  },
);
