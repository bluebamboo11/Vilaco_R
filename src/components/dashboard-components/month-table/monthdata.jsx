import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {isLoadSelect, selectStudent} from "../../../redux/actions";
import {Badge} from "reactstrap";
import {contractService, classService ,transcriptService} from "../../../firebase";
import * as moment from 'moment';
//Tạo một hàng thông tin tài khoản
class Monthdata extends React.Component {
    constructor(props) {
        super(props);
        this.selectStudent = this.selectStudent.bind(this);
        this.renderValidate = this.renderValidate.bind(this);
        this.selectTeacher = this.selectTeacher.bind(this)
    }
    //Chọn một tài khoản học viên
    selectStudent() {
        this.props.dispatch(selectStudent({...this.props.user}));
        let listPromise = [null, null];
        if (this.props.user.contractId) {
            listPromise[0] = contractService.getContractById(this.props.user.contractId);

        }
        if (this.props.user.classId) {
            listPromise[1] = classService.getClassById(this.props.user.classId);
        }
        if (listPromise[1] || listPromise[0]) {
            this.props.dispatch(isLoadSelect(true));
            Promise.all(listPromise).then((listDoc) => {
                const user = {...this.props.user};
                if (listDoc[0] && listDoc[0].exists) {
                    user.contractName = listDoc[0].data().name;
                }
                if (listDoc[1] && listDoc[1].exists) {
                    user.className = listDoc[1].data().name;
                }
                listPromise[3] = transcriptService.getAllDatabyUser(this.props.user.uid,(listTranscript)=>{
                    listTranscript.sort((a, b) => {
                        return moment(a, 'MM-YYYY').diff(moment(b, 'MM-YYYY'))
                    });
                    user.listTranscript = listTranscript;
                    this.props.dispatch(isLoadSelect(false));
                    this.props.dispatch(selectStudent(user));
                })
            });

        }

    }
    //Chọn một tài khoản giáo viên
    selectTeacher() {
        this.props.dispatch(selectStudent({...this.props.user}));
        this.props.dispatch(isLoadSelect(true));
        classService.getAllClassByTeacher(this.props.user.uid, (listClass) => {
            console.log(listClass);
            let user = {...this.props.user, listClass: listClass};
            this.props.dispatch(isLoadSelect(false));
            this.props.dispatch(selectStudent(user));
        })

    }


    //Tạo thông tin xác thực
    renderValidate() {
        if (this.props.user.validate) {
            return <Badge color="success">Xác thực</Badge>
        }
        return <Badge color="warning"> Chưa xác thực</Badge>
    }

    render() {
        let {avatar, name, email, city, phone, type, skype, birthday} = this.props.user;
        if (type === 'student') {
            return (
                <tr className="row-use" onClick={this.selectStudent}>
                    <td>
                        <span className="round"><img className="avatar" src={avatar} alt="user" width="50" height="50"/></span>
                    </td>
                    <td>
                        <h6 className="font-medium mb-0">{name}</h6>
                        <small className="text-muted">{email}</small>
                    </td>
                    <td>
                        <div>{birthday}</div>
                    </td>
                    <td>
                        <div>{city}</div>
                    </td>
                    <td>
                        <div>{phone}</div>
                    </td>
                    <td>{this.renderValidate()}</td>
                </tr>
            );
        }
        return (
            <tr className="row-use" onClick={this.selectTeacher}>
                <td>
                    <span className="round"><img className="avatar" src={avatar} alt="user" width="50"
                                                 height="50"/></span>
                </td>
                <td>
                    <h6 className="font-medium mb-0">{name}</h6>
                    <small className="text-muted">{email}</small>
                </td>
                <td>
                    <div>{skype}</div>
                </td>
                <td>
                    <div>{phone}</div>
                </td>
                <td>{this.renderValidate()}</td>
            </tr>
        )

    }
}

Monthdata.defaultProps = {
    badgeColor: 'primary'
};

Monthdata.propTypes = {
    badgeColor: PropTypes.oneOf([
        'primary',
        'success',
        'info',
        'danger',
        'warning',
        'orange',
        'cyan'
    ]),
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    badge: PropTypes.string,
    budget: PropTypes.string
};
Monthdata = connect()(Monthdata);
export default Monthdata;
