import * as React from 'react';

import { AppBarActionsType } from '../declarations';

import { Flex } from '../../Flex';
import { ButtonGroup } from '../../ButtonGroup';

export interface AppBarActionsProps {
  id: string;
  mainActions: AppBarActionsType;
}

export const AppBarActions: React.FC<AppBarActionsProps> = ({
  id,
  mainActions,
}) => (
  <Flex.Item id={`${id}__actions`}>
    <ButtonGroup size="md">{mainActions}</ButtonGroup>
  </Flex.Item>
);
