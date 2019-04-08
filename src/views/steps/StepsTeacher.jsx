import React, {Component} from 'react';
import Datetime from "react-datetime";

import {FormFeedback, Input} from "reactstrap";

export default class StepsTeacher extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.isValidated = this.isValidated.bind(this)
    }

    onInputChange(event) {
        let userData = {...this.props.userData};
        userData[event.target.name] = event.target.value;
        this.props.updateStore(userData)
    }

    isValidated() {
        let {name, phone, gender, skype} = this.props.userData;
        return name && phone && gender && skype
    }




    render() {
        let {name, phone, gender, skype} = this.props.userData;
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
                                    <Input value={skype} name="skype" onChange={this.onInputChange}
                                           invalid={!skype}
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
