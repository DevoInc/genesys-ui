import * as React from 'react';

import type { IDataAttrs, ILayoutBox } from '../../declarations';
import {
  FLEX_PROPS_CLASS_NAMES_MAP,
  LAYOUT_PROPS_CLASS_NAMES_MAP,
} from '../../constants';
import { BOX_CLASS_NAME_BASE } from './constants';
import { camelToKebab } from '../../utils';
import {
  getBasedCssVariablesStyle,
  getSpacingClassNames,
  getVariableBasedClassNames,
} from '../../helpers';
import { getMappedClassNames } from '../../helpers';

export interface BoxProps
  extends IDataAttrs,
    ILayoutBox,
    Pick<React.HTMLAttributes<HTMLElement>, 'className'> {}

export const Box = React.forwardRef<HTMLElement, BoxProps>(
  (
    {
      alignSelf,
      as: Component = 'div',
      children,
      className,
      cssTranslate,
      display,
      elevation,
      flex,
      height,
      inset,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      overflow,
      overflowX,
      overflowY,
      opacity,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      position,
      positionBottom,
      positionLeft,
      positionRight,
      positionTop,
      style,
      tooltip,
      verticalAlign,
      visibility,
      width,
      zIndex,
      ...nativeProps
    },
    ref,
  ) => {
    const elevationClassName = elevation
      ? `elevation--${camelToKebab(elevation)} `
      : '';
    const classNames = [
      `${BOX_CLASS_NAME_BASE} `,
      ...getSpacingClassNames({
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
      }),
      ...getMappedClassNames({ alignSelf }, FLEX_PROPS_CLASS_NAMES_MAP),
      ...getMappedClassNames(
        {
          display,
          overflow,
          overflowX,
          overflowY,
          position,
          verticalAlign,
          visibility,
        },
        LAYOUT_PROPS_CLASS_NAMES_MAP,
      ),
      ...getVariableBasedClassNames({
        cssTranslate,
        flex,
        height,
        inset,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        opacity,
        positionBottom,
        positionLeft,
        positionRight,
        positionTop,
        width,
        zIndex,
      }),
      elevationClassName,
      className && `${className}`,
    ]
      .join('')
      .trim();
    const basedCssVariablesStyle = getBasedCssVariablesStyle({
      positionBottom,
      flex,
      height,
      inset,
      positionLeft,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      opacity,
      positionRight,
      positionTop,
      cssTranslate,
      width,
      zIndex,
    });

    return (
      <Component
        ref={ref}
        {...nativeProps}
        className={classNames}
        style={{ ...basedCssVariablesStyle, ...style }}
        title={tooltip}
      >
        {children}
      </Component>
    );
  },
);
