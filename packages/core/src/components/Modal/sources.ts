export const SOURCE = {
  SIMPLE: `() => {
        const [isOpen, setOpen] = React.useState<boolean>(false);
      
        return (
          <>
            {isOpen && (
              <Modal onRequestClose={() => setOpen(false)}>
              Your modal content goes here
              </Modal>
            )}
            <Button
              label="Open modal"
              onClick={() => setOpen(true)}
              colorScheme="accent-high"
            />
          </>
        );
      };`,
  OPEN: `() => {
        const [isOpen, setOpen] = React.useState<boolean>(true);
      
        return (
          <>
            {isOpen && (
              <Modal onRequestClose={() => setOpen(false)}>
              Your modal content goes here
              </Modal>
            )}
            <Button
              label="Open modal"
              onClick={() => setOpen(true)}
              colorScheme="accent-high"
            />
          </>
        );
      };`,
  WITH_HEADER_ACTIONS: `() => {
            const [isOpen, setOpen] = React.useState<boolean>(true);
          
            return (
              <>
                {isOpen && (
                  <Modal 
                    onRequestClose={() => setOpen(false)} 
                    headerActions={[
                        {
                          icon: 'to_back',
                          onClick: () => setOpen(false),
                          tooltip: 'Back',
                        },
                        {
                          icon: 'auto_layers',
                          onClick: () => setOpen(false),
                          tooltip: 'Layers',
                        },
                      ]}>
                    Your modal content goes here
                  </Modal>
                )}
                <Button
                  label="Open modal"
                  onClick={() => setOpen(true)}
                  colorScheme="accent-high"
                />
              </>
            );
          };`,
  WITH_BUTTONS: `() => {
        const [isOpen, setOpen] = React.useState<boolean>(true);
      
        return (
          <>
            {isOpen && (
              <Modal 
                onRequestClose={() => setOpen(false)} 
                buttons={(
                    <>
                        <Button
                          colorScheme={'quiet'}
                          key={0}
                          onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                          colorScheme={'accent'}
                          key={1}
                          onClick={() => setOpen(false)}
                        >
                            Apply
                        </Button>
                    </>
              )}>
                Your modal content goes here
              </Modal>
            )}
            <Button
              label="Open modal"
              onClick={() => setOpen(true)}
              colorScheme="accent-high"
            />
          </>
        );
      };`,
};
