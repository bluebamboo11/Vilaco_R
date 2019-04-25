import React from 'react';
import {
    Card,
    CardBody, CardText,
    CardTitle, Col, Row,
    Table
} from 'reactstrap';

import PerfectScrollbar from "react-perfect-scrollbar";
import {connect} from "react-redux";
import {userService, classService} from "../../firebase";


class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.renderListData = this.renderListData.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderCardClass = this.renderCardClass.bind(this);
        this.renderCardTeacher = this.renderCardTeacher.bind(this);
        this.state = {listUser: []}
    }


    componentDidMount() {
        if (this.props.user.classId) {
            userService.getAllStudentByClass(this.props.user.classId, (listUser) => {
                this.setState({listUser: listUser})

            });

            classService.getClassById(this.props.user.classId).then((data) => {
                const classData = data.data();
                this.setState({class: classData});
                if (classData) {
                    userService.getOneUser(classData.teacherId, (teacher) => {
                        this.setState({teacher: teacher});
                    })
                }

            })
        }

    }


    renderListData() {
        return this.state.listUser.map((user) => {
            return <tr className="row-use" key={user.uid}>
                <td>
                    <span className="round"><img className="avatar" src={user.avatar} alt="user" width="50"
                                                 height="50"/></span>
                </td>
                <td>
                    <h6 className="font-medium mb-0">{user.name}</h6>
                    <small className="text-muted">{user.email}</small>
                </td>
                <td>
                    <div>{user.city}</div>
                </td>
                <td>
                    <div>{user.phone}</div>
                </td>
                <td>
                    <div>{user.birthday}</div>
                </td>
                <td>
                    <div>{user.gender == 1 ? 'Nam' : 'Nữ'}</div>
                </td>
            </tr>
        })

    }

    renderHeader() {
        return (<tr>
            <th
                colSpan="2"
                className="text-muted font-medium border-top-0"
            >
                Tên
            </th>
            <th className="text-muted font-medium border-top-0">
                Quê quán
            </th>
            <th className="text-muted font-medium border-top-0">
                Số điện thoại
            </th>
            <th className="text-muted font-medium border-top-0">
                Ngày sinh
            </th>
            <th className="text-muted font-medium border-top-0">
                Giới tính
            </th>
        </tr>)


    }

    renderCardClass() {
        if (this.state.class) {
            const {name, startDate, endDate, open} = this.state.class;
            return <Card>
                <CardBody>
                    <CardTitle className="mb-3"><h4>Lớp : {name}</h4></CardTitle>
                    <Row>
                        <Col sm="6">
                            <CardText>Bắt đầu : <span className="font-medium">{startDate}</span></CardText>
                            <CardText>Kết thúc : <span className="font-medium">{endDate}</span></CardText>

                        </Col>
                        <Col sm="6">
                            <CardText>Sỹ số : <span
                                className="font-medium">{this.state.listUser.length}</span></CardText>
                            <CardText>Trạng thái : <span
                                className="font-medium">{open ? 'Hoạt động' : 'Đóng'}</span></CardText>

                        </Col>
                    </Row>
                </CardBody>
            </Card>
        }
        return ''

    }

    renderCardTeacher() {
        if (this.state.teacher) {
            const {name, avatar, phone, gender,skype,facebook} = this.state.teacher;
            return <Card>
                <CardBody>
                    <Row>
                        <Col sm="3" className="center-item ">
                                <img src={avatar} className="avatar rounded-circle" alt="user" width="80" height="80"/>
                        </Col>
                        <Col sm="9">
                            <CardTitle className="mb-3"><h4>Tên giáo viên: {name}</h4></CardTitle>
                            <Row>
                                <Col sm="6">
                                    <CardText>SDT : <span className="font-medium">{phone}</span></CardText>
                                    <CardText>Giới tính : <span
                                        className="font-medium">{gender === 1 ? 'Nam' : 'Nữ'}</span></CardText>
                                </Col>
                                <Col sm="6">
                                    <CardText>Skype : <span className="font-medium">{skype}</span></CardText>
                                    <CardText>Facebook : <span
                                        className="font-medium">{facebook}</span></CardText>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        }
    }

    render() {
        return (
            <div>
                <Row>
                    <Col lg="6">
                        {this.renderCardClass()}
                    </Col>

                    <Col lg="6">
                        {this.renderCardTeacher()}
                    </Col>
                </Row>
                <Card style={{height: '100%'}}>
                    <CardBody style={{height: '100%'}}>
                        <div className="d-flex no-block">
                            <CardTitle>Danh sách học viên</CardTitle>
                        </div>
                        <div className="mt-3" style={{height: 'calc(100% - 35px)'}}>
                            <PerfectScrollbar suppressScrollX={true} onYReachEnd={this.getNextUser}>
                                <Table className="stylish-table mb-0" responsive>
                                    <thead>
                                    {this.renderHeader()}
                                    </thead>
                                    <tbody>
                                    {this.renderListData()}
                                    </tbody>
                                </Table>
                            </PerfectScrollbar>
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userData
    }
};
MyClass = connect(mapStateToProps)(MyClass);
export default MyClass;