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
        let {name, phone, gender, address, code, hobby, forte, weakness,birthday,email} = this.props.userData;
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
                            <p className="mt-4">
                                {hobby}
                            </p>
                            <p>
                                {forte}
                            </p>
                            <p>
                                {weakness}
                            </p>
                            <h4 className="font-medium mt-4">Skill Set</h4>
                            <hr />
                            <h5 className="mt-4">
                                Wordpress <span className="float-right">80%</span>
                            </h5>
                            <Progress value={2 * 5} />
                            <h5 className="mt-4">
                                HTML 5 <span className="float-right">90%</span>
                            </h5>
                            <Progress color="success" value="25" />
                            <h5 className="mt-4">
                                jQuery <span className="float-right">50%</span>
                            </h5>
                            <Progress color="info" value={50} />
                            <h5 className="mt-4">
                                Photoshop <span className="float-right">70%</span>
                            </h5>
                            <Progress color="warning" value={75} />
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
