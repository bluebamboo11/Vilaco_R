import React from 'react';
import {Badge, CardBody} from "reactstrap";
import {connect} from "react-redux";


class CardInfo extends React.Component {
    constructor(props) {
        super(props);
        this.renderTeacher = this.renderTeacher.bind(this)
        this.renderAdmin = this.renderAdmin.bind(this)

    }

    renderAdmin() {
        let {admin, superAdmin} = this.props.userData;
        if (superAdmin) {
            return <Badge color="warning" style={{color:'white',marginLeft:10}} pill>Quản trị viên</Badge>
        }
        if (admin) {
            return <Badge color="danger" style={{marginLeft:10}} pill>Quản lý</Badge>
        }
    }

    renderTeacher() {
        let {skype, phone, gender, email} = this.props.userData;
        return (

            <CardBody className="border-top">
                <div>
                    <small className="text-muted">Skype</small>
                    <h6>{skype}</h6>
                    <small className="text-muted">Email</small>
                    <h6>{email}</h6>
                    <small className="text-muted pt-4 db">Số điện thoại</small>
                    <h6>{phone}</h6>
                    <small className="text-muted pt-4 db">Giới tính</small>
                    <h6>{Number(gender) === 1 ? 'Nam' : 'Nữ'}</h6>
                    <br/>
                    <h4>
                        <Badge color="success" pill>
                            Giáo viên
                        </Badge>
                        {this.renderAdmin()}
                    </h4>
                </div>
            </CardBody>

        );
    }

    render() {
        let {phone, town, district, city, address, email, type,status} = this.props.userData;
        if (type !== 'student') {
            return this.renderTeacher();
        }
        return (
            <CardBody className="border-top">
                <div>
                    <small className="text-muted">Email</small>
                    <h6>{email}</h6>
                    <small className="text-muted pt-4 db">Số điện thoại</small>
                    <h6>{phone}</h6>
                    <small className="text-muted pt-4 db">Địa chỉ - Quê quán</small>
                    <h6>{address + ', ' + town + ', ' + district + ', ' + city}</h6>
                    <br/>
                    <h4>
                        <Badge color="success" pill>
                            Học viên
                        </Badge>
                        <Badge color="info" className="ml-2" pill>
                            {status}
                        </Badge>
                    </h4>

                </div>
            </CardBody>

        );
    }
}

const mapStateToProps = state => {
    return {
        userData: state.userData
    }
};
CardInfo = connect(mapStateToProps)(CardInfo);
export default CardInfo;
