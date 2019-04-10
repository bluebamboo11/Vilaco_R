import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {selectStudent} from "../../../redux/actions";

class Monthdata extends React.Component {
    constructor(props) {
        super(props);
      this.selectStudent = this.selectStudent.bind(this)
    }

    selectStudent() {
        this.props.dispatch(selectStudent(this.props.user))
    }

    render() {
        const image = <img  className="avatar" src={this.props.image} alt="user" width="50" height="50"/>;
        const username = (
            <h6 className="font-medium mb-0">{this.props.name}</h6>
        );
        const smtext = <small className="text-muted">{this.props.email}</small>;
        const city = <div>{this.props.city}</div>;
        const badge = (
            <span className={'badge badge-' + this.props.badgeColor}>
        {this.props.badge}
      </span>
        );
        const phone = <div>{this.props.phone}</div>;
        return (
            <tr className="row-use" onClick={this.selectStudent}>
                <td>
                    <span className="round">{image}</span>
                </td>
                <td>
                    {username}
                    {smtext}
                </td>
                <td>{city}</td>
                <td>{phone}</td>
                <td>{badge}</td>
            </tr>
        );
    }
}

Monthdata.defaultProps = {
    badgeColor: 'primary'
};

Monthdata.propTypes = {
    badgeColor: PropTypes.oneOf([
        'primary',
        'success',
        'info',
        'danger',
        'warning',
        'orange',
        'cyan'
    ]),
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    badge: PropTypes.string,
    budget: PropTypes.string
};
Monthdata = connect()(Monthdata);
export default Monthdata;
