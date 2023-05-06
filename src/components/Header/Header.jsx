import React, {useRef} from "react";

import {Container, Row, Col} from 'reactstrap';
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
    {
        path: '/home',
        display: 'Trang chủ'
    },
    {
        path: '/about',
        display: 'Giới thiệu'
    },
    {
        path: '/cars',
        display: 'Sản phẩm'
    },
    {
        path: '/blogs',
        display: 'Blog'
    },
    {
        path: '/contact',
        display: 'Liên hệ'
    }
]

const Header = () => {
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('menu__active')
    return <header className="header">
        <div className="header__top">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='6'>
                        <div className="header__top__left">
                            <span>Bạn cần giúp đỡ?</span>
                            <span className="header__top__help">
                                <i class="ri-phone-fill"></i> +84 384103659     
                            </span>
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='6'>
                        <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                            <Link to='#' className="d-flex align-items-center gap-1">
                                <i class="ri-login-circle-line"></i>Đăng nhập
                            </Link>
                            <Link to='#' className="d-flex align-items-center gap-1">
                                <i class="ri-user-line"></i>Đăng ký
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="header__middle">
            <Container>
                <Row>
                    <Col lg='4' md='3' sm='4'>
                        <div className="logo">
                            <h1>
                                <Link to='/home' className="d-flex align-items-center gap-3">
                                    <i class="ri-car-line"></i>
                                    <span>6466<br /> Shop</span>
                                </Link>
                            </h1>
                        </div>
                    </Col>

                    <Col lg='3' md='3' sm='4'>
                        <div className="header__location d-flex align-items-center gap-2">
                            <span><i class="ri-earth-line"></i></span>
                            <div className="header__location-content">
                                <h4>Việt Nam</h4>
                                <h6>Hà Nội, Việt Nam</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg='3' md='3' sm='4'>
                        <div className="header__location d-flex align-items-center gap-2">
                            <span><i class="ri-time-line"></i></span>
                            <div className="header__location-content">
                                <h4>Từ thứ 2 đến thứ 6</h4>
                                <h6>9h - 17h</h6>
                            </div>
                        </div>
                    </Col>

                    <Col lg='2' md='3' sm='0' className="d-flex align-items-center justify-content-end">
                        <button className="header__btn btn">
                            <Link to='/contact'>
                                <i class="ri-phone-line"></i> Thông tin liên hệ
                            </Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="main__navbar">
            <Container>
                <div className="navigation__wrapper d-flex align-items-center justify-content-between">
                    <span className="mobile__menu">
                        <i class="ri-menu-line"></i>
                    </span>

                    <div className="navigation" ref={menuRef}>
                        <div className="menu">
                            {
                                navLinks.map((item, index) => (
                                    <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>{item.display}</NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div className="nav__right">
                        <div className="search__box">
                            <input type="text" placeholder="Tìm kiếm" />
                            <span>
                                <i class="ri-search-line"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </header>
}

export default Header