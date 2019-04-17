import React from 'react';
import {
    Button, FormGroup, Input,
    Modal, ModalBody, ModalFooter,
    ModalHeader

} from 'reactstrap';

import {connect} from "react-redux";
import Datetime from "react-datetime";


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
        this.state = props.contract
    }


    componentDidMount() {

    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onDateChange(date, key) {
        this.setState({
            [key]: date.format('DD/MM/YYYY')
        });
    }

    add() {
        this.props.toggle();
        this.props.addContract(this.state)
    }

    renderExamDay(props) {
        return <Input {...props} value={this.state.examDay}
                      placeholder="Ngày / Tháng / Năm" invalid={!this.state.examDay}/>
    }

    renderDepartureDate(props) {
        return <Input {...props} value={this.state.departureDate}
                      placeholder="Ngày / Tháng / Năm" invalid={!this.state.departureDate}/>
    }

    renderOptionEmployee() {
        if (this.props.listEmployee) {
            return this.props.listEmployee.map((employee) => {
                return <option key={employee.id} value={employee.id}>{employee.name}</option>
            })
        }
        return null

    }
    open(){
        this.setState(this.props.contract);
    }
    render() {
        let {name, employeeId, syndication, company, salary, city,open,id} = this.state;
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
                                locale="vi"
                                timeFormat={false}
                                closeOnSelect={true}
                                renderInput={this.renderDepartureDate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Trạng thái</label>
                            <Input type="select" className="custom-select" value={open} name="open"
                                   onChange={this.onInputChange} >
                                <option  value={false}>Đóng</option>
                                <option  value={true}>Hoạt động</option>
                            </Input>
                        </FormGroup>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.add}>Lưu</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                </ModalFooter>
            </Modal>

        );
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.listUser
    }
};
DialogAddContract = connect(mapStateToProps)(DialogAddContract);
export default DialogAddContract;
