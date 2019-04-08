import React, {Component} from 'react';
import img1 from "../../assets/images/users/avatar-default.jpg";
import {Row} from "reactstrap";
import ImageUploader from 'react-images-upload';

export default class Step3 extends Component {
    constructor(props) {
        super(props);
        this.onDrop = this.onDrop.bind(this)
        this.isValidated = this.isValidated.bind(this)
    }

    index = 0;
    isValidated(){
       return  !!this.props.userData.avatar
    }
    onDrop(picture) {
        let userData = {...this.props.userData};
        userData['avatar'] = picture[this.index];
        this.props.updateStore(userData);
        this.index = this.index + 1;
    }

    render() {
        let avatar = img1;
        if (this.props.userData.avatar) {
            avatar = URL.createObjectURL(this.props.userData.avatar);
        }
        return (
            <div className="step step2 mt-5">
                <div className="row justify-content-md-center">
                    <div className="col-lg-8">
                        <div className="text-center mt-4">
                            <img
                                src={avatar}
                                className="rounded-circle"
                                width="200"
                                height="200"
                                alt="avatar"
                            />
                            <Row className="text-center justify-content-md-center">
                                <ImageUploader
                                    fileContainerStyle={{boxShadow: 'none'}}
                                    label="ảnh có kích thước nhỏ hơn 1mb"
                                    withIcon={true}
                                    buttonText='Chọn ảnh'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    fileSizeError="kích thược file vượt quá 1mb"
                                    fileTypeError="Định dạng file chưa chính xác"
                                    maxFileSize={1048576}
                                    singleImage={true}
                                />


                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
