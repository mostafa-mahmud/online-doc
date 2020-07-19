import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button,Input,Row, Col, } from 'antd';
import { TwitterOutlined,PushpinOutlined, MobileOutlined, MailOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';

import './ContactUs.css'
const ContactUs = () => {
    const {TextArea}= Input
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
                                <Col span={24}>
                                <Row>
                            <Col span={24}>
                                <Input type="text" size="large" placeholder="الأسم  ..." />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Input type="email" size="large" placeholder="البريد الألكترونى ..." />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Input type="text" size="large" placeholder="الموضوع ..." />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <TextArea rows={4}  placeholder="اكتب رسالتك ..."/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Button  type="primary" type="submit" shape="round">
                                    أحجز الأن
                                </Button>
                            </Col>
                        </Row>
                                </Col>
                                
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