import styled, { css } from 'styled-components';
import {
  StyledInternalEditor,
  type StyledInternalEditorProps,
} from '../../../Editor/components/InternalEditor/StyledInternalEditor';

export interface StyledInternalDiffEditorProps
  extends StyledInternalEditorProps {
  readonly?: boolean;
  originalEditable?: boolean;
}

export const StyledInternalDiffEditor = styled(
  StyledInternalEditor,
)<StyledInternalDiffEditorProps>`
  ${({ theme, originalEditable, readOnly }) => css`
    .monaco-diff-editor.side-by-side {
      // Left side of the diff editor
      .editor.original {
        box-shadow: none;
        ${!originalEditable &&
        !readOnly &&
        css`
          .monaco-editor-background {
            background-color: ${theme.alias.fields.color.background.base
              .readonly};
          }
        `}
      }
      // Right side of the diff editor
      .editor.modified {
        box-shadow: none;
      }
      // .diffOverview {
      //   transform: translateX(-${theme.alias.scrollbars.size.square.md});
      //  // width: calc(10 - ${theme.alias.scrollbars.size.square.md});

      // }

      // .diffViewport {
      //   opacity: 0 !important;
      // }
      // .scrollbar {
      //   transform: translateX(${theme.alias.scrollbars.size.square.md});
      // }
    }
  `}
`;
