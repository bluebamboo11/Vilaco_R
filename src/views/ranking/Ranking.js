import React from 'react';
import {Row, Col, CardTitle, CardBody, Card, Table} from 'reactstrap';
import {transcriptService} from "../../firebase";
import "react-table/react-table.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {withStyles} from "@material-ui/core";
import Loading from "../../components/Loading/Loading";
import Datetime from "react-datetime";
import moment from "moment";
import CellRanking from "./CellRanking";
import PerfectScrollbar from "react-perfect-scrollbar";
import {connect} from "react-redux";


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
            month: moment()
        };

        this.renderTab = this.renderTab.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderListData = this.renderListData.bind(this);
        this.getTopTranscript = this.getTopTranscript.bind(this);

    }

    componentDidMount() {
        this.getTopTranscript(this.state.tab, this.state.month)
    }

    getTopTranscript(tab, month) {
        let type = 'japanese';
        switch (tab) {
            case 1:
                type = 'health';
                break;
            case 2:
                type = 'education';
                break;
            default:
                break

        }
        this.setState({loading: true});
        transcriptService.getTop(month.format('MM-YYYY'), type, (list) => {
            this.setState({listTranscript: list, loading: false})
        })
    }

    handleChange = (event, value) => {
        this.setState({tab: value, listTranscript: []});
        this.getTopTranscript(value, this.state.month);
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
        this.getTopTranscript(this.state.tab, date);
        this.setState({
            month: date,
            listTranscript: []
        });
    }

    renderHeader() {
        const admin = this.props.user.admin || this.props.user.superAdmin;
        if (this.state.tab === 0) {
            return (<tr>
                <th
                    colSpan="2"
                    className="text-muted font-medium border-top-0"
                >
                    Học viên
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Nghe
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Viết
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Hội thoại
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Trung bình
                </th>
                {this.props.user.type === 'teacher' && <th className="border-top-0"/>}
                {admin && <th className="border-top-0"/>}
            </tr>)
        }
        if (this.state.tab === 1) {
            return (<tr>
                <th
                    colSpan="2"
                    className="text-muted font-medium border-top-0 "
                >
                    Học viên
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Chống đẩy
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    ĐLNX
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Gập lưng
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Gập bụng
                </th>
                <th className="text-muted font-medium border-top-0 text-center">
                    Trung bình
                </th>
                {this.props.user.type === 'teacher' && <th className="border-top-0"/>}
                {admin && <th className="border-top-0"/>}
            </tr>)
        }
        return (<tr>
            <th
                colSpan="2"
                className="text-muted font-medium border-top-0"
            >
                Học viên
            </th>
            <th className="text-muted font-medium border-top-0 text-center">
                Giáo dục định hướng
            </th>
            {this.props.user.type === 'teacher' && <th className="border-top-0"/>}
            {admin && <th className="border-top-0"/>}
        </tr>)

    }

    renderListData() {
        return this.state.listTranscript.map((transcript) => {
            return <CellRanking
                user={this.props.user}
                type={this.state.tab}
                data={transcript}
                key={transcript.id}
            />
        })

    }

    render() {

        return (
            <div style={{height: '100%', width: '100%'}}>
                <Row className="h-100 ">
                    <Col lg="12" style={{height: '100%'}}>
                        <Card style={{height: '100%'}}>
                            <CardBody style={{position: "relative", height: '100%'}}>
                                <PerfectScrollbar>
                                    <div className="d-flex no-block mb-3">
                                        <CardTitle><h4 className="m-0">Bảng xếp hạng điểm</h4></CardTitle>
                                        <div className="mont-input-ranking row ml-auto">
                                            <div className="pr-3 font-medium" style={{lineHeight: '35px'}}>Chọn tháng
                                            </div>
                                            <div>
                                                <Datetime
                                                    className="text-center"
                                                    onChange={this.onDateChange}
                                                    value={this.state.month}
                                                    inputProps={{style: {textAlign: 'center'}}}
                                                    dateFormat="MM/YYYY"
                                                    renderMonth={(props, month) => <td {...props}>Th {month + 1}</td>}
                                                    locale="vi"
                                                    timeFormat={false}
                                                    closeOnSelect={true}
                                                    viewMode="months"
                                                />
                                            </div>
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

                                    <Table className="stylish-table mb-0">
                                        <thead>
                                        {this.renderHeader()}
                                        </thead>
                                        <tbody>
                                        {this.renderListData()}
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}


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

const mapStateToProps = state => {
    return {user: state.userData}
};
Ranking = connect(mapStateToProps)(Ranking);
Ranking = withStyles(styles)(Ranking);
export default Ranking;
