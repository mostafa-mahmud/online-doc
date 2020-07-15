import React, { Component } from 'react';
import { Col, Row } from 'antd';
import './BlogItem.css'
import { NavLink } from 'react-router-dom';
import { PushpinOutlined, TwitterOutlined, MobileOutlined, MailOutlined, InstagramOutlined, YoutubeOutlined, FacebookOutlined, GooglePlusOutlined, LinkedinOutlined } from '@ant-design/icons';

class BlogItem extends Component {
    state = {
        mainBlog: { mainPhoto: "https://static.mothership.sg/1/2019/12/qwrwqe.jpg", mainTitle: "مستشفى لعلاج مصابى فيرس كورونا تعرف على الاقرب لك", mainTimeAndData: "الجمعة, 12 يونيو 2020-06:33 م", mainText: "أكد المركز الإعلامي لمجلس الوزراء، أن ما تداولته بعض المواقع الإلكترونية وصفحات التواصل الاجتماعي، بشأن انسحاب المستشفيات الخاصة من علاج مصابي فيروس كورونا، لا أساس له من الصحة        وأوضح المركز الإعلامي، في تقرير توضيح الحقائق، الجمعة، أنه تواصل مع وزارة الصحة والسكان، والتي نفت تلك الأنباء، مُؤكدةً أنه لا صحة لانسحاب المستشفيات الخاصة من علاج مصابي فيروس كورونا، مُوضحةً استمرار المستشفيات الخاصة في تقديم الخدمة الطبية اللازمة لمصابي فيروس كورونا وفقاً للشروط التي حددتها الوزارة لضمان سلامة كافة المتواجدين بهذه المستشفيات، فضلاً عن القيام بالتنسيق الدائم مع المستشفيات الخاصة للتأكد من توافر كافة الأدوية اللازمة لعلاج مصابي فيروس كورونا، وذلك في إطار جهود الوزارة للتصدي لأزمة فيروس كورونا ولفت إلى أنه تم تخصيص عدد من المستشفيات للتعامل مع حالات فيروس كورونا، حيث وصل عدد المستشفيات التي تم تخصيصها إلى جانب مستشفيات العزل إلى 340 مستشفى، تضم 35152 سريراً بالأقسام الداخلية، فضلاً عن 3539 سرير رعاية مركزة، هذا بجانب 643 جهاز X RAY، وكذلك 125 جهاز CT" },
        subBlog: [
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "علماء صينيون يكشفون مدة بقاء فيروس كورونا على الاسطح" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "الصحة العالمية تكشف ابرز الخرافات الشائعة حول فيروس كورونا" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "علماء صينيون يكشفون مدة بقاء فيروس كورونا على الاسطح" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "الصحة العالمية تكشف ابرز الخرافات الشائعة حول فيروس كورونا" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "علماء صينيون يكشفون مدة بقاء فيروس كورونا على الاسطح" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "الصحة العالمية تكشف ابرز الخرافات الشائعة حول فيروس كورونا" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "علماء صينيون يكشفون مدة بقاء فيروس كورونا على الاسطح" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "الصحة العالمية تكشف ابرز الخرافات الشائعة حول فيروس كورونا" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "علماء صينيون يكشفون مدة بقاء فيروس كورونا على الاسطح" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "الصحة العالمية تكشف ابرز الخرافات الشائعة حول فيروس كورونا" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "علماء صينيون يكشفون مدة بقاء فيروس كورونا على الاسطح" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "الصحة العالمية تكشف ابرز الخرافات الشائعة حول فيروس كورونا" },
            { subPhoto: "https://www.care.gov.eg/EgyptCare/App_Themes/UI/icons/druggs.png", subTitle: "لماذا يفيد غسل اليدين فى القضاء على فيروس كورونا" },]
    }
    render() {
        var mainBlog = this.state.mainBlog,
            subBlog = this.state.subBlog;
        return (
            <Row id="BlogItem">
                <Col xs={{ span: 24 }} lg={{ span: 16 }}>
                    <Row>
                        <Col span={24}>
                            <img src={mainBlog.mainPhoto} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <h1>{mainBlog.mainTitle}</h1>
                            <h3>{mainBlog.mainTimeAndData}</h3>
                            <p>{mainBlog.mainText}</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 8 }} className={window.innerWidth > 600 ? "transFixed" : ""}>
                    <Row>
                        <Col span={24}>
                            <h2>مقالات ذات صلة</h2>
                        </Col>
                        {subBlog.map((item, i) => {
                            return (
                                <NavLink to="/blogLink">
                                    <Col span={24}>
                                        <Row align="middle">
                                            <Col span={4}><img style={{ width: "100px" }} src={item.subPhoto} /></Col>
                                            <Col span={16}><h3>{item.subTitle}</h3></Col>
                                        </Row>
                                    </Col>
                                </NavLink>
                            );
                        })}
                        <Col >
                        </Col>
                    </Row>
                    <Row>
                        <Col span="24">
                            <Row>
                                <Col span={9}>
                                    <h2>مشاركة المقال</h2>
                                </Col>
                                <Col span={4}>
                                    <a target="_blank" href=""><TwitterOutlined /></a>
                                </Col>
                                <Col span={4}>
                                    <a target="_blank" href=""><GooglePlusOutlined /></a>
                                </Col>
                                <Col span={4}>
                                    <a target="_blank" href=""><FacebookOutlined /></a>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>
        );

    }
}

export default BlogItem