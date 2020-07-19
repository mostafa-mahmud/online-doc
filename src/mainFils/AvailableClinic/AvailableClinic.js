import React, { Component,Fragment } from 'react';
import './AvailableClinic.css'
import doc from '../../sources/doc.PNG';
import ad from '../../sources/Untistsslehd.png'
import { Button, Input, Col, Row, Select } from 'antd';
import ClinicCardItem from '../AvailableClinicItem/clinicCardItem.js';
class AvailableClinic extends Component {
    state = {
        gender: false,
        bookit: "chat",
        clinicCard: [
            { docImage: doc, docName: "د / علاء محمد الشريف", docTitle: "استشارى جراحة الفم والاسنان - القصر العينى", docAdress: ["ش - احمد عرابى الرئيسي - المهندسين", "ش - د / حلمى حسين - المنيل"], docEvalioate: "3.5", docDescount: "10%" },
            { docImage: doc, docName: "د / محسن محمد ابو ضيف", docTitle: "استشارى جراحة الفم والاسنان - القصر العينى", docAdress: ["ش - احمد عرابى الرئيسي - المهندسين", "ش - د / حلمى حسين - المنيل"], docEvalioate: "4.5", docDescount: "20%" },
            { docImage: doc, docName: "د / محمود الشريف على", docTitle: "استشارى جراحة الفم والاسنان - القصر العينى", docAdress: ["ش - احمد عرابى الرئيسي - المهندسين", "ش - د / حلمى حسين - المنيل"], docEvalioate: "5.5", docDescount: "30%" },
            { docImage: doc, docName: "د / كمال عز الدين محمود", docTitle: "استشارى جراحة الفم والاسنان - القصر العينى", docAdress: ["ش - احمد عرابى الرئيسي - المهندسين", "ش - د / حلمى حسين - المنيل"], docEvalioate: "6.5", docDescount: "40%" },
            { docImage: doc, docName: "د / رمضان على السيد", docTitle: "استشارى جراحة الفم والاسنان - القصر العينى", docAdress: ["ش - احمد عرابى الرئيسي - المهندسين", "ش - د / حلمى حسين - المنيل"], docEvalioate: "7.5", docDescount: "50%" },
            { docImage: doc, docName: "د / كمال الطيب كمال", docTitle: "استشارى جراحة الفم والاسنان - القصر العينى", docAdress: ["ش - احمد عرابى الرئيسي - المهندسين", "ش - د / حلمى حسين - المنيل"], docEvalioate: "8.5", docDescount: "60%" },
            { docImage: doc, docName: "د / على ابو حافظ محمد", docTitle: "استشارى جراحة الفم والاسنان - القصر العينى", docAdress: ["ش - احمد عرابى الرئيسي - المهندسين", "ش - د / حلمى حسين - المنيل"], docEvalioate: "9.5", docDescount: "70%" },
        ]
    }
    render() {
        const { Option } = Select;
        const { Search } = Input;

        return (
            <Row id="AvailableClinic">
                <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                    <Row>
                        <Col span={18}>
                            <Search placeholder="بحث بأسم الطبيب ..." onSearch={value => console.log(value)} enterButton />

                        </Col>
                        <Col span={6}>
                            <Select style={{ width: "100%", direction: "ltr" }} defaultValue="الترتيب" className="select-before">
                                <Option value="http://">http://</Option>
                                <Option value="https://">https://</Option>
                            </Select>
                        </Col>
                    </Row>

                    {this.state.clinicCard.map((element, i) => {
                        if (i % 3 === 0 && i !== 0) {
                            return (
                                <Fragment >
                                    <Col id="addcontainer" span={24}>
                                        <img width="100%" src={ad} />
                                    </Col>
                                    <ClinicCardItem key={i} element={element} />
                                </Fragment>
                            );
                        } else {
                            return (
                                <ClinicCardItem key={i} element={element} />
                            );
                        }
                    })}

                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 8 }} className={window.innerWidth > 700 ? "transFixed" : ""}>
                    <Row>
                        <Col span={24}>
                            <Row align="middle">
                                <Col span={11}>
                                    <Select style={{ width: "100%", direction: "ltr" }} defaultValue="اختر المدينة" className="select-before">
                                        <Option value="http://">http://</Option>
                                        <Option value="https://">https://</Option>
                                    </Select>
                                </Col>
                                <Col span={11}>
                                    <Select style={{ width: "100%", direction: "ltr" }} defaultValue="اختر المنطقة " className="select-before">
                                        <Option value="http://">http://</Option>
                                        <Option value="https://">https://</Option>
                                    </Select>
                                </Col>
                                <Col span={11}>
                                    <Select style={{ width: "100%", direction: "ltr" }} defaultValue="اختر التخصص" className="select-before">
                                        <Option value="http://">http://</Option>
                                        <Option value="https://">https://</Option>
                                    </Select>
                                </Col>
                                <Col span={11}>
                                    <Select style={{ width: "100%", direction: "ltr" }} defaultValue="التخصص الفرعى" className="select-before">
                                        <Option value="http://">http://</Option>
                                        <Option value="https://">https://</Option>
                                    </Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={7}><Button onClick={() => { this.setState({ bookit: "video" }) }} type={this.state.bookit === "video" ? "primary active" : "primary"} shape="round"  >مكالمة فيديو </Button></Col>
                                <Col span={7}><Button onClick={() => { this.setState({ bookit: "chat" }) }} type={this.state.bookit === "chat" ? "primary active" : "primary"} shape="round"  > مكالمة شات </Button></Col>
                                <Col span={7}><Button onClick={() => { this.setState({ bookit: "bookit" }) }} type={this.state.bookit === "bookit" ? "primary active" : "primary"} shape="round"  >حجز كشف </Button></Col>
                            </Row>
                            <Row>
                                <Col span={7}><h4>اي من الجنسين</h4></Col>
                                <Col span={7}><Button onClick={() => { this.setState({ gender: true }) }} type={this.state.gender === true ? "primary active" : "primary"}  >ذكر</Button></Col>
                                <Col span={7}><Button onClick={() => { this.setState({ gender: false }) }} type={this.state.gender === false ? "primary active" : "primary"} >انثى</Button></Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Button type="" shape="round">
                                        ابحث
                                </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default AvailableClinic