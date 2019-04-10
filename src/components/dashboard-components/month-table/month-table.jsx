import React from 'react';
import {Card, CardBody, CardTitle, Input, Table} from 'reactstrap';

import img1 from 'assets/images/users/1.jpg';
import img2 from 'assets/images/users/2.jpg';
import img3 from 'assets/images/users/3.jpg';
import img4 from 'assets/images/users/4.jpg';
import img5 from 'assets/images/users/5.jpg';

import Monthdata from './monthdata';
import PerfectScrollbar from "react-perfect-scrollbar";
import {connect} from "react-redux";

class MonthTable extends React.Component {
    constructor(props) {
        super(props);
        this.renderListData = this.renderListData.bind(this)
    }

    renderListData() {
        return this.props.listUser.map((user) => {
            return <Monthdata
                user={user}
                key={user.id}
                image={user.avatar}
                name={user.name}
                email={user.email}
                city={user.city}
                phone={user.phone}
                badgeColor="primary"
                badge="Xác thực"
            />
        })

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
                            <Input type="select" className="custom-select">
                                <option defaultValue="0">Tất cả</option>
                                <option defaultValue="1">Chưa xác thực</option>
                                <option defaultValue="2">Đã xác thực</option>
                            </Input>
                        </div>
                    </div>
                    <div className="mt-3" style={{height: 'calc(100% - 35px)'}}>
                        <PerfectScrollbar>
                            <Table className="stylish-table mb-0" responsive>
                                <thead>
                                <tr>
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
MonthTable = connect(mapStateToProps)(MonthTable);
export default MonthTable;
