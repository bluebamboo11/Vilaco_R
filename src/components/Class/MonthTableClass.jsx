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
import {classService} from '../../firebase'
import MonthDataClass from "./MonthDataClass";
import DialogAddClass from "./DialogAddClass";
import {addListClass, addListTeacher} from "../../redux/actions";


class MonthTableClass extends React.Component {
    constructor(props) {
        super(props);
        this.searchAllUser = this.searchAllUser.bind(this);
        this.changeKey = this.changeKey.bind(this);
        this.exitSearch = this.exitSearch.bind(this);
        this.toggle = this.toggle.bind(this);
        this.renderListData = this.renderListData.bind(this);
        this.getAll = this.getAll.bind(this);
        this.add = this.add.bind(this);
        this.state = {
            modal: false,
            class: {
                name: '',
                startDate: '',
                endDate: '',
                teacherId: '',
                open: true
            },
            listClass: [],
            listTeacher: [],
            searchKey: ''
        };

    }

    componentDidMount() {
        this.getAll()
    }


    getAll() {
        classService.getAllClass((listClass, listTeacher) => {
            this.props.dispatch(addListClass(listClass));
            this.props.dispatch(addListTeacher(listTeacher));
            this.listData = listClass;
        })
    }

    searchAllUser(event) {
        event.preventDefault();
        let searchKey = this.state.searchKey.toUpperCase();
        let listClass = this.listData.filter((item) => {
            for (let key in item) {
                if (item[key] && typeof item[key] === 'string' && item[key].toUpperCase().indexOf(searchKey) >= 0) {
                    return true
                }
            }
        });
        this.props.dispatch(addListClass(listClass));
    }

    add(data) {
        classService.addNewClass(data).then((docRef) => {
            data.id = docRef.id;
            this.props.dispatch(addListClass(this.props.listClass.concat([data])))
        })
    }

    exitSearch() {
        this.props.dispatch(addListClass(this.listData));
        this.setState({searchKey: ''});
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
        if (this.props.listClass && this.props.listTeacher) {
            return this.props.listClass.map((data) => {
                return <MonthDataClass
                    key={data.id}
                    listTeacher={this.props.listTeacher}
                    classData={data}
                />
            })
        }
    }

    render() {
        const admin = this.props.user.admin || this.props.user.superAdmin;
        return (
            <Card style={{height: '100%'}}>
                <DialogAddClass modal={this.state.modal} toggle={this.toggle} add={this.add}
                                listTeacher={this.props.listTeacher} classData={this.state.class}/>
                <CardBody style={{height: '100%'}}>
                    <div className="d-flex no-block">
                        <CardTitle>Danh sách đơn hàng</CardTitle>
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
                        {admin&&<Button color="primary" onClick={this.toggle}><i className="ti-plus pr-2"/> Thêm</Button>}
                    </div>
                    <div className="mt-3" style={{height: 'calc(100% - 35px)'}}>
                        <PerfectScrollbar suppressScrollX={true}>
                            <Table className="stylish-table mb-0" responsive>
                                <thead>
                                <tr>
                                    <th
                                        className="text-muted font-medium border-top-0"
                                    >
                                        Tên Lớp
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Ngày bắt đầu
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Ngày kết thúc
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Giáo viên
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Trạng thái
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
        listUser: state.listUser,
        listClass: state.listClass,
        listTeacher: state.listTeacher,
        user:state.userData
    }
};
MonthTableClass = connect(mapStateToProps)(MonthTableClass);
export default MonthTableClass;
