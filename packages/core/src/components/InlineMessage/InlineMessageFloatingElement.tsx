import * as React from 'react';
import { type CSSProp, useTheme } from 'styled-components';
import { type MiddlewareData } from '@floating-ui/react';

import { Panel } from '../Panel';
import { mergeStyles } from '../../helpers';
import { inlineMessageContainerMixin } from './helpers';
import { type TInlineMessageColorScheme } from './declarations';

interface Props {
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement>,
  ) => Record<string, unknown>;
  setFloating: (node: HTMLElement | null) => void;
  floatingStyles: React.CSSProperties;
  zIndex: number;
  as: React.ComponentType<any> | keyof React.ReactHTML;
  draggable: boolean;
  id: string;
  status: TInlineMessageColorScheme;
  middlewareData: MiddlewareData;
  style: CSSProp;
  children: React.ReactNode;
}

export const InlineMessageFloatingElement: React.FC<Props> = ({
  getFloatingProps,
  setFloating,
  floatingStyles,
  zIndex,
  as,
  draggable,
  id,
  status,
  middlewareData,
  style,
  children,
}) => {
  const theme = useTheme();
  return (
    <div
      ref={setFloating}
      {...getFloatingProps()}
      style={{ ...floatingStyles, zIndex }}
    >
      <Panel
        elevation="activated"
        as={as}
        draggable={draggable}
        id={`${id}__content`}
        padding="0"
        role={status === 'error' ? 'alert' : null}
        style={mergeStyles(
          ...inlineMessageContainerMixin({
            draggable,
            placement: middlewareData?.offset?.placement,
            status,
            theme,
          }),
          style,
        )}
        width="auto"
        minWidth={'22rem'}
      >
        {children}
      </Panel>
    </div>
  );
};
