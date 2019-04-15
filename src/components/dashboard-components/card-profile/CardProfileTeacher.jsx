import React from 'react';
import {
    Card,
    CardBody,
    Button,
    Badge, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

import img1 from 'assets/images/background/profile-bg.jpg';
import {connect} from "react-redux";
import {adminService} from '../../../firebase'
import InfoStudent from "./InfoStudent";
import {addListUser, selectStudent} from "../../../redux/actions";
import InfoTeacher from "./InfoTeacher";


class CardProfileTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.renderValidate = this.renderValidate.bind(this);
        this.validateUser = this.validateUser.bind(this);
        this.state = {
            value: 0,
            modal: false,
            searchKey:''
        };
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    removeUser() {
        this.toggle();
        adminService.removeUser(this.props.user.uid).then(() => {
            const index = this.props.listUser.indexOf(this.props.user);
            this.props.listUser.splice(index, 1);
            this.props.dispatch(addListUser(this.props.listUser.concat()));
            this.props.dispatch(selectStudent(null));
        })
    }
    validateUser(){
        adminService.validateUser(this.props.user.uid,this.props.user.type,()=>{
            this.props.user.validate = true;
            const index = this.props.listUser.indexOf(this.props.user);
            let user = {...this.props.user};
            this.props.listUser[index] = user;
            this.props.dispatch(selectStudent(user));
            this.props.dispatch(addListUser(this.props.listUser.concat()));
        })
    }

    renderValidate() {
        if (this.props.user.validate) {
            return <Badge color="success" style={{fontSize: 10}}>Xác thực</Badge>
        }
        return <Badge color="warning" style={{fontSize: 10}}> Chưa xác thực</Badge>
    }

    render() {
        if (!this.props.user) {
            return <Card className="card-info"/>
        }
        let {avatar, name,validate} = this.props.user;
        return (
            /*--------------------------------------------------------------------------------*/
            /* Used In Dashboard-1,2,3  and Widget Page                                       */
            /*--------------------------------------------------------------------------------*/
            <Card className="card-info">
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered">
                    <ModalHeader className="border-0" toggle={this.toggle}>Xóa tài khoản</ModalHeader>
                    <ModalBody>
                        Bạn chắc chắn muốn xóa tài khoản <span style={{color: 'blue',}}>{name}</span>
                    </ModalBody>
                    <ModalFooter className="border-0">
                        <Button color="danger" onClick={this.removeUser}>Xóa</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
                <img src={img1} height="116" alt=""/>
                <CardBody className="little-profile text-center " style={{height: 'calc(100% - 200px)'}}>
                    <div className="pro-img">
                        <img src={avatar} className="avatar" alt="user"/>

                    </div>
                    <h3 className="mb-3">{name} {this.renderValidate()}</h3>
                    <InfoTeacher/>
                    {!validate&&<Button color="success" className="btn-rounded btn-custom-s" onClick={this.validateUser}>Xác nhận</Button>}
                    <Button color="danger" className="btn-rounded btn-custom-s" onClick={this.toggle}>Xóa</Button>
                </CardBody>
            </Card>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.student,
        listUser: state.listUser
    }
};
CardProfileTeacher = connect(mapStateToProps)(CardProfileTeacher);
export default CardProfileTeacher;

