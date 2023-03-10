import * as React from 'react';
import { StyledNav } from './StyledNav';
import { StyledNavHeader } from './StyledNavHeader';
import { useHeadsObserver } from './useHeadsObserver';
import { useDOMMutationObserver } from './useDOMMutationObserver';

const CONF = {
  tocSelector: '.js-toc',
  contentSelector: '.sbdocs-content',
  headingSelector: '.sbdocs-h2',
};

interface TableOfContentsProps {
  title?: React.ReactNode;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  title = 'Table of contents',
}) => {
  // Mutation observer to observe for changes in the DOM.
  // This is necessary to detect navigation between stories
  // due to the Storybook not unmounting the component.
  const { headings } = useDOMMutationObserver(
    CONF.contentSelector,
    CONF.headingSelector
  );

  // Scroll observer to track titles changes in the viewport
  const { selectedHeadings } = useHeadsObserver(
    headings as HTMLHeadingElement[]
  );

  // Focus and scroll to heading when TOC link is clicked
  const handleClick = (event, element) => {
    event.preventDefault();
    const timer = setTimeout(() => {
      element?.focus();
      element?.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = element.id;
    }, 50);

    return () => clearTimeout(timer);
  };

  return headings.length > 1 ? (
    <StyledNav data-show={headings.length > 1}>
      <StyledNavHeader>{title}</StyledNavHeader>
      <ul className='toc-list'>
        {headings.map((h) => (
          <li
            key={h.id}
            id={`${h.id}-toc`}
            className={`toc-list-item ${
              selectedHeadings.includes(h.id) ? 'is-active-li' : ''
            }`}
          >
            <a
              className='toc-link'
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h)}
            >
              {h.innerText}
            </a>
          </li>
        ))}
      </ul>
    </StyledNav>
  ) : null;
};
