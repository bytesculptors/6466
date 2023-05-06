import React from "react";
import { Container, Row, Col } from "reactstrap";

import '../../styles/about-section.css'
import aboutImg from '../../assets/all-images/cars-img/bmw-offer.png'

const AboutSection = ({aboutClass}) => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="about__section-content" style={aboutClass === 'aboutPage' ? {marginTop: '0px'} : {marginTop: '280px'}}>
                            <h4 className="section__subtitle">Về chúng tôi</h4>
                            <h2 className="section__title">Chào mừng tới dịch vụ cho thuê ô tô</h2>
                            <p className="section__description">
                                6466 Shop là một cử hàng cho thuê xe ô tô hiện đại, sẽ mang đến những loại xe với nhiều kiểu dáng, màu sắc với những mức giá hấp dẫn đáp ứng mọi nhu cầu của bạn.
                            </p>
                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Giá cả hợp lý.
                                </p>

                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Kiểu dáng & màu sắc đa dạng.
                                </p>
                            </div>

                            <div className="about__section-item d-flex align-items-center">
                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Phục vụ tận tình.
                                </p>

                                <p className="section__description d-flex align-items-center gap-2">
                                    <i class="ri-checkbox-circle-line"></i> Dễ dàng đổi nếu có vấn đề phát sinh.
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="about__img">
                            <img src={aboutImg} alt=""  className="w-100"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutSection;