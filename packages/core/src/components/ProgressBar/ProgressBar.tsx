import * as React from 'react';

import { Flex, IconProps } from '../';
import { BaseProgressBarProps, ProgressBarType } from './declarations';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledOverloadCssProps,
  StyledOverloadCssPropsWithRecord,
  StyledPolymorphicProps,
} from '../../declarations';

import { getIcon, getPercent, getStatus, hasCustomInfo } from './utils';

import {
  ProgressBarCircularBar,
  ProgressBarContainer,
  ProgressBarCustomInfo,
  ProgressBarHelper,
  ProgressBarInfo,
  ProgressBarInnerContainer,
  ProgressBarStandardBar,
} from './components';

export interface BasicProgressBarProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<
      Partial<BaseProgressBarProps>,
      | 'colorScheme'
      | 'status'
      | 'size'
      | 'statusHelper'
      | 'floatingStatusHelperTooltip'
      | 'hasFloatingStatusHelper'
      | 'indeterminate'
      | 'percent'
      | 'showStatus'
      | 'animated'
    > {
  /** Custom info bellow the progress bar */
  customInfo?: {
    startInfo: string;
    endInfo: string;
  };
  /** Custom icon for progress info */
  icon?: IconProps['iconId'];
  /** The type of the progress bar: standard or circular */
  type?: ProgressBarType;
}

export type ProgressBarProps = BasicProgressBarProps &
  StyledOverloadCssPropsWithRecord<
    | 'container'
    | 'customInfo'
    | 'helper'
    | 'info'
    | 'innerContainer'
    | 'standardBar'
    | 'circularBar'
  >;

const InternalProgressBar: React.FC<ProgressBarProps> = ({
  animated,
  colorScheme = 'dark',
  customInfo,
  floatingStatusHelperTooltip,
  hasFloatingStatusHelper,
  icon,
  id,
  indeterminate,
  percent,
  status = 'progressing',
  statusHelper,
  showStatus,
  size = 'md',
  styles,
  subcomponentStyles,
  type = 'standard',
  ...nativeProps
}) => {
  const helperId = id ? `${id}-progress-helper` : null;
  return (
    <ProgressBarContainer
      {...nativeProps}
      id={id}
      styles={subcomponentStyles?.container || styles}
    >
      <ProgressBarInnerContainer
        type={type}
        styles={subcomponentStyles?.innerContainer}
      >
        {(type === 'standard' || !type) && (
          <ProgressBarStandardBar
            animated={animated}
            aria-errormessage={status === 'error' ? helperId : null}
            aria-invalid={status === 'error'}
            aria-valuenow={
              indeterminate ? null : getPercent({ percent, status })
            }
            colorScheme={colorScheme}
            indeterminate={indeterminate}
            percent={getPercent({ percent, status })}
            role="progressbar"
            status={getStatus({ percent, status })}
            showStatus={showStatus}
            size={size}
            styles={subcomponentStyles?.standardBar}
          />
        )}
        {type === 'circular' && (
          <ProgressBarCircularBar
            aria-errormessage={status === 'error' ? helperId : null}
            aria-invalid={status === 'error'}
            aria-valuenow={
              indeterminate ? null : getPercent({ percent, status })
            }
            colorScheme={colorScheme}
            indeterminate={indeterminate}
            percent={getPercent({ percent, status })}
            role="progressbar"
            showStatus={showStatus}
            size={size}
            status={getStatus({ percent, status })}
            styles={subcomponentStyles?.circularBar}
          />
        )}
        {showStatus && (
          <ProgressBarInfo
            floatingStatusHelperTooltip={floatingStatusHelperTooltip}
            floatingStatusHelperId={helperId}
            hasFloatingStatusHelper={hasFloatingStatusHelper}
            icon={getIcon({ type, icon, percent, status })}
            percent={percent}
            size={size}
            status={status}
            statusHelper={statusHelper}
            styles={subcomponentStyles?.info}
            type={type}
          />
        )}
      </ProgressBarInnerContainer>
      {showStatus && hasCustomInfo(customInfo) && (
        <ProgressBarCustomInfo
          endInfo={customInfo.endInfo}
          size={size}
          status={status}
          startInfo={customInfo.startInfo}
          styles={subcomponentStyles?.customInfo}
        />
      )}
      {showStatus && statusHelper && !hasFloatingStatusHelper && (
        <Flex justifyContent="center">
          <ProgressBarHelper
            id={helperId}
            size={size}
            status={status}
            statusHelper={statusHelper}
            styles={subcomponentStyles?.helper}
          />
        </Flex>
      )}
    </ProgressBarContainer>
  );
};

export const ProgressBar = InternalProgressBar as typeof InternalProgressBar & {
  Container: typeof ProgressBarContainer;
  CustomInfo: typeof ProgressBarCustomInfo;
  Helper: typeof ProgressBarHelper;
  Info: typeof ProgressBarInfo;
  InnerContainer: typeof ProgressBarInnerContainer;
  StandardBar: typeof ProgressBarStandardBar;
  CircularBar: typeof ProgressBarCircularBar;
};

ProgressBar.Container = ProgressBarContainer;
ProgressBar.CustomInfo = ProgressBarCustomInfo;
ProgressBar.Helper = ProgressBarHelper;
ProgressBar.Info = ProgressBarInfo;
ProgressBar.InnerContainer = ProgressBarInnerContainer;
ProgressBar.StandardBar = ProgressBarStandardBar;
ProgressBar.CircularBar = ProgressBarCircularBar;
