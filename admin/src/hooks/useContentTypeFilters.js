import { pick } from 'lodash';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

const useContentTypeFilters = () => {
    const { search } = useLocation();

    return pick(qs.parse(search), ['filters', 'sort']);
};

export default useContentTypeFilters;
