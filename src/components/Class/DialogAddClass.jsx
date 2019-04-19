import React from 'react';
import {
    Button,  FormGroup, Input,
    Modal, ModalBody, ModalFooter,
    ModalHeader

} from 'reactstrap';

import {connect} from "react-redux";
import Datetime from "react-datetime";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";




class DialogAddClass extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.renderEndDate = this.renderEndDate.bind(this);
        this.renderStartDate = this.renderStartDate.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.add = this.add.bind(this);
        this.open = this.open.bind(this);
        this.renderOptionTeacher = this.renderOptionTeacher.bind(this);
        this.handleChangeOpen = this.handleChangeOpen.bind(this);
        this.state = props.classData
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleChangeOpen(event){
        this.setState({open: event.target.checked });
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
        if (this.props.listTeacher) {
            return this.props.listTeacher.map((teacher) => {
                return <option key={teacher.id} value={teacher.id}>{`${teacher.name} (${teacher.skype})`}</option>
            })
        }
    }
    open(){
        this.setState(this.props.classData);
    }
    render() {
        let {name, teacherId,id,open} = this.state;
        let title = 'Thêm lớp học';
        if(id){
            title = 'Cập nhật lớp học';
        }
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}  onOpened={this.open} className="modal-dialog-centered">
                <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
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
                            <Input type="select" className="custom-select" value={teacherId} name="teacherId"
                                   onChange={this.onInputChange} invalid={!teacherId}>
                                <option value=''/>
                                {this.renderOptionTeacher()}
                            </Input>
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
