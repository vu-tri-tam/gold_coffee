import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from '../features/loading/loadingSlice';
import exampleSlice from '../features/example/exampleSlice';
// import { connectRouter, routerMiddleware } from 'connected-react-router';

// import forgotSlice from 'features/ForgotPassword/forgotSlice';
// import { history } from '../utils';

const rootReducer = combineReducers({
    loading: loadingSlice,
    example: exampleSlice

});

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    reducer: rootReducer,
});
