import React from 'react';

import { Box } from '@strapi/design-system/Box';
import { Button } from '@strapi/design-system/Button';
import { BaseHeaderLayout } from '@strapi/design-system/Layout';

import { useIntl } from 'react-intl';
import getTrad from '../../../utils/getTrad';

import Equalizer from '@strapi/icons/Equalizer';

const Header = () => {
  const { formatMessage } = useIntl();
  return (
    <Box background="neutral100">
      <BaseHeaderLayout
        title={formatMessage({
          id: getTrad('ExportPage.header.title'),
          defaultMessage: 'SEO',
        })}
        subtitle={formatMessage({
          id: getTrad('ExportPage.header.subtitle'),
          defaultMessage: 'Optimize your content to be SEO friendly',
        })}
        as="h2"
      />
    </Box>
  );
};

export default Header;
