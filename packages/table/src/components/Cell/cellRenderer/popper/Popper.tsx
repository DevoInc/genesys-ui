import * as React from 'react';
import { Popper, Box, IconButtonClose } from '@devoinc/genesys-ui';

import { StyledTableCellRendererPopper } from './StyledCellRendererPopper';
import { ExpandedContentRefProps } from '../../declarationsfake';
import { ColDef } from '../../declarations';

interface RenderCellContentPopperProps {
  value: string | number;
  columnDef: ColDef;
}

export const RenderCellContentPopper: React.FC<
  RenderCellContentPopperProps
> = ({ value, columnDef }) => {
  const expandedContentRef = React.useRef<ExpandedContentRefProps>();
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
      trigger={<div>adios</div>}
      visible={visible}
      setIsVisible={setVisible}
    >
      {/* TODO: StyledTableCellRendererPopper had density and tall props. Should they be recovered? */}
      <StyledTableCellRendererPopper
        editable={columnDef.editable}
        typeProp={columnDef.type}
      >
        {value}
      </StyledTableCellRendererPopper>
      <Box
        position="absolute"
        positionTop="0.4rem"
        positionRight={hasScroll ? '2rem' : '0.4rem'}
      >
        <IconButtonClose tooltip={'hola'} onClick={() => setVisible(false)} />
      </Box>
    </Popper>
  );
};
