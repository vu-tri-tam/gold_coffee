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




const loginSlice = createSlice({
    name: 'login',
    initialState: {
        userName: '', // 0: options 0 trong menu dropdown client, 1: ...
        passWord: ''
    },
    user: {},
    reducers: {
        login(state, { payload }) {
            state.userName = payload.userName;
            state.passWordad = payload.passWord;
        },
        logOut(state) {
            state.login = {};
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
