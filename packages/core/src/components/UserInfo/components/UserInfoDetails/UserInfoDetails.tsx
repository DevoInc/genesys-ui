import * as React from 'react';

import {
  GIDiamondPrizeAwardJewelleryRing,
  GIEmailMailPostCard,
  GIPhoneCallContact,
  GIUserProfileAvatarManMale,
  IconContext,
} from '@devoinc/genesys-icons';
import type { IUserInfo } from '../../declarations';
import { VFlex } from '../../../VFlex';
import { KeyValue } from '../../../KeyValue';

export interface UserInfoDetailsProps
  extends Pick<
    IUserInfo,
    | 'customInfo'
    | 'email'
    | 'emailKey'
    | 'id'
    | 'job'
    | 'jobKey'
    | 'phone'
    | 'phoneKey'
    | 'role'
    | 'roleKey'
    | 'tooltip'
  > {}

export const UserInfoDetails: React.FC<UserInfoDetailsProps> = ({
  customInfo,
  email,
  emailKey,
  id,
  job,
  jobKey,
  phone,
  phoneKey,
  role,
  roleKey,
  tooltip,
}) => {
  return (
    <VFlex spacing="cmp-xs" id={id} tooltip={tooltip}>
      {role && (
        <KeyValue
          keyContent={roleKey}
          supportingVisual={<GIDiamondPrizeAwardJewelleryRing size={16} />}
          valueContent={role}
          supportingVisualAlign="flex-start"
          valueTruncateLine="none"
          format={roleKey ? 'row' : undefined}
        />
      )}
      {email && (
        <KeyValue
          keyContent={emailKey}
          supportingVisual={<GIEmailMailPostCard size={16} />}
          valueContent={email}
          supportingVisualAlign="flex-start"
          valueTruncateLine="none"
          format={roleKey ? 'row' : undefined}
        />
      )}
      {phone && (
        <KeyValue
          keyContent={phoneKey}
          supportingVisual={<GIPhoneCallContact size={16} />}
          valueContent={phone}
          supportingVisualAlign="flex-start"
          valueTruncateLine="none"
          format={roleKey ? 'row' : undefined}
        />
      )}
      {job && (
        <KeyValue
          keyContent={jobKey}
          supportingVisual={<GIUserProfileAvatarManMale size={16} />}
          supportingVisualAlign="flex-start"
          valueTruncateLine="none"
          valueContent={job}
          format={roleKey ? 'row' : undefined}
        />
      )}
      {customInfo &&
        customInfo.length > 0 &&
        customInfo.map((info, index) => (
          <KeyValue
            key={index}
            supportingVisual={
              <IconContext.Provider value={{ size: 16 }}>
                {info.supportingVisual}
              </IconContext.Provider>
            }
            supportingVisualAlign="flex-start"
            valueTruncateLine="none"
            keyContent={info.key}
            valueContent={info.value}
            format={info.key ? 'row' : undefined}
          />
        ))}
    </VFlex>
  );
};
