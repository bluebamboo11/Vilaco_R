import React from 'react';
import {connect} from "react-redux";
import {isLoadSelect, selectEmployee} from "../../redux/actions";
import {contractService} from "../../firebase";

class MonthdataJapan extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
    }

    select() {
        this.props.dispatch(selectEmployee(this.props.employee));
        this.props.dispatch(isLoadSelect(true));
        contractService.getAllContractByEmployee(this.props.employee.id, (listData) => {
            this.props.dispatch(isLoadSelect(false));
            this.props.dispatch(selectEmployee({...this.props.employee, listContract: listData}));
        });

    }

    render() {
        let {name, skype, phone, gender} = this.props.employee;
        let classTr = "row-use";
        if (this.props.select && this.props.select.id === this.props.employee.id) {
            classTr = classTr + ' select-row'
        }
        return (
            <tr className={classTr} onClick={this.select}>
                <td>
                    <h6 className="font-medium mb-0">{name}</h6>
                </td>
                <td>
                    <div>{skype}</div>
                </td>
                <td>
                    <div>{phone}</div>
                </td>
                <td>
                    <div>{gender === '1' ? 'Nam' : 'Nữ'}</div>
                </td>

            </tr>
        );


    }
}

const mapStateToProps = state => {
    return {
        select: state.employeeSelected,
    }
};

MonthdataJapan = connect(mapStateToProps)(MonthdataJapan);
export default MonthdataJapan;
