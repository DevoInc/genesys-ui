import * as React from 'react';
import { Popper, Box, IconButtonClose } from '@devoinc/genesys-ui';

import { StyledTableCellRendererPopper } from './StyledCellRendererPopper';

export const RenderCellContentPopper = ({ value, columnDef }) => {
  const expandedContentRef = React.useRef();
  const [hasScroll, setHasScroll] = React.useState(false);
  React.useEffect(() => {
    const expandedContent = expandedContentRef.current;
    if (expandedContent) {
      if (expandedContent.scrollHeight > expandedContent.clientHeight) {
        setHasScroll(true);
      } else {
        setHasScroll(false);
      }
    }
  }, [expandedContentRef]);
  const [visible, setVisible] = React.useState(false);

  return (
    <Popper
      trigger={
        <div style={{ width: columnDef.minWidth, height: columnDef.rowHeight }}>
          adios
        </div>
      }
      visible={visible}
      setIsVisible={setVisible}
      offset={[-columnDef.rowHeight, -columnDef.rowHeight]}
    >
      <StyledTableCellRendererPopper
        density={columnDef.density}
        editable={columnDef.editable}
        typeProp={columnDef.type}
        ref={expandedContentRef}
        tall={columnDef.tallRows}
      >
        {value}
      </StyledTableCellRendererPopper>
      <Box
        position="absolute"
        positionTop="0.4rem"
        positionRight={hasScroll ? '2rem' : '0.4rem'}
      >
        <IconButtonClose tooltip={'hola'} onClick={setVisible} />
      </Box>
    </Popper>
  );
};
