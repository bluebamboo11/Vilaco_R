import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    CustomInput,
    FormGroup,
    Form,
    Row,
    Col,
    Button, Spinner
} from 'reactstrap';
import img1 from '../../assets/images/logo-icon.png';
import img2 from '../../assets/images/background/login-register.jpg';
import {auth} from "../../firebase";
import {Redirect} from "react-router-dom";
import validators from "./validators";

const sidebarBackground = {
    'backgroundImage': `url(${img2})`,
    'backgroundPosition': 'bottom center',
    'backgroundRepeat': 'no-repeat'
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.login = this.login.bind(this);
        this.validators = validators;
        this.showErrors = this.showErrors.bind(this);
        this.formValidators = this.formValidators.bind(this);
        this.validForm = this.validForm.bind(this);
        this.changeKeepLogin = this.changeKeepLogin.bind(this);
        this.state = {isLogin: false, email: '', password: '',isLoadLogin:false,isKeepLogin:true}
    }


    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.formValidators([event.target.name], event.target.value);
    }


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

    getError(code) {
        switch (code) {
            case 'auth/invalid-email':
                return "Email không hợp lệ";
            case 'auth/user-not-found':
                return "Email này chưa được đăng ký";
            case 'auth/wrong-password':
                return "Mật khẩu chưa chính xác";
            default:
                return;
        }
    }

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

    handleClick() {
        const elem = document.getElementById('loginform');
        elem.style.transition = 'all 2s ease-in-out';
        elem.style.display = 'none';
        document.getElementById('recoverform').style.display = 'block';
    }

    login(event) {
        if (this.validForm()&&!this.state.isLoadLogin) {
            this.setState({isLoadLogin: true});
            console.log(this.state.isKeepLogin);
            auth.doSignInWithEmailAndPassword(this.state.email, this.state.password,this.state.isKeepLogin).then((user) => {
                if (user) {
                    this.setState({isLogin: true,isLoadLogin:false})
                }
            }).catch((error) => {
                this.setState({isLoadLogin:false});
                const textErr = this.getError(error.code);
                if (textErr === 'Mật khẩu chưa chính xác') {
                    this.validators.password.errors = [textErr];
                    this.validators['password'].valid = false;
                    this.forceUpdate();
                    return
                }
                if (textErr) {
                    console.log(textErr);
                    this.validators.email.errors = [textErr];
                    this.validators['email'].valid = false;
                    this.forceUpdate()
                }
            });
        }

        event.preventDefault();
    }
    changeKeepLogin(){
        this.setState({
           isKeepLogin: !this.state.isKeepLogin
        });
    }
    render() {
        if (this.state.isLogin) {
            return <Redirect to={'/profile'}/>
        }
        return <div className="">
            {/* --------------------------------------------------------------------------------*/}
            {/* Login Cards*/}
            {/* --------------------------------------------------------------------------------*/}
            <div className="auth-wrapper d-flex no-block justify-content-center align-items-center"
                 style={sidebarBackground}>
                <div className="auth-box on-sidebar">
                    <div id="loginform">
                        <div className="logo">
                            <span className="db"><img src={img1} alt="logo"/></span>
                            <h5 className="font-medium mb-3">Đăng nhập Vilaco</h5>
                        </div>
                        <Row>
                            <Col xs="12">
                                <Form className="mt-3" id="loginform" onSubmit={this.login}>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ti-user"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="email" onChange={this.onInputChange} name="email"
                                               value={this.state.email} placeholder="Email tài khoản" required/>
                                    </InputGroup>
                                    {this.showErrors('email')}
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="ti-pencil"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" onChange={this.onInputChange} name="password"
                                               value={this.state.password} placeholder="Mật khẩu" required/>
                                    </InputGroup>
                                    {this.showErrors('password')}
                                    <div className="d-flex no-block align-items-center mb-3">
                                        <CustomInput type="checkbox" defaultChecked={this.state.isKeepLogin} id="exampleCustomCheckbox" onChange={this.changeKeepLogin}
                                                     label="Duy trì đăng nhập"/>
                                        <div className="ml-auto">
                                            <a href="#recoverform" id="to-recover" onClick={this.handleClick}
                                               className="forgot text-dark float-right"><i
                                                className="fa fa-lock mr-1"/> Quên mật khẩu ?</a>
                                        </div>
                                    </div>
                                    <Row className="mb-3">
                                        <Col xs="12">
                                            <Button color="primary" size="lg" type="submit" block
                                                    disabled={!this.validForm()||this.state.isLoadLogin}
                                                    className={`${this.validForm()||this.state.isLoadLogin ? '' : 'disabled'}`}>{this.state.isLoadLogin ?
                                                <Spinner className="load-login" type="grow"/> : ''}Đăng Nhập</Button>
                                        </Col>
                                    </Row>

                                    <div className="text-center">
                                        Không có tài khoản <a href="/authentication/register"
                                                              className="text-info ml-1"><b>Đăng Ký</b></a>
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                    <div id="recoverform">
                        <div className="logo">
                            <span className="db"><img src={img1} alt="logo"/></span>
                            <h5 className="font-medium mb-3">Recover Password</h5>
                            <span>Enter your Email and instructions will be sent to you!</span>
                        </div>
                        <Row className="mt-3">
                            <Col xs="12">
                                <Form action="/dashbaord">
                                    <FormGroup>
                                        <Input type="text" name="uname" bsSize="lg" id="Name" placeholder="Username"
                                               required/>
                                    </FormGroup>
                                    <Row className="mt-3">
                                        <Col xs="12">
                                            <Button color="danger" size="lg" type="submit" block>Reset</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Login;
