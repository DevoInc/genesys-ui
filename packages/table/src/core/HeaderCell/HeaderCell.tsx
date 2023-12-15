import React from 'react';

import { ColDef } from '../../declarations';

import {
  Button,
  Form,
  HFlex,
  IconButton,
  InputControl,
  Panel,
  Popper,
  SelectControl,
  Typography,
} from '@devoinc/genesys-ui';

import { StyledHeaderCell } from './StyledHeaderCell';
import { TableContext } from '../Table/context';
import { StyledHeaderCellResizer } from './StyledHeaderCellResizer';
import { Checkbox, CheckboxGroup } from '@devoinc/genesys-ui-form';

interface HeaderCellProps {
  colDef: ColDef;
  isFilterCell?: boolean;
  width: React.CSSProperties['width'];
  offsetX: number;
}

export const HeaderCell: React.FC<HeaderCellProps> = ({
  colDef,
  isFilterCell,
  width,
  offsetX,
}) => {
  const { sizes, visualOptions } = React.useContext(TableContext);
  const resizable = colDef?.resizable ?? visualOptions?.resizableColumns;
  const [isVisible, setIsVisible] = React.useState(false);
  const colType = colDef.type;
  return (
    <StyledHeaderCell
      $width={width}
      horAlign={
        colDef?.cellStyle?.align?.horizontal || colDef.type === 'number'
          ? 'right'
          : null
      }
      resizable={visualOptions.resizableColumns ?? colDef?.resizable}
      offsetX={offsetX}
      paddingHor={`${sizes.cell.horPad}px`}
      paddingVer={`${sizes.cell.verPad}px`}
      title={colDef.headerName}
    >
      {isFilterCell ? (
        <HFlex spacing="cmp-xxs" flex="1 1 auto">
          <HFlex.Item flex="1 1 auto">
            {colType === 'text' ||
            colType === 'number' ||
            colType === 'link' ||
            colType === 'date' ||
            !colType ? (
              <InputControl
                size="sm"
                aria-label="filter"
                placeholder="Filter content..."
              />
            ) : colType === 'tag' || colType === 'tags' ? (
              <SelectControl
                size="sm"
                placeholder="Filters..."
                styles="flex: 1;"
              />
            ) : colType === 'tagBoolean' ? (
              <SelectControl
                menuAppendToBody
                defaultInputValue={'All'}
                options={[
                  { value: 1, label: 'All' },
                  { value: 2, label: 'True' },
                  { value: 3, label: 'False' },
                ]}
              />
            ) : null}
          </HFlex.Item>
          {colType !== 'tagBoolean' && (
            <HFlex.Item flex="0 0 auto">
              <Popper
                visible={isVisible}
                setIsVisible={setIsVisible}
                placement={'top-end'}
                trigger={
                  <IconButton
                    icon="gi-filter"
                    size="sm"
                    colorScheme="quiet"
                    aria-expanded={isVisible}
                    aria-controls="story-id"
                    aria-haspopup="true"
                  />
                }
              >
                <Panel
                  maxHeight="34rem"
                  bodySettings={{
                    removeSpace: true,
                  }}
                  elevation="activated"
                  size="sm"
                  id="story-id"
                  width={colType === 'number' ? '20rem' : '28rem'}
                  footerSettings={{
                    actions: [
                      <Button key={1} size="sm" colorScheme="accent">
                        Reset
                      </Button>,
                    ],
                  }}
                  headerSettings={{
                    renderContent:
                      colType === 'tag' ? (
                        <InputControl
                          aria-label="Filter this options"
                          placeholder="Filter options..."
                          type="search"
                        />
                      ) : null,
                  }}
                >
                  <Form padding="cmp-sm">
                    {colType === 'text' ? (
                      <>
                        <SelectControl
                          menuAppendToBody
                          defaultInputValue={'Contains'}
                          options={[
                            { value: 1, label: 'Contains' },
                            { value: 2, label: 'Does not contain' },
                            { value: 3, label: 'Equals to' },
                            { value: 4, label: 'Does not equal to' },
                            { value: 5, label: 'Begins with' },
                            { value: 6, label: 'Ends with' },
                            { value: 7, label: 'Blank' },
                            { value: 8, label: 'Not blank' },
                          ]}
                        />
                        <InputControl
                          autoFocus
                          aria-label="Filter this column"
                          placeholder="Filter by text..."
                        />
                      </>
                    ) : colType === 'number' ? (
                      <>
                        <SelectControl
                          menuAppendToBody
                          defaultInputValue={'Equals to'}
                          options={[
                            { value: 1, label: 'Equals to' },
                            { value: 4, label: 'Does not equal to' },
                            { value: 3, label: 'Greater than' },
                            { value: 5, label: 'Greater than or equal to' },
                            { value: 6, label: 'Less than' },
                            { value: 7, label: 'Less than or equal to' },
                            { value: 8, label: 'Between' },
                            { value: 9, label: 'Blank' },
                            { value: 10, label: 'Not blank' },
                          ]}
                        />
                        <InputControl
                          autoFocus
                          aria-label="Filter this column"
                          placeholder="Filter by number..."
                          type="number"
                        />
                      </>
                    ) : colType === 'tag' ? (
                      <CheckboxGroup legend="Column filter options" hideLegend>
                        <Checkbox
                          label="[Select all]"
                          id="filter-all"
                          defaultChecked
                        />
                        <Checkbox
                          label="Done"
                          id="filter-done"
                          defaultChecked
                        />
                        <Checkbox
                          label="In progress"
                          id="filter-in-progress"
                          defaultChecked
                        />
                        <Checkbox
                          label="Test"
                          id="filter-test"
                          defaultChecked
                        />
                        <Checkbox
                          label="TODO"
                          id="filter-todo"
                          defaultChecked
                        />
                      </CheckboxGroup>
                    ) : null}
                  </Form>
                </Panel>
              </Popper>
            </HFlex.Item>
          )}
        </HFlex>
      ) : (
        <>
          <Typography.Heading size="h6" truncateLine={1}>
            {colDef.headerName}
          </Typography.Heading>
          {resizable && (
            <StyledHeaderCellResizer
              $height={`${sizes.head.height}px`}
              role="presentation"
              aria-hidden="false"
            />
          )}
        </>
      )}
    </StyledHeaderCell>
  );
};
