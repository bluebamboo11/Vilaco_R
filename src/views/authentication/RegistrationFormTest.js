import React from 'react';
import img2 from '../../assets/images/background/login-register.jpg';
import {Row} from "reactstrap";
import FormStepsTest from "../steps/formStepsTest";

const sidebarBackground = {
    'backgroundImage': `url(${img2})`,
    'backgroundPosition': 'bottom center',
    'backgroundRepeat': 'no-repeat'
};

class RegistrationFormTest extends React.Component {

    render() {

        return <div className="auth-wrapper   d-flex" style={sidebarBackground}>
            {/* --------------------------------------------------------------------------------*/}
            {/* Login2 Cards*/}
            {/* --------------------------------------------------------------------------------*/}
            <div className="container">
                <div>
                    <Row className="no-gutters justify-content-center" style={{marginTop:30}}>
                        <FormStepsTest/>
                    </Row>
                </div>
            </div>
        </div>;
    }
}

export default RegistrationFormTest;
