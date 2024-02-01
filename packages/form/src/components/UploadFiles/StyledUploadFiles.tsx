import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

import icons from '@devoinc/genesys-icons/dist/icon-variables';
import { linkMixin, scrollbars, disabledMixin } from '@devoinc/genesys-ui';

import {
  FilePond,
  FilePondProps as FilePondAllProps,
  registerPlugin,
} from 'react-filepond';

import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

// Register the plugins
registerPlugin(FilePondPluginImagePreview);
registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginFileValidateSize);

/* Spin - Keyframes */
const spin = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(359deg);
  }
`;

/* Fall - Keyframes */
const fall = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
    animation-timing-function: ease-out;
  }
  70% {
    opacity: 1;
    transform: scale(1.1);
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

/* Shake - Keyframes */
const shake = keyframes`
  10%,
  90% {
    transform: translateX(-0.0625em);
  }
  20%,
  80% {
    transform: translateX(0.125em);
  }
  30%,
  50%,
  70% {
    transform: translateX(-0.25em);
  }
  40%,
  60% {
    transform: translateX(0.25em);
  }
`;

export interface StyledUploadFilesProps {
  /** Height for the box */
  height?: React.CSSProperties['height'];
  /** Max-height for the box */
  maxHeight?: React.CSSProperties['maxHeight'];
  /** Whether to show the upload icon inside the component */
  showLabelIcon?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FilePondProps extends FilePondAllProps {}

export const StyledUploadFiles = styled((props) => (
  <FilePond {...props} />
))<StyledUploadFilesProps>`
  ${({ disabled, height, maxHeight, showLabelIcon, theme }) => {
  const aliasTokens = theme.alias;
  const typoTokens = aliasTokens.typographies.typo;
  const spacingTokens = aliasTokens.space;
  const minHeight = aliasTokens.size.height.surface.md;
  const bgTokens = aliasTokens.color.background.feedback;
  const colorTokens = aliasTokens.color.text;
  const bgSurface = aliasTokens.color.background.surface.base.base;
  const linkTokens = theme.cmp.link;
  const cmpTokens = theme.cmp.uploadFiles;
  const buttonTokens = theme.cmp.button;
  const borderWidth = cmpTokens.shape.border;
  const borderRadius = cmpTokens.shape.borderRadius;

  return css`
  /* -----------------------------------------------------------------------------
                              ROOT -  FILEPOND
----------------------------------------------------------------------------- */

  --border-width: 2px;

  &.filepond--root {
    margin: ${borderWidth};
    /* layout*/
    box-sizing: border-box;
    position: relative;
    padding-top: 1em;
    /* base font size for whole component */
    font-size: ${typoTokens.fontSize.body.md};
    /* base line height */
    line-height: ${typoTokens.lineHeight.body.md};
    /* will increase font weight a bit on Safari */
    text-align: left;
    text-rendering: optimizeLegibility;
    direction: ltr;
    contain: layout style size;
    min-height: ${minHeight};
    // max-height limited in case of a great number of files upload
    max-height: ${maxHeight || '24rem'};
    height: ${height};
    background-color: ${cmpTokens.color.background};

    &::before {
      content: '';
      position: absolute;
      top: calc(-1 * ${borderWidth});
      left: calc(-1 * ${borderWidth});
      right: calc(-1 * ${borderWidth});
      bottom: calc(-1 * (${borderWidth}));
      border: ${borderWidth} dashed ${cmpTokens.color.border};
      border-radius: ${borderRadius};
    }

    * {
      font-size: inherit;
      box-sizing: inherit;
      line-height: inherit;
    }

    > .filepond--panel {
      z-index: 2;
    }
    
    ${
      disabled &&
      css`
        ${disabledMixin(theme)};
      `
    }
  }

  /* -----------------------------------------------------------------------------
                                   FILEPOND
----------------------------------------------------------------------------- */

  .filepond {
    &--credits {
      display: none;
    }
    
    /* Assistant - FilePond */

    &--assistant {
      position: absolute;
      overflow: hidden;
      height: 0.1rem;
      width: 0.1rem;
      padding: 0;
      border: 0;
      clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
      clip-path: inset(50%);
      white-space: nowrap;
    }

    /* Browser - FilePond */

    &--browser {
      position: absolute;
      margin: 0;
      padding: 0;
      left: 1em;
      top: 1.75em;
      width: calc(100% - 2em);
      opacity: 0;
      font-size: 0;
      z-index: 1;
    }

    /* Credits - FilePond */

    &--credits {
      opacity: 0;
    }

    /* Drip - FilePond */

    &--drip {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      opacity: 0.3;
      pointer-events: none;
      border-radius: ${borderRadius};
      background: rgba(0, 0, 0, 0.01);
      z-index: 3;
    }

    &--drip-blob {
      position: absolute;
      transform-origin: center center;
      top: 0;
      left: 0;
      width: 8em;
      height: 8em;
      margin-left: -4em;
      margin-top: -4em;
      background-color: ${bgTokens.primary.base};
      border-radius: 50%;
      will-change: transform, opacity;
    }

    ${
      disabled &&
      css`
        ${disabledMixin(theme)};
      `
    }

    /* Drop - FilePond */

    &--drop-label {
      position: absolute;
      left: 1em;
      right: 1em;
      top: 0;
      margin: 0;
      color: ${colorTokens.body.base};
      will-change: transform, opacity;
      z-index: 5;

      label {
        display: block;
        padding: 1em 0;
        margin: 0;
        font-size: ${aliasTokens.typo.fontSize.body.md};
        line-height: ${aliasTokens.typo.lineHeight.body.md};
        font-weight: normal;
        text-align: center;
        cursor: ${disabled ? 'not-allowed' : 'pointer'};
        
        ${
          showLabelIcon &&
          css`
            &::before {
              content: '${icons.drag_drop}';
              position: relative;
              display: block;
              font-family: 'gi', sans-serif;
              font-size: 3rem;
              line-height: 1.5;
            }
          `
        }
      }
    }

    /* Label - FilePond */

    &--label-action {
      ${linkMixin({ theme: theme, linkTokens })};
      ${
        disabled &&
        css`
          cursor: not-allowed;

          &:hover,
          &:focus,
          &:active {
            text-decoration: none;
          }
        `
      }
    }

    /* File Action Button - FilePond */

    &--file-action-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 1.625em;
      height: 1.625em;
      font-size: 1em;
      font-family: inherit;
      line-height: inherit;
      background-color: ${buttonTokens.color.background.blendBase.enabled};
      background-image: none;
      outline: none;
      border: none;
      border-radius: ${buttonTokens.shape.borderRadius.full};
      will-change: transform, opacity;
      transition: background-color ease-in-out ${
        buttonTokens.mutation.transitionDuration
      };
      color: ${buttonTokens.color.text.blendBase.enabled};
      cursor: pointer;

      svg {
        width: 1.625em;
        height: 1.625em;
      }

      i {
        font-weight: bold;
      }

      &.filepond--action-remove-item i {
        font-size: 0.9em;
      }

      &:hover,
      &:focus {
        background-color: ${buttonTokens.color.background.blendBase.hovered};
        color: ${buttonTokens.color.text.blendBase.hovered};
      }
    }

    /* File Info - FilePond */

    &--file-info {
      position: static;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1;
      margin: 0 ${spacingTokens.cmp.xxs} 0 0;
      min-width: 0;
      will-change: transform, opacity;
      pointer-events: none;
      user-select: none;

      * {
        margin: 0;
      }

      .filepond--file-info-main {
        font-size: 0.9em;
        line-height: 1.2;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        color: ${colorTokens.heading.base};
      }

      .filepond--file-info-sub {
        font-size: 0.75em;
        white-space: nowrap;
      }

      .filepond--file-info-sub:empty {
        display: none;
      }
    }

    /* File Status - FilePond */

    &--file-status {
      position: static;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-grow: 0;
      flex-shrink: 0;
      margin: 0;
      min-width: 2.25em;
      text-align: right;
      will-change: transform, opacity;
      pointer-events: none;
      user-select: none;

      * {
        margin: 0;
        white-space: nowrap;
      }

      .filepond--file-status-main {
        font-size: 0.9em;
        line-height: 1.2;
        color: ${colorTokens.heading.base};
      }

      .filepond--file-status-sub {
        font-size: 0.75em;
        opacity: 1;
      }
    }

    /* File Wrapper - FilePond */

    &--file-wrapper {
      border: none;
      margin: 0;
      padding: 0;
      min-width: 0;
      height: 100%;

      > legend {
        position: absolute;
        overflow: hidden;
        height: 0.1rem;
        width: 0.1rem;
        padding: 0;
        border: 0;
        clip: rect(0.1rem, 0.1rem, 0.1rem, 0.1rem);
        clip-path: inset(50%);
        white-space: nowrap;
      }
    }

    /* File - FilePond */

    &--file {
      position: static;
      display: flex;
      height: 100%;
      align-items: flex-start;
      padding: 0.5625em 0.5625em;
      color: ${aliasTokens.color.text.body.base};
      border-radius: ${borderRadius};

      .filepond--file-status {
        margin-left: auto;
        margin-right: 2.25em;
      }

      .filepond--processing-complete-indicator {
        pointer-events: none;
        user-select: none;
        z-index: 2;
      }

      .filepond--processing-complete-indicator,
      .filepond--file-action-button {
        position: absolute;

        span {
          line-height: 1;
        }
      }

      .filepond--progress-indicator {
        position: absolute;
        top: 0.74em;
        right: 0.7em;
        font-size: 0.9em;
        color: ${colorTokens.feedback.secondary.base};
        transform: scale(1.5);
      }

      .filepond--action-remove-item {
        left: 0.5625em;
      }

      .filepond--processing-complete-indicator,
      .filepond--file-action-button:not(.filepond--action-remove-item) {
        right: 0.5625em;
      }
    }

    /* Hopper - FilePond */

    &--hopper[data-hopper-state='drag-over'] > * {
      pointer-events: none;
    }

    /* Progress Indicator - FilePond */

    &--progress-indicator {
      z-index: 103;
    }

    /* File Action Button - FilePond */

    &--file-action-button {
      z-index: 102;
    }

    /* File Status - FilePond */

    &--file-status {
      z-index: 101;
    }

    /* File Info - FilePond */

    &--file-info {
      z-index: 100;
    }

    /* Item - FilePond */

    &--item {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: 0;
      margin: 0 0 0.5em 0;
      will-change: transform, opacity;

      > .filepond--panel {
        z-index: 1;
      }

      > .filepond--panel .filepond--panel-bottom {
        box-shadow: ${aliasTokens.elevation.boxShadow.depth.raised};
      }

      > .filepond--file-wrapper {
        position: relative;
        z-index: 2;
      }
    }

    /* Item Panel - FilePond */

    &--item-panel {
      background-color: ${cmpTokens.itemPanel.color.background.base};
      border-radius: ${borderRadius};
      transition: background-color 0.25s;
    }

    /* List Scroller - FilePond */

    &--list-scroller {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin-top: 1em;
      margin-bottom: 1em;
      will-change: transform;
      z-index: 6;

      &[data-state='overflow'] {
        overflow-y: scroll;
        overflow-x: visible;
        -webkit-overflow-scrolling: touch;
      }

      &[data-state='overflow'] .filepond--list {
        bottom: 0;
        right: 0;
      }

      &::-webkit-scrollbar {
        background: transparent;
      }

      &::-webkit-scrollbar:vertical {
        width: 1em;
      }

      &::-webkit-scrollbar:horizontal {
        height: 0;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 99999px;
        border: 0.3125em solid transparent;
        background-clip: content-box;
      }

      // SCROLLBAR
      ${scrollbars({
        cornerColor: cmpTokens.color.background,
        theme,
      })};
    }

    /* List - FilePond */

    &--list {
      position: absolute;
      top: 0;
      left: 1em;
      right: 1em;
      margin: 0;
      padding: 0;
      list-style-type: none;
      will-change: transform;
    }

    /* Panel Root - FilePond */

    &--panel-root {
      border-radius: ${borderRadius};
      background-color: ${cmpTokens.color.background};
    }

    /* Panel - FilePond */

    &--panel {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      margin: 0;
      height: auto !important;
      pointer-events: none;

      &[data-scalable='true'] {
        transform-style: preserve-3d;
        background-color: transparent !important;
        border: none !important;
      }

      &[data-scalable='false'] {
        bottom: 0;
      }

      &[data-scalable='false'] > div {
        display: none;
      }

      &-top,
      &-bottom,
      &-center {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        margin: 0;
        padding: 0;
      }

      &-top,
      &-bottom {
        height: 0.5em;
      }

      &-top {
        border-bottom-left-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
        border-bottom: none !important;

        &::after {
          content: '';
          position: absolute;
          height: 0.2rem;
          left: 0;
          right: 0;
          bottom: -0.1rem;
          background-color: inherit;
        }
      }

      &-center,
      &-bottom {
        will-change: transform;
        backface-visibility: hidden;
        transform-origin: left top;
        transform: translate3d(0, 0.5em, 0);
      }

      &-bottom {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important;
        border-top: none !important;

        &::before {
          content: '';
          position: absolute;
          height: 0.2rem;
          left: 0;
          right: 0;
          top: -0.1rem;
          background-color: inherit;
        }
      }

      &-center {
        height: 10rem !important;
        border-top: none !important;
        border-bottom: none !important;
        border-radius: 0 !important;

        &:not([style]) {
          visibility: hidden;
        }
      }
    }

    /* Progress Indicator - FilePond */

    &--progress-indicator {
      position: static;
      width: 1.625em;
      height: 1.625em;
      color: ${aliasTokens.color.text.body.inverse};
      margin: 0;
      pointer-events: none;
      will-change: transform, opacity;

      svg {
        width: 100%;
        height: 100%;
      }

      path {
        fill: none;
        stroke: currentColor;
      }
    }
  }

  /* -----------------------------------------------------------------------------
                                 DATA - FILEPOND
----------------------------------------------------------------------------- */

  /* File Info - Data - FilePond */

  [data-filepond-item-state='cancelled'] .filepond--file-info,
  [data-filepond-item-state*='invalid'] .filepond--file-info,
  [data-filepond-item-state*='error'] .filepond--file-info {
    margin-right: 2.25em;
  }

  /* Revert Item Processing and Files - Data - FilePond */

  [data-filepond-item-state='processing-complete'] {
    .filepond--action-revert-item-processing {
      svg {
        animation: ${fall} 0.5s 0.125s linear both;
      }

      ~ .filepond--file-info .filepond--file-info-sub,
      ~ .filepond--file-status .filepond--file-status-sub {
        opacity: 1;
      }
    }

    .filepond--file-info-sub,
    .filepond--file-status-sub {
      opacity: 0;
    }
  }

  /* Panel and Wrapper - Data - FilePond */

  [data-filepond-item-state*='invalid'] .filepond--panel,
  [data-filepond-item-state*='invalid'] .filepond--file-wrapper,
  [data-filepond-item-state*='error'] .filepond--panel,
  [data-filepond-item-state*='error'] .filepond--file-wrapper {
    animation: ${shake} 0.65s linear both;
  }

  /* Progress Indicator - Data - FilePond */

  [data-filepond-item-state*='busy'] .filepond--progress-indicator svg {
    animation: ${spin} 0.8s linear infinite;
  }

  /* Item Panel - Data - FilePond */

  .filepond--item-panel {
    background-color: ${bgSurface};
  }

  [data-filepond-item-state*='complete'] {
    .filepond--item-panel {
      background-color: ${bgTokens.success.weaker};
    }
    .filepond--file-info .filepond--file-info-main,
    .filepond--file-status .filepond--file-status-main {
      color: ${colorTokens.feedback.success.strong}
    }

    .filepond--file-info .filepond--file-info-sub,
    .filepond--file-status .filepond--file-status-sub {
      color: ${colorTokens.feedback.success.base}
    }
  }

  [data-filepond-item-state*='invalid'],
  [data-filepond-item-state*='error'] {
    .filepond--item-panel {
      background-color: ${bgTokens.error.weak};
    }
    .filepond--file-info .filepond--file-info-main,
    .filepond--file-status .filepond--file-status-main {
      color: ${colorTokens.feedback.error.strong}
    }

    .filepond--file-info .filepond--file-info-sub,
    .filepond--file-status .filepond--file-status-sub {
      color: ${colorTokens.feedback.error.base}
    }
  }

  /* -----------------------------------------------------------------------------
*                                                                              *
*                             IMAGE - FILEPOND                                 *
*                                                                              *
* --------------------------------------------------------------------------- */

  .filepond--image-preview-markup {
    position: absolute;
    left: 0;
    top: 0;
  }

  .filepond--image-preview-wrapper {
    z-index: 2;
  }

  .filepond--image-preview-overlay {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 7rem;
    max-height: 9rem;
    margin: 0;
    opacity: 0;
    z-index: 2;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    svg {
      width: 100%;
      height: auto;
      color: inherit;
      max-height: inherit;
    }

    &-idle {
      opacity: 1 !important;
      color: ${
        theme.meta.scheme === 'dark'
          ? aliasTokens.color.background.surface.blend.dark.stronger
          : aliasTokens.color.background.surface.blend.light.strongest
      };
    }

    &-success {
      mix-blend-mode: normal;
      color: ${aliasTokens.color.background.feedback.error.stronger};
    }

    &-failure {
      mix-blend-mode: normal;
      color: ${aliasTokens.color.background.feedback.error.weak};
    }
  }

  /* disable for Safari as mix-blend-mode causes the overflow:hidden of the parent container to not work */
  @supports (-webkit-marquee-repetition: infinite) and
    ((-o-object-fit: fill) or (object-fit: fill)) {
    .filepond--image-preview-overlay-idle {
      mix-blend-mode: normal;
    }
  }

  /* Preview Wrapper - FilePond Image */

  .filepond--image-preview-wrapper {
    /* no interaction */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    /* have preview fill up all available space */
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 100%;
    margin: 0;

    /* radius is .05em less to prevent the panel background color from shining through */
    border-radius: ${borderRadius};
    overflow: hidden;

    /* this seems to prevent Chrome from redrawing this layer constantly */
    background: rgba(0, 0, 0, 0.01);
  }

  /* Preview - FilePond Image */


  .filepond--image-preview {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    display: flex; /* this aligns the graphic vertically if the panel is higher than the image */
    align-items: center;
    height: 100%;
    width: 100%;
    pointer-events: none;
    background: ${bgSurface};

    /* will be animated */
    will-change: transform, opacity;
  }

  /* Clip - FilePond Image */

  .filepond--image-clip {
    position: relative;
    overflow: hidden;
    margin: 0 auto;

    /* transparency indicator (currently only supports grid or basic color) */

    &[data-transparency-indicator='grid'] img,
    &[data-transparency-indicator='grid'] canvas {
      background-color: ${bgSurface};
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='%23eee'%3E%3Cpath d='M0 0 H50 V50 H0'/%3E%3Cpath d='M50 50 H100 V100 H50'/%3E%3C/svg%3E");
      background-size: 1.25em 1.25em;
    }
  }

  .filepond--image-bitmap,
  .filepond--image-vector {
    position: absolute;
    left: 0;
    top: 0;
    will-change: transform;
  }

  .filepond--root{
    &[data-style-panel-layout~='integrated'] {
      .filepond--image-preview-wrapper {
        border-radius: 0;
      }

      .filepond--image-preview {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &[data-style-panel-layout~='circle'] {
      .filepond--image-preview-wrapper {
        border-radius: 99999rem;
      }

      .filepond--image-preview-overlay {
        top: auto;
        bottom: 0;
        -webkit-transform: scaleY(-1);
        transform: scaleY(-1);
      }

      .filepond--file {
        .filepond--file-action-button[data-align*='bottom']:not([data-align*='center']) {
          margin-bottom: 0.325em;
        }

        .filepond--file-action-button[data-align*='bottom']:not([data-align*='center']) {
          margin-bottom: 0.325em;
        }

        &[data-align*='left'] {
          left: calc(50% - 3em);
        }

        &[data-align*='right'] {
          right: calc(50% - 3em);
        }
      }

      .filepond--progress-indicator[data-align*='bottom'] {
        &[data-align*='left'],
        &[data-align*='right'] {
          margin-bottom: calc(0.325em + 0.1875em);
        }
      }

      .filepond--progress-indicator[data-align*='bottom'][data-align*='center'] {
        margin-top: 0;
        margin-bottom: 0.1875em;
        margin-left: 0.1875em;
      }
  }
  `;
}}
`;
