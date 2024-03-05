import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import type { IModal, TModalStatus } from '../../declarations';
import { modalHeaderMixin } from './mixins';
import { ModalContext } from '../../context';
import { Panel, type PanelHeaderProps } from '../../../Panel';
import { Flex } from '../../../Flex';
import { ModalIcon } from '../ModalIcon';
import { Heading } from '../../../Typography/components/block';
import { ButtonGroup } from '../../../ButtonGroup';
import { IconButtonClose } from '../../../IconButton';

export interface ModalHeaderProps
  extends Pick<
    PanelHeaderProps,
    | 'actions'
    | 'bordered'
    | 'children'
    | 'removeSpace'
    | 'styles'
    | 'title'
    | 'titleTooltip'
  > {
  status?: TModalStatus;
  onRequestClose?: IModal['onRequestClose'];
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  actions = [],
  bordered,
  children,
  onRequestClose,
  removeSpace,
  status,
  styles,
  title,
  titleTooltip,
}) => {
  const theme = useTheme();
  const context = React.useContext(ModalContext);
  const evalStatus = status || context.status || 'base';

  return (
    <Panel.Header
      bordered={bordered ?? evalStatus === 'base'}
      styles={concat(
        modalHeaderMixin({ removeSpace, status: evalStatus, theme }),
        styles,
      )}
    >
      {children || (
        <>
          <Flex alignItems="inherit">
            <ModalIcon status={evalStatus} />
            <Heading
              size={evalStatus === 'base' ? 'h4' : 'h5'}
              truncateLine={1}
              tooltip={
                titleTooltip || (typeof title === 'string' ? title : null)
              }
            >
              {title}
            </Heading>
          </Flex>
          <Flex marginLeft="auto">
            <ButtonGroup size="sm">
              {[
                ...actions,
                <IconButtonClose
                  size="md"
                  key="close"
                  onClick={onRequestClose || context.onRequestClose}
                  tooltip="Close"
                />,
              ]}
            </ButtonGroup>
          </Flex>
        </>
      )}
    </Panel.Header>
  );
};
