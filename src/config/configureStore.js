
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
// import { rememberReducer, rememberEnhancer } from 'redux-remember';
import reduxThunk from 'redux-thunk';

import reducers from '../reducers';

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const middleWares = process.env.NODE_ENV === 'development'
  ? composeEnhancers(
    applyMiddleware(reduxThunk),
  )
  : compose(applyMiddleware(reduxThunk));


export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,
      form: reduxFormReducer
    }),
    middleWares,
  );
}

