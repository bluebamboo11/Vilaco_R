import React from 'react';
import {Row, Col, CardTitle, CardBody, Card, Button} from 'reactstrap';

import {connect} from "react-redux";

import ReactTable from "react-table";
import "react-table/react-table.css";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withStyles} from "@material-ui/core";

import {classService, userService, transcriptService} from "../../firebase";
import Loading from "../../components/Loading/Loading";
import {columns} from "./DataConfig"
import Datetime from "react-datetime";
import moment from "moment";


class Ranking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentEdit: {},
            modal: false,
            tab: 0,
            listMonth: [],
            listClass: [],
            listStudent: [],
            listTranscript: [],
            loading: false,
            classSelect: '1',
            searchKey: '',
            month: moment()
        };
        this.toggle = this.toggle.bind(this);
        this.renderData = this.renderData.bind(this);
        this.renderButtonEdit = this.renderButtonEdit.bind(this);
        this.showPopupEdit = this.showPopupEdit.bind(this);
        this.renderTab = this.renderTab.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onClassChange = this.onClassChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);

    }

    listData = [];

    componentDidMount() {

    }

    onClassChange(event) {
        this.setState({
            classSelect: event.target.value
        });

    }


    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    showPopupEdit(student) {
        return () => {
            this.setState({studentEdit: student});
            this.toggle();
        }

    }

    renderButtonEdit(student) {
        return (
            <div className="center-item ">
                <Button
                    onClick={this.showPopupEdit(student)}
                    color="info"
                    size="sm"
                    className="btn-edit-point"
                    style={{borderRadius: '100%', width: 30, height: 30}}
                >
                    <i className=" ti-pencil"/>
                </Button>

            </div>)
    }

    renderData() {
        return this.state.listStudent.map(student => {
            let obj = {
                uid: student.uid,
                name: student.name,
                birthday: student.birthday,

            };
            obj.actions = this.renderButtonEdit({uid: student.uid});
            this.state.listTranscript.forEach((data) => {
                if (data.uid === obj.uid && this.state.listMonth[this.state.tab] === data.month) {
                    obj = {...data, ...obj};
                    obj.actions = this.renderButtonEdit(data);
                }
            });

            return obj
        });
    }

    handleChange = (event, value) => {
        this.setState({tab: value});
    };

    renderTab() {
        const {classes} = this.props;
        const {tab} = this.state;

        return (
            <Tabs
                classes={{root: classes.tabsRoot, indicator: classes.tabsIndicator}}
                value={tab}
                onChange={this.handleChange}
            ><Tab

                classes={{root: classes.tabRoot, selected: classes.tabSelected}}
                label="Tiếng nhật"
            />
                <Tab
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}
                    label="Thể lực"
                />
                <Tab
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}
                    label="Giá dục đinh hướng"
                />
            </Tabs>
        )
    }

    onDateChange(date) {
        this.setState({
            month: date
        });
    }

    render() {

        let data = this.renderData();
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row className="h-100 ">
                    <Col lg="12" style={{height: '100%'}}>
                        <Card style={{height: '100%'}}>
                            <CardBody style={{height: '100%'}} style={{position: "relative"}}>
                                <div className="d-flex no-block mb-3">
                                    <CardTitle><h4 className="m-0">Bảng xếp hạng điểm</h4></CardTitle>
                                    <div className="ml-auto col-3">
                                        <Datetime
                                            className="text-center"
                                            onChange={this.onDateChange}
                                            value={this.state.month}
                                            dateFormat="MM/YYYY"
                                            renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                            locale="vi"
                                            timeFormat={false}
                                            closeOnSelect={true}
                                            viewMode="months"
                                        />
                                    </div>

                                </div>
                                {this.renderTab()}
                                {this.state.loading && <div style={{
                                    height: "calc(100% - 105px - 1rem)",
                                    bottom: 0,
                                    position: 'absolute',
                                    left: 0,
                                    width: '100%'
                                }}><Loading/></div>}
                                <ReactTable
                                    columns={columns}
                                    showPagination={false}
                                    className="-striped -highlight"
                                    data={data}
                                    pageSize={data.length}
                                    showPageSizeOptions={false}
                                    loadingText="Đang tải dữ liệu ..."
                                    noDataText="Chưa có học viên"
                                    style={{
                                        height: "calc(100% - 105px - 1rem)"
                                    }}
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
    return {}
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
        marginBottom: 20
    },
    tabsIndicator: {
        backgroundColor: '#1890ff',
    },
    tabRoot: {
        outline: 'none !important',
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        '&:hover': {
            color: '#40a9ff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
});

Ranking = connect(mapStateToProps)(Ranking);
Ranking = withStyles(styles)(Ranking);
export default Ranking;
