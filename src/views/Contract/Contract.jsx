import React from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from "react-redux";
import MonthTableContract from "../../components/contract/MonthTableContract";
import CardInfoContract from "../../components/contract/CardInfoContract";



class Contract  extends React.Component {

    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row style={{height: '100%'}}>
                    <Col lg="8" style={{height: '100%'}}>
                        <MonthTableContract />
                    </Col>
                    <Col lg="4" className="h-100">
                        <CardInfoContract/>
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
Contract = connect(mapStateToProps)(Contract);
export default Contract;
