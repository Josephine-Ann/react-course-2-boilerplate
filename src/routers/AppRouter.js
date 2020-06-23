import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import FlashcardDashboardPage from '../components/FlashcardDashboardPage';
import AddFlashcardPage from '../components/AddFlashcardPage';
import EditFlashcardPage from '../components/EditFlashcardPage';
import NotFoundPage from '../components/NotFoundPage';
import FlashcardBoardPage from '../components/FlashcardBoardPage';
import FlashcardsUniversalBoardPage from '../components/FlashcardsUniversalBoardPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import UniversalDashboardPage from '../components/UniversalDashboardPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/flashcarddashboard" component={FlashcardDashboardPage} />
            <PrivateRoute path="/universaldashboardpage" component={UniversalDashboardPage} />
            <PrivateRoute path="/create" component={AddFlashcardPage}/>
            <PrivateRoute path="/edit/:id" component={EditFlashcardPage}/>
            <PrivateRoute path="/board/:id" component={FlashcardBoardPage}/>
            <PrivateRoute path="/universalboard/:id" component={FlashcardsUniversalBoardPage}/>
            <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
