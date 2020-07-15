import React, { Fragment, Component } from "react";
import { Layout, Menu, Button } from 'antd';
import { MobileOutlined, MailOutlined, GlobalOutlined, AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import Logo from '../../sources/Capture.PNG';
import NavItem from './NavItem';
import { NavLink } from 'react-router-dom';
import './nav.css'
const { Header } = Layout;
class Nav extends Component {
    state = {
        subMenu: [[{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }]],
        mainmenu: [[{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],
        [{ itemKey: "1" }, { itemIcon: <GlobalOutlined /> }, { itemId: "" }, { itemText: "ENGLISH" }],]
    }
    render() {
        return (
            <Fragment>
                <Header id="baseHeder">
                    <div className="logo" style={{ float: 'right' }}>
                        <img src={Logo} style={{ height: '100%' }} />
                    </div>
                    
                    {/*{ this.state.subMenu.map((item,i)=>{return(<Fragment>
                        <NavItem ItemContent={item}/>
                    </Fragment>)})}
                    */}
                    <Menu id="subMenu" mode="horizontal" defaultSelectedKeys={['3']}>
                        <Menu.Item key="4" id="store" ><a><AppleOutlined /></a><a><AndroidOutlined /></a>حمل التطبيق الان</Menu.Item>
                        <Menu.Item key="1" icon={<GlobalOutlined />}> ENGLISH</Menu.Item>
                        <Menu.Item key="2" icon={<MailOutlined />}>company@email.com</Menu.Item>
                        <Menu.Item key="3" icon={<MobileOutlined />}>+20123456789</Menu.Item>
                    </Menu>
                    <Menu id="mainMenu" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" ><NavLink exact to="/" >الرئيسية</NavLink></Menu.Item>
                        <Menu.Item key="2"><NavLink exact to="/Offers" >العروض</NavLink></Menu.Item>
                        <Menu.Item key="3"><NavLink exact to="/availableClinic" >العيادات المتاحة</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink exact to="/Blogs" >المقالات</NavLink></Menu.Item>
                        <Menu.Item key="5"><NavLink exact to="/ContactUs" >تواصل معنا</NavLink></Menu.Item>
                        <Menu.Item key="6" id="login"><Button type="primary" shape="round"  ><NavLink exact to="/LogIn" >تسجيل الدخول</NavLink></Button></Menu.Item>
                    </Menu>
                </Header>
            </Fragment>
        );
    }
}
export default Nav;