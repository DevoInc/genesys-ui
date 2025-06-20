import type * as monaco from 'monaco-editor-core';
import styled, { css } from 'styled-components';
import { type IStyledOverloadCss } from '@devoinc/genesys-ui';

export interface StyledInternalEditorProps extends IStyledOverloadCss {
  $height: string | number;
  $width: string | number;
  readOnly?: boolean;
  $bordered?: boolean;
  $minimap?: boolean;
  lineNumbers?: monaco.editor.IStandaloneEditorConstructionOptions['lineNumbers'];
}

export const StyledInternalEditor = styled.div<StyledInternalEditorProps>`
  ${({
    $height,
    lineNumbers = true,
    readOnly,
    $width,
    theme,
    $bordered,
    $minimap,
  }) => {
    const cmpTokens = theme.cmp.editor;
    return css`
      // Variables - Smart Editor - Style

      --read-only-bg-color: ${cmpTokens.color.background.readOnly};
      --border-radius: ${cmpTokens.shape.borderRadius};
      --scrollbar-size: ${cmpTokens.scrollBar.size.square};

      // Default - Smart Editor - Style

      height: ${$height};
      width: ${$width};

      .monaco-editor {
        // Find widget
        .find-widget {
          background-color: ${theme.alias.color.background.surface.base
            .raised} !important;
          color: ${theme.alias.color.text.body.base} !important;
          box-shadow: ${theme.alias.elevation.boxShadow.depth
            .activated} !important;

          .monaco-sash {
            background-color: ${theme.alias.color.background.surface.base
              .raised} !important;
          }

          .button {
            color: ${theme.alias.color.text.action.quiet.enabled} !important;
          }
        }

        // Readonly - Smart Editor -Style

        ${readOnly &&
        css`
          .monaco-editor-background,
          .sticky-widget {
            background-color: var(--read-only-bg-color);
          }
        `}

        // Bordered - Smart Editor -Style
        ${$bordered &&
        css`
          border-radius: var(--border-radius);

          .overflow-guard {
            border-radius: calc(var(--border-radius) - 1px);
          }
        `}

        // Base font color. Applies to non tokenized text - Smart Editor - Style
        .mtk1 {
          color: ${cmpTokens.color.text.base};
        }

        // Cannot edit on read-only mode - Smart Editor - Style
        // overflowingContentWidgets className
        .monaco-editor-overlaymessage {
          .message {
            box-shadow: ${cmpTokens.message.elevation.boxShadow.base};
            border-radius: ${cmpTokens.message.shape.borderRadius};
            border-color: ${cmpTokens.message.color.border.base} !important;
            padding: ${cmpTokens.message.space.padding};
            background-color: ${cmpTokens.message.color.background
              .base} !important;
            font-size: ${cmpTokens.message.typo.fontSize};
            font-family: ${cmpTokens.message.typo.fontFamily};
            color: ${cmpTokens.message.color.text.base};
          }

          .anchor {
            border: unset;
          }
        }

        // Error label - Smart Editor - Style
        // Hide the label of the editor id in the error widget (LXCP-497)
        .peekview-title .filename {
          display: none;
        }

        // Line numbers - Smart Editor - Style
        ${lineNumbers &&
        css`
          .line-numbers {
            color: ${theme.alias.color.text.body.base} !important;
          }

          .margin-view-overlays {
            background-color: ${cmpTokens.line.color.background.base};
          }

          .lines-content.monaco-editor-background {
            padding-left: ${cmpTokens.line.space.paddingLeft};
          }

          .current-line.current-line-both {
            margin-left: ${cmpTokens.line.space.marginLeft};
          }
        `}

        // Scrollbar - Smart Editor - Style
        .monaco-scrollable-element {
          .scrollbar {
            background-color: ${cmpTokens.scrollBar.color.background.track
              .base};

            .slider {
              background-color: ${cmpTokens.scrollBar.color.background.slider
                .base};
              border-radius: ${cmpTokens.scrollBar.shape.borderRadius.slider};

              &:hover {
                background-color: ${cmpTokens.scrollBar.color.background.slider
                  .hovered};
              }
            }

            &.horizontal {
              height: var(--scrollbar-size) !important;

              .slider {
                height: var(--scrollbar-size) !important;
              }
            }

            &.vertical {
              width: var(--scrollbar-size) !important;

              .slider {
                width: var(--scrollbar-size) !important;
              }
            }
          }
        }

        // Suggest Widget - Smart Editor - Style
        .suggest-widget {
          box-shadow: ${cmpTokens.suggest.elevation.boxShadow.base};
          z-index: ${cmpTokens.suggest.elevation.zIndex.base};
        }

        // Minimap - Smart Editor - Style
        .minimap {
          transform: translateX(0.6rem);
        }

        // Decorations overview ruler - Smart Editor - Style
        .decorationsOverviewRuler {
          width: ${cmpTokens.ruler.size.width} !important;
          border-left: ${$minimap &&
          cmpTokens.ruler.shape.borderLeft.hasMiniMap};
        }
      }
    `;
  }}
`;
