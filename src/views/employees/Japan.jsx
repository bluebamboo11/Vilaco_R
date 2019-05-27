import React from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from "react-redux";
import MonthTableJapan from "../../components/Employees/MonthTableJapan";
import CardInfoJapan from "../../components/Employees/CardInfoJapan";

//Trang quản lý đơn nhân viên phòng nhật
//Gồm 2 thành phần  <MonthTableJapan /> nằm trong ../components/Employees/MonthTableJapan và   <CardInfoJapan/> nằm trong /../components/Employees/CardInfoJapan"
class Japan  extends React.Component {

    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row style={{height: '100%'}}>
                    <Col lg="8" style={{height: '100%'}}>
                        <MonthTableJapan />
                    </Col>
                    <Col lg="4" className="h-100">
                        <CardInfoJapan/>
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
Japan = connect(mapStateToProps)(Japan);
export default Japan;
