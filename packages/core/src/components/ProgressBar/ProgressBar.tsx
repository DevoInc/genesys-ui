import * as React from 'react';

import { Flex, Icon } from '../';
import { StyledIconProps } from '../Icon/StyledIcon';
import {
  BaseStyledProgressBarProps,
  StyledProgressBarCircular,
  StyledProgressBarCircularCircleInner,
  StyledProgressBarCircularSVG,
  StyledProgressBarContainer,
  StyledProgressBarCustomInfoText,
  StyledProgressBarInfo,
  StyledProgressBarPercent,
  StyledProgressBarStandard,
  StyledProgressBarWrapper,
} from './styled';
import { ProgressBarType } from './declarations';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  StyledPolymorphicProps,
} from '../../declarations';

const MAX_PERCENT = 100;
const COMPLETE_PROGRESS = 'complete';

const getProgress = ({ iconComplete, percent, progress }) =>
  iconComplete && percent >= MAX_PERCENT ? COMPLETE_PROGRESS : progress;

const getPercent = ({ iconComplete, percent, progress }) =>
  getProgress({ iconComplete, percent, progress }) === COMPLETE_PROGRESS
    ? MAX_PERCENT
    : percent > MAX_PERCENT
    ? MAX_PERCENT
    : percent;

const hasCustomInfo = (customInfo) =>
  customInfo && (customInfo.startInfo || customInfo.endInfo);

export interface ProgressBarProps
  extends Omit<GlobalAttrProps, 'role'>,
    GlobalAriaProps,
    StyledPolymorphicProps,
    Pick<
      Partial<BaseStyledProgressBarProps>,
      | 'wide'
      | 'colorScheme'
      | 'progress'
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
  /** Icon for progress status 'complete' */
  iconComplete?: StyledIconProps['iconId'];
  /** Icon for progress status 'error' */
  iconError?: StyledIconProps['iconId'];
  /** Icon for progress status 'progressing' */
  iconProgressing?: StyledIconProps['iconId'];
  /** Icon for progress status 'warning' */
  iconWarning?: StyledIconProps['iconId'];
  /** The type of the progress bar: standard or circular */
  type?: ProgressBarType;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  animated,
  colorScheme = 'dark',
  customInfo,
  iconComplete = 'check_thick',
  iconError = 'error_warning_danger_stop',
  iconProgressing,
  iconWarning = 'error_warning_alert_attention',
  indeterminate,
  percent,
  progress = 'progressing',
  showInfo,
  size = 'md',
  type = 'standard',
  wide = true,
  ...nativeProps
}) => {
  const icon =
    (progress === 'progressing' || !progress) && iconProgressing
      ? iconProgressing
      : getProgress({ iconComplete, percent, progress }) ===
          COMPLETE_PROGRESS && iconComplete
      ? iconComplete
      : progress === 'warning' && iconWarning
      ? iconWarning
      : progress === 'error' && iconError
      ? iconError
      : null;

  return (
    <StyledProgressBarContainer {...nativeProps} wide={wide}>
      <StyledProgressBarWrapper typeProp={type}>
        {(type === 'standard' || !type) && (
          <StyledProgressBarStandard
            role="progressbar"
            aria-valuenow={
              indeterminate
                ? null
                : getPercent({ iconComplete, percent, progress })
            }
            animated={animated}
            colorScheme={colorScheme}
            indeterminate={indeterminate}
            percent={getPercent({ iconComplete, percent, progress })}
            progress={getProgress({ iconComplete, percent, progress })}
            showInfo={showInfo}
            size={size}
          />
        )}
        {type === 'circular' && (
          <StyledProgressBarCircularSVG
            role="progressbar"
            aria-valuenow={
              indeterminate
                ? null
                : getPercent({ iconComplete, percent, progress })
            }
            indeterminate={indeterminate}
            percent={getPercent({ iconComplete, percent, progress })}
            progress={getProgress({ iconComplete, percent, progress })}
            showInfo={showInfo}
            size={size}
          >
            <StyledProgressBarCircular
              colorScheme={colorScheme}
              progress={progress}
              size={size}
            />
            <StyledProgressBarCircularCircleInner
              indeterminate={indeterminate}
              percent={getPercent({ iconComplete, percent, progress })}
              progress={getProgress({ iconComplete, percent, progress })}
              size={size}
            />
          </StyledProgressBarCircularSVG>
        )}
        {showInfo && !hasCustomInfo(customInfo) && (
          <StyledProgressBarInfo
            // percent={getPercent({ iconComplete, percent, progress })}
            colorScheme={colorScheme}
            progress={getProgress({ iconComplete, percent, progress })}
            size={size}
            typeProp={type}
          >
            {icon && <Icon iconId={icon} />}
            {!indeterminate && (
              <StyledProgressBarPercent
                progress={getProgress({ iconComplete, percent, progress })}
                size={size}
                typeProp={type}
              >
                {getPercent({ iconComplete, percent, progress })}%
              </StyledProgressBarPercent>
            )}
          </StyledProgressBarInfo>
        )}
      </StyledProgressBarWrapper>
      {showInfo && hasCustomInfo(customInfo) && (
        <Flex
          justifyContent={!customInfo?.startInfo ? 'flex-end' : 'space-between'}
          marginTop={size === 'sm' ? 'cmp-xs' : 'cmp-sm'}
        >
          {customInfo?.startInfo && (
            <Flex.Item>
              <StyledProgressBarCustomInfoText size={size} progress={progress}>
                {customInfo.startInfo}
              </StyledProgressBarCustomInfoText>
            </Flex.Item>
          )}
          {customInfo?.endInfo && (
            <Flex.Item>
              <StyledProgressBarCustomInfoText size={size} progress={progress}>
                {customInfo.endInfo}
              </StyledProgressBarCustomInfoText>
            </Flex.Item>
          )}
        </Flex>
      )}
    </StyledProgressBarContainer>
  );
};
