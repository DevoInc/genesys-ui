import * as React from 'react';
import { type Meta, type StoryObj } from '@storybook/react';
import * as monaco from 'monaco-editor-core';
import { saveAs } from 'file-saver';

import { Button, ButtonGroup, Flex, IconButton } from '@devoinc/genesys-ui';
import {
  GIDocumentsFilesPaperTextArchiveCopy,
  GIPasteClipboard,
  GIHeartFull,
} from '@devoinc/genesys-icons';

import { Editor, type EditorProps } from './Editor';
import { registerLanguage } from './api';
import { useEditorTheme } from './hooks';
import { originalValue } from './__stories__/mockContent';
import { jason } from './__stories__/languages/jason';
import { esql } from './__stories__/languages/esql';

type Monaco = typeof monaco;

const meta: Meta<typeof Editor> = {
  title: 'Components/Code/Editor',
  component: Editor,
  args: {
    bordered: true,
    value: 'Hey there!, I am a code editor',
    height: '300px',
  },
};

export default meta;
type Story = StoryObj<typeof Editor>;

export const Base: Story = {
  args: {
    value: originalValue.concat(originalValue).concat(originalValue),
  },
};

export const ReadonlyMode: Story = {
  tags: ['isHidden'],
  args: {
    options: {
      readOnly: true,
    },
  },
};

export const WithMinimap: Story = {
  tags: ['isHidden'],
  args: {
    options: {
      minimap: {
        enabled: true,
      },
    },
  },
};

export const WithoutLineNumbers: Story = {
  tags: ['isHidden'],
  args: {
    options: {
      //No line numbers
      lineNumbers: 'off',
      // No collapse icons
      folding: false,
      //No line decorations
      lineDecorationsWidth: 0,
    },
  },
};

export const SmallerTextSize: Story = {
  tags: ['isHidden'],
  args: {
    options: {
      fontSize: 10,
    },
  },
};

const opts: monaco.editor.IEditorOptions = {
  // enable error batches in scrollbar to be shown.
  overviewRulerLanes: 2,
  // enable folding of code blocks
  folding: true,
  // enable minimap
  minimap: {
    enabled: true,
  },
};

const languages = {
  jason: jason,
  esql: esql,
};

const CustomLang = ({
  langId = 'jason',
  options,
  ...props
}: Partial<EditorProps & { langId: string }>) => {
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();
  const monacoRef = React.useRef<Monaco>();

  const registerLanguageProviders = (instance) => {
    registerLanguage(instance, languages[langId].id)
      // register highlighting
      .registerStyleTokenizer(languages[langId].lang)
      // register autocompletion
      .registerCompletionProvider(languages[langId].completionProvider);
  };

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor,
    monaco: Monaco,
  ) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Validate the initial content of the editor
    validateEditorContent(editor.getValue());
  };

  const handleValidate = (markers) => {
    // eslint-disable-next-line no-console
    console.log('Errors found', markers);
  };

  const validateEditorContent = (value: string) => {
    const monaco = monacoRef.current;
    // validate that the content is a valid JSON. If there is an error,
    // locate the position of the error and mark it in the editor
    try {
      JSON.parse(value);
      monaco.editor.setModelMarkers(editorRef.current.getModel(), 'owner', []);
    } catch (err) {
      const message = err.message;
      const model = editorRef.current.getModel();
      const position = message.match(/position (\d+)/)?.[1];

      // Position of the error in the string
      // OR current cursor postion
      // OR fallback to the first character
      const cursorPosition = position
        ? model.getPositionAt(position)
        : editorRef.current.getPosition() || model.getPositionAt(1);

      const { lineNumber, column } = cursorPosition;
      const error = {
        severity: monaco.MarkerSeverity.Error,
        startLineNumber: lineNumber,
        endLineNumber: lineNumber,
        startColumn: column,
        endColumn: column,
        message: err.message,
      };
      monaco.editor.setModelMarkers(editorRef.current.getModel(), 'owner', [
        error,
      ]);
    }
  };

  return (
    <Editor
      height="300px"
      bordered={true}
      options={{ ...opts, ...options }}
      language={langId}
      value={languages[langId].value}
      onMount={handleEditorDidMount}
      beforeMount={registerLanguageProviders}
      onChange={validateEditorContent}
      onValidate={handleValidate}
      {...props}
    />
  );
};

export const CustomLanguageWithValidation: Story = {
  tags: ['isHidden'],
  render: (args) => <CustomLang {...args} />,
};

