import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Button} from "reactstrap";
import Input from "reactstrap/es/Input";

//của sổ chuyển quản quản trị cao cấp
class ConfirmDialogSuperAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.state = {
            value: '',
            open: false,
            email: '',
            validate:false
        };
        this.props.refDialog(this)
    }
    //mở của sổ
    handleClickOpen = () => {
        this.setState({open: true});
    };

    //Đóng của sổ
    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = (event, value) => {
        this.setState({value});
    };
    //Lưu thay đổi
    handleSave() {
        this.handleClose();
        this.props.save()
    }
    //đặt lại giá trị ổ nhập
    handleChangeInput(event) {
        this.setState({
            email: event.target.value, validate: event.target.value === this.props.userSelect.email
        });

    }

    render() {
        const {name} = this.props.userSelect;
        return (
            <Dialog
                onEntering={this.handleEntering}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="confirmation-dialog-title"

            >
                <DialogTitle id="confirmation-dialog-title">Chuyển quyền quản trị viên</DialogTitle>
                <DialogContent>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Bạn chắc chắn muốn chuyển quyền quản
                            trị viện cho tài khoản <span style={{color: 'blue'}}>{name}</span>
                            <p style={{color: 'red'}}>Sau khi chuyển bạn sẽ không còn là quản trị viên</p></label>
                        <Input type="text" className="form-control" id="recipient-name"
                               placeholder={'nhập email của ' + name + ' để xác nhận'}
                               onChange={this.handleChangeInput}/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={this.handleClose}>
                        Hủy
                    </Button>
                    <Button color="success" disabled={!this.state.validate} onClick={this.handleSave}>
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}


export default ConfirmDialogSuperAdmin;
