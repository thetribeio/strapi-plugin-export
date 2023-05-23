/*
 *
 * HomePage
 *
 */

import React, {useState, useEffect, useRef} from 'react';
import {Box} from '@strapi/design-system/Box';
import {
  LoadingIndicatorPage,
  // ContentBox,
  // useAutoReloadOverlayBlocker,
} from '@strapi/helper-plugin';
import Header from '../../components/HomePage/Header/header';
import Info from '../../components/HomePage/Main/info';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import {fetchContentTypes} from "../../utils/api";

const HomePage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const contentTypes = useRef({});

  useEffect(async () => {
    contentTypes.current = await fetchContentTypes();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingIndicatorPage />;
  }

  return (
    <>
      <Header />
      <Info contentTypes={contentTypes.current}></Info>
    </>
  );
};

export default HomePage;
