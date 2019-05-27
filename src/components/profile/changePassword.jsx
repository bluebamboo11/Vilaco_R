import React from 'react';
import {Alert, Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row, Spinner} from "reactstrap";
import validators from "../../views/authentication/validators";
import {auth} from "../../firebase";
//Tab thay đổi mật khẩu
class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {passwordOld: '', password: '', visibleAlert: false, isUpdate: false};
        this.onChange = this.onChange.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.formValidators = this.formValidators.bind(this);
        this.validForm = this.validForm.bind(this);
        this.showErrors = this.showErrors.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.validators = validators;
    }


    //Tắt thông báo
    onDismiss() {
        this.setState({visibleAlert: false});
    }
    //Thay đổi dữ liệu
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.formValidators([event.target.name], event.target.value);
    }
    //Kiểm tra nhập chính xác định dạng hay không
    formValidators(fieldName, value) {
        this.validators[fieldName].errors = [];
        this.validators[fieldName].state = value;
        this.validators[fieldName].valid = true;
        this.validators[fieldName].rules.forEach(rule => {
            if (rule.test instanceof RegExp) {
                if (!rule.test.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            } else if (typeof rule.test === 'function') {
                if (!rule.test(value)) {
                    this.validators[fieldName].errors.push(rule.message);
                    this.validators[fieldName].valid = false;
                }
            }
        });
    }

    //Kiểm tra nhập chính xác tất cả chưa
    validForm() {
        let status = true;
        Object.keys(this.validators).forEach(field => {
            if (field === 'passwordOld' || field === 'password') {
                if (!this.validators[field].valid) {
                    status = false;
                }
            }
        });

        return status;
    }
    //Hiển thị thông báo lỗi
    showErrors(fieldName) {
        const result = '',
            validator = this.validators[fieldName];
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => <span className="error"
                                                                       key={index}>* {info}<br/></span>);

            return (
                <div className="error mb-2 mt-1">
                    {errors}
                </div>
            );

        }

        return result;

    }
    //Lây thông báo lỗi khi lưu thay đổi mật khẩu. server trả lại
    getError(code) {
        switch (code) {
            case 'auth/wrong-password':
                return {passwordOld: "Mật khẩu không chính xác"};
            case 'auth/requires-recent-login':
                return {password: "Đăng nhập lại để thực hiện thao tác"};
            case 'auth/weak-password':
                return {password: "Mật khẩu không đủ mạnh. Vui lòng sử dung mật khẩu khác"};
            default:
                return;
        }
    }
    //Đổi mật khẩu
    onChange(event) {
        event.preventDefault();
        this.setState({isUpdate: true, visibleAlert: false});
        auth.doPasswordUpdate(this.state.passwordOld, this.state.password, (code) => {
            this.setState({isUpdate: false, passwordOld: '', password: ''});
            if (!code) {
                this.setState({visibleAlert: true})
            } else {
                const textErr = this.getError(code);
                if (textErr) {
                    let key = 'password';
                    if (textErr.passwordOld) {
                        key = 'passwordOld'
                    }
                    this.validators[key].errors = [textErr[key]];
                    this.validators[key].valid = false;
                    this.forceUpdate()
                }
            }
        })
    }

    render() {
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <Alert color="success" isOpen={this.state.visibleAlert} toggle={this.onDismiss}>
                            Mật khẩu đã được đổi thành công
                        </Alert>
                        <CardBody>
                            <Form onSubmit={this.onChange}>
                                <FormGroup>
                                    <Label>Mật khẩu cũ</Label>
                                    <Input type="password" placeholder="******" name="passwordOld"
                                           value={this.state.passwordOld}
                                           onChange={this.onInputChange} required/>
                                    {this.showErrors('passwordOld')}
                                </FormGroup>
                                <FormGroup>
                                    <Label>Mật khẩu mới</Label>
                                    <Input type="password" name="password" value={this.state.password}
                                           onChange={this.onInputChange} required/>
                                    {this.showErrors('password')}
                                </FormGroup>
                                <Button color="primary" disabled={!this.validForm()}
                                        className={`${this.validForm() ? 'text-uppercase' : 'disabled text-uppercase'}`}>{this.state.isUpdate ?
                                    <Spinner size="sm" type="grow"/> : ''}Thay đổi</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default ChangePassword;
