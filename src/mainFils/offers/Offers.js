import React, { Component, Fragment } from 'react';
import OffersCard from '../../Components/offersCardCom/offersCardCom.js';
import { Col, Row } from 'antd';
import './Offers.css';
import ad from '../../sources/Untistsslehd.png'

class Offers extends Component {
    state = {
        cardOffers: [
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.journalpioneer.com/media/photologue/photos/cache/doctors-2png_large", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://media.xconomy.com/wordpress/wp-content/images/2016/12/06160314/Depositphotos_132925148_l-2015-1100x734.jpg", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://s.abcnews.com/images/Health/doctor-gty-er-180205_hpMain_4_16x9_992.jpg", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2019/04/04/iStock-1138080249.jpg", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Physician%20Reentry%201200x666.jpg?itok=zIKO_A6Q", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Physician%20Reentry%201200x666.jpg?itok=zIKO_A6Q", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Physician%20Reentry%201200x666.jpg?itok=zIKO_A6Q", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Physician%20Reentry%201200x666.jpg?itok=zIKO_A6Q", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Physician%20Reentry%201200x666.jpg?itok=zIKO_A6Q", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Physician%20Reentry%201200x666.jpg?itok=zIKO_A6Q", cardPrice: "السعر : 100جنيه" },
            { cardTitle: "مركز عبد الله للاشعة", cardText: "بالتعاون مع ابليكيشن رعايه 247 يقدم مركز الحياة للاشعة خصم 20%على جميع الاشعات", cardPhoto: "https://aletihadpress.com/wp-content/uploads/2020/04/%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7-%D8%AA%D8%B3%D8%AC%D9%84-171-%D9%88%D9%81%D8%A7%D8%A9-%D9%88-4133-%D8%A5%D8%B5%D8%A7%D8%A8%D8%A9-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-%D8%A8%D9%81%D9%8A%D8%B1%D9%88%D8%B3-%D9%83%D9%88%D8%B1%D9%88%D9%86%D8%A7.jpg", cardPrice: "السعر : 100جنيه" }
        ]
    }
    render() {
        return (
            <Row id="offers">
                <Col span={24}>
                    <h1>افضل العروض</h1>
                </Col>
                <Col span="24">
                    <Row justify="center" >
                        {this.state.cardOffers.map((item, i) => {
                            console.log("ssss", i % 4)
                            {
                                if (i % 4 === 0 && i !== 0) {
                                    return (
                                        <Fragment>

                                            <Col id="addcontainer" span={24}>
                                                <img width="100%" src={ad} />
                                            </Col>
                                            <Col xs={{ span: 20 }} sm={{ span: 10 }} >
                                                <Row justify="center">
                                                    <OffersCard offcardinfo={item} />
                                                </Row>
                                            </Col>
                                        </Fragment>
                                    );
                                } else {
                                    return (
                                        <Col xs={{ span: 20 }} sm={{ span: 10 }} >
                                            <Row justify="center">
                                                <OffersCard offcardinfo={item} />
                                            </Row>
                                        </Col>
                                    );
                                }
                            }

                        })}

                        {/*<Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Col span={24}>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                    <p>looolooolooolloooloolooloooo</p>
                                </Col>
                            </Row>
                        </Col>*/}
                    </Row>
                </Col>
            </Row>
        );
    }
}
export default Offers