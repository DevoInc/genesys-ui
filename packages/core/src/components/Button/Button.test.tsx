import * as React from 'react';
import { render, screen } from 'test-utils';

import { Button } from './Button';

describe('BaseButton', () => {
  describe('Elements', () => {
    test('When hasBadge and badgeText', () => {
      render(
        <Button hasBadge badgeText={'42'}>
          Test
        </Button>,
      );
      expect(screen.getByText('Test')).toBeInTheDocument();
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    test('When only badgeText', () => {
      render(
        <Button hasBadge badgeText={'42'}>
          Test
        </Button>,
      );
      expect(screen.getByText('Test')).toBeInTheDocument();
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    test('When is dropdown', () => {
      render(<Button data-testid={'test'} hasDropdown />);
      const button = screen.getByTestId('test');
      expect(button.getElementsByTagName('i')[0]).toHaveClass('gi-angle_down');
    });

    test('When has icon', () => {
      render(<Button data-testid={'test'} icon={'gi-heart_full'} />);
      const button = screen.getByTestId('test');
      expect(button.getElementsByTagName('i')[0]).toHaveClass('gi-heart_full');
    });

    test('When has children', () => {
      render(<Button data-testid={'test'}>Any label</Button>);
      expect(
        screen.getByRole('button', { name: 'Any label' }),
      ).toBeInTheDocument();
    });

    test('When in loading', () => {
      render(<Button data-testid={'test'} state={'loading'} />);
      expect(screen.getByTestId('test')).toBeInTheDocument();
    });

    test('When is single selectable', () => {
      render(
        <Button data-testid={'test'} selectionScheme={'single'}>
          Selectable button
        </Button>,
      );
      expect(
        screen.getByRole('radio', { name: 'Selectable button' }),
      ).toBeInTheDocument();
    });

    test('When is multiple selectable', () => {
      render(
        <Button data-testid={'test'} id={'test'} selectionScheme={'multiple'}>
          Selectable button
        </Button>,
      );
      expect(
        screen.getByRole('checkbox', { name: 'Selectable button' }),
      ).toBeInTheDocument();
    });
  });
});
