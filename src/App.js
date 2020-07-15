import React from 'react';
import './App.css';
import Nav from './Components/nav/nav.js';
import Rout from './rout/rout';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Fotter from './Components/fotter/Fotter';
import {  Row, Col } from 'antd';

function App() {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Nav />
        </header>
        <div className="AppContent">
          <Rout />
        </div>
        <Row className="colored">
        <Col span={15}></Col>
        <Col span={9}></Col>
      </Row>
        <Fotter />
      </BrowserRouter>
    </div>
  );
}

export default App;
