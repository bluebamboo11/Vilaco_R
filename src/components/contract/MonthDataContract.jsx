import React from 'react';
import {connect} from "react-redux";
import {isLoadSelect, selectContract} from "../../redux/actions";
import {userService} from "../../firebase";
import {Badge} from "reactstrap";

class MonthDataContract extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
        this.renderStatus = this.renderStatus.bind(this)
    }

    select() {
        this.props.dispatch(selectContract(this.props.contract));
        this.props.dispatch(isLoadSelect(true));
        userService.getAllStudentByContract(this.props.contract.id, (listStudent) => {
            this.props.dispatch(selectContract({...this.props.contract, listStudent: listStudent}));
            this.props.dispatch(isLoadSelect(false));
        })

    }

    renderStatus() {
        if (this.props.contract.open && JSON.parse(this.props.contract.open)) {
            return <Badge color="success">Hoạt động</Badge>
        }
        return <Badge color="danger"> Đóng</Badge>
    }

    render() {
        let {name, syndication, company, salary, city, departureDate, examDay} = this.props.contract;
        let classTr = "row-use";
        if (this.props.select && this.props.select.id === this.props.contract.id) {
            classTr = classTr + ' select-row'
        }
        return (
            <tr className={classTr} onClick={this.select}>
                <td>
                    <h6 className="font-medium mb-0">{name}</h6>
                </td>
                <td>
                    <div>{syndication}</div>
                </td>
                <td>
                    <div>{company}</div>
                </td>
                <td>
                    <div>{examDay}</div>
                </td>
                <td>
                    <div>{departureDate}</div>
                </td>
                <td>
                    <div>{salary}</div>
                </td>
                <td>
                    <div>{city}</div>
                </td>
                <td>
                    <div>{this.renderStatus()}</div>
                </td>
            </tr>
        );


    }
}

const mapStateToProps = state => {
    return {
        select: state.contractSelected,
    }
};

MonthDataContract = connect(mapStateToProps)(MonthDataContract);
export default MonthDataContract;
