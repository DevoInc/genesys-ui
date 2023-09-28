import type * as monaco from 'monaco-editor-core';
import styled, { css } from 'styled-components';

// Readonly - Smart Editor - Style
const readOnlyCss = css`
  &&& {
    border-color: var(--read-only-bg-color);
    background-color: var(--read-only-bg-color);

    .monaco-editor {
      .monaco-editor-background {
        background-color: var(--read-only-bg-color);
      }
    }
  }
`;

export interface StyledSmartEditorProps {
  $height: string | number;
  $width: string | number;
  readOnly?: boolean;
  bordered?: boolean;
  lineNumbers?: monaco.editor.IStandaloneEditorConstructionOptions['lineNumbers'];
}

export const StyledSmartEditor = styled.div<StyledSmartEditorProps>`
  ${({ $height, lineNumbers = true, readOnly, $width, theme, bordered }) => css`
    // Variables - Smart Editor - Style

    --read-only-bg-color: ${theme.alias.fields.color.background.base.readonly};
    --border-radius: ${theme.alias.fields.shape.borderRadius};
    --line-numbers-spacing: ${theme.alias.space.cmp.xs};

    // Default - Smart Editor - Style

    ${bordered &&
    css`
      border-width: ${theme.alias.fields.shape.borderSize.base};
      border-style: solid;
      border-color: ${theme.alias.fields.color.border.base.enabled};
      border-radius: calc(var(--border-radius) + 0.1rem);
    `}
    height: ${$height};
    width: ${$width};

    .monaco-editor {
      ${bordered &&
      css`
        border-radius: var(--border-radius);
      `}

      .overflow-guard {
        ${bordered &&
        css`
          border-radius: var(--border-radius);
        `}
      }

      // Error label - Smart Editor - Style
      // Hide the label of the editor id in the error widget (LXCP-497)

      .peekview-title .filename {
        display: none;
      }

      // Line numbers - Smart Editor - Style

      ${lineNumbers &&
      css`
        .margin {
          background-color: ${theme.alias.color.background.feedback.neutral
            .weak};
        }

        .lines-content.monaco-editor-background {
          padding-left: var(--line-numbers-spacing);
        }

        .current-line.current-line-both {
          margin-left: calc(-1 * var(--line-numbers-spacing));
        }
      `}

      // Scrollbar - Smart Editor - Style
  
      .monaco-scrollable-element {
        --scrollbar-size: ${theme.alias.scrollbars.size.square.md};

        .scrollbar {
          background-color: ${theme.alias.scrollbars.track.color.backdrop};

          .slider {
            background-color: ${theme.alias.scrollbars.thumb.color.backdrop
              .base};
            border-radius: ${theme.alias.scrollbars.thumb.shape.borderRadius};

            &:hover {
              background-color: ${theme.alias.scrollbars.thumb.color.backdrop
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
        //border-radius: ${theme.alias.shape.borderRadius.elevated};
        box-shadow: ${theme.alias.elevation.boxShadow.depth.activated};
        z-index: ${theme.alias.elevation.zIndex.depth.activated};
      }
    }

    ${readOnly && readOnlyCss}
  `}
`;
