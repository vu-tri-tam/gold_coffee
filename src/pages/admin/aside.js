import React from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from "react-pro-sidebar";
import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart
} from "react-icons/fa";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
    return (
        <ProSidebar
            image={false}
            rtl={rtl}
            collapsed={collapsed}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: "24px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: 14,
                        letterSpacing: "1px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}
                >
                    Gold_Cofee
                </div>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red">new</span>}
                    >
                        Dashboard
                    </MenuItem>
                    <MenuItem icon={<FaGem />}>Product</MenuItem>
                    <SubMenu
                        suffix={<span className="badge yellow">3</span>}
                        title="withSuffix"
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>submenu 1</MenuItem>
                        <MenuItem>submenu 2</MenuItem>
                        <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu
                        title="manager Product"
                        icon={<FaHeart />}
                    >
                        <MenuItem>submenu 1</MenuItem>
                        <MenuItem>submenu 2</MenuItem>
                        <MenuItem>submenu 3</MenuItem>
                    </SubMenu>
                </Menu>

            </SidebarContent>

            <SidebarFooter style={{ textAlign: "center" }}>

            </SidebarFooter>
        </ProSidebar>
    );
};

export default Aside;
