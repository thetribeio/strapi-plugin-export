import { Box } from '@strapi/design-system/Box';
import { EmptyStateLayout } from '@strapi/design-system/EmptyStateLayout';
import { useIntl } from 'react-intl';
import getTrad from '../../../../utils/getTrad';
import Illo from './illo';

const EmptyComponentLayout = () => {
    const { formatMessage } = useIntl();

    return (
        <Box background="neutral100" padding={8}>
            <EmptyStateLayout
                content={formatMessage({
                    id: getTrad('SEOPage.empty-component-layout.no-component'),
                    defaultMessage: "You don't have any SEO component yet",
                })}
                icon={<Illo />}
            />
        </Box>
    );
};

export default EmptyComponentLayout;
