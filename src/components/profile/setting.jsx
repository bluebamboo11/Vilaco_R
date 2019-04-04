import React from 'react';
import {Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {connect} from "react-redux";
import {userService} from "../../firebase";
import Datetime from 'react-datetime';
require('moment/locale/vi');
class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.doUpdate = this.doUpdate.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.state =
            {
                name: '',
                phone: '',
                address: '',
                gender: 'nam',
                code: '',
                hobby: '',
                forte: '',
                weakness: '',
                birthday: ''
            }
    }


    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onDateChange(date){
        this.setState({
            birthday:date
        });
    }
    doUpdate(event) {
        event.preventDefault();
        console.log(this.props.user);
        userService.doCreateUser(this.props.user.uid,{...this.state})
    }

    render() {
        let {name, phone, gender, address, code, hobby, forte, weakness,birthday} = this.state;
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <CardBody>
                            <Form onSubmit={this.doUpdate}>
                                <FormGroup>
                                    <Label>Tên đầy đủ</Label>
                                    <Input type="text" name="name" onChange={this.onInputChange}
                                           value={name}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Ngày Sinh</Label>
                                    <Datetime
                                        locale="vi"
                                        onChange={this.onDateChange}
                                        value={birthday}
                                        timeFormat={false}
                                        inputProps={{ 'placeholder': 'Date Picker Here' }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số điện thoại</Label>
                                    <Input type="number" name="phone" onChange={this.onInputChange}
                                           value={phone}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Số chứng minh thư</Label>
                                    <Input type="number" name="code" onChange={this.onInputChange}
                                           value={code}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Quê quán</Label>
                                    <Input type="text" name="address" onChange={this.onInputChange}
                                           value={address}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sở thích</Label>
                                    <Input type="textarea" onChange={this.onInputChange} name="hobby" value={hobby}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sở trường</Label>
                                    <Input type="textarea" onChange={this.onInputChange} name="forte" value={forte}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Sở đoản</Label>
                                    <Input type="textarea" onChange={this.onInputChange} name="weakness"
                                           value={weakness}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Giới tính</Label>
                                    <Input type="select" name="gender" onChange={this.onInputChange} value={gender}>
                                        <option>Nam</option>
                                        <option>Nữ</option>
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

const mapStateToProps = state => {
    return {
        user: state.user
    }
};
Setting = connect(mapStateToProps)(Setting);
export default Setting;
