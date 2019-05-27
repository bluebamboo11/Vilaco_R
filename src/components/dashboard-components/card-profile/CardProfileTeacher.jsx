import React from 'react';
import {
    Card,
    CardBody,
    Button,
    Badge, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

import img1 from 'assets/images/background/profile-bg.jpg';
import {connect} from "react-redux";
import {adminService, userService, classService} from '../../../firebase'
import {addListUser, isProcessAll, selectStudent, setUserData} from "../../../redux/actions";
import InfoTeacher from "./InfoTeacher";
import ContractDialog from "../../ContractDialog/ContractDialog";
import LongMenu from "../../menu/LongMenu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withStyles} from "@material-ui/core";
import ListClass from "./ListClass";
import Loading from "../../Loading/Loading";
import ConfirmDialogSuperAdmin from "../../Dialog/ConfirmDialogSuperAdmin";

//Thông tin giáo viên trong trang quản lý giáo viên
class CardProfileTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.renderValidate = this.renderValidate.bind(this);
        this.validateUser = this.validateUser.bind(this);
        this.openAddClass = this.openAddClass.bind(this);
        this.addClass = this.addClass.bind(this);
        this.setAdmin = this.setAdmin.bind(this);
        this.renderAdmin = this.renderAdmin.bind(this);
        this.setSuperAdmin = this.setSuperAdmin.bind(this);
        this.openDialogSuperAdmin = this.openDialogSuperAdmin.bind(this);
        this.state = {
            value: 0,
            modal: false,
            searchKey: ''
        };
    }

    handleChange = (event, value) => {
        this.setState({value});
    };
    //Đóng mở của sổ xóa giáo viên
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    //Xóa giáo viên
    removeUser() {
        this.props.dispatch(isProcessAll(true));
        this.toggle();
        adminService.removeUser(this.props.userSelect.uid).then(() => {
            this.props.dispatch(isProcessAll(false));
            const index = this.props.listUser.indexOf(this.props.userSelect);
            this.props.listUser.splice(index, 1);
            this.props.dispatch(addListUser(this.props.listUser.concat()));
            this.props.dispatch(selectStudent(null));
        })
    }
    //xác nhận giáo viên
    validateUser() {
        this.props.dispatch(isProcessAll(true));
        adminService.validateUser(this.props.userSelect.uid, this.props.userSelect.type, () => {
            this.props.dispatch(isProcessAll(false));
            this.props.userSelect.validate = true;
            let user = {...this.props.userSelect};
            for (let i = 0; i < this.props.listUser.length; i++) {
                if (this.props.listUser[i].uid === this.props.userSelect.uid) {
                    this.props.listUser[i] = user;
                    break;
                }
            }

            this.props.dispatch(selectStudent(user));
            this.props.dispatch(addListUser(this.props.listUser.concat()));
        })
    }
    //Thêm giáo viên vào lớp học
    addClass(id) {
        this.props.dispatch(isProcessAll(true));
        classService.updateClass({teacherId: this.props.userSelect.uid}, id).then(() => {
            this.props.dispatch(isProcessAll(false));
            this.props.listClass.forEach((value) => {
                if (value.id === id) {
                    this.props.userSelect.listClass.push(value);
                    this.props.dispatch(selectStudent({...this.props.userSelect}));

                }
            })
        });
    }
    //Tạo trạng thái xác thực
    renderValidate() {
        if (this.props.userSelect.validate) {
            return <Badge color="success" style={{fontSize: 10}}>Xác thực</Badge>
        }
        return <Badge color="warning" style={{fontSize: 10}}> Chưa xác thực</Badge>
    }
    //Tạo tag admin
    renderAdmin() {
        if (this.props.userSelect.superAdmin) {
            return <Badge color="warning" style={{fontSize: 10, marginLeft: 10, color: 'white'}}>Quản trị viên</Badge>
        }

        if (this.props.userSelect.admin) {
            return <Badge color="danger" style={{fontSize: 10, marginLeft: 10}}>Quản lý</Badge>
        }
        return ''
    }

    //Mở của sổ thêm lớp học
    openAddClass() {
        this.addClassDialog.handleClickOpen()
    }
    //Mở của sổ xác nhận quển siêu quản trị
    openDialogSuperAdmin() {
        this.confirmDialogSuperAdmin.handleClickOpen()
    }
    //xác nhận giáo viên là admin
    setAdmin() {
        this.props.dispatch(isProcessAll(true));
        const admin = this.props.userSelect.admin;
        if (admin) {
            adminService.removeAdmin(this.props.userSelect.uid).then();
        } else {
            adminService.setAdmin(this.props.userSelect.uid).then();
        }
        userService.doUpdateUser(this.props.userSelect.uid, {admin: !admin}).then(() => {
            this.props.dispatch(isProcessAll(false));
            this.props.dispatch(selectStudent({...this.props.userSelect, admin: !admin}));
            for (let i = 0; i < this.props.listUser.length; i++) {
                if (this.props.listUser[i].uid === this.props.userSelect.uid) {
                    this.props.listUser[i].admin = !admin;
                    break;
                }
            }
            this.props.dispatch(addListUser(this.props.listUser.concat()))
        })
    }
    //Xác nhận giáo viên là quản trị viên cao cấp
    setSuperAdmin() {
        this.props.dispatch(isProcessAll(true));
        adminService.setSuperAdmin(this.props.userSelect.uid, this.props.user.uid, () => {
            this.props.dispatch(isProcessAll(false));
            this.props.dispatch(selectStudent({...this.props.userSelect, superAdmin: true}));
            for (let i = 0; i < this.props.listUser.length; i++) {
                if (this.props.listUser[i].uid === this.props.userSelect.uid) {
                    this.props.listUser[i].superAdmin = true;
                }
                if (this.props.listUser[i].uid === this.props.user.uid) {
                    this.props.listUser[i].superAdmin = false;
                }
            }
            this.props.dispatch(addListUser(this.props.listUser.concat()));
            this.props.dispatch(setUserData({...this.props.user, superAdmin: false}))
        })
    }

    render() {
        const {classes} = this.props;
        const {value} = this.state;
        if (!this.props.userSelect) {
            return <Card className="card-info"/>
        }
        let {avatar, name, validate, admin} = this.props.userSelect;
        let options = [
            {title: 'Xác nhận', onClick: this.validateUser},

        ];
        if (validate) {
            options = [
                {title: 'Thêm lớp', onClick: this.openAddClass},
            ];
        }
        if (this.props.user.superAdmin && this.props.userSelect.uid !== this.props.user.uid) {
            options.push({title: admin ? 'Hủy quản lý' : 'Thêm quản lý', onClick: this.setAdmin});
            options.push({title: 'Quản trị viên', onClick: this.openDialogSuperAdmin})
        }
        if(this.props.user.superAdmin&&this.props.userSelect.uid !== this.props.user.uid){
            options.push({title: 'Xóa', onClick: this.toggle})
        }
        return (
            <Card className="card-info">
                {this.props.loadSelect && <Loading/>}
                <ContractDialog
                    options={this.props.listClass}
                    save={this.addClass}
                    titleEmpty="Không có lớp học còn hoạt đông"
                    title="Chọn một lớp học"
                    refDialog={ref => {
                        this.addClassDialog = ref;
                    }}/>
                <ConfirmDialogSuperAdmin
                    userSelect={this.props.userSelect}
                    save={this.setSuperAdmin}
                    refDialog={ref => {
                        this.confirmDialogSuperAdmin = ref;
                    }}/>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered">
                    <ModalHeader className="border-0" toggle={this.toggle}>Xóa tài khoản</ModalHeader>
                    <ModalBody>
                        Bạn chắc chắn muốn xóa tài khoản <span style={{color: 'blue',}}>{name}</span>
                    </ModalBody>
                    <ModalFooter className="border-0">
                        <Button color="danger" onClick={this.removeUser}>Xóa</Button>
                        <Button color="secondary" onClick={this.toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
                <img src={img1} height="116" alt=""/>
                <CardBody className="little-profile text-center " style={{height: 'calc(100% - 200px)'}}>
                    <div className="pro-img">
                        <img src={avatar} className="avatar" alt="user"/>
                    </div>
                    <h3>{name}</h3>
                    <div className="mb-3"> {this.renderValidate()}{this.renderAdmin()}</div>
                    <div className="menu-info">
                        {(this.props.user.admin || this.props.user.superAdmin) && <LongMenu options={options}/>}
                    </div>
                    <Tabs
                        classes={{root: classes.tabsRoot, indicator: classes.tabsIndicator}}
                        value={value}
                        onChange={this.handleChange}
                    >
                        <Tab
                            classes={{root: classes.tabRoot, selected: classes.tabSelected}}
                            disableRipple
                            label="Thông tin"
                        />
                        <Tab
                            classes={{root: classes.tabRoot, selected: classes.tabSelected}}
                            disableRipple
                            label="Lớp"
                        />
                    </Tabs>
                    {value === 0 && <InfoTeacher/>}
                    {value === 1 && <ListClass rows={this.props.userSelect.listClass}/>}
                </CardBody>
            </Card>
        );
    }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        outline: 'none !important',
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
});

const mapStateToProps = state => {
    return {
        userSelect: state.student,
        listUser: state.listUser,
        listClass: state.listClass,
        loadSelect: state.loadSelect,
        user: state.userData
    }
};
CardProfileTeacher = connect(mapStateToProps)(CardProfileTeacher);
export default withStyles(styles)(CardProfileTeacher);

