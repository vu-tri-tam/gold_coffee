import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const setupModalConfirm = createAsyncThunk(
    'confirm/setupModalConfirm',
    async (options, { dispatch }) => {
        dispatch(setConfirm(options));
        return new Promise((resolve, reject) => {
            dispatch(beforeResolve(resolve));
            dispatch(beforeReject(reject));
        });
    }
);

const ConfirmSlice = createSlice({
    name: 'confirm',
    initialState: {
        status: false,
        options: {
            status: false,
            type: '',
            title: '',
            icon: '',
            text: '',
        },
        resolvePromise: null,
        rejectPromise: null,
    },
    reducers: {
        setConfirm: (state, { payload }) => {
            let obj = {
                ...payload,
                dangerMode: payload?.dangerMode,
            };
            let options = { ...state.options, ...obj };
            state.options = options;
        },
        beforeResolve: (state, { payload }) => {
            state.resolvePromise = payload;
        },
        beforeReject: (state, { payload }) => {
            state.rejectPromise = payload;
        },
        dispatchResolve: (state, { payload }) => {
            state.resolvePromise(payload);
            state.options.status = false;
        },
        dispatchReject: (state, { payload }) => {
            state.rejectPromise(payload);
            state.options.status = false;
        },
    },
});

let { actions, reducer } = ConfirmSlice;

export const {
    setConfirm,
    beforeResolve,
    beforeReject,
    dispatchResolve,
    dispatchReject,
} = actions;

export default reducer;
