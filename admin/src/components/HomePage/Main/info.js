import React, { useState } from 'react';

import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { Button } from '@strapi/design-system/Button';
import { LinkButton } from '@strapi/design-system/LinkButton';
import { Typography } from '@strapi/design-system/Typography';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { Table, Thead, Tbody, Tr, Td, Th } from '@strapi/design-system/Table';
import { useIntl } from 'react-intl';
import getTrad from '../../../utils/getTrad';
import useExportContentType from '../../../hooks/useExportContentType';

import Plus from '@strapi/icons/Plus';

import { Illo } from './EmptyComponentLayout/illo';

import {
  Tabs,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
} from '@strapi/design-system/Tabs';

import _ from 'lodash';

const ContentTypesTable = () => {}


const Main = ({ contentTypes }) => {

  const { formatMessage } = useIntl();
  const {exportContentType} = useExportContentType();

  return (
    <>
      <Box padding={8}>
        <TabGroup label="label" id="tabs" variant="simple">
          <Tabs>
            <Tab>
              <Typography>
                {formatMessage({
                  id: getTrad('ExportPage.tab.collection-type-title'),
                  defaultMessage: 'Collection Types',
                })}
              </Typography>
            </Tab>
            <Tab>
              <Typography variant="omega">
                {formatMessage({
                  id: getTrad('ExportPage.tab.single-type-title'),
                  defaultMessage: 'Single Types',
                })}
              </Typography>
            </Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <Table
                colCount={2}
                rowCount={contentTypes.collectionTypes.length}
              >
                <Thead>
                  <Tr>
                    <Th>
                      <Typography variant="sigma">
                        {formatMessage({
                          id: getTrad('ExportPage.tab-panel.column-name'),
                          defaultMessage: 'Name',
                        })}
                      </Typography>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contentTypes &&
                  contentTypes.collectionTypes &&
                  !_.isEmpty(contentTypes.collectionTypes) ? (
                    contentTypes.collectionTypes.map((item) => (
                      <Tr key={item.uid}>
                        <Td>
                          <Typography textColor="neutral800">
                            {item.globalId}
                          </Typography>
                        </Td>
                        <Td>
                          <Flex justifyContent="right" alignItems="right">
                            <Button onClick={() => exportContentType(item.uid)}>{formatMessage({
                              id:getTrad('ExportData.export_verb'),
                              defaultMessage : 'Export'
                            })}</Button>
                          </Flex>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Box padding={8} background="neutral0">
                      <EmptyStateLayout
                        icon={<Illo />}
                        content={formatMessage({
                          id: getTrad('ExportPage.info.no-collection-types'),
                          defaultMessage:
                            "You don't have any collection-types yet...",
                        })}
                        action={
                          <LinkButton
                            to="/plugins/content-type-builder"
                            variant="secondary"
                            startIcon={<Plus />}
                          >
                            {formatMessage({
                              id: getTrad(
                                'ExportPage.info.create-collection-type'
                              ),
                              defaultMessage:
                                'Create your first collection-type',
                            })}
                          </LinkButton>
                        }
                      />
                    </Box>
                  )}
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table colCount={2} rowCount={contentTypes.singleTypes.length}>
                <Thead>
                  <Tr>
                    <Th>
                      <Typography variant="sigma">
                        {formatMessage({
                          id: getTrad('ExportPage.tab-panel.column-name'),
                          defaultMessage: 'Name',
                        })}
                      </Typography>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {contentTypes &&
                  contentTypes.singleTypes &&
                  !_.isEmpty(contentTypes.singleTypes) ? (
                    contentTypes.singleTypes.map((item) => (
                      <Tr key={item.uid}>
                        <Td>
                          <Typography textColor="neutral800">
                            {item.globalId}
                          </Typography>
                        </Td>
                        <Td>
                          <Flex justifyContent="right" alignItems="right">
                            <Button onClick={() => exportContentType(item.uid)}>
                              {formatMessage({
                                id:getTrad('ExportData.export_verb'),
                                defaultMessage : 'Export'
                              })}
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Box padding={8} background="neutral0">
                      <EmptyStateLayout
                        icon={<Illo />}
                        content={formatMessage({
                          id: getTrad('ExportPage.info.no-single-types'),
                          defaultMessage:
                            "You don't have any single-types yet...",
                        })}
                        action={
                          <LinkButton
                            to="/plugins/content-type-builder"
                            variant="secondary"
                            startIcon={<Plus />}
                          >
                            {formatMessage({
                              id: getTrad(
                                'ExportPage.info.create-single-type'
                              ),
                              defaultMessage:
                                'Create your first single-type',
                            })}
                          </LinkButton>
                        }
                      />
                    </Box>
                  )}
                </Tbody>
              </Table>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Box>
    </>
  );
};

export default Main;
