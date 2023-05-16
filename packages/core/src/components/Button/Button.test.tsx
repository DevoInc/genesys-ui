import * as React from 'react';
import { render, screen } from 'test-utils';

import { Button } from './Button';

describe('BaseButton', () => {
  describe('Elements', () => {
    const TEST_ID = 'badge-test';
    const BADGE_TEST_ID = `${TEST_ID}_badge`;

    test('When hasBadge', () => {
      render(<Button data-testid={TEST_ID} hasBadge />);
      expect(screen.getByTestId(BADGE_TEST_ID)).toBeEmptyDOMElement();
    });

    test('When hasBadge and badgeText', () => {
      render(<Button data-testid={TEST_ID} hasBadge badgeText={'42'} />);
      expect(screen.getByTestId(BADGE_TEST_ID).textContent).toBe('42');
    });

    test('When only badgeText', () => {
      render(<Button data-testid={TEST_ID} badgeText={'42'} />);
      expect(() => screen.getByTestId(BADGE_TEST_ID)).toThrow();
    });

    test('When is dropdown', () => {
      render(<Button data-testid={TEST_ID} hasDropdown />);
      const button = screen.getByTestId(TEST_ID);
      expect(button.getElementsByTagName('i')[0]).toHaveClass(
        'gi-arrow_down_fat'
      );
    });

    test('When has icon', () => {
      render(<Button data-testid={TEST_ID} icon={'gi-heart_full'} />);
      const button = screen.getByTestId(TEST_ID);
      expect(button.getElementsByTagName('i')[0]).toHaveClass('gi-heart_full');
    });

    test('When has children', () => {
      render(<Button data-testid={TEST_ID}>Any label</Button>);
      expect(
        screen.getByRole('button', { name: 'Any label' })
      ).toBeInTheDocument();
    });

    test('When in loading', () => {
      render(<Button data-testid={TEST_ID} state={'loading'} />);
      expect(screen.getByTestId('spinner_darkTrans')).toBeInTheDocument();
    });

    test('When is single selectable', () => {
      render(
        <Button data-testid={TEST_ID} selectionScheme={'single'}>
          Selectable button
        </Button>
      );
      expect(
        screen.getByRole('radio', { name: 'Selectable button' })
      ).toBeInTheDocument();
    });

    test('When is multiple selectable', () => {
      render(
        <Button data-testid={TEST_ID} id={TEST_ID} selectionScheme={'multiple'}>
          Selectable button
        </Button>
      );
      expect(
        screen.getByRole('checkbox', { name: 'Selectable button' })
      ).toBeInTheDocument();
    });
  });
});
