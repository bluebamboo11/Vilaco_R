import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';



//Menu chon các tính năng chỉnh sửa trong trang quản lý học viên, giáo viên
class LongMenu extends React.Component {
    state = {
        anchorEl: null,
    };
    //Click chọn một chức năng
    handleClick = event => {
        this.setState({anchorEl: event.currentTarget});
    };
    //Đóng menu
    handleClose = () => {
        this.setState({anchorEl: null});
    };
    //Tạo menu
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
