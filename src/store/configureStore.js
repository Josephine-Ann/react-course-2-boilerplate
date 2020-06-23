import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import flashcardsReducer from '../reducers/flashcards';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import flashcardsuniversalReducer from '../reducers/flashcardsuniversal';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            flashcardsuniversal: flashcardsuniversalReducer,
            flashcards: flashcardsReducer,
            filters: filtersReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        );
        
    return store;
}
