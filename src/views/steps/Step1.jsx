import React, {Component} from 'react';
import {Button, Spinner} from "reactstrap";

//Bước 1
export default class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdate: false,
        };
    }

    componentDidMount() {
        //Kiểm tra đẵ đăng ký hay chưa nếu có chuyển qua bươc 5
        if(this.props.active === 'unActive'){
            this.props.jumpToStep(4);
            return;
        }
        //Kiểm tra đã xac thức email. Nếu có chuyển qua bước 2
        if (this.props.user && this.props.user.emailVerified) {
            this.props.jumpToStep(1)
        }
    }
    //Tọa giao diện bược 1;
    render() {
        return (
            <div className="step step1 mt-5 ">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6">
                        <div className="">
                            <h4>Chào mừng</h4>
                            <h5>Một email đã được gửi đến địa chỉ của bạn. bản cần xác nhận để tiếp tục các bước đăng
                                ký</h5>
                            <Button style={{marginTop: 60}} color="primary"
                                    disabled={this.state.isUpdate}>{this.state.isUpdate ?
                                <Spinner size="sm" type="grow"/> : ''}Gửi lại email</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
