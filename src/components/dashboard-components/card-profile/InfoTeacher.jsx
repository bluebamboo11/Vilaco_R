import React from 'react';
import {connect} from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";


class InfoTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        let { phone, gender, skype,facebook,startDay} = this.props.user;
        return (
            <div className="text-left pt-4 p-2 content-info-st">
                <PerfectScrollbar option={{suppressScrollX:true}}>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2 pt-2">
                           Skype
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <div
                                        className="form-control form-control-custom">{skype}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2 pt-2">
                            Facebook
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <div
                                        className="form-control form-control-custom">{facebook}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Giới tính
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{gender === 1 ? 'Nam' : 'Nữ'}</div>

                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Số điện thoại
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{phone}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                           Ngày vào làm
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{startDay}</div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.student
    }
};
InfoTeacher = connect(mapStateToProps)(InfoTeacher);
export default InfoTeacher;
