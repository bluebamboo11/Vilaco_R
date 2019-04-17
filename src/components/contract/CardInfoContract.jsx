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
import DialogAddContract from "./DialogAddContract";
import {contractService} from "../../firebase";
import {selectContract} from "../../redux/actions";


class CardInfoContract extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.toggle = this.toggle.bind(this);
        this.updateContract = this.updateContract.bind(this);
        this.getEmployee = this.getEmployee.bind(this);
        this.state = {modal: false}

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    renderTable() {
        if (this.props.contract.listStudent && this.props.contract.listStudent.length > 0) {
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
                        {this.props.contract.listStudent.map((row, index) => (
                            <TableRow key={row.id} className={index % 2 === 0 ? 'cell-c' : ''}>
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

    updateContract(data) {
        contractService.updateContract(data).then(() => {
            this.state.listContract.forEach((contract, index) => {
                if (contract.id === data.id) {
                    this.state.listContract[index] = data;
                    this.setState(() => {
                        return {
                            listContract: this.state.listContract.concat()
                        }
                    });
                }
            });

            this.props.dispatch(selectContract({...data}))
        })
    }

    getEmployee() {
        let obj = {};
        const ID = this.props.contract.employeeId;
        this.props.listEmployee.forEach((employee) => {
            if (employee.id === ID) {
                obj = employee;
            }
        });
        return obj;
    }

    render() {
        if (!this.props.contract) {
            return <Card className="card-info"/>
        }
        let {name} = this.props.contract;
        return (
            <Card className="card-info">
                <DialogAddContract modal={this.state.modal} toggle={this.toggle} addContract={this.updateContract}
                                   listEmployee={this.props.listEmployee} contract={this.props.contract}/>
                {this.props.loadSelect && <Loading/>}
                <div className="card-header card-header-custom justify-content-center">
                    <h4>Đơn hàng : {name}</h4>
                    <h5 className="m-0">Nhân viên : {this.getEmployee().name}</h5>
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
        contract: state.contractSelected,
        loadSelect: state.loadSelect,
        listEmployee: state.listEmployee,
    }
};
CardInfoContract = connect(mapStateToProps)(CardInfoContract);
export default CardInfoContract

