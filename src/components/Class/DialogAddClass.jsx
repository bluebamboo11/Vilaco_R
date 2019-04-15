import React from 'react';
import {
    Button, FormGroup, Input,
    Modal, ModalBody, ModalFooter,
    ModalHeader

} from 'reactstrap';

import {connect} from "react-redux";
import Datetime from "react-datetime";


class DialogAddClass extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.renderEndDate = this.renderEndDate.bind(this);
        this.renderStartDate = this.renderStartDate.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.add = this.add.bind(this);
        this.renderOptionTeacher = this.renderOptionTeacher.bind(this);
        this.state = props.classData
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
        this.props.add(this.state)
    }

    renderEndDate(props) {
        return <Input {...props} value={this.state.endDate}
                      placeholder="Ngày / Tháng / Năm" invalid={!this.state.endDate}/>
    }

    renderStartDate(props) {
        return <Input {...props} value={this.state.startDate}
                      placeholder="Ngày / Tháng / Năm" invalid={!this.state.startDate}/>
    }

    renderOptionTeacher() {
        return this.props.listTeacher.map((teacher) => {
            return <option key={teacher.id} value={teacher.id}>{`${teacher.name} (${teacher.skype})`}</option>
        })
    }

    render() {
        let {name, teacher} = this.state;
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-dialog-centered">
                <ModalHeader toggle={this.toggle}> Thêm lớp học </ModalHeader>
                <ModalBody>
                    <form onSubmit={this.doUpdate}>
                        <FormGroup>
                            <label>Tên Lớp học</label>
                            <Input type="text" className="form-control" value={name} name="name"
                                   onChange={this.onInputChange} invalid={!name}/>
                        </FormGroup>

                        <FormGroup>
                            <label>Ngày bắt đầu</label>
                            <Datetime
                                onChange={(date) => {
                                    this.onDateChange(date, 'startDate')
                                }}
                                locale="vi"
                                timeFormat={false}
                                closeOnSelect={true}
                                renderInput={this.renderStartDate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Ngày kết thúc</label>
                            <Datetime
                                onChange={(date) => {
                                    this.onDateChange(date, 'endDate')
                                }}
                                locale="vi"
                                timeFormat={false}
                                closeOnSelect={true}
                                renderInput={this.renderEndDate}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Giáo viên phụ trách</label>
                            <Input type="select" className="custom-select" value={teacher} name="teacher"
                                   onChange={this.onInputChange} invalid={!teacher}>
                                <option value=''/>
                                {this.renderOptionTeacher()}
                            </Input>
                        </FormGroup>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.add}>Thêm</Button>{' '}
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
DialogAddClass = connect(mapStateToProps)(DialogAddClass);
export default DialogAddClass;
