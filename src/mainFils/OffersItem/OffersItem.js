import React, { Component, Fragment } from 'react';
import { Button, Input, Divider, Typography, Col, Row } from 'antd';
import './OffersItem.css'
import img1 from '../../sources/Casspture.PNG'
class OffersItem extends Component {
    state = {
        mainOffers: { mainPhoto: "https://static.mothership.sg/1/2019/12/qwrwqe.jpg", mainTitle: "مركز الحياة للأشعة", mainPhone: "0123456789",mainSubText:"تفاصيل العرض", mainText: "أكد المركز الإعلامي لمجلس الوزراء، أن ما تداولته بعض المواقع الإلكترونية وصفحات التواصل الاجتماعي، بشأن انسحاب المستشفيات الخاصة من علاج مصابي فيروس كورونا، لا أساس له من الصحة        وأوضح المركز الإعلامي، في تقرير توضيح الحقائق، الجمعة، أنه تواصل مع وزارة الصحة والسكان، والتي نفت تلك الأنباء، مُؤكدةً أنه لا صحة لانسحاب المستشفيات الخاصة من علاج مصابي فيروس كورونا، مُوضحةً استمرار المستشفيات الخاصة في تقديم الخدمة الطبية اللازمة لمصابي فيروس كورونا وفقاً للشروط التي حددتها الوزارة لضمان سلامة كافة المتواجدين بهذه المستشفيات، فضلاً عن القيام بالتنسيق الدائم مع المستشفيات الخاصة للتأكد من توافر كافة الأدوية اللازمة لعلاج مصابي فيروس كورونا، وذلك في إطار جهود الوزارة للتصدي لأزمة فيروس كورونا ولفت إلى أنه تم تخصيص عدد من المستشفيات للتعامل مع حالات فيروس كورونا، حيث وصل عدد المستشفيات التي تم تخصيصها إلى جانب مستشفيات العزل إلى 340 مستشفى، تضم 35152 سريراً بالأقسام الداخلية، فضلاً عن 3539 سرير رعاية مركزة، هذا بجانب 643 جهاز X RAY، وكذلك 125 جهاز CT" },
        elementOneWidth: 0
    }
    render() {
        var mainOffers = this.state.mainOffers;
        const { Paragraph, Title } = Typography;
        return (
            <Fragment>
                <Row id="OffersItem1">
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Row justify="center">
                            <Col >
                                <img src={mainOffers.mainPhoto} />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Title >{mainOffers.mainTitle}</Title>
                        <Title level={4}>رقم الهاتف :{mainOffers.mainPhone}</Title>
                        <Divider />
                        <Title level={2}>{mainOffers.mainSubText}</Title>
                        <Paragraph ellipsis={{ rows: 5, expandable: true, symbol: 'more' }}>
                            {mainOffers.mainText}
                        </Paragraph>
                    </Col>
                </Row>
                <Row id="OffersItem2">
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <Title level={2}>بيانات الحجز</Title>
                        <Row>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Title level={3}>الوقت</Title>
                                <Input type="time" size="large" placeholder="large size" />
                            </Col>
                            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                                <Title level={3}>التاريخ</Title>
                                <Input type="date" size="large" placeholder="large size" />
                            </Col>

                        </Row>
                        <Divider />
                        <Row>
                            <Col span={24}>
                                <Input type="text" size="large" placeholder="الأسم الكامل ..." />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Input type="email" size="large" placeholder="البريد الألكترونى ..." />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Input type="phone" size="large" placeholder="رقم الهاتف ..." />
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "right" }} span={12}>
                                <span>الأجمالى</span>
                            </Col>
                            <Col style={{ textAlign: "left" }} span={12}>
                                <span>200 جنيه</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <Button type="primary" type="submit" shape="round">
                                    أحجز الأن
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                        <img height="100%" width="100%" src={img1} />
                    </Col>
                </Row>
            </Fragment>
        );

    }
}

export default OffersItem