import * as React from 'react';

import { IconProps } from '../';
import { BaseProgressBarProps, ProgressBarType } from './declarations';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

import { getIcon, getPercent, getStatus, hasCustomInfo } from './utils';

import {
  ProgressBarCircularBar,
  ProgressBarContainer,
  ProgressBarCustomInfo,
  ProgressBarInfo,
  ProgressBarInnerContainer,
  ProgressBarStandardBar,
} from './components';

export interface ProgressBarProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    StyledPolymorphicProps,
    Pick<
      Partial<BaseProgressBarProps>,
      | 'colorScheme'
      | 'status'
      | 'size'
      | 'indeterminate'
      | 'percent'
      | 'showInfo'
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

const InternalProgressBar: React.FC<ProgressBarProps> = ({
  animated,
  colorScheme = 'dark',
  customInfo,
  icon,
  indeterminate,
  percent,
  status = 'progressing',
  showInfo,
  size = 'md',
  type = 'standard',
  ...nativeProps
}) => {
  return (
    <ProgressBarContainer {...nativeProps} size={size}>
      <ProgressBarInnerContainer type={type}>
        {(type === 'standard' || !type) && (
          <ProgressBarStandardBar
            role="progressbar"
            aria-valuenow={
              indeterminate ? null : getPercent({ percent, status })
            }
            animated={animated}
            colorScheme={colorScheme}
            indeterminate={indeterminate}
            percent={getPercent({ percent, status })}
            status={getStatus({ percent, status })}
            showInfo={showInfo}
            size={size}
          />
        )}
        {type === 'circular' && (
          <ProgressBarCircularBar
            aria-valuenow={
              indeterminate ? null : getPercent({ percent, status })
            }
            role="progressbar"
            colorScheme={colorScheme}
            indeterminate={indeterminate}
            percent={getPercent({ percent, status })}
            status={getStatus({ percent, status })}
            showInfo={showInfo}
            size={size}
          />
        )}
        {showInfo && (
          <ProgressBarInfo
            icon={getIcon({ icon, percent, status })}
            percent={percent}
            status={status}
            size={size}
            type={type}
          />
        )}
      </ProgressBarInnerContainer>
      {showInfo && hasCustomInfo(customInfo) && (
        <ProgressBarCustomInfo
          endInfo={customInfo.endInfo}
          status={status}
          size={size}
          startInfo={customInfo.startInfo}
        />
      )}
    </ProgressBarContainer>
  );
};

export const ProgressBar = InternalProgressBar as typeof InternalProgressBar & {
  Container: typeof ProgressBarContainer;
  CustomInfo: typeof ProgressBarCustomInfo;
  Info: typeof ProgressBarInfo;
  InnerContainer: typeof ProgressBarInnerContainer;
  StandardBar: typeof ProgressBarStandardBar;
  CircularBar: typeof ProgressBarCircularBar;
};

ProgressBar.Container = ProgressBarContainer;
ProgressBar.CustomInfo = ProgressBarCustomInfo;
ProgressBar.Info = ProgressBarInfo;
ProgressBar.InnerContainer = ProgressBarInnerContainer;
ProgressBar.StandardBar = ProgressBarStandardBar;
ProgressBar.CircularBar = ProgressBarCircularBar;
