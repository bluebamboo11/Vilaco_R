import React from 'react';
import {connect} from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";

//Thông tin hoc viên trong card-prpfile.jsx
class InfoStudent extends React.Component {


    render() {
        let {phone, gender, address, district, city, code, hobby, forte, weakness, birthday, town, contractName, className, phoneFamily, status, blood} = this.props.user;
        return (
            <div className="text-left pt-4 p-2 content-info-st">
                <PerfectScrollbar option={{suppressScrollX: true}}>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Đơn hàng
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{contractName}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Lớp
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{className}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2 pt-2">
                            Quê quán
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="row ">
                                <div className="col-sm-12">
                                    <div
                                        className="form-control form-control-custom">{address + ', ' + town + ', ' + district + ', ' + city}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Giới tính
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{Number(gender) === 1 ? 'Nam' : 'Nữ'}</div>

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
                            Số điện thoại gia đình
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{phoneFamily}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Ngày sinh
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{birthday}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Số CMT, Căn cước
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{code}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Nhóm máu
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{blood}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Sở thích
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{hobby}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Sở trường
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{forte}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Sở đoản
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{weakness}</div>
                        </div>
                    </div>
                    <div className="info-group row">
                        <div className="col-sm-3 col-form-div pt-2">
                            Trạng thái
                        </div>
                        <div className="col-sm-9 pb-2">
                            <div className="form-control form-control-custom">{status}</div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.student,
        listContract: state.listContract
    }
};
InfoStudent = connect(mapStateToProps)(InfoStudent);
export default InfoStudent;
