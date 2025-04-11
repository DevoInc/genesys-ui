import * as React from 'react';
import { describe, test, expect, afterEach } from 'vitest';

import { UploadFiles } from '@devoinc/genesys-ui-upload';

import { cleanup, render, screen } from '@test';

describe('components', () => {
  describe('UploadFiles', () => {
    test('render', async () => {
      render(
        <UploadFiles
          id={'test'}
          label={'Test'}
          hasWideControl
          labelPosition="top"
          showLabelIcon
          size="md"
          status="base"
          allowMultiple={false}
          allowImagePreview={false}
          imagePreviewMaxHeight={150}
          imagePreviewMinHeight={44}
        />,
      );
      const div = screen.getByRole('button');
      expect(div).toBeInTheDocument();
    });

    afterEach(() => {
      cleanup();
    });
  });
});
