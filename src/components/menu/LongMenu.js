import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';




class LongMenu extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}

                >
                    {this.props.options.map(option => (
                        <MenuItem key={option.title}  onClick={() => {
                            this.handleClose();
                            option.onClick()
                        }}>
                            {option.title}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        );
    }
}

export default LongMenu;
