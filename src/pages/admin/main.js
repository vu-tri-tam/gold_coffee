import React from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import { BsBell } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserLogin } from '../../features/login/loginSlice';
import { Avatar, Menu, Popover } from 'antd';
import BarChart from './chart/barChart';
import LineChart from './chart/lineChart';
// import reactLogo from './assets/logo.svg';

const Main = ({
    collapsed,
    rtl,
    image,
    handleToggleSidebar,
    handleCollapsedChange,
    handleRtlChange,
    handleImageChange,
}) => {
    const user = useSelector(state => state?.login?.user)
    const dispatch = useDispatch()
    // useEffect(async () => {
    //     // const data = await dispatch(fetchUserLogin())
    //     // console.log(data);
    // }, [])
    const menu = () => {
        return <Menu>
            <Menu.Item>Tài khoản</Menu.Item>
            <Menu.Item>Đăng ký</Menu.Item>
            <Menu.Item>Đăng Nhập</Menu.Item>

        </Menu>;
    }

    return (
        <main>

            <header >
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>
                <div className="user-box">
                    <BsBell style={{ fontSize: '20' }} />
                    <div className='m-0'>{user?.userName}</div>
                    <Popover
                        content={menu}
                        title="Tùy chọn"
                        trigger="click"
                        placement="leftBottom"
                    >
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                        // icon={< />}
                        />
                    </Popover>

                </div>
            </header>
            <main>
                <div className='md:flex flex items-center justify-between sm:flex-col md:flex-row 2md:flex-row gap-1 sm:gap-2'>
                    <div className="md:w-80 bg-slate-100 flex items-center justify-evenly h-28 sm:w-full rounded">ádasdasdasd</div>
                    <div className="md:w-80 bg-slate-100 flex items-center justify-evenly h-28 sm:w-full rounded">ádasdasdasd</div>
                    <div className="md:w-80 bg-slate-100 flex items-center justify-evenly h-28 sm:w-full rounded">ádasdasdasd</div>
                </div>
                <div className='flex w-full justify-between sm:w-full sm:flex-col md:flex-row'>
                    <div className='w-6/12 sm:w-full'>
                        <BarChart className="w-full" />

                    </div>
                    <div className='w-6/12 sm:w-full'>
                        <LineChart />

                    </div>
                </div>
            </main>


            <footer>
                assssssssssssssssssssssss
            </footer>
        </main>
    );
};

export default Main;