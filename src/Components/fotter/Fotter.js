import React from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Row, Col } from 'antd';
import { PushpinOutlined, TwitterOutlined, MobileOutlined, MailOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';
import Logo from '../../sources/Capture2.PNG';
import downApp from '../../sources/google.png';
import downApp1 from '../../sources/apple.png';


import './Fotter.css'
const { Footer } = Layout;
const Fotter = () => {

  return (
    <Footer>
      <Row justify="center" id="mainfoot">
        <Col xs={{ span: 20 }} lg={{ span: 6 }}>
          <Row >
            <Col span={24} >
              <img src={Logo} />
            </Col>
          </Row>
          <Row id="soclinks" justify="center" gutter={[8, 8]}>
            <Col span={2}><a target="_blank" href=""><YoutubeOutlined /></a></Col>
            <Col span={2}><a target="_blank" href=""><LinkedinOutlined /></a></Col>
            <Col span={2}><a target="_blank" href=""><TwitterOutlined /></a></Col>
            <Col span={2}><a target="_blank" href=""><InstagramOutlined /></a></Col>
            <Col span={2}><a target="_blank" href=""><GooglePlusOutlined /></a></Col>
            <Col span={2}><a target="_blank" href=""><FacebookOutlined /></a></Col>

          </Row>
        </Col>
        <Col xs={{ span: 20 }} lg={{ span: 6 }}>
          <ul>
            <li><NavLink exact to="/" >الرئيسية</NavLink></li>
            <li><NavLink exact to="/Offers" >العروض</NavLink></li>
            <li><NavLink exact to="/Blogs" >المقالات</NavLink></li>
            <li><NavLink exact to="/ContactUs" >تواصل معنا</NavLink></li>
            <li><NavLink exact to="/ConditionsAndLaws" > الشروط والاحكام</NavLink></li>
          </ul>
        </Col>
        <Col id="locationInfo" xs={{ span: 20 }} lg={{ span: 6 }}>
          <ul>
            <li key="1"><NavLink exact to="" ><MobileOutlined /> +20123456789</NavLink></li>
            <li key="2"><NavLink exact to="" ><MailOutlined />company@email.com </NavLink> </li>
            <li key="3"><NavLink exact to="" ><PushpinOutlined style={{ display: "inline-block", verticalAlign: "top" }} /><p style={{ display: "inline-block" }}><span>30 misr Helwan Agriculture</span><br /><span> Rd, Almaadi, Cairo</span><br /><span> Governorate 11272</span></p></NavLink> </li>
          </ul>
        </Col>
        <Col xs={{ span: 20 }} lg={{ span: 6 }}>
          <Row >
            <Col span={24}><p>حمل التطبيق الأن</p></Col>
            <Col span={24}><img style={{ maxWidth: "200px" }} src={downApp} /></Col>
            <Col span={24}><img style={{ maxWidth: "200px" }} src={downApp1} /></Col>
          </Row>
        </Col>
      </Row>
      <Footer>
        <Row>
          <Col justify="center" lg={{ span: 15 }} xs={{ span: 20 }}><p>جميع الحقوق محفوظة &copy; Online Doctor</p></Col>
        </Row>
      </Footer>
    </Footer>
  )
}
export default Fotter