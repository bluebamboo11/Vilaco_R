import React from 'react';
import {
    Card,
    CardBody,
    Button,
    Badge, Modal, ModalHeader, ModalBody, ModalFooter,

} from 'reactstrap';

import img1 from 'assets/images/background/profile-bg.jpg';
import {connect} from "react-redux";
import {adminService, userService} from '../../../firebase'
import Transcript from "./Transcript";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withStyles} from '@material-ui/core/styles';
import InfoStudent from "./InfoStudent";
import {addListUser, isProcessAll, selectStudent} from "../../../redux/actions";
import LongMenu from "../../menu/LongMenu";
import ContractDialog from "../../ContractDialog/ContractDialog";
import Loading from "../../Loading/Loading";
import StatusDialog from "../../Dialog/StatusDialog";

//Thông tin học viên trong trang quản lý học viên
class CardProfile extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.removeUser = this.removeUser.bind(this);
        this.renderValidate = this.renderValidate.bind(this);
        this.validateUser = this.validateUser.bind(this);
        this.openPopupAddContract = this.openPopupAddContract.bind(this);
        this.addContract = this.addContract.bind(this);
        this.addClass = this.addClass.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.openAddClass = this.openAddClass.bind(this);
        this.updateStatus = this.updateStatus.bind(this);
        this.openStatusDialog = this.openStatusDialog.bind(this);
        this.state = {
            value: 0,
            modal: false,
            searchKey: ''
        };
    }

    handleChange = (event, value) => {
        this.setState({value});
    };
    //Đóng mở của sổ xóa tài khoản
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    //xóa tài khoản
    removeUser() {
        this.toggle();
        this.props.dispatch(isProcessAll(true));
        adminService.removeUser(this.props.userSelect.uid).then(() => {
            this.props.dispatch(isProcessAll(false));
            const index = this.props.listUser.indexOf(this.props.userSelect);
            this.props.listUser.splice(index, 1);
            this.props.dispatch(addListUser(this.props.listUser.concat()));
            this.props.dispatch(selectStudent(null));
        })
    }
    //Xác nhận tài khoản
    validateUser() {
        adminService.validateUser(this.props.userSelect.uid, this.props.userSelect.type, () => {
            let user = {...this.props.userSelect};
            user.validate = true;
            this.updateUser(user)
        })
    }
    //Tạo trạng thái xác nhận
    renderValidate() {
        if (this.props.userSelect.validate) {
            return <Badge color="success" style={{fontSize: 10}}>Xác thực</Badge>
        }
        return <Badge color="warning" style={{fontSize: 10}}> Chưa xác thực</Badge>
    }
    //Mở của sổ thêm hợp đồng
    openPopupAddContract() {
        this.responsiveDialog.handleClickOpen()
    }
    //Mở của sổ thêm lớp học
    openAddClass() {
        this.addClassDialog.handleClickOpen(this.props.userSelect.classId)
    }
    //Mở của sổ thêm trạng thái học viên
    openStatusDialog(){
        this.statusDialog.handleClickOpen()
    }
    //THêm hợp đồng vào học viên
    addContract(contract) {
        this.props.dispatch(isProcessAll(true));
        userService.doUpdateUser(this.props.userSelect.uid, {contractId: contract.id}).then(() => {
            this.props.dispatch(isProcessAll(false));
            let user = {...this.props.userSelect};
            user.contractId = contract.id;
            user.contractName = contract.name;
            this.updateUser(user)
        })
    }
    //Thêm học viên vào lớp học
    addClass(classData) {
        this.props.dispatch(isProcessAll(true));
        userService.doUpdateUser(this.props.userSelect.uid, {classId: classData.id}).then(() => {
            this.props.dispatch(isProcessAll(false));
            let user = {...this.props.userSelect};
            user.classId = classData.id;
            user.className = classData.name;
            this.updateUser(user)
        })
    }
    //cập nhật giao diện khi chỉnh sửa
    updateUser(newUser) {
        this.props.listUser.forEach((user, index) => {
            if (user.uid === newUser.uid) {
                this.props.listUser[index] = newUser;
            }
        });
        this.props.dispatch(selectStudent(newUser));
        this.props.dispatch(addListUser(this.props.listUser.concat()));
    }
    //Cập nhật trạng thái học viên
    updateStatus(value) {
        userService.doUpdateUser(this.props.userSelect.uid, {status: value}).then(() => {
            let user = {...this.props.userSelect};
            user.status = value;
            this.updateUser(user)
        })
    }

    render() {
        if (!this.props.userSelect) {
            return <Card className="card-info"/>
        }
        const {classes} = this.props;
        const {value} = this.state;
        let {avatar, name, validate} = this.props.userSelect;
        let options = [
            {title: 'Xác nhận', onClick: this.validateUser}

        ];
        if (validate) {
            options = [
                {title: 'Thêm lớp', onClick: this.openAddClass},
                {title: 'Trạng thái', onClick: this.openStatusDialog},
                {title: 'Thêm đơn hàng', onClick: this.openPopupAddContract}
            ];
        }
        if(this.props.user.superAdmin){
            options.push({title: 'Xóa', onClick: this.toggle})
        }

        return (

            <Card className="card-info">
                {this.props.loadSelect && <Loading/>}
                <ContractDialog
                    options={this.props.listContract}
                    save={this.addContract}
                    titleEmpty="Không có đơn hàng còn hoạt động"
                    title="Chọn một đơn hàng"
                    refDialog={ref => {
                        this.responsiveDialog = ref;
                    }}/>
                <ContractDialog
                    options={this.props.listClass}
                    save={this.addClass}
                    titleEmpty="Không có lớp học còn hoạt đông"
                    title="Chọn một lớp học"
                    refDialog={ref => {
                        this.addClassDialog = ref;
                    }}/>
                <StatusDialog
                    save={this.updateStatus}
                    refDialog={ref => {
                        this.statusDialog = ref;
                    }}/>
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
                    <h3>{name}</h3>
                    <div className="mb-3">{this.renderValidate()}</div>
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
                            label="Bảng điểm"
                        />
                    </Tabs>
                    {value === 0 && <InfoStudent/>}
                    {value === 1 && <Transcript/>}

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
        user: state.userData,
        userSelect: state.student,
        listUser: state.listUser,
        listContract: state.listContract,
        listClass: state.listClass,
        loadSelect: state.loadSelect,
    }
};
CardProfile = connect(mapStateToProps)(CardProfile);
export default withStyles(styles)(CardProfile);

