import React from 'react';
import Iframe from 'react-iframe';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Progress,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import classnames from 'classnames';

import img1 from '../../assets/images/users/avatar-default.jpg';
import img2 from '../../assets/images/users/3.jpg';
import img3 from '../../assets/images/users/4.jpg';
import img4 from '../../assets/images/users/5.jpg';

import time1 from '../../assets/images/big/img1.jpg';
import time2 from '../../assets/images/big/img2.jpg';
import time3 from '../../assets/images/big/img3.jpg';
import time4 from '../../assets/images/big/img4.jpg';
import Setting from "../../components/profile/setting";
import Info from "../../components/profile/info";
import ChangePassword from "../../components/profile/changePassword";

class Profile extends React.Component {
    // Tabs
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            'activeTab': '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                'activeTab': tab
            });
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="12" md="12" lg="4">
                        <Card>
                            <CardBody>
                                <div className="text-center mt-4">
                                    <img
                                        src={img1}
                                        className="rounded-circle"
                                        width="150"
                                        alt=""
                                    />
                                    <CardTitle className="mt-2">Hanna Gover</CardTitle>
                                    <CardSubtitle>Accounts Manager Amix corp</CardSubtitle>
                                    <Row className="text-center justify-content-md-center">

                                        <Col xs="4">
                                            <Button className="btn" color="secondary" size="sm">
                                                <i className="icon-picture"/>
                                                <span className="font-medium ml-2">Thay đổi ảnh</span>
                                            </Button>

                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                            <CardBody className="border-top">
                                <div>
                                    <small className="text-muted">Địa chỉ Skype</small>
                                    <h6>hannagover@gmail.com</h6>
                                    <small className="text-muted pt-4 db">Số điện thoại - zalo</small>
                                    <h6>+91 654 784 547</h6>
                                    <small className="text-muted pt-4 db">Địa chỉ</small>
                                    <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                                    <div>
                                        <Iframe
                                            className="position-relative"
                                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                                            width="280"
                                            height="150"
                                            frameborder="0"
                                            allowfullscreen
                                        />
                                    </div>
                                    <small className="text-muted pt-4 db">Social Profile</small>
                                    <br/>
                                    <Button className="btn-circle" color="info">
                                        <i className="fab fa-facebook-f"/>
                                    </Button>{' '}
                                    <Button className="btn-circle" color="success">
                                        <i className="fab fa-twitter"/>
                                    </Button>{' '}
                                    <Button className="btn-circle" color="danger">
                                        <i className="fab fa-youtube"/>
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="12" lg="8">
                        <Card>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            'active': this.state.activeTab === '1'
                                        })}
                                        onClick={() => {
                                            this.toggle('1');
                                        }}
                                    >
                                        Hồ sơ
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            'active': this.state.activeTab === '2'
                                        })}
                                        onClick={() => {
                                            this.toggle('2');
                                        }}
                                    >
                                        Cập nhật
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({
                                            'active': this.state.activeTab === '3'
                                        })}
                                        onClick={() => {
                                            this.toggle('3');
                                        }}
                                    >
                                        Đổi mật khẩu
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Info/>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Setting/>
                                </TabPane>
                                <TabPane tabId="3">
                                   <ChangePassword/>
                                </TabPane>
                            </TabContent>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;
