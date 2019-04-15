import React from 'react';
import {Row, Col} from 'reactstrap';
import {
    RevenueCards,
    CardProfile,
    MonthTable,

} from 'components/dashboard-components';

import {connect} from "react-redux";
import CardProfileTeacher from "../../components/dashboard-components/card-profile/CardProfileTeacher";



class Teacher extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <RevenueCards/>
                <Row style={{height: 'calc(100% - 132px)'}}>
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
