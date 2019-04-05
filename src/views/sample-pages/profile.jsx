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
} from 'reactstrap';

import classnames from 'classnames';

import img1 from '../../assets/images/users/avatar-default.jpg';

import Setting from "../../components/profile/setting";
import Info from "../../components/profile/info";
import ChangePassword from "../../components/profile/changePassword";
import {connect} from "react-redux";

class Profile extends React.Component {
    // Tabs
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            'activeTab': '1',
            user:{}
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                'activeTab': tab
            });
        }
    }


    componentDidMount() {
        console.log(this.props.user)
    }

    render() {
        let {name, phone, gender, address, code, hobby, forte, weakness,birthday,email} = this.props.userData;

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
                                    <CardTitle className="mt-2">{name}</CardTitle>
                                    <CardSubtitle>Tài khoản chưa được xác nhận</CardSubtitle>
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
                                    <small className="text-muted">Skype</small>
                                    <h6>hannagover@gmail.com</h6>
                                    <small className="text-muted pt-4 db">Số điện thoại - zalo</small>
                                    <h6>{phone}</h6>
                                    <small className="text-muted pt-4 db">Địa chỉ - Quê quán</small>
                                    <h6>{address}</h6>

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

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
};
Profile = connect(mapStateToProps)(Profile);


export default Profile;
