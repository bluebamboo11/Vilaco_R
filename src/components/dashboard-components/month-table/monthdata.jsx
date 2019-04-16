import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {isLoadSelect, selectStudent} from "../../../redux/actions";
import {Badge} from "reactstrap";
import {contractService, classService} from "../../../firebase";

class Monthdata extends React.Component {
    constructor(props) {
        super(props);
        this.selectStudent = this.selectStudent.bind(this);
        this.renderValidate = this.renderValidate.bind(this)
    }

    selectStudent() {
        this.props.dispatch(selectStudent({...this.props.user}));

        let listPromise = [null, null];
        if (this.props.user.contractId) {
            listPromise[0] = contractService.getContractById(this.props.user.contractId);

        }
        if (this.props.user.classId) {
            listPromise[1] = classService.getClassById(this.props.user.classId);
        }
        if (listPromise[1] && listPromise[0]) {
            this.props.dispatch(isLoadSelect(true));
            listPromise.push(contractService.getContractById(this.props.user.contractId));
            Promise.all(listPromise).then((listDoc) => {
                const user = {...this.props.user};
                if (listDoc[0] && listDoc[0].exists) {
                    user.contractName = listDoc[0].data().name;
                }
                if (listDoc[1] && listDoc[1].exists) {
                    user.className = listDoc[1].data().name;
                }
                this.props.dispatch(isLoadSelect(false));
                this.props.dispatch(selectStudent(user));
            });

        }

    }


    renderValidate() {
        if (this.props.user.validate) {
            return <Badge color="success">Xác thực</Badge>
        }
        return <Badge color="warning"> Chưa xác thực</Badge>
    }

    render() {
        let {avatar, name, email, city, phone, type, skype} = this.props.user;
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
            <tr className="row-use" onClick={this.selectStudent}>
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
