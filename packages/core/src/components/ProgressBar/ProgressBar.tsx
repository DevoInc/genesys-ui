import * as React from 'react';

import type {
  StyledOverloadCssProps,
  StyledPolymorphicProps,
} from '../../declarations/styled';
import type { GlobalAttrProps } from '../../declarations/htmlAttrs';
import type { GlobalAriaProps } from '../../declarations/ariaAttrs';
import type { IconProps } from '../Icon';
import {
  IBaseProgressBar,
  TProgressBarType,
  TProgressBarCustomInfo,
} from './declarations';

import { Flex } from '../Flex';

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

export interface ProgressBarProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    StyledPolymorphicProps,
    StyledOverloadCssProps,
    Pick<
      Partial<IBaseProgressBar>,
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
  customInfo?: TProgressBarCustomInfo;
  /** Custom icon for progress info */
  icon?: IconProps['children'];
  /** The type of the progress bar: standard or circular */
  type?: TProgressBarType;
}

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
  type = 'standard',
  ...nativeProps
}) => {
  const helperId = id ? `${id}-progress-helper` : null;
  const evalPercent = getPercent({ percent, status });
  const evalStatus = getStatus({ percent, status });
  const withCustomInfo = showStatus && hasCustomInfo(customInfo);
  return (
    <ProgressBarContainer
      {...nativeProps}
      colorScheme={colorScheme}
      id={id}
      percent={evalPercent}
      size={size}
      status={evalStatus}
      styles={styles}
      type={type}
      withCustomInfo={withCustomInfo}
    >
      <ProgressBarInnerContainer type={type}>
        {(type === 'standard' || !type) && (
          <ProgressBarStandardBar
            animated={animated}
            aria-errormessage={status === 'error' ? helperId : null}
            aria-invalid={status === 'error'}
            aria-valuenow={indeterminate ? null : evalPercent}
            colorScheme={colorScheme}
            indeterminate={indeterminate}
            percent={evalPercent}
            role="progressbar"
            status={evalStatus}
            showStatus={showStatus}
            size={size}
          />
        )}
        {type === 'circular' && (
          <ProgressBarCircularBar
            aria-errormessage={status === 'error' ? helperId : null}
            aria-invalid={status === 'error'}
            aria-valuenow={indeterminate ? null : evalPercent}
            colorScheme={colorScheme}
            indeterminate={indeterminate}
            percent={evalPercent}
            role="progressbar"
            showStatus={showStatus}
            size={size}
            status={evalStatus}
          />
        )}
        {showStatus && (
          <ProgressBarInfo
            floatingStatusHelperTooltip={floatingStatusHelperTooltip}
            floatingStatusHelperId={helperId}
            hasFloatingStatusHelper={hasFloatingStatusHelper}
            icon={getIcon({ type, icon, percent, status })}
            percent={evalPercent}
            size={size}
            status={evalStatus}
            statusHelper={statusHelper}
            type={type}
          />
        )}
      </ProgressBarInnerContainer>
      {showStatus && hasCustomInfo(customInfo) && (
        <ProgressBarCustomInfo
          endInfo={customInfo.endInfo}
          size={size}
          status={evalStatus}
          startInfo={customInfo.startInfo}
        />
      )}
      {showStatus && statusHelper && !hasFloatingStatusHelper && (
        <Flex justifyContent="center">
          <ProgressBarHelper
            id={helperId}
            size={size}
            status={evalStatus}
            statusHelper={statusHelper}
          />
        </Flex>
      )}
    </ProgressBarContainer>
  );
};

export const ProgressBar = InternalProgressBar as typeof InternalProgressBar & {
  _Container: typeof ProgressBarContainer;
  _CustomInfo: typeof ProgressBarCustomInfo;
  _Helper: typeof ProgressBarHelper;
  _Info: typeof ProgressBarInfo;
  _InnerContainer: typeof ProgressBarInnerContainer;
  _StandardBar: typeof ProgressBarStandardBar;
  _CircularBar: typeof ProgressBarCircularBar;
};

ProgressBar._Container = ProgressBarContainer;
ProgressBar._CustomInfo = ProgressBarCustomInfo;
ProgressBar._Helper = ProgressBarHelper;
ProgressBar._Info = ProgressBarInfo;
ProgressBar._InnerContainer = ProgressBarInnerContainer;
ProgressBar._StandardBar = ProgressBarStandardBar;
ProgressBar._CircularBar = ProgressBarCircularBar;

InternalProgressBar.displayName = 'ProgressBar';

ProgressBar._Container.displayName = 'ProgressBar._Container';
ProgressBar._CustomInfo.displayName = 'ProgressBar._CustomInfo';
ProgressBar._Helper.displayName = 'ProgressBar._Helper';
ProgressBar._Info.displayName = 'ProgressBar._Info';
ProgressBar._InnerContainer.displayName = 'ProgressBar._InnerContainer';
ProgressBar._StandardBar.displayName = 'ProgressBar._StandardBar';
ProgressBar._CircularBar.displayName = 'ProgressBar._CircularBar';
