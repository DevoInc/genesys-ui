import _ from 'lodash';
import * as React from 'react';

export const useHeadsObserver = (headings: HTMLHeadingElement[]) => {
  // List of visible headings
  const [selectedHeadings, setSelectedHeadings] = React.useState<string[]>([]);

  // Check if element is visible.
  const isInViewport = (container, element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || container.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || container.documentElement.clientWidth)
    );
  };

  // Return list of visible headings
  const getVisibleHeadings = React.useCallback(() => {
    setSelectedHeadings((selectedHeadingIds) => {
      let newSelectedHeadings = [...selectedHeadingIds];
      headings.forEach((heading) => {
        const viewport = document.querySelector('.sbdocs-content');
        if (isInViewport(viewport, heading)) {
          if (!selectedHeadingIds.includes(heading.id)) {
            // If heading is in viewport and not in list of visible headings, add it
            newSelectedHeadings.push(heading.id);
          }
        } else {
          if (newSelectedHeadings.length > 1) {
            // If heading is not in viewport and in list of visible headings, remove it.
            // Only remove if there is more than one visible heading
            newSelectedHeadings = newSelectedHeadings.filter(
              (id) => id !== heading.id
            );
          }
        }
      });
      return newSelectedHeadings;
    });
  }, [headings]);

  // Debounce function to avoid performance issues
  const getVisibleHeadingsDebounced = _.debounce(getVisibleHeadings, 5);

  // Update list of visible headings headings change
  React.useEffect(() => {
    setSelectedHeadings([]);
    getVisibleHeadings();
  }, [headings]);

  // Add event listener to update list of visible headings on scroll
  React.useEffect(() => {
    document?.addEventListener('scroll', getVisibleHeadingsDebounced);
    return () => {
      document?.removeEventListener('scroll', getVisibleHeadingsDebounced);
    };
  }, [headings]);

  return { selectedHeadings };
};