export const WithActions: Story = {
  tags: ['isHidden'],
  render: (args) =>
    (({ ...props }: Partial<EditorProps>) => {
      const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();

      const handleEditorDidMount = (
        editor: monaco.editor.IStandaloneCodeEditor,
      ) => {
        editorRef.current = editor;
      };

      const handleCopyToClipboard = () => {
        const value = editorRef.current.getValue();
        navigator.clipboard
          .writeText(value)
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Copied to clipboard:', value);
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error('Failed to copy to clipboard', err);
          });
      };

      const handlePasteToEditor = () => {
        navigator.clipboard
          .readText()
          .then((value) => {
            //Append to current value
            const currentValue = editorRef.current.getValue();
            editorRef.current.setValue(currentValue.concat(value));
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.error('Failed to paste from clipboard', err);
          });
      };

      return (
        <Editor
          {...props}
          height="300px"
          bordered={true}
          value={'Copy me!\n'}
          onMount={handleEditorDidMount}
          actions={
            <ButtonGroup>
              <IconButton
                key="copy"
                icon={<GIDocumentsFilesPaperTextArchiveCopy />} // copy
                onClick={handleCopyToClipboard}
                tooltip="Copy to clipboard"
              />
              <IconButton
                key="paste"
                icon={<GIPasteClipboard />}
                onClick={handlePasteToEditor}
                tooltip="Paste to editor"
              />
            </ButtonGroup>
          }
        />
      );
    })(args),
};

export const ProgramaticActions: Story = {
  args: {
    value: "Help! I'm being updated programatically",
  },
  tags: ['isHidden'],
  render: (args) =>
    ((props: Partial<EditorProps>) => {
      const [value, setValue] = React.useState<string>(props.value);
      const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();

      return (
        <Flex
          width="100%"
          flexDirection="column"
          gap="cmp-md"
          alignItems="flex-start"
        >
          <ButtonGroup>
            <Button
              onClick={() => {
                editorRef.current?.focus();
              }}
            >
              Focus editor
            </Button>
            <Button
              onClick={() => {
                const val = editorRef.current?.getValue();
                setValue(val + "\nHelp! I'm being updated programatically");
              }}
            >
              Update value
            </Button>
          </ButtonGroup>
          <Editor
            {...props}
            height="300px"
            width="100%"
            value={value}
            onMount={(editor: monaco.editor.IStandaloneCodeEditor) => {
              editorRef.current = editor;
            }}
          />
        </Flex>
      );
    })(args),
};

export const WithShortcuts: Story = {
  tags: ['isHidden'],
  render: (args) =>
    (({ ...props }: Partial<EditorProps>) => {
      const registerShortcuts = (
        editor: monaco.editor.IStandaloneCodeEditor,
      ) => {
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyE, () => {
          const blob = new Blob([editor.getValue()], {
            type: 'text/plain;charset=utf-8',
          });
          saveAs(blob, 'code.txt');
        });
      };

      return (
        <Editor
          {...props}
          value={'Press Ctrl/Cmd + E to export this content to a file\n'}
          onMount={registerShortcuts}
        />
      );
    })(args),
};

export const CustomTheme: Story = {
  args: {
    value: "I'm being built from my inner parts",
  },
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const editorTheme = useEditorTheme();
      const customEditorTheme = {
        ...editorTheme,
        themeData: {
          ...editorTheme.themeData,
          colors: {
            ...editorTheme.themeData.colors,
            'editor.background': '#ffff0055',
          },
        },
      };

      return (
        <Editor.Container bordered={true}>
          <Editor.Editor
            {...props}
            height="300px"
            bordered={true}
            theme={customEditorTheme}
            value="I'm being built from my inner parts"
          />
          <Editor.ActionsContainer>
            <IconButton icon={<GIHeartFull />} />
          </Editor.ActionsContainer>
        </Editor.Container>
      );
    })(args),
};

export const MultipleEditors: Story = {
  tags: ['isHidden'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({ value, ...args }) =>
    (({ ...props }: Partial<EditorProps>) => {
      return (
        <Flex width="100%" flexDirection="column" gap="cmp-md">
          <CustomLang {...props} />
          <CustomLang options={{ minimap: { enabled: false } }} {...props} />
          <CustomLang langId="esql" language="esql" {...props} />
          <CustomLang options={{ fontSize: 10 }} {...props} />
        </Flex>
      );
    })(args),
};
