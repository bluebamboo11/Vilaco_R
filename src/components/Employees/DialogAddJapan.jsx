import React from 'react';
import {
    Button, FormGroup, Input,
    Modal, ModalBody, ModalFooter,
    ModalHeader

} from 'reactstrap';

import {connect} from "react-redux";
import {employeeService} from '../../firebase'
import {selectEmployee} from "../../redux/actions";
import Datetime from "react-datetime";


class DialogAddJapan extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.open = this.open.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
         this.state = props.employee;
    }

    onDateChange(date, key) {
        this.setState({
            [key]: date.format('YYYY')
        });
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    add() {
        this.props.toggle();
        if(this.state.id){
            employeeService.updateEmployee(this.state.id,this.state).then(()=>{
               this.props.dispatch(selectEmployee({...this.state}))
            })
        }else {
            employeeService.addNewEmployee(this.state).then()
        }
    }
    open(){
        this.setState(this.props.employee);
    }
    remove(){
        this.props.toggle();
        this.props.onRemove();
    }
    render() {
        let {name, gender, phone, skype,id,facebook,email,old} = this.state;
        const superAdmin = this.props.user.superAdmin;
        let title = 'Thêm nhân viên phòng nhật';
        if(id){
            title = 'Cập nhật viên phòng nhật';
        }
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-dialog-centered" onOpened={this.open}>
                <ModalHeader toggle={this.props.toggle}>{title} </ModalHeader>
                <ModalBody>
                    <form onSubmit={this.doUpdate}>
                        <FormGroup>
                            <label>Tên đầy đủ</label>
                            <Input type="text" className="form-control" value={name} name="name"
                                   onChange={this.onInputChange} invalid={!name}/>
                        </FormGroup>
                        <FormGroup>
                            <label>Giới tính</label>
                            <Input type="select" className="custom-select" value={gender} name="gender"
                                   onChange={this.onInputChange} invalid={!gender}>
                                <option/>
                                <option value="1">Nam</option>
                                <option value="0">Nữ</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <label>Số điện thoại</label>

                            <Input value={phone} name="phone" onChange={this.onInputChange}
                                   type="number" invalid={!phone}
                                   className="form-control"
                            />

                        </FormGroup>
                        <FormGroup>
                            <label>Skype</label>
                            <Input value={skype} name="skype" onChange={this.onInputChange}
                                   invalid={!skype}
                                   className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Facebook</label>
                            <Input value={facebook} name="facebook" onChange={this.onInputChange}
                                   invalid={!facebook}
                                   className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Email</label>
                            <Input value={email} name="email" onChange={this.onInputChange}
                                   invalid={!email}
                                   className="form-control"
                            />
                        </FormGroup>
                        <FormGroup>
                            <label>Năm sinh</label>
                            <Datetime
                                onChange={(date) => {
                                    this.onDateChange(date, 'old')
                                }}
                                renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                value={old}
                                viewMode="years"
                                locale="vi"
                                dateFormat="YYYY"
                                timeFormat={false}
                                closeOnSelect={true}
                                renderInput={(props)=><Input {...props}  name="old" onChange={this.onInputChange}  invalid={!old}/>}
                            />

                        </FormGroup>
                    </form>
                </ModalBody>
                <ModalFooter>
                    {id&&superAdmin&& <Button color="danger" className="mr-auto"  onClick={this.remove}>Xóa</Button>}
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
DialogAddJapan = connect(mapStateToProps)(DialogAddJapan);
export default DialogAddJapan;
