import React from 'react';
import {  Row, Col } from 'reactstrap';
import {
    RevenueCards,
    CardProfile,
    MonthTable,

} from 'components/dashboard-components';
import { userService} from "../../firebase";
import {connect} from "react-redux";
import {addListUser} from "../../redux/actions";


class Student extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        userService.getAllUser(null,'student',(listData)=>{
            console.log(listData);
          this.props.dispatch(addListUser(listData))
        })
    }

    render() {
        return (
            <div style={{height:'100%',width:'100%'}}>
                <RevenueCards  />
                <Row style={{height:'calc(100% - 132px)'}}>
                    <Col lg="8" style={{height:'100%'}}>
                        <MonthTable />
                    </Col>
                    <Col lg="4" >
                        <CardProfile />
                    </Col>
                </Row>

            </div>
        );
    }
}
Student = connect()(Student);
export default Student;
