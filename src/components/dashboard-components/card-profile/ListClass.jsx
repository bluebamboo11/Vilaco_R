import React from 'react';
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import PerfectScrollbar from "react-perfect-scrollbar";

class ListClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {rows} = this.props;
        if (!rows || rows.length === 0) {
            return <div className="content-info-st  align-items-center justify-content-center" style={{display:'flex'}}>
                <div><h4>Chưa phụ trách lớp nào</h4></div>
            </div>
        }
        return (
            <div className="text-left p-4 content-info-st">
                <PerfectScrollbar>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tên</TableCell>
                                <TableCell align="right">Ngày bắt đầu</TableCell>
                                <TableCell align="right">Ngày kết thúc</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.startDate}</TableCell>
                                    <TableCell align="right">{row.endDate}</TableCell>
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
ListClass = connect(mapStateToProps)(ListClass);
export default ListClass;
