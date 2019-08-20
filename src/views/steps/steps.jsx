import React, {Component} from 'react';
import StepZilla from 'react-stepzilla';
import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import Step1 from './Step1';
import Step4 from './Step4';
import Step2 from './Step2';
import Step3 from "./Step3";
import Step5 from "./Step5";
import {checkLogin} from "../../firebase/auth";
import {storage, userService} from "../../firebase";
import {checkActive} from "../../firebase/user";
import StepsTeacher from "./StepsTeacher";
//Các bược đăng ký thông tin của người dùng
class formSteps extends Component {
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
                relativeName: '',
                familyAddress: '',
                birthday: '',
                district: '',
                city: '',
                town: '',
                avatar: '',
                type: 'student',
                skype: '',
                phoneFamily: '',
                blood: ''
            }, showStep: false, uid: '', user: null, isLoad: true, active: '', isLoadSave: true
        };
        this.onStepChange = this.onStepChange.bind(this);
        this.updateStore = this.updateStore.bind(this);
        this.onChangeUse = this.onChangeUse.bind(this);
        this.save = this.save.bind(this);
        this.check = this.check.bind(this);
    }
    // Cập nhật thông tin sau mỗi bước
    updateStore(update) {
        this.setState((state) => {
            return {...state, data: {...state.data, ...update}}
        });

    }
    //theo dõi người dùng hoàn thành mỗi bước
    onStepChange(step) {
        if (step === 0 || step === 4) {
            this.setState({showStep: false})
        } else {
            this.setState({showStep: true})
        }
        if (step === 4 && this.state.active !== 'unActive') {
            //Lưu khi tới bược cuối cùng
            this.save();
        }
    }
    //Hàm gọi ra đầu tiên khi load trang
    componentDidMount() {
        this.onChangeUse()
    }
    // kiểm tra người dùng đã đăng ký hay chưa
    onChangeUse() {
        this.onAuth = checkLogin((user) => {
            if (!user) {
                window.location.href = '/xac-thuc/dang-nhap'
            }
            this.setState({user: user});
            this.check(user);
            if (user) {
                if (!user.emailVerified) {
                    user.sendEmailVerification().then(() => {
                    }).catch(function (error) {
                        console.log(error)
                    });
                }
            }
        })
    }
    //Kiểm tra xem người dùng đã được xác thực hay chưa. nếu có thì chuyển đến trang cá nhân
    check(user) {
        checkActive(user.uid, (type) => {
            this.setState({active: type, isLoad: false, isLoadSave: type !== 'unActive'})
        })
    }
    //Lưu thông tin đăng ký
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
        const user = this.state.user;
        storage.upAvatar(this.state.user.uid, userData.avatar, (url) => {
            userData.avatar = url;
            userData.email = user.email;
            userService.doCreateUser(user.uid, userData).then(() => {
                this.setState({isLoadSave: false})
            })
        })
    }

    componentWillUnmount() {
        this.onAuth();
    }

    render() {
        if (this.state.active === 'active') {
            window.location.href = '/ca-nhan'
        }
        if (this.state.isLoad) {
            return <div/>
        }
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
                    'component': <Step1 userData={this.state.data} active={this.state.active}
                                        updateStore={this.updateStore}
                                        user={this.state.user}/>,
                    'name': 'Xác nhận'
                },
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

export default formSteps;
