import React, {Component} from 'react';


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
