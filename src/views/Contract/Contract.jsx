import React from 'react';
import {Row, Col} from 'reactstrap';
import {connect} from "react-redux";
import MonthTableContract from "../../components/contract/MonthTableContract";



class Contract  extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row style={{height: '100%'}}>
                    <Col lg="8" style={{height: '100%'}}>
                        <MonthTableContract />
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
