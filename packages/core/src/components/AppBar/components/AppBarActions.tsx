import * as React from 'react';

import { AppBarActionsType } from '../declarations';

import { FlexItem } from '../../FlexItem';
import { ButtonGroup } from '../../ButtonGroup';

export interface AppBarActionsProps {
  id: string;
  mainActions: AppBarActionsType;
}

export const AppBarActions: React.FC<AppBarActionsProps> = ({
  id,
  mainActions,
}) => (
  <FlexItem id={`${id}__actions`}>
    <ButtonGroup size="md">{mainActions}</ButtonGroup>
  </FlexItem>
);
