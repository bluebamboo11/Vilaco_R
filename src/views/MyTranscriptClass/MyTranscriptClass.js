import React from 'react';
import {Row, Col, CardTitle, CardBody, Card, Button, Form, InputGroup, InputGroupAddon, Input} from 'reactstrap';

import {connect} from "react-redux";

import ReactTable from "react-table";
import "react-table/react-table.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withStyles} from "@material-ui/core";
import * as moment from 'moment';
import {userService, transcriptService} from "../../firebase";
import Loading from "../../components/Loading/Loading";
import {columns} from "./DataConfig"



class MyTranscriptClass extends React.Component {
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
            loading: true,
            loadTable: false,
            classSelect: '1',
            searchKey: ''
        };
        this.toggle = this.toggle.bind(this);
        this.renderData = this.renderData.bind(this);
        this.renderButtonEdit = this.renderButtonEdit.bind(this);
        this.showPopupEdit = this.showPopupEdit.bind(this);
        this.renderTab = this.renderTab.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        this.setTabMonth = this.setTabMonth.bind(this);
        this.changeKey = this.changeKey.bind(this);
        this.searchAllUser = this.searchAllUser.bind(this);
        this.exitSearch = this.exitSearch.bind(this);
    }

    listData = [];

    componentDidMount() {
        if(this.props.user.classId){
            userService.getAllStudentByClass(this.props.user.classId, (listStudent) => {
                transcriptService.getAllbyClass(this.props.user.classId, (listTranscript) => {
                    this.setState({listTranscript: listTranscript, listStudent: listStudent, loading: false});
                    this.listData = listStudent;
                    this.setTabMonth(listTranscript)
                });
            });
        }else {
            this.setState({ loading: false});
        }

    }



    setTabMonth(listTranscript) {
        let listMonth = [];
        listTranscript.forEach(data => {
            if (data.month && listMonth.indexOf(data.month) < 0) {
                listMonth.push(data.month)
            }
        });
        listMonth.sort((a, b) => {
            return moment(a, 'MM-YYYY').diff(moment(b, 'MM-YYYY'))
        });
        if (listMonth.length === 0) {
            listMonth.push(moment().format('MM-YYYY'))
        }
        this.setState({listMonth: listMonth, tab: listMonth.length - 1})
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
        let list = this.state.listStudent.map(student => {
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
        console.log(list);
        return list
    }

    handleChange = (event, value) => {

        if (value !== this.state.listMonth.length) {
            this.setState({tab: value});
        } else {
            this.setState((state) => {
                let listMonth = state.listMonth;
                if (listMonth.length === 0) {
                    listMonth.push(moment().format('MM-YYYY'))
                } else {
                    let month = listMonth[listMonth.length - 1];
                    month = moment(month, 'MM-YYYY').add(1, 'months').format('MM-YYYY');
                    listMonth.push(month)
                }
                return {listMonth: listMonth}

            })
        }

    };

    renderTab() {
        const {classes} = this.props;
        const {tab} = this.state;
        return (
            <Tabs
                classes={{root: classes.tabsRoot, indicator: classes.tabsIndicator}}
                value={tab}
                onChange={this.handleChange}
            >
                {this.state.listMonth.map((month) => {
                    return <Tab
                        key={month}
                        classes={{root: classes.tabRoot, selected: classes.tabSelected}}
                        label={month}
                    />
                })}

            </Tabs>
        )
    }


    save(data) {
        data.classId = this.state.classSelect;
        data.month = this.state.listMonth[this.state.tab];
        transcriptService.save(data).then((docRef) => {
            if (docRef) {
                data.id = docRef.id;
                this.setState(state => {
                    return {listTranscript: state.listTranscript.concat([data])}
                })
            } else {
                this.state.listTranscript.forEach((transcript, index) => {
                    if (transcript.id === data.id) {
                        const listTranscript = this.state.listTranscript.concat();
                        listTranscript[index] = data;
                        this.setState({listTranscript: listTranscript})
                    }
                })
            }

        })
    }

    changeKey(event) {
        this.setState({
            searchKey: event.target.value
        });
    }

    searchAllUser(event) {
        event.preventDefault();
        let searchKey = this.state.searchKey.toUpperCase();
        let listStudent = this.listData.filter((item) => {
            return item.name.toUpperCase().indexOf(searchKey) >= 0;

        });
        this.setState({listStudent: listStudent});
    }

    exitSearch(){
        this.setState({listStudent: this.listData,searchKey:''});
    }
    render() {
        if (this.state.loading) {
            return (<div className="w-100 h-100" style={{position: "relative"}}>
                <Loading/>
            </div>)
        }
        let data = this.renderData();
        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row className="h-100 ">
                    <Col lg="12" style={{height: '100%'}}>
                        <Card style={{height: '100%'}}>
                            <CardBody style={{height: '100%'}}>
                                <div className="d-flex no-block mb-3">
                                    <CardTitle><h4 className="m-0">Bảng điểm lớp học</h4></CardTitle>

                                    <Form className="search-user col-6 pr-0 ml-auto" onSubmit={this.searchAllUser}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="append">
                                                <Button onClick={this.exitSearch}><i className="ti-close"/></Button>
                                            </InputGroupAddon>
                                            <Input type="text" onChange={this.changeKey} value={this.state.searchKey}
                                                   required
                                                   placeholder="Nhập tên học viên"/>
                                            <InputGroupAddon addonType="append">
                                                <Button type="submit"><i className="ti-search"/></Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Form>
                                </div>
                                {this.renderTab()}
                                {this.state.tab !== this.state.listMonth.length &&
                                <ReactTable
                                    loading={this.state.loadTable}
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
                                />}

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {user:state.userData}
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

MyTranscriptClass = connect(mapStateToProps)(MyTranscriptClass);
MyTranscriptClass = withStyles(styles)(MyTranscriptClass);
export default MyTranscriptClass;
