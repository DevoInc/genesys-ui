import * as React from 'react';
import { useTheme } from 'styled-components';

import type { IModal, TModalStatus } from '../../declarations';
import { modalHeaderMixin } from './mixins';
import { ModalContext } from '../../context';
import { Panel, type PanelHeaderProps } from '../../../Panel';
import { Flex } from '../../../Flex';
import { ModalIcon } from '../ModalIcon';
import { Heading } from '../../../Typography/components/Heading';
import { ButtonGroup } from '../../../ButtonGroup';
import { IconButtonClose } from '../../../IconButton';
import { mergeStyles } from '../../../../helpers';

export interface ModalHeaderProps
  extends Pick<
    PanelHeaderProps,
    | 'actions'
    | 'bordered'
    | 'children'
    | 'removeSpace'
    | 'style'
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
  style,
  title,
  titleTooltip,
}) => {
  const theme = useTheme();
  const context = React.useContext(ModalContext);
  const evalStatus = status || context.status || 'base';

  return (
    <Panel.Header
      bordered={bordered ?? evalStatus === 'base'}
      style={mergeStyles(
        modalHeaderMixin({ removeSpace, status: evalStatus, theme }),
        style,
      )}
    >
      {children || (
        <Flex alignItems="center">
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
        </Flex>
      )}
    </Panel.Header>
  );
};
