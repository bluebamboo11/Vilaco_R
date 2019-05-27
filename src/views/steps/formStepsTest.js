import React, {Component} from 'react';
import StepZilla from 'react-stepzilla';
import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';

import Step4 from './Step4';
import Step2 from './Step2';
import Step3 from "./Step3";
import Step5 from "./Step5";
import {storage, userService} from "../../firebase";
import {checkActive} from "../../firebase/user";
import StepsTeacher from "./StepsTeacher";
function makeid(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
//Các bước đăng ký tài khoản test. Tương tự steps.js
class FormStepsTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: '',
                phone: '',
                address: '',
                gender: '1',
                code: '',
                hobby: '',
                forte: '',
                weakness: '',
                birthday: '',
                district: '',
                city: '',
                town: '',
                avatar: '',
                type: 'student',
                skype: '',
                phoneFamily: '',
                blood: ''
            }, showStep: true, uid: '', user: null, isLoad: true, active: '', isLoadSave: true
        };
        this.onStepChange = this.onStepChange.bind(this);
        this.updateStore = this.updateStore.bind(this);
        this.save = this.save.bind(this);
        this.check = this.check.bind(this);
    }

    updateStore(update) {
        this.setState((state) => {
            return {...state, data: {...state.data, ...update}}
        });

    }

    onStepChange(step) {
        if (step === 3 && this.state.active !== 'unActive') {
            this.save();
        }
    }



    check(user) {
        checkActive(user.uid, (type) => {
            this.setState({active: type, isLoad: false, isLoadSave: type !== 'unActive'})
        })
    }

    save() {
        const userData = {...this.state.data};
        for (let key in userData) {
            if (!userData[key]) {
                delete userData[key]
            }
        }

        if (userData.birthday) {
            userData.birthday = userData.birthday.format('DD/MM/YYYY');
        }
        storage.upAvatar(makeid(10), userData.avatar, (url) => {
            userData.avatar = url;
            userData.email = 'test_user@mail.com';
            userService.doCreateUserTest( userData).then(() => {
                this.setState({isLoadSave: false})
            })
        })
    }

    componentWillUnmount() {
        this.onAuth();
    }

    render() {

        let componentInfo = {
            'component': <Step4 userData={this.state.data} updateStore={this.updateStore}/>,
            'name': 'Thông tin cá nhân'
        };
        if (this.state.data.type !== 'student') {
            componentInfo = {
                'component': <StepsTeacher userData={this.state.data} updateStore={this.updateStore}/>,
                'name': 'Thông tin cá nhân'
            };
        }
        const steps =
            [

                {
                    'component': <Step2 userData={this.state.data} updateStore={this.updateStore}/>,
                    'name': 'Tài khoản'
                },
                {

                    'component': <Step3 userData={this.state.data} updateStore={this.updateStore}/>,
                    'name': 'Ảnh đại diện'
                },
                componentInfo,
                {
                    'component': <Step5 userData={this.state.data} updateStore={this.updateStore}
                                        isLoad={this.state.isLoadSave}/>,
                    'name': 'Hoàn thành'
                }
            ];

        return (
            <Card className="col-12">
                <CardBody className="border-bottom">
                    <CardTitle className="mb-0"><i className="mdi mdi-border-right mr-2"></i>Đăng ký</CardTitle>
                    <h6 className="card-subtitle mb-0 mt-1">Thực hiện các bước sau để hoàn thành mẫu đăng ký của
                        bạn</h6>
                </CardBody>
                <CardBody>
                    <div className="example">
                        <div className="step-progress">
                            <StepZilla
                                startAtStep={0}
                                stepsNavigation={this.state.showStep}
                                steps={steps} showNavigation={this.state.showStep}
                                nextButtonText="Tiếp tục" backButtonText="Quay lại"
                                onStepChange={this.onStepChange}
                                preventEnterSubmission={false}
                                dontValidate={false}
                                nextTextOnFinalActionStep={'Lưu'}
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>

        );
    }
}

export default FormStepsTest;
