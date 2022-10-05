
import React, { useState } from 'react'
// import { FaBars } from 'react-icons/fa';
import Aside from './admin/aside';
import Main from './admin/main';


export default function Admin_Page() {
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(true);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <>
            <div className={`app ${toggled ? 'toggled' : ''}`}>
                <Aside
                    image={image}
                    collapsed={collapsed}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                />
                <Main
                    image={image}
                    toggled={toggled}
                    collapsed={collapsed}

                    handleToggleSidebar={handleToggleSidebar}
                    handleCollapsedChange={handleCollapsedChange}
                    handleImageChange={handleImageChange}
                />

            </div>

        </>
    )
}
