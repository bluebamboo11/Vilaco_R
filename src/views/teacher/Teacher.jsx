import React from 'react';
import {Row, Col} from 'reactstrap';
import {
    MonthTable,

} from 'components/dashboard-components';

import {connect} from "react-redux";
import CardProfileTeacher from "../../components/dashboard-components/card-profile/CardProfileTeacher";


//Trang quản lý giáo viên gồm 2 thành phần  <MonthTable type="teacher"/> và   <CardProfileTeacher/>
class Teacher extends React.Component {

    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                {/*<RevenueCards/>*/}
                <Row className="h-100">
                    <Col lg="8" style={{height: '100%'}}>
                        <MonthTable type="teacher"/>
                    </Col>
                    <Col lg="4" className="h-100">
                        <CardProfileTeacher/>
                    </Col>
                </Row>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.listUser
    }
};
Teacher = connect(mapStateToProps)(Teacher);
export default Teacher;
