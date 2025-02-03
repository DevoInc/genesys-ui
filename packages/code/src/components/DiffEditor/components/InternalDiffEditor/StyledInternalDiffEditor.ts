import styled, { css } from 'styled-components';
import {
  StyledInternalEditor,
  type StyledInternalEditorProps,
} from '../../../Editor/components/InternalEditor/StyledInternalEditor';

export interface StyledInternalDiffEditorProps
  extends StyledInternalEditorProps {
  originalEditable?: boolean;
}

export const StyledInternalDiffEditor = styled(
  StyledInternalEditor,
)<StyledInternalDiffEditorProps>`
  ${({ $bordered, originalEditable, readOnly, theme }) => {
    const editorTokens = theme.cmp.editor;
    const diffTokens = theme.cmp.diffEditor;
    return css`
      --border-radius: ${diffTokens.shape.borderRadius.base};
      --inner-border-radius: ${diffTokens.shape.borderRadius.inner};

      .monaco-diff-editor.side-by-side {
        ${$bordered && 'border-radius: var(--border-radius);'}
        // Left side of the diff editor
      .editor.original {
          box-shadow: none;

          ${!originalEditable &&
          !readOnly &&
          css`
            .monaco-editor-background {
              background-color: ${diffTokens.color.background.base};
            }
          `}
          .monaco-editor {
            ${$bordered &&
            css`
              border-radius: var(--inner-border-radius) 0 0
                var(--inner-border-radius);

              .overflow-guard {
                border-radius: var(--inner-border-radius) 0 0
                  var(--inner-border-radius);

                .lines-content.monaco-editor-background {
                  .view-overlays .line-delete {
                    left: calc(-1 * var(--line-numbers-spacing)) !important;
                  }
                }
              }
            `}
          }
        }

        // Right side of the diff editor

        .editor.modified {
          box-shadow: none;
          border-left-width: ${editorTokens.shape.borderSize};
          border-left-style: solid;
          border-left-color: ${editorTokens.color.border.base};

          .scrollbar {
            right: 0.1rem !important;
          }

          .monaco-editor {
            border-radius: 0;

            .overflow-guard {
              border-radius: 0;

              .lines-content.monaco-editor-background {
                .view-overlays .line-insert {
                  left: calc(-1 * var(--line-numbers-spacing)) !important;
                }
              }
            }
          }
        }

        // Difference area

        .diffOverview {
          border-left-width: ${editorTokens.shape.borderSize};
          border-left-style: solid;
          border-left-color: ${editorTokens.color.border.base};
          background-color: ${diffTokens.color.background.base};

          // Hide diff viewport slider but keep the area clickable

          .diffViewport {
            opacity: 0 !important;
          }
        }
      }
    `;
  }}
`;
