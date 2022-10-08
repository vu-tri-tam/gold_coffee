import toast from './notifications'
import { hide, show } from '../features/loading/loadingSlice';

// hide loading
export const asyncGetList = async (func, params = null) => {
    try {
        const res = await func(params);
        if (res.data.success) {
            return res.data;
        }
    } catch (e) {
        let errors = e?.response ? e.response.data : e;
        if ('errors' in errors)
            Object.values(errors.errors).forEach(function (error) {
                toast.error(`⚠ ${error[0]}`);
            });
        else
            toast.error(`⚠ ${'message' in errors ? errors.message : ''}`);
        return errors;
    }
};

// show loading
export const asyncWrapper = async (func, params = null, notification) => {

    try {
        show();
        const res = await func(params);
        if (!res.data.success) {
            toast.error(`⚠ ${res.data.message}`, notification);
        }
        hide();
        return res.data;
    } catch (e) {
        hide();
        let errors = e?.response ? e.response.data : e;
        if ('errors' in errors) {
            Object.values(errors.errors).forEach(function (error) {
                toast.error(`⚠ ${error[0]}`, notification);
            });
        } else {
            toast.error(`⚠ ${'message' in errors ? errors.message : ''}`, notification);
        }
        return errors;
    }
};



