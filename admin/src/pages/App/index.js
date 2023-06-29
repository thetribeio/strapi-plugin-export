/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { AnErrorOccurred } from '@strapi/helper-plugin';
import { Switch, Route } from 'react-router-dom';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';

const App = () => (
    <div>
        <Switch>
            <Route component={HomePage} path={`/plugins/${pluginId}`} exact />
            <Route component={AnErrorOccurred} />
        </Switch>
    </div>
);

export default App;
