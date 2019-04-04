import React from 'react';
import {Card, CardBody, Col, Progress, Row} from "reactstrap";

class Info extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }


    render() {
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <Row>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>Tên đây đủ</strong>
                                    <br />
                                    <p className="text-muted">Johnathan Deo</p>
                                </Col>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>Điện thoại</strong>
                                    <br />
                                    <p className="text-muted">(123) 456 7890</p>
                                </Col>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>Email</strong>
                                    <br />
                                    <p className="text-muted">johnathan@admin.com</p>
                                </Col>
                                <Col md="3" xs="6" className="border-right">
                                    <strong>Quê quán</strong>
                                    <br />
                                    <p className="text-muted">London</p>
                                </Col>
                            </Row>
                            <p className="mt-4">
                                Donec pede justo, fringilla vel, aliquet nec,
                                vulputate eget, arcu. In enim justo, rhoncus ut,
                                imperdiet a, venenatis vitae, justo. Nullam dictum
                                felis eu pede mollis pretium. Integer tincidunt.Cras
                                dapibus. Vivamus elementum semper nisi. Aenean
                                vulputate eleifend tellus. Aenean leo ligula,
                                porttitor eu, consequat vitae, eleifend ac, enim.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the
                                industries standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and
                                scrambled it to make a type specimen book. It has
                                survived not only five centuries{' '}
                            </p>
                            <p>
                                It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and
                                more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.
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
export default Info;
