/*
 *
 * HomePage
 *
 */

import { LoadingIndicatorPage } from '@strapi/helper-plugin';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../../components/HomePage/Header/header';
import Info from '../../components/HomePage/Main/info';
import { fetchContentTypes } from '../../utils/api';

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const contentTypes = useRef({});

    useEffect(() => {
        const loadContentTypes = async () => {
            contentTypes.current = await fetchContentTypes();
            setIsLoading(false);
        };
        loadContentTypes();
    }, []);

    if (isLoading) {
        return <LoadingIndicatorPage />;
    }

    return (
        <>
            <Header />
            <Info contentTypes={contentTypes.current} />
        </>
    );
};

export default HomePage;
