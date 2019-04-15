import React from 'react';
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import PerfectScrollbar from "react-perfect-scrollbar";
import withStyles from "@material-ui/core/styles/withStyles";

const rows = [
    {month: 1, point: 90},
    {month: 2, point: 90},
    {month: 3, point: 90},
    {month: 4, point: 90},
    {month: 5, point: 90},
    {month: 6, point: 90},
];

class Transcript extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {

        return (
            <div className="text-left p-4 content-info-st">
                <PerfectScrollbar>
                    <h5>Bảng điểm tiếng nhật</h5>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tháng</TableCell>
                                <TableCell align="right">Điểm</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={row.month} className={index % 2 === 0 ? 'cell-c' : ''}>
                                    <TableCell component="th" scope="row">
                                        {row.month}
                                    </TableCell>
                                    <TableCell align="right">{row.point}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <h5 className="pt-4">Bảng điểm thể lực</h5>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tháng</TableCell>
                                <TableCell align="right">Điểm</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow className={index % 2 === 0 ? 'cell-c' : ''} key={row.month}>
                                    <TableCell component="th" scope="row">
                                        {row.month}
                                    </TableCell>
                                    <TableCell align="right">{row.point}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </PerfectScrollbar>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.student
    }
};
Transcript = connect(mapStateToProps)(Transcript);
export default Transcript;
