import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import FlashcardDashboardPage from '../components/FlashcardDashboardPage';
import AddFlashcardPage from '../components/AddFlashcardPage';
import EditFlashcardPage from '../components/EditFlashcardPage';
import NotFoundPage from '../components/NotFoundPage';
import FlashcardBoardPage from '../components/FlashcardBoardPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/flashcarddashboard" component={FlashcardDashboardPage} />
            <PrivateRoute path="/create" component={AddFlashcardPage}/>
            <PrivateRoute path="/edit/:id" component={EditFlashcardPage}/>
            <PrivateRoute path="/board/:id" component={FlashcardBoardPage}/>
            <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
