import * as React from 'react';

import { AppBarActionsType } from '../declarations';

import { ButtonGroup } from '../../ButtonGroup';
import { FlexItem } from '../../FlexItem';
import { HFlex } from '../../HFlex';
import { AppBarDivider } from './';

export interface AppBarUserOptionsProps {
  id: string;
  userOptions?: AppBarActionsType;
}

export const AppBarUserOptions: React.FC<AppBarUserOptionsProps> = ({
  userOptions,
  id,
}) => {
  return (
    <HFlex
      id={`${id}__user-options`}
      alignItems="center"
      marginLeft="auto"
      padding="0 cmp-md"
    >
      <AppBarDivider id={id} />
      <FlexItem>
        <ButtonGroup size="md">{userOptions}</ButtonGroup>
      </FlexItem>
    </HFlex>
  );
};
