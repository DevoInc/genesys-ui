import * as React from 'react';

export const useDOMMutationObserver = (
  contentSelector: string,
  headingsSelectors: string[]
) => {
  const observer = React.useRef<MutationObserver>();
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  // Handle mutation of headings in the DOM
  const handleMutation = React.useCallback(() => {
    const joinSelector = headingsSelectors.join(',');
    const TOCEntries = [...document.querySelectorAll(joinSelector)];
    if (
      headings.map((h) => h.id).toString() !==
      TOCEntries.map((h) => h.id).toString()
    ) {
      setHeadings([...TOCEntries] as HTMLHeadingElement[]);
    }
  }, []);

  // Observe changes in the content container
  React.useEffect(() => {
    observer.current = new MutationObserver(handleMutation);

    const container = document.querySelector(contentSelector);

    observer.current.observe(container as Node, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return {
    observer,
    headings,
  };
};
