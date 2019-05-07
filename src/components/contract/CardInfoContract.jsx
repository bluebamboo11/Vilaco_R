import React from 'react';
import {
    Button,
    Card,
    CardBody, Modal, ModalBody, ModalFooter, ModalHeader,


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
import {addListContract, selectContract, selectEmployee} from "../../redux/actions";


class CardInfoContract extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.toggle = this.toggle.bind(this);
        this.updateContract = this.updateContract.bind(this);
        this.getEmployee = this.getEmployee.bind(this);
        this.removeContract = this.removeContract.bind(this);
        this.toggleRemove = this.toggleRemove.bind(this);
        this.state = {modal: false, modalRemove: false}

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
                            <TableCell>Số điện thoại</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.contract.listStudent.map((row, index) => (
                            <TableRow key={row.uid} className={index % 2 === 0 ? 'cell-c' : ''}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell>{row.birthday}</TableCell>
                                <TableCell>{row.phone}</TableCell>
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
            this.props.listContract.forEach((contract, index) => {
                if (contract.id === data.id) {
                    this.props.listContract[index] = data;
                    this.props.dispatch(addListContract(this.props.listContract.concat()));
                }
            });
            this.props.dispatch(selectContract({...data}))
        })
    }

    removeContract() {
        this.toggleRemove();
        contractService.removeContract(this.props.contract.id).then(() => {
            this.props.listContract.forEach((contract, index) => {
                if (this.props.contract && contract.id === this.props.contract.id) {
                    this.props.listContract.splice(index, 1);
                    this.props.dispatch(addListContract(this.props.listContract.concat()));
                    this.props.dispatch(selectContract(null))
                }
            });
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

    toggleRemove() {
        this.setState(prevState => ({
            modalRemove: !prevState.modalRemove
        }));
    }

    render() {
        const admin = this.props.user.admin || this.props.user.superAdmin;
        if (!this.props.contract) {
            return <Card className="card-info"/>
        }
        const isRemove = !this.props.contract.listStudent || this.props.contract.listStudent.length === 0;
        let {name} = this.props.contract;
        return (
            <Card className="card-info">
                <Modal isOpen={this.state.modalRemove} toggle={this.toggleRemove} className="modal-dialog-centered">
                    <ModalHeader className="border-0" toggle={this.toggleRemove}>Xóa Đơn hàng</ModalHeader>
                    <ModalBody>
                        {isRemove ? <span>Bạn chắc chắn muốn xóa Đơn hàng  <span style={{color: 'blue',}}>{name}</span></span> : 'Không thể xóa đơn hàng đang có học viên'}
                    </ModalBody>
                    <ModalFooter className="border-0">
                        {isRemove && <Button color="danger" onClick={this.removeContract}>Xóa</Button>}
                        <Button color="secondary" onClick={this.toggleRemove}>Hủy</Button>
                    </ModalFooter>
                </Modal>
                <DialogAddContract modal={this.state.modal} toggle={this.toggle} addContract={this.updateContract}
                                   listEmployee={this.props.listEmployee} contract={this.props.contract}
                                   onRemove={this.toggleRemove}/>
                {this.props.loadSelect && <Loading/>}
                <div className="card-header card-header-custom justify-content-center">
                    <h4>Đơn hàng : {name}</h4>
                    <h5 className="m-0">Nhân viên : {this.getEmployee().name}</h5>
                    {admin&& <Button className="button-cricle-custom" color="warning" onClick={this.toggle}><i
                        className="ti-pencil"/></Button>}
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
        listContract: state.listContract,
        user:state.userData
    }
};
CardInfoContract = connect(mapStateToProps)(CardInfoContract);
export default CardInfoContract

