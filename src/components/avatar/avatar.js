import React, {Component} from 'react';
import img1 from "../../assets/images/users/avatar-default.jpg";
import {Row} from "reactstrap";
import ImageUploader from 'react-images-upload';

export default class Avatar extends Component {
    constructor(props) {
        super(props);


    }




    render() {
        return (
            <div
                style={}
                src={this.state.avatar}
                className=" avatar-img"
                alt="avatar"
            />

        );
    }

}
