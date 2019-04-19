import React from 'react';
import {connect} from "react-redux";
import {Badge} from "reactstrap";
import {isLoadSelect, selectClass} from "../../redux/actions";
import {userService} from "../../firebase";

class MonthDataClass extends React.Component {
    constructor(props) {
        super(props);
        this.getTeacherById = this.getTeacherById.bind(this);
        this.renderStatus = this.renderStatus.bind(this);
        this.select = this.select.bind(this)
    }

    select() {
        this.props.dispatch(selectClass(this.props.classData));
        this.props.dispatch(isLoadSelect(true));
        userService.getAllStudentByClass(this.props.classData.id, (listStudent) => {
                this.props.dispatch(isLoadSelect(false));
                this.props.dispatch(selectClass({...this.props.classData, listStudent: listStudent}));
        })
    }

    getTeacherById(id) {
        let teacher = {name:''};
        this.props.listTeacher.forEach((data) => {
            if (data.id === id) {
                teacher = data;
            }
        });
        return teacher;
    }

    renderStatus() {
        if (this.props.classData.open) {
            return <Badge color="success">Hoạt động</Badge>
        }
        return <Badge color="danger"> Đóng</Badge>
    }

    render() {
        let {name, startDate, endDate, teacherId} = this.props.classData;
        let classTr = "row-use";
        if (this.props.select && this.props.select.id === this.props.classData.id) {
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
                    <div>{this.getTeacherById(teacherId).name}</div>
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
