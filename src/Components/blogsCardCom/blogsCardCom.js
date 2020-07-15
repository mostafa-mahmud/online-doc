import React from 'react';
import './blogsCardCom.css'
import { Card,Button } from 'antd';
import { NavLink } from 'react-router-dom';

const { Meta } = Card;
const BlogsCard = (props) => {
    var iteminfo = props.blogscardinfo;
    return (
        <Card
            id="blogsCard"
            hoverable
            cover={<img alt="example" src={iteminfo.cardPhoto} />}>
            <Meta title={iteminfo.cardTitle} description={iteminfo.cardText} />
            <NavLink to="/blogLink">
                رؤية المزيد
            </NavLink>
        </Card>
    );
}

export default BlogsCard