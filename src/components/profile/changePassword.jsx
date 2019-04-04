import React from 'react';
import {Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

class ChangePassword extends React.Component {
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
                                    <Label>Mật khẩu cũ</Label>
                                    <Input type="password" placeholder="******" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Mật khẩu mới</Label>
                                    <Input type="password" placeholder="" />
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
export default ChangePassword;
