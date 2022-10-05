import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    asyncGetList,
    asyncWrapper,
} from '../../helper/asyncHelper';
import axiosClient from '../../api/axiosClient';

//fetch post 
const createPost = (options) => {
    let url = `api/url`;
    return axiosClient.post(url, options);
};
export const fetchCreatePost = createAsyncThunk(
    'api/fetchCreatePost',
    async (options) => {
        let res = await asyncWrapper(createPost, options, 'Tạo mới thành công');
        return res;
    }
);




// fetch get
const getList = (options) => {
    let url = `api/url`;
    return axiosClient.get(url, options);
};
export const fetchList = createAsyncThunk(
    'api/fetchList',
    async (options) => {
        let res = await asyncGetList(getList, options);
        return res;
    }
);


// fetch update
//API 
const updateList = (options) => {
    const { id, data } = options
    let url = `api/url/${id}`;
    return axiosClient.put(url, data);
};
export const fetchUpdate = createAsyncThunk(
    'api/fetchUpdate',
    async (options) => {
        let res = await asyncWrapper(updateList, options, 'Cập nhật thành công');
        return res;
    }
);

///fetch delete
const deleteRequest = (options) => {
    let url = `api/url`;
    return axiosClient.delete(url, {
        params: {
            option_1: options.option_1,
            option_2: options.option_2,
        },
    });
};
export const fetchDelete = createAsyncThunk(
    'api/fetchDelete',
    async (options) => {
        let res = await asyncWrapper(deleteRequest, options, 'Xóa thành công');
        return res;
    }
);


const exampleSlice = createSlice({
    name: 'home',
    initialState: {
        type_modal: '0', // 0: options 0 trong menu dropdown client, 1: ...
        list_post: []
    },
    reducers: {
        setModal(state, { payload }) {
            state.type_modal = payload;
        },

    },
    extraReducers: {
        [fetchList.fulfilled]: (state, { payload }) => {
            state.list_post = payload?.data;
        },
    },
});

const { reducer, actions } = exampleSlice;

export const {
    setModal
} = actions;

export default reducer;
