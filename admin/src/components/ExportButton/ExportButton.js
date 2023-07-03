import { Button } from '@strapi/design-system/Button';
import { CheckPermissions } from '@strapi/helper-plugin';
import Download from '@strapi/icons/Download';
import React from 'react';
import { useIntl } from 'react-intl';
import useContentTypeFilters from '../../hooks/useContentTypeFilters';
import useContentTypeSlug from '../../hooks/useContentTypeSlug';
import useExportContentType from '../../hooks/useExportContentType';
import pluginPermissions from '../../permissions';
import getTrad from '../../utils/getTrad';

const ExportButton = () => {
    const { formatMessage } = useIntl();
    const contentType = useContentTypeSlug();
    const { downloadExportFile } = useExportContentType();
    const filters = useContentTypeFilters();

    if (contentType === '') {
        return null;
    }

    return (
        <CheckPermissions permissions={pluginPermissions.main}>
            <Button
                onClick={() => downloadExportFile(contentType, filters)}
                startIcon={<Download />}
                variant="secondary"
            >
                {formatMessage({ id: getTrad('ExportPage.export_verb') })}
            </Button>
        </CheckPermissions>
    );
};

export default ExportButton;
