import React from 'react';
import { FaHeart, FaBars } from 'react-icons/fa';
import { BsBell } from 'react-icons/bs';
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

    return (
        <main>

            <header >
                <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                    <FaBars />
                </div>
                <div className="user-box">
                    <BsBell style={{ fontSize: '20' }} />
                    <div className='m-0'>Vũ Trí Tâm</div>
                    {/* <Popover
                        content={menu}
                        title="Tùy chọn"
                        trigger="click"
                        placement="leftBottom"
                    >
                        <Avatar
                            style={{
                                backgroundColor: '#87d068',
                            }}
                            icon={<UserOutlined />}
                        />
                    </Popover> */}

                </div>
            </header>


            <footer>
                assssssssssssssssssssssss
            </footer>
        </main>
    );
};

export default Main;