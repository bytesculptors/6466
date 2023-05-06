import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import '../../styles/footer.css'

const quickLinks = [
    {
        path:'/about',
        display: 'About'
    },
    {
        path:'#',
        display: 'Privacy Policy'
    },
    {
        path:'/blogs',
        display: 'Blog'
    },
    {
        path:'/cars',
        display: 'Car Listing'
    },
    {
        path:'/contact',
        display: 'Contact'
    }
]

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                    <div className="logo footer__logo">
                        <h1>
                            <Link to='/home' className="d-flex align-items-center gap-3">
                                <i class="ri-car-line"></i>
                                <span>Rent Car <br /> Service</span>
                            </Link>
                        </h1>
                    </div>
                    <p className="footer__logo-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus sequi nemo corporis, dolore alias ducimus animi saepe blanditiis eos laboriosam deserunt. Dicta ut commodi pariatur cumque nam voluptates ab.

                    </p>
                </Col>

                <Col lg='2' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer__link-title">
                            Quick Links
                        </h5>
                        <ListGroup>
                            {
                                quickLinks.map((item, index)=>(
                                    <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </div>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <div className="mb-4">
                        <h5 className="footer__link-title mb-4">
                            Cơ quan
                        </h5>
                        <p className="office__info">144 Xuân Thuỷ, Cầu Giấy, Hà Nội</p>
                        <p className="office__info">Điện thoại: 0384103659</p>
                        <p className="office__info">Email: tuannghia200603@gmail.com</p>
                        <p className="office__info">Thời gian: 9h - 17h</p>
                    </div>
                </Col>

                <Col lg='12'>
                    <div className="footer__bottom">
                        <div className=" d-flex align-items-center justify-content-center gap-1 pt-4">
                            <i class="ri-copyright-line"></i>Copyright {year}, Developed by Muhibur Rahman. All rights reserved
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
};

export default Footer;