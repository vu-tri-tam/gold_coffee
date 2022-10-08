import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    asyncGetList,
    asyncWrapper,
} from '../../helper/asyncHelper';
import axiosClient from '../../api/axiosClient';

// fetch get user login
const getUser = (options) => {
    let url = `api/url`;
    return axiosClient.get(url, options);
};

export const fetchUserLogin = createAsyncThunk(
    'api/fetchList',
    async (options) => {
        let res = await asyncGetList(getUser, options);
        return res;
    }
);

// fetch get user login
const postUser = (options) => {
    let url = `/api/auth/login`;
    return axiosClient.post(url, options);
};

export const fetchPostLogin = createAsyncThunk(
    'api/fetchPostLogin',
    async (options) => {
        let res = await asyncGetList(postUser, options);
        return res

    }
);

const loginSlice = createSlice({
    name: 'login',
    initialState: {
    },
    reducers: {
        login(state, { payload }) {
            state.user = payload;
        },
        logOut(state) {
            state.user = {};
        },

    },
    extraReducers: {
        [fetchUserLogin.fulfilled]: (state, { payload }) => {
            state.user = payload?.data;
        },
    },
});
const { reducer, actions } = loginSlice;
export const {
    login,
    logOut
} = actions;

export default reducer;
