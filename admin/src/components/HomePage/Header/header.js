import { Box } from '@strapi/design-system/Box';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';
import React from 'react';
import { useIntl } from 'react-intl';
import getTrad from '../../../utils/getTrad';

const Header = () => {
    const { formatMessage } = useIntl();

    return (
        <Box background="neutral100">
            <BaseHeaderLayout
                as="h2"
                subtitle={formatMessage({
                    id: getTrad('ExportPage.header.subtitle'),
                    defaultMessage: 'Optimize your content to be SEO friendly',
                })}
                title={formatMessage({
                    id: getTrad('ExportPage.header.title'),
                    defaultMessage: 'SEO',
                })}
            />
        </Box>
    );
};

export default Header;
