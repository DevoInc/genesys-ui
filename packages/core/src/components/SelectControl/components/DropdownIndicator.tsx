import * as React from 'react';
import {
  components,
  DropdownIndicatorProps as ReactSelectDropdownIconProps,
} from 'react-select';

import { Icon } from '../..';
import { showMenuAndDropDown } from '../utils';
import { CommonSelectCmpsProps } from '../declarations';

const mapStatusIcon = {
  error: 'error_warning_danger_stop_filled',
  success: 'ok_successful_check_filled',
  warning: 'attention_error_alert_caution_filled',
  help: 'about_question_faq_help_filled',
  info: 'about_question_faq_help_filled',
};

export interface DropdownIndicatorProps extends ReactSelectDropdownIconProps {
  selectProps: ReactSelectDropdownIconProps['selectProps'] &
    CommonSelectCmpsProps;
}

export const DropdownIndicator: React.FC<DropdownIndicatorProps> = ({
  selectProps,
  ...props
}) => {
  return (
    showMenuAndDropDown(props) &&
    components.DropdownIndicator && (
      <components.DropdownIndicator selectProps={selectProps} {...props}>
        {selectProps.status && selectProps.status !== 'base' && (
          <Icon
            iconId={mapStatusIcon[selectProps.status]}
            status={selectProps.status}
            className={`${selectProps.classNamePrefix}__status-icon`}
          />
        )}
        <Icon iconId="arrow_down_fat" />
      </components.DropdownIndicator>
    )
  );
};
