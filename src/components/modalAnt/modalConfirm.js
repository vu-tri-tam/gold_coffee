import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispatchResolve, dispatchReject } from '../../features/modal/modalSlice';

const ModalConfirmAnt = () => {
    let dispatch = useDispatch();

    const options = useSelector((state) => state.confirm.options);
    const [content, setContent] = useState({});

    useEffect(() => {
        setContent((state) => ({ ...state, ...options }));
        let objectContent = {};
        switch (options?.type) {
            case 'delete':
                objectContent = {
                    title: 'Chắc chắn xóa',
                    text: 'Sau khi xóa, bạn sẽ không thể khôi phục lại dữ liệu!',
                    icon: 'warning',
                    dangerMode: true,
                };
                setContent({ ...options, ...objectContent });
                return;
            case 'add':
                objectContent = {
                    title: 'Chắc chắn thêm mới',
                    text: 'Bạn có chắc chắn muốn thêm mới dữ liệu này!',
                    icon: 'warning',
                    dangerMode: false,
                };
                setContent({ ...options, ...objectContent });
                return;
            case 'update':
                objectContent = {
                    title: 'Chắc chắn thay đổi',
                    text: 'Bạn có chắc chắn muốn thay đổi dữ liệu này!',
                    icon: 'warning',
                    dangerMode: false,
                };
                setContent({ ...options, ...objectContent });
                return;
            default:
                return;
        }
    }, [options]);

    return (
        <Modal
            title={content.title}
            visible={options?.status}
            onOk={() => dispatch(dispatchResolve(true))}
            onCancel={() => dispatch(dispatchReject(false))}
            okText='Đồng ý'
            cancelText='Hủy bỏ'
            destroyOnClose
            okButtonProps={{ danger: content?.dangerMode }}
        >
            <p>{content.text}</p>
        </Modal>
    );
};

export default ModalConfirmAnt;
