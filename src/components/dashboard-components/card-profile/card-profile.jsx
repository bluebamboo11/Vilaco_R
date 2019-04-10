import React from 'react';
import {
    Card,
    CardBody,
    Button,
    Badge,
    Nav,
    NavItem,
    NavLink,
    TabContent, TabPane
} from 'reactstrap';
import classnames from 'classnames';
import img1 from 'assets/images/background/profile-bg.jpg';
import {connect} from "react-redux";

import PerfectScrollbar from "react-perfect-scrollbar";
import Transcript from "./Transcript";


class CardProfile extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        if (!this.props.user) {
            return <Card className="card-info"/>
        }
        let {avatar, name, phone, gender, address, district, city, code, hobby, forte, weakness, birthday, town} = this.props.user;
        return (
            /*--------------------------------------------------------------------------------*/
            /* Used In Dashboard-1,2,3  and Widget Page                                       */
            /*--------------------------------------------------------------------------------*/
            <Card className="card-info">
                <img src={img1} height="116" alt=""/>
                <CardBody className="little-profile text-center">
                    <div className="pro-img">
                        <img src={avatar} className="avatar" alt="user"/>

                    </div>
                    <h3 className="mb-3">{name} <Badge color="danger" style={{fontSize:10}}>Chưa xác nhận</Badge></h3>

                    <Nav tabs>
                        <NavItem >
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Thông tin
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Bảng điểm
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab} className={{'content-info':this.state.activeTab==='1'}}>
                        <TabPane tabId="1" className="h-100">
                    <div className="text-left p-2 h-100">
                        <PerfectScrollbar>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2 pt-2">
                                    Quê quán
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="row ">
                                        <div className="col-sm-12">
                                            <div
                                                className="form-control">{address + ', ' + town + ', ' + district + ', ' + city}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2">
                                    Giới tính
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="form-control">{gender === 1 ? 'Nam' : 'Nữ'}</div>

                                </div>
                            </div>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2">
                                    Số điện thoại
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="form-control">{phone}</div>
                                </div>
                            </div>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2">
                                    Ngày sinh
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="form-control">{birthday}</div>
                                </div>
                            </div>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2">
                                    Số CMT, Căn cước
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="form-control">{code}</div>
                                </div>
                            </div>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2">
                                    Sở thích
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="form-control">{hobby}</div>
                                </div>
                            </div>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2">
                                    Sở trường
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="form-control">{forte}</div>
                                </div>
                            </div>
                            <div className="info-group row">
                                <div className="col-sm-3 col-form-div pt-2">
                                    Sở đoản
                                </div>
                                <div className="col-sm-9 pb-2">
                                    <div className="form-control">{weakness}</div>
                                </div>
                            </div>
                        </PerfectScrollbar>
                    </div>
                        </TabPane>
                    </TabContent>
                    <TabContent activeTab={this.state.activeTab} className={{'content-info':this.state.activeTab==='2'}}>
                        <TabPane tabId="2" className="h-100">
                            <Transcript/>
                        </TabPane>
                    </TabContent>
                    <Button color="success" className="btn-rounded" >Xác nhận</Button>
                </CardBody>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.student
    }
};
CardProfile = connect(mapStateToProps)(CardProfile);
export default CardProfile;
