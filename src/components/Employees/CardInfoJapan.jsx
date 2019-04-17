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
import DialogAddJapan from "./DialogAddJapan";


class CardInfoJapan extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {modal: false}

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    renderTable() {
        if (this.props.employee.listContract && this.props.employee.listContract.length > 0) {
            return (
                <PerfectScrollbar option={{suppressScrollX: true}}>
                    <h5>Danh sách đơn hàng phụ trách</h5><Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tên đơn hàng</TableCell>
                            <TableCell>Tên công ty</TableCell>
                            <TableCell>Ngày thi tuyển</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.employee.listContract.map((row, index) => (
                            <TableRow key={row.id} className={index % 2 === 0 ? 'cell-c' : ''}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.company}</TableCell>
                                <TableCell>{row.examDay}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table></PerfectScrollbar>)
        }

        return (<div className="row justify-content-center align-items-center h-100 w-100"><h5>Chưa có đơn hàng nào</h5>
        </div>)

    }

    render() {
        if (!this.props.employee) {
            return <Card className="card-info"/>
        }
        let {name, skype} = this.props.employee;
        return (
            <Card className="card-info">
                <DialogAddJapan modal={this.state.modal} toggle={this.toggle} employee={this.props.employee}/>
                {this.props.loadSelect && <Loading/>}
                <div className="card-header-custom  text-center align-items-center justify-content-center">
                    <h3>{name}</h3>
                    <p className="m-0">{skype}</p>
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
        employee: state.employeeSelected,
        loadSelect: state.loadSelect,
    }
};
CardInfoJapan = connect(mapStateToProps)(CardInfoJapan);
export default CardInfoJapan

