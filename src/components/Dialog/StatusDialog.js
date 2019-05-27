import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Button} from "reactstrap";

//Cửa sổ thay đổi trạng thái tài khoản
class StatusDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleEntering = this.handleEntering.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            value: '',
            open: false,
        };
        this.props.refDialog(this)
    }
    //Mở
    handleClickOpen = () => {
        this.setState({open: true});
    };
    //Chọn
    handleEntering = () => {
        this.radioGroupRef.focus();
    };
    //Đóng
    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = (event, value) => {
        this.setState({value});
    };
    //Lưu
    handleSave() {
        this.handleClose();
        this.props.save(this.state.value)

    }



    render() {

        return (
            <Dialog
                onEntering={this.handleEntering}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="confirmation-dialog-title"

            >
                <DialogTitle id="confirmation-dialog-title">Cập nhật trạng thái</DialogTitle>
                <DialogContent>
                    <RadioGroup
                        ref={ref => {
                            this.radioGroupRef = ref;
                        }}
                        aria-label="Ringtone"
                        name="ringtone"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel className="ra-dialog-status" value="Đang học"
                                          control={<Radio/>} label="Đang học"/>
                        <FormControlLabel className="ra-dialog-status" value="Xuất cảnh"
                                          control={<Radio/>} label="Xuất cảnh"/>
                        <FormControlLabel className="ra-dialog-status" value="Thôi học"
                                          control={<Radio/>} label="Thôi học"/>
                        <FormControlLabel className="ra-dialog-status" value="Bảo lưu"
                                          control={<Radio/>} label="Bảo lưu"/>
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={this.handleClose}>
                        Hủy
                    </Button>
                    <Button color="success" onClick={this.handleSave}>
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}


export default StatusDialog;
