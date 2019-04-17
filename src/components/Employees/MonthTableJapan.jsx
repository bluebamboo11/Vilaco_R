import React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Table
} from 'reactstrap';

import PerfectScrollbar from "react-perfect-scrollbar";
import {connect} from "react-redux";
import DialogAddJapan from "./DialogAddJapan";
import {employeeService} from '../../firebase'
import MonthdataJapan from "./MonthdataJapan";


class MonthTableJapan extends React.Component {
    constructor(props) {
        super(props);
        this.searchAllUser = this.searchAllUser.bind(this);
        this.changeKey = this.changeKey.bind(this);
        this.exitSearch = this.exitSearch.bind(this);
        this.toggle = this.toggle.bind(this);
        this.renderListData = this.renderListData.bind(this);
        this.getAll = this.getAll.bind(this);
        this.state = {
            modal: false,
            employee: {name: '', gender: '', phone: '', skype: ''},
            listEmployee: [],
            searchKey: ''
        };

    }


    componentDidMount() {
        this.getAll()
    }

    componentWillUnmount() {
        if (this.listen) {
            this.listen();
        }
    }

    getAll() {
        this.listen = employeeService.listenAllEmployee((listData) => {
            this.setState({listEmployee: listData});
            this.listData = listData;
        })
    }

    searchAllUser(event) {
        event.preventDefault();
        let searchKey = this.state.searchKey.toUpperCase();
        this.listen();
        let listEmployee = this.listData.filter((item) => {
            console.log(1);
            for (let key in item) {
                if (item[key]&& typeof item[key] === 'string' && item[key].toUpperCase().indexOf(searchKey) >= 0) {
                    return true
                }
            }
        });
        this.setState({listEmployee: listEmployee})
    }

    exitSearch() {
        this.setState({listEmployee: this.listData,searchKey:''});
    }



    changeKey(event) {
        this.setState({
            searchKey: event.target.value
        });
    }


    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    renderListData() {
        return this.state.listEmployee.map((employee) => {
            return <MonthdataJapan
                key={employee.id}
                employee={employee}
            />
        })
    }

    render() {
        return (

            <Card style={{height: '100%'}}>
                <DialogAddJapan modal={this.state.modal} toggle={this.toggle} employee={this.state.employee}/>
                <CardBody style={{height: '100%'}}>
                    <div className="d-flex no-block">
                        <CardTitle>Danh sách nhân viên phòng nhật</CardTitle>
                        <Form className="search-user col-6 ml-auto" onSubmit={this.searchAllUser}>
                            <InputGroup>
                                <InputGroupAddon addonType="append">
                                    <Button onClick={this.exitSearch}><i
                                        className="ti-close"/></Button>
                                </InputGroupAddon>
                                <Input type="text" onChange={this.changeKey} value={this.state.searchKey}
                                       placeholder="Nhập bắt kỳ thông tin nào"/>
                                <InputGroupAddon addonType="append">
                                    <Button type="submit"><i className="ti-search"/></Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
                        <Button color="primary" onClick={this.toggle}><i className="ti-plus pr-2"/> Thêm</Button>
                    </div>
                    <div className="mt-3" style={{height: 'calc(100% - 35px)'}}>
                        <PerfectScrollbar suppressScrollX={true}>
                            <Table className="stylish-table mb-0" responsive>
                                <thead>
                                <tr>
                                    <th
                                        className="text-muted font-medium border-top-0"
                                    >
                                        Tên
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Skype
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Số điện thoại
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Giới tính
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderListData()}
                                </tbody>
                            </Table>
                        </PerfectScrollbar>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.listUser
    }
};
MonthTableJapan = connect(mapStateToProps)(MonthTableJapan);
export default MonthTableJapan;
