import React, {Component} from 'react';
import Datetime from "react-datetime";

import { Input} from "reactstrap";
//Bước 4 của đăng ký giáo viên
export default class StepsTeacher extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.isValidated = this.isValidated.bind(this);
        this.onDateChange = this.onDateChange.bind(this)
    }
    //đặt lại giá trị khi có thay đổi
    onInputChange(event) {
        let userData = {...this.props.userData};
        userData[event.target.name] = event.target.value;
        this.props.updateStore(userData)
    }
    //Kiểm tra các trược bắt buộc đã được nhập đầy đủ chưa
    isValidated() {
        let {name, phone, gender, skype} = this.props.userData;
        return name && phone && gender && skype
    }
    // đặt lại giá trị khi thay đổi ngày tháng
    onDateChange(date, key) {
        let userData = {...this.props.userData};
        userData[key] =date.format('DD/MM/YYYY');
        this.props.updateStore(userData)
    }


    render() {
        let {name, phone, gender, skype,facebook,startDay} = this.props.userData;
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
                                    <Input value={skype} name="skype" invalid={!skype} onChange={this.onInputChange}
                                           className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                    Facebook
                                </label>
                                <div className="col-sm-10">
                                    <Input value={facebook} name="facebook"  invalid={!facebook}onChange={this.onInputChange}
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
                                            onChange={(date) => {
                                                this.onDateChange(date, 'startDay')
                                            }}
                                            renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                            locale="vi"
                                            timeFormat={false}
                                            closeOnSelect={true}
                                            renderInput={(props)=><Input {...props} value={startDay} name="startDay" onChange={this.onInputChange} placeholder="Ngày / Tháng / Năm" invalid={!startDay}/>}
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
