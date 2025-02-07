import * as React from 'react';

import { SelectControl, type TSelectOption, Avatar } from '@devoinc/genesys-ui';

import type { TFilterContext, TFilter } from '../../declarations';
import type { TUserFilterValue } from './declarations';
import { FilterContainer } from '../common';
import { TContextUser } from '../../renderers';
//import { concatenateValues } from './util';

export const UserFilter: React.FC<TFilter> = ({ colDef, onChange }) => {
  const context = colDef?.context as TContextUser & TFilterContext;
  const keys = Object.keys(context?.userMapping ?? {});
  const AvatarCmp = ({ user }) => {
    return (
      <Avatar
        imageSrc={user?.avatar}
        colorScheme={user?.colorScheme || 'info'}
        size="xxxs"
        name={user?.name}
        initials={user?.initials}
      />
    );
  };
  const options = Object.values(context?.userMapping ?? {}).map(
    (user, index) => {
      if (keys[index] === 'separator') {
        return {
          isSeparator: true,
        } as TSelectOption;
      } else {
        return {
          value: keys[index],
          label: user.isCurrentUser ? 'Current user' : user.name,
          icon: <AvatarCmp user={user} />,
          tooltip: user.email,
        } as TSelectOption;
      }
    },
  );
  const filterValue = context?.filterValue as TUserFilterValue;
  const value = filterValue?.value ?? '';
  return (
    <FilterContainer>
      <SelectControl
        isMulti
        size="sm"
        closeMenuOnSelect={false}
        multipleSubtle
        selectAllBtn
        hideSelectedOptions={false}
        onChange={(val: TSelectOption[]) => {
          onChange({ value: val } as TUserFilterValue, 'options');
        }}
        menuAppendToBody
        defaultInputValue={colDef?.context?.defaultValue as string}
        options={options}
        value={value}
        minMenuWidth={'24rem'}
      />
    </FilterContainer>
  );
};
