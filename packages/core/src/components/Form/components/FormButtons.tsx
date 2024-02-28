import { GlobalAriaProps, GlobalAttrProps } from '../../../declarations';
import * as React from 'react';

import { Box } from '../../Box';
import { Flex, type FlexProps } from '../../Flex';
import { FormDistributor } from './FormDistributor';
import { formGroupSpacingMixin } from './helpers';
import { useTheme } from 'styled-components';

export interface FormButtonsProps
  extends GlobalAttrProps,
    GlobalAriaProps,
    Pick<FlexProps, 'alignItems' | 'marginTop' | 'marginLeft'> {
  /** If the buttons block is aligned to left or to right.*/
  buttonsPosition?: 'left' | 'right';
  /** The buttons block aligned to left or right.*/
  children: React.ReactNode;
  /** The component/s usually relative to help at the opposite side of the buttons: ActionGoToDocs, InlineMessage, Helper text... etc. */
  helper?: React.ReactNode;
}

export const FormButtons: React.FC<FormButtonsProps> = ({
  alignItems = 'center',
  children,
  buttonsPosition = 'right',
  helper,
  marginTop,
  marginLeft,
  ...nativeProps
}) => {
  const theme = useTheme();
  return (
    <Flex
      {...nativeProps}
      alignItems={alignItems}
      as={'div'}
      flexDirection={
        buttonsPosition === 'left' && helper ? 'row-reverse' : 'row'
      }
      justifyContent={buttonsPosition === 'left' ? 'flex-start' : 'flex-end'}
      marginTop={marginTop}
      marginLeft={marginLeft}
      gap="cmp-md"
      styles={formGroupSpacingMixin(theme)}
    >
      {helper && (
        <Box
          marginLeft={buttonsPosition === 'left' ? 'auto' : null}
          marginRight={buttonsPosition === 'right' ? 'auto' : null}
        >
          {helper}
        </Box>
      )}
      <FormDistributor itemsGap="xs" direction="row">
        {children}
      </FormDistributor>
    </Flex>
  );
};
