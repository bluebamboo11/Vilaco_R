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
import {contractService} from '../../firebase'
import MonthDataContract from "./MonthDataContract";
import DialogAddContract from "./DialogAddContract";
import {addListContract, addListEmployee} from "../../redux/actions";


class MonthTableContract extends React.Component {
    constructor(props) {
        super(props);
        this.searchAllUser = this.searchAllUser.bind(this);
        this.changeKey = this.changeKey.bind(this);
        this.exitSearch = this.exitSearch.bind(this);
        this.toggle = this.toggle.bind(this);
        this.renderListData = this.renderListData.bind(this);
        this.getAll = this.getAll.bind(this);
        this.addContract = this.addContract.bind(this);
        this.state = {
            modal: false,
            contract: {
                name: '',
                employeeId: '',
                syndication: '',
                company: '',
                salary: '',
                city: '',
                departureDate: '',
                examDay: '',
                open: true
            },
            listContract: [],
            searchKey: ''
        };

    }


    componentDidMount() {
        this.getAll()
    }


    getAll() {
        contractService.getAllContract((listData, listEmployee) => {
            this.props.dispatch(addListEmployee(listEmployee));
            this.props.dispatch(addListContract(listData));
            this.listData = listData;
        })
    }

    searchAllUser(event) {
        event.preventDefault();
        let searchKey = this.state.searchKey.toUpperCase();
        let listContract = this.listData.filter((item) => {
            for (let key in item) {
                if (item[key] && typeof item[key] === 'string' && item[key].toUpperCase().indexOf(searchKey) >= 0) {
                    return true
                }
            }
        });
        this.props.dispatch(addListContract(listContract));
    }

    addContract(data) {
        contractService.addNewContract(data).then((docRef) => {
            data.id = docRef.id;
            this.props.dispatch(addListContract(this.props.listContract.concat([data])));
        })
    }

    exitSearch() {
        this.props.dispatch(addListContract(this.listData));
    }

    changeKey(event) {
        this.setState({
            searchKey: event.target.value
        });
    }


    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal,
            contract: {
                name: '',
                employeeId: '',
                syndication: '',
                company: '',
                salary: '',
                city: '',
                departureDate: '',
                examDay: '',
                job:'',
                open: true
            }
        }));
    }

    renderListData() {
        if (this.props.listContract) {
            return this.props.listContract.map((contract) => {
                return <MonthDataContract
                    key={contract.id}
                    contract={contract}
                />
            })
        }
    }

    render() {

        return (
            /*--------------------------------------------------------------------------------*/
            /* Used In Dashboard-2 && Widget Page                                             */
            /*--------------------------------------------------------------------------------*/
            <Card style={{height: '100%'}}>
                <DialogAddContract modal={this.state.modal} toggle={this.toggle} addContract={this.addContract}
                                   listEmployee={this.props.listEmployee} contract={this.state.contract}/>
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
                                        Tên đơn hàng
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                       Nghề nghiệp
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Tên nghiệp đoàn
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Tên công ty
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Ngày thi tuyển
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Dự kiến xuất cảnh
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Lương
                                    </th>
                                    <th className="text-muted font-medium border-top-0">
                                        Tỉnh
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
        listContract: state.listContract,
        listEmployee: state.listEmployee,
    }
};
MonthTableContract = connect(mapStateToProps)(MonthTableContract);
export default MonthTableContract;
