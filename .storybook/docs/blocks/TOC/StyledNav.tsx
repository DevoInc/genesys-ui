import styled from 'styled-components';

export const StyledNav = styled.nav.attrs({ className: 'sbdocs sbdocs-toc' })`
  --color: var(--toc-color, inherit);
  --background: var(--toc-background, none);
  --indicator-color: var(--toc-indicator-color, #f5f5f5);
  --indicator-color--active: var(--toc-indicator-color--active, #0675c1);

  display: none;
  position: fixed;
  top: 40px;
  left: calc(50% + 500px + 20px);
  padding: 10px;
  width: 250px;
  background: var(--background);
  transition: all 0.3s ease-in;

  &[data-show='true'] {
    display: inherit;
  }

  .toc-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .toc-link {
    color: var(--color);
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .toc-list-item {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 10px;
    cursor: pointer;

    &:before {
      position: absolute;
      content: ' ';
      display: inline-block;
      top: 0;
      left: 0;
      bottom: 0;
      width: 3px;
      background: var(--indicator-color);
    }

    &.is-active-li {
      color: var(--indicator-color--active);

      &:before {
        background: var(--indicator-color--active);
      }
    }

    .toc-list-item {
      opacity: 0.54;

      &:before {
        content: none;
      }
    }
  }
`;
