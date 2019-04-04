import React from 'react';
import {Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

class Setting extends React.Component {
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
                            <Form>
                                <FormGroup>
                                    <Label>Tên đầy đủ</Label>
                                    <Input type="text" placeholder="Shaina Agrawal" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại</Label>
                                    <Input type="text" placeholder="123 456 1020" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Message</Label>
                                    <Input type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Quê quán</Label>
                                    <Input type="select">
                                        <option>USA</option>
                                        <option>India</option>
                                        <option>America</option>
                                    </Input>
                                </FormGroup>
                                <Button color="primary">Cập nhật</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}
export default Setting;
