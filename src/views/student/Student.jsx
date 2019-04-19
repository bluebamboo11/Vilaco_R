import React from 'react';
import {Row, Col} from 'reactstrap';
import {
    RevenueCards,
    CardProfile,
    MonthTable,

} from 'components/dashboard-components';

import {connect} from "react-redux";



class Student extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                {/*<RevenueCards/>*/}
                <Row className="h-100">
                    <Col lg="8" style={{height: '100%'}}>
                        <MonthTable type="student"/>
                    </Col>
                    <Col lg="4" className="h-100">
                        <CardProfile/>
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
Student = connect(mapStateToProps)(Student);
export default Student;
