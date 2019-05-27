import React from 'react';
import {
    Button, FormGroup, Input,
    Modal, ModalBody, ModalFooter,
    ModalHeader

} from 'reactstrap';

import {connect} from "react-redux";
import Datetime from "react-datetime";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

//Của số chỉnh sủa đơn hàng
class DialogAddContract extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.renderDepartureDate = this.renderDepartureDate.bind(this);
        this.renderExamDay = this.renderExamDay.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.add = this.add.bind(this);
        this.open = this.open.bind(this);
        this.renderOptionEmployee = this.renderOptionEmployee.bind(this);
        this.handleChangeOpen = this.handleChangeOpen.bind(this);
        this.remove = this.remove.bind(this);
        this.toggleTooltip = this.toggleTooltip.bind(this);
        this.state = {...props.contract,tooltipOpen:true}
    }

    //đóng mở trạng thái đơn hàng
    handleChangeOpen(event){
        this.setState({open: event.target.checked });
    }
    //Đặ lại giá trị khi chỉnh sửa
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    //Đặt lại giá tri thời gian
    onDateChange(date, key) {
        this.setState({
            [key]: date.format('DD/MM/YYYY')
        });
    }
    //Thêm mưới đơn hàng
    add() {
        this.props.toggle();
        this.props.addContract(this.state)
    }
    //Xóa đơn hàng
    remove(){
        this.props.toggle();
        this.props.onRemove()
    }
    //Tạo ngày thi tuyển
    renderExamDay(props) {
        return <Input {...props} value={this.state.examDay}
                      placeholder="Ngày / Tháng / Năm" invalid={!this.state.examDay}/>
    }
    //Tạo ngày xuất cảnh
    renderDepartureDate(props) {
        return <Input {...props} value={this.state.departureDate}
                      placeholder="Ngày / Tháng / Năm" invalid={!this.state.departureDate}/>
    }
    //tạo danh sách lưa chọn nhân viên
    renderOptionEmployee() {
        if (this.props.listEmployee) {
            return this.props.listEmployee.map((employee) => {
                return <option key={employee.id} value={employee.id}>{employee.name}</option>
            })
        }
        return null

    }
    //Chọn một đơn hàng khi mới
    open(){
        this.setState(this.props.contract);
    }
    //Đóng mở thông báo
    toggleTooltip() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    render() {
        let {name, employeeId, syndication, company, salary, city,open,id,job} = this.state;
        let title = 'Thêm đơn hàng';
        if(id){
            title = 'Cập nhật đơn hàng';
        }
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}  onOpened={this.open} className="modal-dialog-centered">
                <ModalHeader toggle={this.toggle}> {title} </ModalHeader>
                <ModalBody>
                    <form onSubmit={this.doUpdate}>
                        <FormGroup>
                            <label>Tên đơn hàng</label>
                            <Input type="text" className="form-control" value={name} name="name"
                                   onChange={this.onInputChange} invalid={!name}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Nghề nghiệp</label>
                            <Input type="text" className="form-control" value={job} name="job"
                                   onChange={this.onInputChange} invalid={!job}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Nhân viên phòng nhật</label>
                            <Input type="select" className="custom-select" value={employeeId} name="employeeId"
                                   onChange={this.onInputChange} invalid={!employeeId}>
                                <option value=''/>
                                {this.renderOptionEmployee()}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <label>Nghiệp đoàn</label>

                            <Input value={syndication} name="syndication" onChange={this.onInputChange}
                                   invalid={!syndication}
                                   className="form-control"
                            />

                        </FormGroup>
                        <FormGroup>
                            <label>Công ty</label>
                            <Input value={company} name="company" onChange={this.onInputChange}
                                   invalid={!company}
                                   className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Lương</label>
                            <Input value={salary} name="salary" onChange={this.onInputChange}
                                   invalid={!salary}
                                   className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Tỉnh</label>
                            <Input value={city} name="city" onChange={this.onInputChange}
                                   invalid={!city}
                                   className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Ngày thi tuyển</label>
                            <Datetime
                                onChange={(date) => {
                                    this.onDateChange(date, 'examDay')
                                }}
                                renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                locale="vi"
                                timeFormat={false}
                                closeOnSelect={true}
                                renderInput={this.renderExamDay}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Ngày dự kiến xuất cảnh</label>
                            <Datetime
                                onChange={(date) => {
                                    this.onDateChange(date, 'departureDate')
                                }}
                                renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                locale="vi"
                                timeFormat={false}
                                closeOnSelect={true}
                                renderInput={this.renderDepartureDate}
                            />
                        </FormGroup>
                        <FormGroup className="m-0">
                            <FormControlLabel
                                className="switch-custom"
                                control={
                                    <Switch
                                        checked={open}
                                        onChange={this.handleChangeOpen}
                                        color="secondary"
                                        value="open"
                                    />
                                }
                                label="Hoạt động"
                            />
                        </FormGroup>

                    </form>
                </ModalBody>
                <ModalFooter>
                    {id&&this.props.user.superAdmin&& <Button color="danger" className="mr-auto"  onClick={this.remove}>Xóa</Button>}
                    <Button color="success" onClick={this.add}>Lưu</Button>
                    <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                </ModalFooter>
            </Modal>

        );
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.listUser,
        user:state.userData
    }
};
DialogAddContract = connect(mapStateToProps)(DialogAddContract);
export default DialogAddContract;
