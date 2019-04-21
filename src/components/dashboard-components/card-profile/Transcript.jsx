import React from 'react';
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import PerfectScrollbar from "react-perfect-scrollbar";



class Transcript extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.renderTranscriptJapanese = this.renderTranscriptJapanese.bind(this);
        this.renderTranscriptHealth = this.renderTranscriptHealth.bind(this);
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

    renderTranscriptJapanese() {
        return this.props.user.listTranscript.map((row, index) => (
            <TableRow key={row.month} className={index % 2 === 0 ? 'cell-c' : ''}>
                <TableCell className="p-0 pl-2">
                    {row.month}
                </TableCell>
                <TableCell className="p-0 text-center">{row.listen}</TableCell>
                <TableCell className="p-0 text-center">{row.write}</TableCell>
                <TableCell className="p-0 text-center">{row.conversation}</TableCell>
                <TableCell className="p-0 text-center">{row.japanese}</TableCell>
            </TableRow>))
    }

    renderTranscriptHealth() {
        return this.props.user.listTranscript.map((row, index) => (
            <TableRow key={row.month} className={index % 2 === 0 ? 'cell-c' : ''}>
                <TableCell className="p-0 pl-2">
                    {row.month}
                </TableCell>
                <TableCell className="p-0 text-center">{row.push}</TableCell>
                <TableCell className="p-0 text-center">{row.squat}</TableCell>
                <TableCell className="p-0 text-center">{row.bendBack}</TableCell>
                <TableCell className="p-0 text-center">{row.bellySticks}</TableCell>
                <TableCell className="p-0 text-center">{row.health}</TableCell>
            </TableRow>))
    }

    renderTranscriptEducation() {
        return this.props.user.listTranscript.map((row, index) => (
            <TableRow key={row.month} className={index % 2 === 0 ? 'cell-c' : ''}>
                <TableCell className="p-0 pl-2">
                    {row.month}
                </TableCell>
                <TableCell className="p-0 text-center">{row.education}</TableCell>
            </TableRow>))
    }

    render() {
        if (!this.props.user.listTranscript) {
            return ''
        }
        return (
            <div className="text-left p-4 content-info-st">
                <PerfectScrollbar>
                    <h5>Bảng điểm tiếng nhật</h5>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="p-0 pl-2">Tháng</TableCell>
                                <TableCell className="p-0 text-center">Nghe</TableCell>
                                <TableCell className="p-0 text-center">viết</TableCell>
                                <TableCell className="p-0 text-center">hội thoại</TableCell>
                                <TableCell className="p-0 text-center">Trung bình</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderTranscriptJapanese()}
                        </TableBody>
                    </Table>
                    <h5 className="pt-4">Bảng điểm thể lực</h5>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="p-0 pl-2 ">Tháng</TableCell>
                                <TableCell className="p-0 text-center">Chống đẩy</TableCell>
                                <TableCell className="p-0 text-center">ĐLNX</TableCell>
                                <TableCell className="p-0 text-center">Gập lưng</TableCell>
                                <TableCell className="p-0 text-center">Gập bụng</TableCell>
                                <TableCell className="p-0 text-center">Trung Bình</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderTranscriptHealth()}
                        </TableBody>
                    </Table>
                    <h5 className="pt-4">Bảng điểm Giáo dục định hướng</h5>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell className="p-0 pl-2 ">Tháng</TableCell>
                                <TableCell className="p-0 text-center">Điểm</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.renderTranscriptEducation()}
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
