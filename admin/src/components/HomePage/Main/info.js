import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { Flex } from '@strapi/design-system/Flex';
import { LinkButton } from '@strapi/design-system/LinkButton';
import { Table, Tbody, Td, Th, Thead, Tr } from '@strapi/design-system/Table';
import { Tab, TabGroup, TabPanel, TabPanels, Tabs } from '@strapi/design-system/Tabs';
import { Typography } from '@strapi/design-system/Typography';
import Plus from '@strapi/icons/Plus';
import _ from 'lodash';
import { array } from 'prop-types';
import React from 'react';
import { useIntl } from 'react-intl';
import useExportContentType from '../../../hooks/useExportContentType';
import getTrad from '../../../utils/getTrad';
import Illo from './EmptyComponentLayout/illo';

const Main = ({ contentTypes }) => {
    const { formatMessage } = useIntl();
    const { downloadExportFile } = useExportContentType();

    return (
        <Box padding={8}>
            <TabGroup id="tabs" label="label" variant="simple">
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
                                {contentTypes
                  && contentTypes.collectionTypes
                  && !_.isEmpty(contentTypes.collectionTypes) ? (
                                        contentTypes.collectionTypes.map((item) => (
                                            <Tr key={item.uid}>
                                                <Td>
                                                    <Typography textColor="neutral800">
                                                        {item.globalId}
                                                    </Typography>
                                                </Td>
                                                <Td>
                                                    <Flex alignItems="right" justifyContent="right">
                                                        <Button
                                                            onClick={() => downloadExportFile(item.uid)}
                                                        >
                                                            {formatMessage({
                                                                id: getTrad('ExportData.export_verb'),
                                                                defaultMessage: 'Export',
                                                            })}
                                                        </Button>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                        ))
                                    ) : (
                                        <Box background="neutral0" padding={8}>
                                            <EmptyStateLayout
                                                action={(
                                                    <LinkButton
                                                        startIcon={<Plus />}
                                                        to="/plugins/content-type-builder"
                                                        variant="secondary"
                                                    >
                                                        {formatMessage({
                                                            id: getTrad(
                                                                'ExportPage.info.create-collection-type',
                                                            ),
                                                            defaultMessage:
                                'Create your first collection-type',
                                                        })}
                                                    </LinkButton>
                                                )}
                                                content={formatMessage({
                                                    id: getTrad('ExportPage.info.no-collection-types'),
                                                    defaultMessage:
                            "You don't have any collection-types yet...",
                                                })}
                                                icon={<Illo />}
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
                                {contentTypes
                  && contentTypes.singleTypes
                  && !_.isEmpty(contentTypes.singleTypes) ? (
                                        contentTypes.singleTypes.map((item) => (
                                            <Tr key={item.uid}>
                                                <Td>
                                                    <Typography textColor="neutral800">
                                                        {item.globalId}
                                                    </Typography>
                                                </Td>
                                                <Td>
                                                    <Flex alignItems="right" justifyContent="right">
                                                        <Button onClick={() => downloadExportFile(item.uid)}>
                                                            {formatMessage({
                                                                id: getTrad('ExportData.export_verb'),
                                                                defaultMessage: 'Export',
                                                            })}
                                                        </Button>
                                                    </Flex>
                                                </Td>
                                            </Tr>
                                        ))
                                    ) : (
                                        <Box background="neutral0" padding={8}>
                                            <EmptyStateLayout
                                                action={(
                                                    <LinkButton
                                                        startIcon={<Plus />}
                                                        to="/plugins/content-type-builder"
                                                        variant="secondary"
                                                    >
                                                        {formatMessage({
                                                            id: getTrad(
                                                                'ExportPage.info.create-single-type',
                                                            ),
                                                            defaultMessage:
                                'Create your first single-type',
                                                        })}
                                                    </LinkButton>
                                                )}
                                                content={formatMessage({
                                                    id: getTrad('ExportPage.info.no-single-types'),
                                                    defaultMessage:
                            "You don't have any single-types yet...",
                                                })}
                                                icon={<Illo />}
                                            />
                                        </Box>
                                    )}
                            </Tbody>
                        </Table>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Box>
    );
};

Main.propTypes = {
    contentTypes: {
        singleTypes: array,
        collectionTypes: array,
    },
};
export default Main;
