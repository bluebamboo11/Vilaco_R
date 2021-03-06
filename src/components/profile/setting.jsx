import React from 'react';
import {Alert, Button, Card, CardBody, Col,  Input, Row, Spinner} from "reactstrap";
import {connect} from "react-redux";
import {userService} from "../../firebase";
import Datetime from 'react-datetime';
import * as moment from 'moment';
import {setUserData} from "../../redux/actions";

require('moment/locale/vi');
//Tab cập nhật thông tin cá nhân học viên
class Setting extends React.Component {
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

    //Thay đổi giá trị
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    //Thay đổi giá trị thời gian
    onDateChange(date) {
        this.setState({
            birthday: date
        });
    }
    //Đóng thông báo
    onDismiss(){
        this.setState({ visibleAlert: false });
    }
    //Đóng thonog báo cảnh bảo
    onDismissWarning(){
        this.setState({ visibleWarning: false });
    }
    //Cập nhật
    doUpdate(event) {
        event.preventDefault();
       this.setState({isUpdate:true,visibleAlert: false});
        let userData = {...this.state};
        if( userData.birthday){
            userData.birthday = userData.birthday.format('DD/MM/YYYY');
        }
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

    render() {
        let {name, phone, gender, address, district, city, code, hobby, relativeName, familyAddress, birthday, town,phoneFamily,blood} = this.state;
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
                                        Quê quán
                                    </label>
                                    <div className="col-sm-10">
                                        <div className="row mb-3">
                                            <div className="col-sm-12">
                                                <Input value={address} name="address" onChange={this.onInputChange}
                                                       type="text" invalid={!address}
                                                       className="form-control"
                                                       placeholder="Địa chỉ"
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <Input value={town} name="town" onChange={this.onInputChange}
                                                       type="text" invalid={!town}
                                                       className="form-control"
                                                       placeholder="Phường, xã"
                                                />
                                            </div>
                                            <div className="col-sm-4">
                                                <Input value={district} name="district" onChange={this.onInputChange}
                                                       type="text" invalid={!district}
                                                       className="form-control"
                                                       placeholder="Quận huyện"
                                                />
                                            </div>
                                            <div className="col-sm-4">
                                                <Input value={city} name="city" onChange={this.onInputChange}
                                                       type="text" invalid={!city}
                                                       className="form-control"
                                                       placeholder="Tỉnh thành phố"
                                                />
                                            </div>
                                        </div>
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
                                        Số điện thoại gia đình
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={phoneFamily} name="phoneFamily" onChange={this.onInputChange}
                                               type="number" invalid={!phoneFamily}
                                               className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Ngày sinh
                                    </label>
                                    <div className="col-sm-10">
                                        <Datetime
                                            onChange={this.onDateChange}
                                            renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                            value={birthday}
                                            locale="vi"
                                            timeFormat={false}
                                            closeOnSelect={true}
                                            renderInput={this.renderBirthday}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Số CMT, Căn cước
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={code} name="code" onChange={this.onInputChange}
                                               type="number" invalid={!code}
                                               className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                       Nhóm máu
                                    </label>
                                    <div className="col-sm-10">
                                        <Input type="select" className="custom-select" value={blood} name="blood"
                                               onChange={this.onInputChange} >
                                            <option value=""/>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="AB">AB</option>
                                            <option value="O">O</option>
                                        </Input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Sở thích
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={hobby} name="hobby" onChange={this.onInputChange}
                                               type="textarea"
                                               className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                        Tên người thân
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={relativeName} name="relativeName" onChange={this.onInputChange}
                                               type="textarea"
                                               className="form-control"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-2 col-form-label">
                                       Địa chỉ gia đình
                                    </label>
                                    <div className="col-sm-10">
                                        <Input value={familyAddress} name="familyAddress" onChange={this.onInputChange}
                                               type="textarea"
                                               className="form-control"
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
Setting = connect(mapStateToProps)(Setting);
export default Setting;
