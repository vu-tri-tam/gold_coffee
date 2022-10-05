import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadingSlice from '../features/loading/loadingSlice';
import loginSlice from '../features/login/loginSlice';
// import { connectRouter, routerMiddleware } from 'connected-react-router';

// import forgotSlice from 'features/ForgotPassword/forgotSlice';
// import { history } from '../utils';

const rootReducer = combineReducers({
    loading: loadingSlice,
    login: loginSlice

});

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
    reducer: rootReducer,
});
