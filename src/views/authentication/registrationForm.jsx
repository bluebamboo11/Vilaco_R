import React from 'react';

import img1 from '../../assets/images/logo-icon.png';
import FormSteps from '../steps/steps.jsx';
import img2 from '../../assets/images/background/login-register.jpg';
import {Row} from "reactstrap";

const sidebarBackground = {
    'backgroundImage': `url(${img2})`,
    'backgroundPosition': 'bottom center',
    'backgroundRepeat': 'no-repeat'
};

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);

    }


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
