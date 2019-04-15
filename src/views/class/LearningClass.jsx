import React from 'react';
import {Row, Col} from 'reactstrap';
import MonthTableClass from "../../components/Class/MonthTableClass";



class LearningClass  extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row style={{height: '100%'}}>
                    <Col lg="8" style={{height: '100%'}}>
                        <MonthTableClass />
                    </Col>

                </Row>

            </div>
        );
    }
}


export default LearningClass;