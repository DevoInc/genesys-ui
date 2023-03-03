import { lighten, darken } from 'polished';
import _ from 'lodash';

// TODO: use the correct theme colors
export const settingColors = {
  textColor: (props) => {
    let color;

    if (props.disabled) {
      if (props.context === 'background') {
        color = props.theme.onBackgroundDisabledText;
      } else {
        color = props.theme.disabledText;
      }
    } else if (props.status && props.status !== 'default') {
      color = props.theme[props.status];
    } else if (props.context === 'background') {
      color = props.theme.onBackground;
    } else if (props.theme && !_.isEmpty(props.theme)) {
      color = props.theme.onSurface;
    }
    return color || '#7b7b7b';
  },
  placeholderTextColor: (props) => {
    let color;

    if (props.disabled) {
      if (props.context === 'background') {
        color = props.theme.onBackgroundDisabledText;
      } else {
        color = props.theme.disabledText;
      }
    } else if (props.status && props.status !== 'default') {
      color = props.theme[props.status];
    } else if (props.context === 'background') {
      color =
        props.theme.onBackground && lighten(0.2, props.theme.onBackground);
    } else if (props.theme && !_.isEmpty(props.theme)) {
      color = props.theme.onSurface && lighten(0.2, props.theme.onSurface);
    }

    return color || lighten(0.2, '#7b7b7b');
  },
  bgColor: (props) => {
    let color;

    if (props.disabled || props.readOnly) {
      if (props.context === 'background') {
        color = props.theme.onBackgroundDisabledBackground;
      } else {
        color = props.theme.disabledBackground;
      }
    } else if (props.status && props.status !== 'default') {
      color = props.theme[props.status];
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundBg;
    } else if (props.theme) {
      color = props.theme.onSurfaceBg;
    }
    return color || '#f4f4f4';
  },
  borderColor: (props) => {
    let color;

    if (props.disabled || props.readOnly) {
      if (props.context === 'background') {
        color = props.theme.onBackgroundDisabledBorder;
      } else {
        color = props.theme.disabledBorder;
      }
    } else if (props.status && props.status !== 'default') {
      color = props.theme[props.status];
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundBorder;
    } else if (props.theme) {
      color = props.theme.onSurfaceBorder;
    }
    return color || '#d9dde0';
  },
  hoverTextColor: (props) => {
    let color;

    if (props.disabled) {
      if (props.context === 'background') {
        color = props.theme.onBackgroundDisabledText;
      } else {
        color = props.theme.disabledText;
      }
    } else if (props.status && props.status !== 'default') {
      color =
        props.theme.meta.scheme === 'light'
          ? props.theme[props.status] && darken(0.1, props.theme[props.status])
          : props.theme[props.status] &&
            lighten(0.05, props.theme[props.status]);
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundHover;
    } else if (props.theme) {
      color = props.theme.onSurfaceHover;
    }
    return color || '#222';
  },
  hoverBgColor: (props) => {
    let color;

    if (props.disabled || props.readOnly) {
      color = 'inherit';
    } else if (props.status && props.status !== 'default') {
      color =
        props.theme.meta.scheme === 'light'
          ? props.theme[props.status] && darken(0.1, props.theme[props.status])
          : props.theme[props.status] &&
            lighten(0.05, props.theme[props.status]);
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundHoverBg;
    } else if (props.theme) {
      color = props.theme.onSurfaceHoverBg;
    }
    return color || '#e5e5e5';
  },
  hoverBorderColor: (props) => {
    let color;

    if (props.disabled) {
      if (props.context === 'background') {
        color = props.theme.onBackgroundDisabledBorder;
      } else {
        color = props.theme.disabledBorder;
      }
    } else if (props.status && props.status !== 'default') {
      color =
        props.theme.meta.scheme === 'light'
          ? props.theme[props.status] && darken(0.1, props.theme[props.status])
          : props.theme[props.status] &&
            lighten(0.05, props.theme[props.status]);
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundFocusBorder;
    } else if (props.theme) {
      color = props.theme.onSurfaceFocusBorder;
    }
    return color || '#7a7a7a';
  },
  focusTextColor: (props) => {
    let color;

    if (props.status && props.status !== 'default') {
      color =
        props.theme.meta.scheme === 'light'
          ? props.theme[props.status] && darken(0.1, props.theme[props.status])
          : props.theme[props.status] &&
            lighten(0.05, props.theme[props.status]);
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundFocus;
    } else if (props.theme) {
      color = props.theme.onSurfaceFocus;
    }
    return color || '#111';
  },
  focusBgColor: (props) => {
    let color;

    if (props.status && props.status !== 'default') {
      color = props.theme[props.status];
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundFocusBg;
    } else if (props.theme) {
      color = props.theme.onSurfaceFocusBg;
    }
    return color || '#d2d2d2';
  },
  focusBorderColor: (props) => {
    let color;

    if (props.status && props.status !== 'default') {
      color = props.theme[props.status];
    } else if (props.context === 'background') {
      color = props.theme.onBackgroundFocusBorder;
    } else if (props.theme) {
      color = props.theme.onSurfaceFocusBorder;
    }
    return color || '#777';
  },
};
