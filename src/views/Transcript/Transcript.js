import React from 'react';
import {Row, Col, CardTitle, CardBody, Card, Button} from 'reactstrap';
import {
    RevenueCards,
    CardProfile,
    MonthTable,

} from 'components/dashboard-components';

import {connect} from "react-redux";

import * as data from "../tables/reactable-data";
import ReactTable from "react-table";
import "react-table/react-table.css";



class Transcript extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            obj: {},
            jsonData: data.dataTable,
            data: data.makeData(),
        };
    }


    render() {
        const data2 = this.state.jsonData.map((prop, key) => {
            return {
                id: key,
                name: prop[0],
                designation: prop[1],
                location: prop[2],
                age: prop[3],
                actions: (
                    // we've added some custom button actions
                    <div className="text-center">
                        {/* use this button to add a edit kind of action */}
                        <Button
                            onClick={() => {
                                let obj = data2.find(o => o.id === key);
                                this.setState({
                                    modal: !this.state.modal,
                                    obj: obj
                                });
                            }}
                            color="inverse"
                            size="sm"
                            round="true"
                            icon="true"
                        >
                            <i className="fa fa-edit" />
                        </Button>
                        {/* use this button to remove the data row */}
                        {/* <Button
							onClick={() => {
								let newdata = data2;
								newdata.find((o, i) => {
									if (o.id === key) {
										newdata.splice(i, 1);
										console.log(newdata);
										return true;
									}
									return false;
								});
								this.setState({ jsonData: newdata });
							}}
							className="ml-1"
							color="danger"
							size="sm"
							round="true"
							icon="true"
						>
							<i className="fa fa-times" />
						</Button> */}
                    </div>
                )
            };
        });
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row className="h-100">
                    <Col lg="12" style={{height: '100%'}}>
                        <Card style={{height: '100%'}}>
                            {/*<CardTitle className="mb-0 p-3 border-bottom bg-light"><i className="mdi mdi-border-right mr-2"></i>Action Table</CardTitle>*/}
                            <CardBody style={{height: '100%'}}>
                                <ReactTable
                                    columns={[
                                        {
                                            Header: "FirstName",
                                            accessor: "name"
                                        },
                                        {
                                            Header: "Designation",
                                            accessor: "designation"
                                        },
                                        {
                                            Header: "Location",
                                            accessor: "location"
                                        },
                                        {
                                            Header: "Age",
                                            accessor: "age"
                                        },
                                        {
                                            Header: "Actions",
                                            accessor: "actions",
                                            sortable: false,
                                            filterable: false
                                        }
                                    ]}
                                    defaultPageSize={100}
                                    showPaginationBottom={true}
                                    className="-striped -highlight"
                                    data={data2}
                                    style={{
                                        height: "100%" // This will force the table body to overflow and scroll, since there is not enough room
                                    }}
                                    filterable
                                />
                            </CardBody>
                        </Card>
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
Transcript = connect(mapStateToProps)(Transcript);
export default Transcript;
