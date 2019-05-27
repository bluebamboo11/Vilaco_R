import React from 'react';
import FormSteps from '../steps/steps.jsx';
import img2 from '../../assets/images/background/login-register.jpg';
import {Row} from "reactstrap";

const sidebarBackground = {
    'backgroundImage': `url(${img2})`,
    'backgroundPosition': 'bottom center',
    'backgroundRepeat': 'no-repeat'
};
//Trang người dùng nhập thông tin tài khoản khi đăng ký xong

class RegistrationForm extends React.Component {
    // nội dung nằm trong file ..src\views\steps\steps.jsx là thành phần   <FormSteps/>
    render() {

        return <div className="auth-wrapper   d-flex" style={sidebarBackground}>
            {/* --------------------------------------------------------------------------------*/}
            {/* Login2 Cards*/}
            {/* --------------------------------------------------------------------------------*/}
            <div className="container">
                <div>
                    <Row className="no-gutters justify-content-center" style={{marginTop:30}}>
                        <FormSteps/>
                    </Row>
                </div>
            </div>
        </div>;
    }
}

export default RegistrationForm;
