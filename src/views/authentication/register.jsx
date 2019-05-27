import React from 'react';
import {
    Input,
    CustomInput,
    FormGroup,
    Form,
    Row,
    Col,
    Button
} from 'reactstrap';
import {auth} from "../../firebase";
import img1 from '../../assets/images/logo-icon.png';
import img2 from '../../assets/images/background/login-register.jpg';
import validators from "./validators";


const sidebarBackground = {
    'backgroundImage': `url(${img2})`,
    'backgroundPosition': 'bottom center',
    'backgroundRepeat': 'no-repeat'
};
//Trang đăng ký
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.showErrors = this.showErrors.bind(this);
        this.formValidators = this.formValidators.bind(this);
        this.validForm = this.validForm.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.singUp = this.singUp.bind(this);
        this.onCheckBoxChange = this.onCheckBoxChange.bind(this);
        this.validators = validators;
        this.state = {email: '', password: '', password2: '',  isShow: false}
    }
    //Gủi thông tin đăng ký
    singUp(event) {
        event.preventDefault();
        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
           window.location.href ='/xac-thuc/mau-dang-ky'
        }).catch((error) => {
            const textError = Register.getError(error.code);
            if (textError.email) {
                this.validators['email'].errors = [textError.email];
                this.validators['email'].valid = false;
            } else {
                this.validators['password'].errors = [textError.password];
                this.validators['password'].valid = false;
            }
            this.forceUpdate()
        });

    }
    //Đặt giá trị cho ô input
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.formValidators([event.target.name], event.target.value);
    }
    //Đặt giá trị cho checkbox
    onCheckBoxChange() {
        this.setState((state) => {
            return {...state, isShow: !state.isShow};
        });
    }
    //Kiểm tra email ,pass hợp lệ hay không
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

    // kiểm tra trạng thái có thể đăng nhập hay không (Check email,pass)
    validForm() {
        let status = true;
        Object.keys(this.validators).forEach(field => {
            if (field === 'email' || field === 'password') {
                if (!this.validators[field].valid) {
                    status = false;
                }
            }
        });
        return status;
    }
//Hiện thị thông báo lỗi
    showErrors(fieldName) {
        const result = '',
            validator = this.validators[fieldName];
        if (validator && !validator.valid) {
            const errors = validator.errors.map((info, index) => <span className="error"
                                                                       key={index}>* {info}<br/></span>);
            return (
                <div className="error mb-2">
                    {errors}
                </div>
            );
        }
        return result;

    }
    // trả lại thông báo khi lỗi đăng ký
    static getError(code) {
        switch (code) {
            case 'auth/email-already-in-use':
                return {email: "Email đã được sử dụng. Vui lòng sử dụng email khác"};
            case 'auth/invalid-email':
                return {email: "Email không hợp lệ. Vui lòng sử dụng email khác"};
            case 'auth/operation-not-allowed':
                return {email: "Hiện không thể đăng ký. Liên hệ với quản lý để biết thêm chi tiết"};
            case 'auth/weak-password':
                return {password: "Mật khẩu không đủ mạnh. Vui lòng sử dung mật khẩu khác"};
            default:
                return;
        }
    }
    //Tạo giao diện đăng ký
    render() {

        return <div className="">
            {/* --------------------------------------------------------------------------------*/}
            {/* Register Cards*/}
            {/* --------------------------------------------------------------------------------*/}
            <div className="auth-wrapper d-flex no-block justify-content-center align-items-center"
                 style={sidebarBackground}>
                <div className="auth-box on-sidebar">
                    <div id="loginform">
                        <div className="logo">
                            <span className="db"><img src={img1} alt="logo"/></span>
                            <h5 className="font-medium mb-3">Đăng ký Vilaco</h5>
                        </div>
                        <Row>
                            <Col xs="12">
                                <Form className="mt-3" id="loginform" onSubmit={this.singUp}>
                                    <FormGroup className="mb-3">
                                        <Input type="text" name="email" id="email" placeholder="Email" bsSize="lg"
                                               onChange={this.onInputChange} value={this.state.email}
                                               required/>
                                        {this.showErrors('email')}
                                    </FormGroup>
                                    <FormGroup className="mb-3">
                                        <Input type={this.state.isShow ? 'text' : 'password'} name="password"
                                               id="password" placeholder="Mật Khẩu"
                                               onChange={this.onInputChange} value={this.state.password}
                                               bsSize="lg" required/>
                                        {this.showErrors('password')}
                                    </FormGroup>

                                    <CustomInput type="checkbox" id="exampleCustomCheckbox" name="isShow"
                                                 onChange={this.onCheckBoxChange} value={this.state.isShow}
                                                 label="Hiển thị mật khẩu"/>
                                    <Row className="mb-3 mt-3">
                                        <Col xs="12">
                                            <Button color="primary" size="lg" type="submit"
                                                    block disabled={!this.validForm()}
                                                    className={`${this.validForm() ? 'text-uppercase' : 'disabled text-uppercase'}`}>Đăng
                                                ký</Button>
                                        </Col>
                                    </Row>
                                    <div className="text-center">
                                        Đã có tài khoản? <a href="/xac-thuc/dang-nhap"
                                                            className="text-info ml-1"><b>Đăng nhập</b></a>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Register;
