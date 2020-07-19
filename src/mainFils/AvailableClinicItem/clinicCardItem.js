import React from 'react';
import './clinicCardItem.css'
import { Typography, Button, Input, Col, Row } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const ClinicCardItem = (props) => {
    const { Title } = Typography,
        elementInfo = props.element;
    console.log("elementInfo", elementInfo)
    return (
        <Row className="theClinicCard">
            <Col xs={{ span: "24" }} lg={{ span: "6" }}>
                <img src={elementInfo.docImage} width="100%" />
            </Col>
            <Col xs={{ span: "24" }} lg={{ span: "18" }} >
                <Row>
                    <Col span={22}>
                        <Title level={2}> {elementInfo.docName} <span><Title level={4}>{elementInfo.docEvalioate}<StarOutlined /></Title></span></Title>
                        <Title level={3}> {elementInfo.docTitle} </Title>
                        <Title level={4}> العناوين </Title>

                        {elementInfo.docAdress.map((item, i) => {
                            return (
                                <Row align="middle">
                                    <Col span={18} >
                                        {item}
                                    </Col>
                                    <Col span={6}>
                                        <Button type="" shape="round">
                                            <NavLink to="/ACDocFile">
                                                احجز الان
                                            </NavLink>
                                        </Button>
                                    </Col>
                                </Row>
                            );
                        })}
                    </Col>
                    <Col xs={{ span: "24" }} lg={{ span: "2" }}>
                    <span style={{ color: "red", fontWeight: "bold", display: "block", textAlign: "center", padding: "10px", fontSize: "20px" }}>{elementInfo.docDescount}</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
export default ClinicCardItem;