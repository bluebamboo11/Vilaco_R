import React from 'react';

import {Badge, Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {userService, transcriptService} from "../../firebase";


class CellRanking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {modal: false};
        this.toggle = this.toggle.bind(this);
        this.renderButtonEdit = this.renderButtonEdit.bind(this);
        this.renderDialog = this.renderDialog.bind(this);
        this.setScholarship = this.setScholarship.bind(this);
    }

    componentDidMount() {
        userService.getOneUser(this.props.data.uid, (user) => {
            this.setState({...user, ...this.props.data});
        })
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    renderButtonEdit() {
        return (
            <div className="center-item ">
                <Button
                    onClick={this.toggle}
                    color="info"
                    size="sm"
                    className="btn-edit-point"
                    style={{borderRadius: '100%', width: 30, height: 30}}
                >
                    <i className=" ti-pencil"/>
                </Button>

            </div>)
    }

    setScholarship() {
        this.toggle();
        transcriptService.update(this.state.id,{scholarship: !this.state.scholarship}).then(() => {
            this.setState({scholarship: !this.state.scholarship})
        })
    }

    renderDialog() {
        return <Modal isOpen={this.state.modal} toggle={this.toggle}
                      className="modal-dialog-centered">
            <ModalHeader toggle={this.toggle}>Học bổng</ModalHeader>
            <ModalBody>
                {this.state.scholarship ? 'Hủy cấp học bổng cho học viên ' : 'Xác nhận cấp học bổng cho học viên '}
                <span style={{color: 'blue'}} className="font-medium">{this.state.name}</span>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={this.setScholarship}>Đồng ý</Button>
                <Button color="secondary" onClick={this.toggle}>Hủy</Button>
            </ModalFooter>
        </Modal>
    }

    render() {
        if (!this.state.avatar) {
            return <tr/>
        }
        let {avatar, name, email, listen, write, conversation, japanese, push, bendBack, bellySticks, squat, health, education, scholarship} = this.state;
        const {type} = this.props;
        if (type === 0) {
            return (
                <tr className="row-use" onClick={this.selectStudent}>
                    {this.renderDialog()}
                    <td>
                        <span className="round"><img className="avatar" src={avatar} alt="user" width="50" height="50"/></span>
                    </td>
                    <td>
                        <h6 className="font-medium mb-0">{name}</h6>
                        <small className="text-muted">{email}</small>
                    </td>
                    <td>
                        <div className="text-center">{listen}</div>
                    </td>
                    <td>
                        <div className="text-center">{write}</div>
                    </td>
                    <td>
                        <div className="text-center">{conversation}</div>
                    </td>
                    <td>
                        <div style={{color: 'red'}} className="text-center font-medium">{japanese}</div>
                    </td>
                    <td>
                        {scholarship && <Badge color="danger">Học bổng</Badge>}
                    </td>
                    <td>{this.renderButtonEdit()}</td>
                </tr>
            );
        }
        if (type === 1) {
            return (
                <tr className="row-use" onClick={this.selectStudent}>
                    {this.renderDialog()}
                    <td>
                        <span className="round"><img className="avatar" src={avatar} alt="user" width="50" height="50"/></span>
                    </td>
                    <td>
                        <h6 className="font-medium mb-0">{name}</h6>
                        <small className="text-muted">{email}</small>
                    </td>
                    <td>
                        <div className="text-center">{push}</div>
                    </td>
                    <td>
                        <div className="text-center">{bendBack}</div>
                    </td>
                    <td>
                        <div className="text-center"> {bellySticks}</div>
                    </td>
                    <td>
                        <div className="text-center">{squat}</div>
                    </td>
                    <td>
                        <div style={{color: 'red'}} className="text-center font-medium">{health}</div>
                    </td>

                    <td>
                        {scholarship && <Badge color="danger">Học bổng</Badge>}
                    </td>
                    <td>{this.renderButtonEdit()}</td>
                </tr>
            );
        }
        return (
            <tr className="row-use" onClick={this.selectStudent}>
                {this.renderDialog()}
                <td>
                    <span className="round"><img className="avatar" src={avatar} alt="user" width="50"
                                                 height="50"/></span>
                </td>
                <td>
                    <h6 className="font-medium mb-0">{name}</h6>
                    <small className="text-muted">{email}</small>
                </td>
                <td>
                    <div style={{color: 'red'}} className="text-center font-medium">{education}</div>
                </td>
                <td>
                    {scholarship && <Badge color="danger">Học bổng</Badge>}
                </td>
                <td>{this.renderButtonEdit()}</td>
            </tr>
        );

    }
}


export default CellRanking;
