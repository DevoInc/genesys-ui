import { css } from 'styled-components';
import { ActiveStatus } from '../../declarations';

export const utils = {
  statusArr: ['error', 'warning', 'success', 'info', 'help', 'base', 'default'],
  // text overflow ellipsis
  textOverflow: css`
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
    text-overflow: ellipsis;
  `,
  // common styles for interactive elements
  interactive: css`
    -webkit-appearance: none;
    user-select: none;
    transition: all 0.15s ease-in-out;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: transparent;
    border: none;
    outline: none;
    font-family: 'Devo Font', sans-serif;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  `,
  // common styles for buttons
  btn: {
    default: css`
      -webkit-appearance: none;
      user-select: none;
      transition: all 0.3s ease-in-out;
      font-weight: 500;
      padding: 0 1.6rem;
    `,
    cursorNotDisabled: css`
      cursor: pointer;
    `,
    cursorDisabled: css`
      cursor: not-allowed;
    `,
    cursor: { disabled: 'not-allowed', enabled: 'pointer' },
  },

  // break the inherited floating from siblings
  clearfix: css`
    &:before,
    &:after {
      content: ' ';
      display: table;
    }
    &:after {
      clear: both;
    }
  `,
  // make any img responsive
  imgResponsive: css`
    display: block;
    max-width: 100%;
    height: auto;
  `,
  // hide the html element on screens, but not for screen readers
  srOnly: css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `,
  // hide the html element on screens, but not for screen readers
  // and when its focused its shown again
  srOnlyFocusable: css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    &:active,
    &:focus {
      position: static;
      width: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      clip: auto;
    }
  `,
  // you needs to assign "position: relative" to its parent
  overlayer: css`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  `,
  // you needs to assign "position: relative" to its parent
  overlayerPseudo: css`
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  `,
  // default transition
  transitionDefault: css`
    transition: all ease-in-out 0.3s;
  `,
  // medium transition
  transitionMd: css`
    transition: all ease-in-out 0.15s;
  `,
  // focus state
  focusBoxShadow: ({ theme }) => css`
    box-shadow: ${theme.focusShadow};
    outline: none;
  `,
  // z-index
  zindexPopover: 1060,
  zindexValidation: 1065,
  zindexTooltip: 1070,
  zindexModal: 1050,
  zindexMaximun: 9999000,
};

// icons for status
export const statusIconMap: {
  // TODO: string should be one of icons
  filled: { [key in ActiveStatus]: string };
  stroke: { [key in ActiveStatus]: string };
} = {
  filled: {
    help: 'about_question_faq_help_filled',
    info: 'info_about_round_filled',
    error: 'error_warning_danger_stop_filled',
    success: 'ok_successful_check_filled',
    warning: 'attention_error_alert_caution_filled',
  },
  stroke: {
    help: 'about_question_faq_help',
    info: 'info_about_round',
    error: 'error_warning_danger_stop',
    success: 'ok_successful_check',
    warning: 'attention_error_alert_caution',
  },
} as const;
