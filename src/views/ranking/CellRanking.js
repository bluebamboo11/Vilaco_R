import React from 'react';

import {Badge, Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {userService, transcriptService} from "../../firebase";
import {connect} from "react-redux";



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
        });

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    renderButtonEdit() {
        const admin = this.props.user.admin || this.props.user.superAdmin;
        if(this.props.user.type === 'student'||!admin){
            return ''
        }
        return (
            <td>
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
                </div>
            </td>)
    }

    setScholarship() {
        this.toggle();
        transcriptService.update(this.state.id, {[this.scholarship]: !this.state[this.scholarship]}).then(() => {
            this.setState({[this.scholarship]: !this.state[this.scholarship]})
        })
    }

    renderDialog() {
        const  scholarship = this.state[this.scholarship];
        return <Modal isOpen={this.state.modal} toggle={this.toggle}
                      className="modal-dialog-centered">
            <ModalHeader toggle={this.toggle}>Học bổng</ModalHeader>
            <ModalBody>
                {scholarship ? 'Hủy cấp học bổng cho học viên ' : 'Xác nhận cấp học bổng cho học viên '}
                <span style={{color: 'blue'}} className="font-medium">{this.state.name}</span>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={this.setScholarship}>Đồng ý</Button>
                <Button color="secondary" onClick={this.toggle}>Hủy</Button>
            </ModalFooter>
        </Modal>
    }

    render() {
        switch (this.props.type) {
            case 0:this.scholarship ='scholarshipJapan';break;
            case 1:this.scholarship ='scholarshipHealth';break;
            case 2:this.scholarship ='scholarshipEducation';break;
            default: break

        }
        if (!this.state.avatar) {
            return <tr/>
        }
        let {avatar, name, email, listen, write, conversation, japanese, push, bendBack, bellySticks, squat, health, education} = this.state;
        const  scholarship = this.state[this.scholarship];
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
                    {this.renderButtonEdit()}
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
                    {this.renderButtonEdit()}
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
                {this.renderButtonEdit()}
            </tr>
        );

    }
}

const mapStateToProps = state => {
    return {user: state.userData}
};
CellRanking = connect(mapStateToProps)(CellRanking);
export default CellRanking;
