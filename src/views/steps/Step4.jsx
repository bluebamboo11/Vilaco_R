import React, {Component} from 'react';
import Datetime from "react-datetime";

import { Input} from "reactstrap";
//Bược 4 học viên nhập thông tin đăng ký
export default class Step4 extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.renderBirthday = this.renderBirthday.bind(this);
        this.isValidated = this.isValidated.bind(this)
    }
    //đạt giá trị khi người dùng thay đổi
    onInputChange(event) {
        let userData = {...this.props.userData};
        userData[event.target.name] = event.target.value;
        this.props.updateStore(userData)
    }
    // kiểm tra người dùng đã nhập các trường bắt buộc hay chưa
    isValidated() {
        let {name, phone, gender, address, district, city, code, birthday, town,phoneFamily} = this.props.userData;
        return name && phone && gender && address && district && city && code && birthday && town&&phoneFamily
    }
    //đặt ngày sinh khi người dùng chọn
    onDateChange(date) {
        let userData = {...this.props.userData};
        userData['birthday'] = date;
        this.props.updateStore(userData)
    }
    // tạo input ngáy sinh
    renderBirthday(props) {
        return <Input {...props} placeholder="Ngày/Tháng/Năm" invalid={!this.props.userData.birthday}/>
    }

    render() {
        let {name, phone, gender, address, district, city, code, hobby, relativeName, familyAddress, birthday, town,phoneFamily,blood} = this.props.userData;
        return (
            <div className="step step2 mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-lg-8">
                        <form>
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
                                        renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                        onChange={this.onDateChange}
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
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
