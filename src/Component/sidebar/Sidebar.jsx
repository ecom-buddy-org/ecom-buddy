import React, { useState } from 'react'
import Dashboard from '@mui/icons-material/Dashboard';
import Inventory from '@mui/icons-material/Inventory';
import ProfileIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/MeetingRoom';
import HamburgerIcon from '@mui/icons-material/Menu';
import style from '../sidebar/sidebar.module.scss'
import ecomLogo from '../../Images/Logo.png'
import { useNavigate, Link } from 'react-router-dom';

function Sidebar() {
    const history = useNavigate();

    const { sidebarMain, sidebarLogo, menuItem, menus, header, hamburgerToggle, activeMenu, hidden, collapsed } = style;
    const [activeMenuItem, setActiveMenuItem] = useState(1);
    const [isHamburgerActive, setisHamburgetActive] = useState(false);
    const [sidebarMenus, setSidebarMenu] = useState([
        {
            id: 1,
            name: "Dashboard",
            route: "/dashboard",
            icon: <Dashboard />,
            isActive: activeMenuItem === 1
        },
        {
            id: 2,
            name: "Blackbox",
            route: "/blackbox",
            icon: <Inventory />,
            isActive: activeMenuItem === 2
        },
        {
            id: 3,
            name: "Profile",
            route: "/mainprofile",
            icon: <ProfileIcon />,
            isActive: activeMenuItem === 3
        },
        {
            id: 4,
            name: "Logout",
            route: "/logout",
            icon: <LogoutIcon />,
            isActive: activeMenuItem === 4
        }
    ]);
    function navigateTo(route) {
        history(`/${route}`);
    }
    
    function menuItemPressed(id) {
        if (id === 4) {
            // logout
            navigateTo('login');
        } else {
            setSidebarMenu((state) => {
            return sidebarMenus.map((element) => { 
                element.isActive=element.id === id
                return element
                    });
            })
        }

    }

    function toggleDrawer() {
        setisHamburgetActive(!isHamburgerActive);
    }

    function MenuItemDesign(element) {
        return <div className={element.isActive ? `${menuItem} ${activeMenu}` : menuItem} onClick={() => menuItemPressed(element.id)}>
            <i>{element.icon}</i>
            <p className={isHamburgerActive ? hidden : ''}>{element.name}</p>
        </div>;
    }
    
    return (
        <>
            <div className={isHamburgerActive ? `${sidebarMain} ${collapsed}` : sidebarMain}>
                <div className={header}>
                    {isHamburgerActive ? <div style={{marginTop: '75px'}}></div> : null}
                    <i className={hamburgerToggle} onClick={() => toggleDrawer()}><HamburgerIcon /></i>
                    <img src={ecomLogo} className={isHamburgerActive ? `${sidebarLogo} ${hidden}` : sidebarLogo} alt="EcomBuddy Logo" />
                </div>
                <div className={menus}>
                    {sidebarMenus.map(element => {
                        return (element.route === "/logout") ? MenuItemDesign(element) : <Link to={element.route}>{MenuItemDesign(element)}</Link>;
                    })}
                </div>
            </div>
        </>
    );
}

export default Sidebar;