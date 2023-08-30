import * as React from 'react';
import { render, screen } from 'test-utils';
import { darken } from 'polished';

import { Link } from './Link';
import { useTheme } from 'styled-components';

const LINK_LABEL = 'Link label';

describe('Link', () => {
  const tokens = useTheme();
  const linkTokens = tokens.cmp.link;

  test('base, underlined, wide, lg, enabled, truncated', () => {
    render(
      <Link colorScheme="base" underlined wide size="lg" state="enabled">
        {LINK_LABEL}
      </Link>,
    );
    expect(screen.getByText(LINK_LABEL)).toHaveStyle({
      width: '100%',
      color: linkTokens.color.text.base,
      'font-size': '1.4rem',
      'text-decoration': 'underline',
      'text-overflow': 'ellipsis',
    });
  });

  test('error, md, disabled, truncated 1', () => {
    render(
      <Link
        className="my-test-class"
        colorScheme="error"
        size="md"
        state="disabled"
      >
        {LINK_LABEL}
      </Link>,
    );
    expect(screen.getByText(LINK_LABEL)).toHaveStyle({
      color: linkTokens.color.text.error,
      opacity: tokens.alias.shape.opacity.disabled,
      cursor: 'not-allowed',
      'font-size': '1.3rem',
      'text-overflow': 'ellipsis',
    });
    screen.getByText(LINK_LABEL);
  });

  test('info, sm, hovered, truncated 2', () => {
    render(
      <Link colorScheme="info" size="sm" state="hovered" lineClamp={2}>
        {LINK_LABEL}
      </Link>,
    );
    expect(screen.getByText(LINK_LABEL)).toHaveStyle({
      color: darken(0.08, linkTokens.color.text.info || ''),
      'font-size': '1.2rem',
      'text-overflow': 'ellipsis',
    });
  });

  test('inverse, xs, focused, truncated 3', () => {
    render(
      <Link colorScheme="inverse" size="xs" state="focused" lineClamp={3}>
        {LINK_LABEL}
      </Link>,
    );
    expect(screen.getByText(LINK_LABEL)).toHaveStyle({
      color: darken(0.12, linkTokens.color.text.inverse || ''),
      'font-size': '1.1rem',
      'text-overflow': 'ellipsis',
    });
  });

  test('help, pressed', () => {
    render(
      <Link colorScheme="help" state="pressed">
        {LINK_LABEL}
      </Link>,
    );
    expect(screen.getByText(LINK_LABEL)).toHaveStyle({
      color: darken(0.16, linkTokens.color.text.help || ''),
    });
  });
});
