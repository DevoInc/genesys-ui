import * as React from 'react';
import { StyledNav } from './StyledNav';
import { StyledNavHeader } from './StyledNavHeader';

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
  // List of headings to render (H2)
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);
  // Fall back heading to use when no heading is visible
  const [fallBackHeading, setFallBackHeading] = React.useState<string>();
  // List of visible headings
  const [selectedHeadings, setSelectedHeadings] = React.useState<string[]>([]);

  // Handle intersection of headings with the viewport
  const handleIntersection = React.useCallback(
    (entries) =>
      entries.forEach((entry) => {
        setSelectedHeadings((prev) => {
          let previousSelected = [...prev];

          const leavingFromTop =
            !entry.isVisible && entry.boundingClientRect.top <= 0;

          const currId = entry.target.id;
          const headings = [...document.querySelectorAll('h2')];
          const headingsIds = headings.map((h) => h.id);
          const currIndex = headingsIds.indexOf(currId);
          const prevIdxs = headingsIds.slice(0, currIndex + 1);

          if (entry?.isVisible) {
            // Push to selected headings if not already there
            if (!previousSelected.includes(entry.target.id)) {
              previousSelected.push(entry.target.id);
            }
          } else {
            // Remove from selected headings if there
            previousSelected = previousSelected.filter(
              (id) => id !== entry.target.id
            );
          }

          if (leavingFromTop) {
            // If leaving from top, remove all previous headings unless there is only one
            if (previousSelected.length > 1) {
              previousSelected = previousSelected.filter(
                (id) => !prevIdxs.includes(id)
              );
            }
          }

          // Set the fallback heading
          if (
            !entry.isIntersecting &&
            !entry.isVisible &&
            entry.boundingClientRect.top > 0
          ) {
            // If leaving from bottom, set the previous heading as fallback
            setFallBackHeading(headingsIds[currIndex - 1]);
          } else {
            // If leaving from top, set the current heading as fallback
            setFallBackHeading(entry.target.id);
          }
          return previousSelected;
        });
      }),
    [headings]
  );

  // Handle mutation of headings in the DOM
  const handleMutation = React.useCallback(() => {
    const TOCEntries = document.querySelectorAll(CONF.headingSelector);
    setHeadings([...TOCEntries] as HTMLHeadingElement[]);
  }, [setHeadings]);

  // Create mutation observer and attach callback
  const mutationObserver = React.useMemo(
    () => new MutationObserver(handleMutation),
    [handleMutation]
  );

  // Create intersection observer and attach callback.
  const intersectionObserver = React.useMemo(
    () =>
      new IntersectionObserver(handleIntersection, {
        root: document.querySelector(CONF.contentSelector),
        rootMargin: '0px',
        threshold: 0.5,
        trackVisibility: true,
        delay: 100,
      } as never),
    [handleIntersection]
  );

  // Attach mutation observer to the content container and observe for changes
  React.useEffect(() => {
    const container = document.querySelector(CONF.contentSelector);
    mutationObserver.observe(container as Node, {
      childList: true,
      subtree: false,
    });
    return () => mutationObserver.disconnect();
  }, []);

  // Attach intersection observer to the headings and observe for changes
  React.useEffect(() => {
    const targets = document.querySelectorAll('h2');
    targets.forEach((target) => intersectionObserver.observe(target));
    return () => intersectionObserver.disconnect();
  }, []);

  // Add hash to URL when selected headings change
  // Take the top-most heading in the list of selected headings or the fallback heading
  React.useEffect(() => {
    const headingsIds = headings.map((h) => h.id);
    const sortedSelectedHeadings = [...selectedHeadings].sort(
      (a, b) => headingsIds.indexOf(a) - headingsIds.indexOf(b)
    );
    window.location.hash = sortedSelectedHeadings[0] || fallBackHeading || '';
  }, [selectedHeadings]);

  // Focus and scroll to heading when TOC link is clicked
  const handleClick = (event, element) => {
    event.preventDefault();
    const timer = setTimeout(() => {
      element?.focus();
      element?.scrollIntoView({ behavior: 'smooth' });
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
            id={h.id}
            className={`toc-list-item ${
              selectedHeadings.includes(h.id) ||
              (selectedHeadings.length === 0 && fallBackHeading === h.id)
                ? 'is-active-li'
                : ''
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
