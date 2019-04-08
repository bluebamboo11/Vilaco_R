import React from 'react';
import {Card, CardBody, Col, Progress, Row} from "reactstrap";
import {connect} from "react-redux";

class Info extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }


    render() {
        let { gender, code, hobby, forte, weakness,birthday,email} = this.props.userData;
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
                                    <p className="text-muted">{gender}</p>
                                </Col>
                            </Row>
                            <div className="mt-4"/>
                            <strong >Sở thích</strong>
                            <p >
                                {hobby}
                            </p>
                            <strong>Sở trường</strong>
                            <p>
                                {forte}
                            </p>
                            <strong>Sở đoản</strong>
                            <p>
                                {weakness}
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
