import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';

import img1 from '../../assets/images/big/anh-dao.jpg';
import img2 from '../../assets/images/big/kimono.jpg';
import logo from '../../assets/images/logo.jpg';
import {contractService, employeeService} from "../../firebase";
import {connect} from "react-redux";

//Trang học viên kiểm tra hợp đông của mình
class MyContract extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contract: {},
            employee: {},
            isLoadContract: true,
            isLoadEmployee: true,
        };
        this.renderCardContract = this.renderCardContract.bind(this);
        this.renderEmployee = this.renderEmployee.bind(this);
    }

    //Lấy thông tin hợp đống và nhân viên phụ trách
    componentDidMount() {
        if (this.props.user.contractId) {
            contractService.getContractById(this.props.user.contractId).then((doc) => {
                const contract = doc.data();
                this.setState({contract: contract, isLoadContract: false});
                if (contract.employeeId) {
                    employeeService.getOneEmployee(contract.employeeId).then((doc2) => {
                        this.setState({employee: doc2.data(), isLoadEmployee: false});
                    })
                } else {
                    this.setState({isLoadEmployee: false});
                }

            })
        } else {
            this.setState({isLoadContract: false, isLoadEmployee: false});
        }

    }

    //Tạo giao diện thông tin hợp đồng
    renderCardContract() {
        if (this.state.isLoadContract) {
            return ''
        }
        const {name, syndication, company, departureDate, examDay, salary, city, job} = this.state.contract;
        if (!this.props.user.contractId) {
            return <Card>
                <CardImg top width="100%" src={img1}/>
                <CardBody>
                    <CardTitle><h4>Bạn chưa có đơn hàng</h4></CardTitle>
                </CardBody>
            </Card>
        }
        return <Card>
            <CardImg top width="100%" src={img1}/>
            <CardBody>
                <CardTitle><h4>Thông tin đơn hàng của bạn</h4></CardTitle>
                <CardText>Tên đơn hàng : <span className="font-medium">{name}</span></CardText>
                <CardText>Công viêc : <span className="font-medium">{job}</span></CardText>
                <CardText>NGhiệp đoàn : <span className="font-medium">{syndication}</span></CardText>
                <CardText>Công ty : <span className="font-medium">{company}</span></CardText>
                <CardText>Ngày thi tuyển : <span className="font-medium">{examDay}</span></CardText>
                <CardText>Dự kiến xuất cảnh : <span className="font-medium">{departureDate}</span></CardText>
                <CardText>Lương : <span className="font-medium">{salary}</span></CardText>
                <CardText>Tỉnh : <span className="font-medium">{city}</span></CardText>
            </CardBody>
        </Card>
    }

    //Tạo giao diện thông tin nhân viên quản lý
    renderEmployee() {
        if (this.state.isLoadEmployee) {
            return ''
        }
        const {name, gender, phone, skype, facebook, old, email} = this.state.employee;
        if (!this.props.user.contractId || (this.props.user.contractId && !this.state.contract.employeeId)) {
            return <Card>
                <CardImg top width="100%" src={img2}/>
                <CardBody>
                    <CardTitle><h4>Bạn chưa có nhân viên quản lý</h4></CardTitle>
                </CardBody>
            </Card>
        }
        return <Card>
            <CardImg top width="100%" src={img2}/>
            <CardBody>
                <CardTitle><h4>Thông tin người quản lý</h4></CardTitle>
                <CardText>Tên : <span className="font-medium">{name}</span></CardText>
                <CardText>Skype : <span className="font-medium">{skype}</span></CardText>
                <CardText>Số điện thoại : <span className="font-medium">{phone}</span></CardText>
                <CardText>Facebook : <span className="font-medium">{facebook}</span></CardText>
                <CardText>Email : <span className="font-medium">{email}</span></CardText>
                <CardText>Năm sinh : <span className="font-medium">{old}</span></CardText>
                <CardText>Giới tính : <span
                    className="font-medium">{Number(gender) === 1 ? 'Nam' : 'Nữ'}</span></CardText>
                <CardText>&nbsp;</CardText>
            </CardBody>
        </Card>
    }

    //Tạo giao diện toàn trang
    render() {


        return <div style={{'overflow-x': 'hidden','overflow-y': 'auto',height:'100%'}}>
            <Row>
                <Col xs="12" md="6">
                    {this.renderCardContract()}
                </Col>
                <Col xs="12" md="6">
                    {this.renderEmployee()}
                </Col>
            </Row>
            <Card>
                <Row>
                    <Col xs="3"  md="2" className="center-item">
                        <CardImg left width="100%" src={logo} className="pl-4"/>
                    </Col>
                    <Col xs="9"  md="10">
                        <CardBody>
                            <CardTitle>Công ty cổ phần nhân lực quốc tế Việt</CardTitle>
                            <CardText className="m-0">Giám đốc: <span className="font-medium">Lưu Thị Ngọc Túy</span></CardText>
                            <CardText className="m-0">Điện thoại : <span className="font-medium">0328.56.56.56   -   02433.545.233</span></CardText>
                            <CardText className="m-0">Website : <span className="font-medium">vilacojsc.com.vn</span></CardText>
                            <CardText className="m-0">Facebook : <span className="font-medium">Công ty Vilaco</span></CardText>
                            <CardText className="m-0">Văn Phòng : <span className="font-medium">Lô A7, Vạn Phúc, Hà Đông, Hà Nội</span></CardText>
                            <CardText className="m-0">Địa chỉ : <span className="font-medium">16B – TT10, KĐT Văn Quán, Phường Văn Quán, Quận Hà Đông, Hà Nội</span></CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

        </div>;
    }
}

const mapStateToProps = state => {
    return {user: state.userData}
};

MyContract = connect(mapStateToProps)(MyContract);
export default MyContract;


