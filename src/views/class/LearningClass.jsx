import React from 'react';
import {Row, Col} from 'reactstrap';
import MonthTableClass from "../../components/Class/MonthTableClass";
import CardInfoClass from "../../components/Class/CardInfoClass";


class LearningClass  extends React.Component {

    render() {
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row style={{height: '100%'}}>
                    <Col lg="8" style={{height: '100%'}}>
                        <MonthTableClass />
                    </Col>
                    <Col lg="4" className="h-100">
                        <CardInfoClass/>
                    </Col>
                </Row>

            </div>
        );
    }
}


export default LearningClass;
