import React from 'react';
import {Alert, Button, Card, CardBody, Col, Input, Row, Spinner} from "reactstrap";
import {connect} from "react-redux";
import {userService} from "../../firebase";
import * as moment from 'moment';
import {setUserData} from "../../redux/actions";
import Datetime from "react-datetime";

require('moment/locale/vi');
//Tab cập nhật thông tin cá nhân giáo viên
class SettingTeacher extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.doUpdate = this.doUpdate.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.onDismissWarning = this.onDismissWarning.bind(this);
        this.state = {...this.props.userData,isUpdate:false,visibleAlert:false,visibleWarning:false};
        if (this.state.birthday) {
            this.state.birthday = moment(this.state.birthday, 'DD/MM/YYYY');
        }
    }


    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onDateChange(date, key) {
        this.setState({
            [key]: date.format('DD/MM/YYYY')
        });
    }
    //Cập nhật
    doUpdate(event) {
        event.preventDefault();
        this.setState({isUpdate:true,visibleAlert: false});
        let userData = {...this.state};
        for(let key in userData){
            if(!userData[key]){
                delete userData[key]
            }
        }
        this.props.dispatch(setUserData(userData));
        userService.doUpdateUser(this.props.user.uid, userData).then(()=>{
            this.setState({isUpdate:false,visibleAlert:true});
        }).catch((err)=>{
            console.log(err);
            this.setState({isUpdate:false,visibleWarning:true});
        })
    }
    onDismiss(){
        this.setState({ visibleAlert: false });
    }
    onDismissWarning(){
        this.setState({ visibleWarning: false });
    }
    render() {
        let {name, phone, gender, skype,facebook,startDay} = this.state;
        return (
            <Row>
                <Col sm="12">
                    <Card>
                        <Alert color="success" isOpen={this.state.visibleAlert} toggle={this.onDismiss}>
                            Đã lưu thông tin thành công
                        </Alert>
                        <Alert color="danger" isOpen={this.state.visibleWarning} toggle={this.onDismissWarning}>
                            Có lỗi xảy ra không thể lưu thông tin
                        </Alert>
                        <CardBody>
                            <form onSubmit={this.doUpdate}>
                                <div className="form-group row">
                                    <label
                                        className="col-sm-2 col-form-label"
                                    >
                                        Tên đầy đủ
                                    </label>
                                    <div className="col-sm-10">
                                        <Input type="text" className="form-control" value={name} name="name"
                                               onChange={this.onInputChange} invalid={!name}/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Giới tính
                                    </label>
                                    <div className="col-sm-10">
                                        <Input type="select" className="custom-select" value={gender} name="gender"
                                               onChange={this.onInputChange} invalid={!gender}>
                                            <option value="1">Nam</option>
                                            <option value="0">Nữ</option>
                                        </Input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Số điện thoại
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={phone} name="phone" onChange={this.onInputChange}
                                               type="number" invalid={!phone}
                                               className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Skype
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={skype} name="skype" onChange={this.onInputChange}
                                               invalid={!skype}
                                               className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Facebook
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={facebook} name="facebook" onChange={this.onInputChange}
                                               invalid={!facebook}
                                               className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Ngày vào làm
                                    </label>
                                    <div className="col-sm-10">
                                            <Datetime
                                                locale="vi"
                                                onChange={(date) => {
                                                    this.onDateChange(date, 'startDay')
                                                }}
                                                renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                                timeFormat={false}
                                                closeOnSelect={true}
                                                renderInput={(props)=><Input {...props} name="startDay"  value={startDay} onChange={this.onInputChange} placeholder="Ngày / Tháng / Năm" invalid={!startDay}/>}
                                            />
                                    </div>
                                </div>
                                <Button color="primary" disabled={this.state.isUpdate}>{this.state.isUpdate ?
                                    <Spinner size="sm" type="grow"/> : ''}Cập nhật</Button>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        userData: state.userData
    }
};
SettingTeacher = connect(mapStateToProps)(SettingTeacher);
export default SettingTeacher;
