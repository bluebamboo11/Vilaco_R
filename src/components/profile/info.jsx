import React from 'react';
import {Card, CardBody, Col, Row} from "reactstrap";
import {connect} from "react-redux";
//tab thông tin cá nhân
class Info extends React.Component {

    render() {
        let { gender, code, hobby, relativeName, familyAddress,birthday,email} = this.props.userData;
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>Email</strong>
                                    <br />
                                    <p className="text-muted">{email}</p>
                                </Col>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>Ngày sinh</strong>
                                    <br />
                                    <p className="text-muted">{birthday}</p>
                                </Col>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>CMT</strong>
                                    <br />
                                    <p className="text-muted">{code}</p>
                                </Col>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>Giới tính</strong>
                                    <br />
                                    <p className="text-muted">{Number(gender)===1?'Nam':'Nữ'}</p>
                                </Col>
                            </Row>
                            <div className="mt-4"/>
                            <strong >Sở thích</strong>
                            <p >
                                {hobby}
                            </p>
                            <strong>Tên người thân</strong>
                            <p>
                                {relativeName}
                            </p>
                            <strong>Địa chỉ gia đình</strong>
                            <p>
                                {familyAddress}
                            </p>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
};
Info = connect(mapStateToProps)(Info);
export default Info;
