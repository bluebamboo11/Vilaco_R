import React from 'react';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    Table
} from 'reactstrap';

import Monthdata from './monthdata';
import PerfectScrollbar from "react-perfect-scrollbar";
import {connect} from "react-redux";
import {addListClass, addListContract, addListUser, selectStudent} from "../../../redux/actions";
import {userService, contractService, classService} from "../../../firebase";

function getListUserNew(lisNew, listOld) {
    let list = [];
    lisNew.forEach((newUser) => {
        let isExits = false;
        listOld.forEach((oldUser) => {
            if (oldUser.uid === newUser.uid) {
                isExits = true;
            }
        });
        if (!isExits) {
            list.push(newUser)
        }

    });
    return listOld.concat(list);
}


class MonthTable extends React.Component {
    constructor(props) {
        super(props);
        this.renderListData = this.renderListData.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.getData = this.getData.bind(this);
        this.searchAllUser = this.searchAllUser.bind(this);
        this.changeKey = this.changeKey.bind(this);
        this.exitSearch = this.exitSearch.bind(this);
        this.getNextUser = this.getNextUser.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.getAllContract = this.getAllContract.bind(this);
        this.getAllClass = this.getAllClass.bind(this);
        this.renderOption = this.renderOption.bind(this);
        this.state = {type: '0', searchKey: ''}
    }


    componentDidMount() {
        this.next = null;
        this.props.dispatch(selectStudent(this.props.user));
        this.props.dispatch(addListUser([]));
        this.getData(this.state.type);
        this.getAllContract();
        this.getAllClass();
    }

    searchAllUser(event) {
        event.preventDefault();
        if (this.state.searchKey) {
            this.next = null;
            userService.searchAllUser(this.state.searchKey, this.props.type, (listData) => {
                this.props.dispatch(addListUser(listData))
            })
        }

    }

    getAllContract() {
        contractService.getAllContractOpen(true, (list) => {
            this.props.dispatch(addListContract(list))
        })
    }

    getAllClass() {
        classService.getAllClassOpen(true, (list) => {
            this.props.dispatch(addListClass(list))
        })
    }

    exitSearch() {
        this.setState({searchKey: ''});
        this.getData(this.state.type)

    }

    getData(type) {

        let validate = null;
        if (type === '1') {
            validate = {value: false}
        }
        if (type === '2') {
            validate = {value: true}
        }
        if (type === '3') {
            userService.getAllStudent(this.next, 'classId',null,(listData, next) => {
                this.next = next;
                this.props.dispatch(addListUser(getListUserNew(listData, this.props.listUser)))
            });
            return
        }
        if (type === '4') {
            userService.getAllStudent(this.next, 'contractId',null, (listData, next) => {
                this.next = next;
                this.props.dispatch(addListUser(getListUserNew(listData, this.props.listUser)))
            });
            return;
        }
        userService.getAllUser(this.next, this.props.type, validate, (listData, next) => {
            this.next = next;
            this.props.dispatch(addListUser(getListUserNew(listData, this.props.listUser)))
        })
    }

    getNextUser() {
        if (this.next) {
            this.getData(this.state.type);
        }
    }

    renderListData() {
        if (this.props.type === 'teacher') {
            return this.props.listUser.map((user) => {
                return <Monthdata
                    user={user}
                    key={user.uid}
                />
            })
        }
        return this.props.listUser.map((user) => {
            return <Monthdata
                user={user}
                key={user.uid}
            />
        })

    }

    renderHeader() {
        if (this.props.type === 'student') {
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
                    Trạng thái
                </th>
            </tr>)
        }
        return (<tr>
            <th
                colSpan="2"
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
                Trạng thái
            </th>
        </tr>)
    }

    changeKey(event) {
        this.setState({
            searchKey: event.target.value
        });
    }

    onTypeChange(event) {
        this.next = null;
        this.props.dispatch(addListUser([]));
        this.setState({
            type: event.target.value
        });
        this.getData(event.target.value);
    }
    renderOption(){
        if(this.props.type === 'student'){
            return  <Input type="select" className="custom-select" onChange={this.onTypeChange}
                           value={this.state.type}>
                <option value="0">Tất cả</option>
                <option value="1">Chưa xác thực</option>
                <option value="2">Đã xác thực</option>
                <option value="3">Chưa có lớp</option>
                <option value="4">Chưa có hợp đồng</option>
            </Input>
        }
        return  <Input type="select" className="custom-select" onChange={this.onTypeChange}
                       value={this.state.type}>
            <option value="0">Tất cả</option>
            <option value="1">Chưa xác thực</option>
            <option value="2">Đã xác thực</option>
        </Input>
    }

    render() {
        return (
            /*--------------------------------------------------------------------------------*/
            /* Used In Dashboard-2 && Widget Page                                             */
            /*--------------------------------------------------------------------------------*/
            <Card style={{height: '100%'}}>
                <CardBody style={{height: '100%'}}>
                    <div className="d-flex no-block">
                        <CardTitle>Danh sách học viên</CardTitle>
                        <div className="ml-auto">
                            {this.renderOption()}
                        </div>
                        <Form className="search-user col-6 " onSubmit={this.searchAllUser}>
                            <InputGroup>
                                <InputGroupAddon addonType="append">
                                    <Button onClick={this.exitSearch}><i className="ti-close"/></Button>
                                </InputGroupAddon>
                                <Input type="text" onChange={this.changeKey} value={this.state.searchKey} required
                                       placeholder="Nhập chính xác tên, số điện thoại hoặc email"/>
                                <InputGroupAddon addonType="append">
                                    <Button type="submit"><i className="ti-search"/></Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Form>
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
        );
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.listUser
    }
};
MonthTable = connect(mapStateToProps)(MonthTable);
export default MonthTable;
