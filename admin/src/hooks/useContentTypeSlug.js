import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

const useContentTypeSlug = () => {
    const { pathname } = useLocation();

    const slug = useMemo(() => {
        const matches = pathname.match(/content-manager\/(collectionType|singleType)\/([a-zA-Z0-9\-:_.]*)/);

        return matches?.[2] ? matches[2] : '';
    }, [pathname]);

    return slug;
};

export default useContentTypeSlug;
