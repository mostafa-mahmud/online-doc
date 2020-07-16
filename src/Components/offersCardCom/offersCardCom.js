import React from 'react';
import { Card,Button } from 'antd';
import './offersCardCom.css';
import { NavLink } from 'react-router-dom';
const { Meta } = Card;
const OffersCard = (props) => {
    console.log("offers", props.offcardinfo);
    var iteminfo = props.offcardinfo
    return (
        <Card
            id="offerCard"
            hoverable
            cover={<img alt="example" src={iteminfo.cardPhoto} />}>
            <Meta title={iteminfo.cardTitle} description={iteminfo.cardText} />
            <h3>
                {iteminfo.cardPrice}
            </h3>
            <NavLink to="/OffersItem">
            <Button type="primary" shape="round">
            أحصل على العرض
            </Button>
            </NavLink>
        </Card>

    );
}
export default OffersCard