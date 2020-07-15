import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'antd';
import { TwitterOutlined,PushpinOutlined, MobileOutlined, MailOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';

import './ContactUs.css'
const ContactUs = () => {
    return (
        <div id="contactUs">
            <Row justify="center" >
                <Col span={24}  >
                    <h1>تواصل معنا</h1>
                </Col>
            </Row>
            <Row justify="center" >
            </Row>
            <Row justify="center" >
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <Row justify="center">
                        <Col id="inputs" span={20}>
                            <Row>
                                <h2>تواصل معنا</h2>
                            </Row>
                            <Row>
                                <Col span={24}></Col>
                                <Col span={24}></Col>
                                <Col span={24}></Col>
                                <Col span={24}></Col>
                                <Col span={24}></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <Row>
                        <Col id="info" span={24}>
                            <ul>
                                <li key="1"><NavLink exact to="" ><MobileOutlined /> +20123456789</NavLink></li>
                                <li key="2"><NavLink exact to="" ><MailOutlined />company@email.com </NavLink> </li>
                                <li key="3"><NavLink exact to="" ><PushpinOutlined style={{ display: "inline-block", verticalAlign: "top" }} /><p style={{ display: "inline-block" }}><span>30 misr Helwan Agriculture</span><span> Rd, Almaadi, Cairo</span><span> Governorate 11272</span></p></NavLink> </li>
                            </ul>
                        </Col>
                        <Col id="" span={24} style={{textAlign:"center"}}>

                        <Row id="soclinks" justify="center" style={{marginBottom:"30px"}}>
                            <Col span={2}><a target="_blank" href=""><YoutubeOutlined /></a></Col>
                            <Col span={2}><a target="_blank" href=""><LinkedinOutlined /></a></Col>
                            <Col span={2}><a target="_blank" href=""><TwitterOutlined /></a></Col>
                            <Col span={2}><a target="_blank" href=""><InstagramOutlined /></a></Col>
                            <Col span={2}><a target="_blank" href=""><GooglePlusOutlined /></a></Col>
                            <Col span={2}><a target="_blank" href=""><FacebookOutlined /></a></Col>
                        </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}
export default ContactUs