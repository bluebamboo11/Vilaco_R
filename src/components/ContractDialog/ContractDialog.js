import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DialogContentText from "@material-ui/core/DialogContentText";
import {withStyles} from '@material-ui/core/styles';
import {Button} from "reactstrap";


class ContractDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleEntering = this.handleEntering.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.renderOptions = this.renderOptions.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            value: props.value,
            open: false,
        };
        this.props.refDialog(this)
    }

    handleClickOpen = (value) => {
        this.setState({open: true, value: value});
    };

    handleEntering = () => {
        this.radioGroupRef.focus();
    };
    handleClose = () => {
        this.setState({open: false});
    };
    handleChange = (event, value) => {
        this.setState({value});
    };

    handleSave() {
        this.handleClose();
        this.props.options.forEach(option=>{
            if(option.id ===this.state.value ){
                this.props.save(option)
            }

        })

    }

    renderOptions() {
        if (this.props.options && this.props.options.length > 0) {
            return this.props.options.map(option => (
                <FormControlLabel className="ra-dialog-add" value={option.id} key={option.id}
                                  control={<Radio/>} label={option.name}/>))
        } else {
            return <DialogContentText id="alert-dialog-description" className="ra-dialog-add">
                {this.props.titleEmpty}
            </DialogContentText>
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <Dialog
                onEntering={this.handleEntering}
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="confirmation-dialog-title"
                classes={{
                    paper: classes.paper,
                }}
            >
                <DialogTitle id="confirmation-dialog-title">{this.props.title}</DialogTitle>
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
                        {this.renderOptions()}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button color="danger" onClick={this.handleClose}>
                        Hủy
                    </Button>
                    <Button color="secondary" onClick={this.handleSave}>
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>

        );
    }
}


const styles = () => ({
    paper: {
        width: '80%',
        maxHeight: 600,
    },
});
export default withStyles(styles)(ContractDialog);
