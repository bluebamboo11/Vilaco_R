import React from 'react';
import {
    Button,
    Card,
    CardBody,


} from 'reactstrap';


import {connect} from "react-redux";
import Loading from "../Loading/Loading";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import PerfectScrollbar from "react-perfect-scrollbar";
import {classService} from "../../firebase";
import {addListClass, addListContract, selectClass, selectContract} from "../../redux/actions";
import DialogAddClass from "./DialogAddClass";


class CardInfoClass extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.toggle = this.toggle.bind(this);
        this.updateClass = this.updateClass.bind(this);
        this.getTeacherById = this.getTeacherById.bind(this);
        this.state = {modal: false}

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    renderTable() {
        if (this.props.classData.listStudent && this.props.classData.listStudent.length > 0) {
            return (
                <PerfectScrollbar option={{suppressScrollX: true}}>
                    <h5>Danh sách học viên</h5><Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tên </TableCell>
                            <TableCell>Ngày sinh</TableCell>
                            <TableCell>email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.classData.listStudent.map((row, index) => (
                            <TableRow key={row.uid} className={index % 2 === 0 ? 'cell-c' : ''}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.birthday}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table></PerfectScrollbar>)
        }

        return (<div className="row justify-content-center align-items-center h-100 w-100"><h5>Chưa có học viên</h5>
        </div>)

    }

    updateClass(data) {
        classService.updateClass(data).then(() => {
            this.props.listClass.forEach((classData, index) => {
                if (classData.id === data.id) {
                    this.props.listClass[index] = data;
                    this.props.dispatch(addListClass(this.props.listClass.concat()));
                }
            });
            this.props.dispatch(selectClass({...data}))
        })
    }

    getTeacherById(id) {
        let teacher = {name: ''};
        if (this.props.listTeacher) {
            this.props.listTeacher.forEach((data) => {
                if (data.id === id) {
                    teacher = data;
                }
            });
        }
        return teacher;
    }

    render() {
        if (!this.props.classData) {
            return <Card className="card-info"/>
        }
        let {name, teacherId} = this.props.classData;
        return (
            <Card className="card-info">
                <DialogAddClass modal={this.state.modal} toggle={this.toggle} add={this.updateClass}
                                listTeacher={this.props.listTeacher} classData={this.props.classData}/>
                {this.props.loadSelect && <Loading/>}
                <div className="card-header card-header-custom justify-content-center">
                    <h4>Lớp : {name}</h4>
                    <h5 className="m-0">Giáo viên : {this.getTeacherById(teacherId).name}</h5>
                    <Button className="button-cricle-custom" color="warning" onClick={this.toggle}><i
                        className="ti-pencil"/></Button>
                </div>
                <CardBody className="little-profile" style={{height: 'calc(100% - 77px)'}}>
                    {this.renderTable()}
                </CardBody>
            </Card>
        );
    }
}


const mapStateToProps = state => {
    return {
        classData: state.classSelected,
        loadSelect: state.loadSelect,
        listEmployee: state.listEmployee,
        listClass: state.listClass,
        listTeacher: state.listTeacher,
    }
};
CardInfoClass = connect(mapStateToProps)(CardInfoClass);
export default CardInfoClass

