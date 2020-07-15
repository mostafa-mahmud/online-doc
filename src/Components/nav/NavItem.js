import React, { Fragment } from 'react'
import { Layout, Menu, Button } from 'antd';

const NavItem = (props) => {
    return (
        props.ItemContent.map((item,i)=>{return(<Menu.Item key={item.itemKey} id={item.itemId} ><a>{item.itemIcon}</a><a></a>{item.itemText}</Menu.Item>)})
    );
}
export default NavItem