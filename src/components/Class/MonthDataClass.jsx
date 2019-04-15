import React from 'react';
import {connect} from "react-redux";
import {Badge} from "reactstrap";
import {selectClass, selectContract} from "../../redux/actions";

class MonthDataClass extends React.Component {
    constructor(props) {
        super(props);
        this.getTeacherById = this.getTeacherById.bind(this);
        this.renderStatus = this.renderStatus.bind(this);
        this.select = this.select.bind(this)
    }

    select() {
        this.props.dispatch(selectClass(this.props.dataClass))
    }

    getTeacherById(id) {
        let teacher = null;
        this.props.listTeacher.forEach((data) => {
            if (data.id === id) {
                teacher = data;
            }
        });
        return teacher;
    }

    renderStatus() {
        if (this.props.dataClass.open) {
            return <Badge color="success">Hoạt động</Badge>
        }
        return <Badge color="danger"> Đóng</Badge>
    }

    render() {
        let {name, startDate, endDate, teacher} = this.props.dataClass;
        let classTr = "row-use";
        if (this.props.select && this.props.select.id === this.props.dataClass.id) {
            classTr = classTr + ' select-row'
        }
        return (
            <tr className={classTr} onClick={this.select}>
                <td>
                    <h6 className="font-medium mb-0">{name}</h6>
                </td>
                <td>
                    <div>{startDate}</div>
                </td>
                <td>
                    <div>{endDate}</div>
                </td>
                <td>
                    <div>{this.getTeacherById(teacher).name}</div>
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
        select: state.classSelected,
    }
};

MonthDataClass = connect(mapStateToProps)(MonthDataClass);
export default MonthDataClass;
