import React, {Component} from 'react';
import Spinner from "reactstrap/es/Spinner";
//Bước 5 lưu thông tin đăng ký
export default class Step4 extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoad: true};
        this.renderContent = this.renderContent.bind(this)

    }

    renderContent() {
        //Khi đăng upload
        if (this.props.isLoad) {
            return <div style={{height: '6rem'}} className="col-12 row justify-content-center align-content-center">
                <Spinner style={{width: '3rem', height: '3rem'}} color="primary"/></div>
        }
        //khi đăng ký hoàn tất
        return <form id="Form" className="form-horizontal">
            <div className="form-group">
                <label className="col-md-12 control-label">
                    <div>
                        <h3>Cảm ơn</h3>
                        <h4>Bạn đã hoàn thành các bước đăng ký. Tài khoản của bạn sẽ được phê duyệt trong thời gian ngắn
                            nhất</h4>
                        <h4>Nếu có vấn đề thắc mắc hãy liên hệ với chúng tôi</h4>
                    </div>

                </label>
            </div>
        </form>
    }

    render() {
        return (
            <div className="step step4 mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}
