import React from 'react';
import {
    Button, FormGroup, Input,
    Modal, ModalBody, ModalFooter,
    ModalHeader

} from 'reactstrap';

import {connect} from "react-redux";
import {employeeService} from '../../firebase'


class DialogAddJapan extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.add = this.add.bind(this);
        this.state = props.employee
    }


    componentDidMount() {

    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    add() {
        this.props.toggle();
        employeeService.addNewEmployee(this.state).then()
    }

    render() {
        let {name, gender, phone, skype} = this.state;
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} className="modal-dialog-centered">
                <ModalHeader toggle={this.toggle}> Thêm nhân viên phòng nhật </ModalHeader>
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
DialogAddJapan = connect(mapStateToProps)(DialogAddJapan);
export default DialogAddJapan;
