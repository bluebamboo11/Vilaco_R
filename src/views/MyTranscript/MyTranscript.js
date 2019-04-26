import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';


import {transcriptService} from "../../firebase";
import {connect} from "react-redux";
import * as moment from "moment";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";


class MyTranscript extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTranscript: [],
            isLoad: true,

        };
        this.renderTranscriptJapanese = this.renderTranscriptJapanese.bind(this);
        this.renderTranscriptHealth = this.renderTranscriptHealth.bind(this);
        this.renderTranscriptEducation = this.renderTranscriptEducation.bind(this);

    }

    componentDidMount() {
        console.log(this.props.user.uid);
        transcriptService.getAllDatabyUser(this.props.user.uid,  (listTranscript) =>{
            listTranscript.sort((a, b) => {
                return moment(a.month, 'MM-YYYY').diff(moment(b.month, 'MM-YYYY'))
            });
            this.setState({listTranscript: listTranscript})
        })

    }
    renderTranscriptJapanese() {
        return this.state.listTranscript.map((row, index) => (
            <TableRow key={row.month} className={index % 2 === 0 ? 'cell-c' : ''}>
                <TableCell className="p-0 pl-2 font-medium">
                    {row.month}
                </TableCell>
                <TableCell className="p-0 text-center">{row.listen}</TableCell>
                <TableCell className="p-0 text-center">{row.write}</TableCell>
                <TableCell className="p-0 text-center">{row.conversation}</TableCell>
                <TableCell className="p-0 text-center color-red">{row.japanese}</TableCell>
            </TableRow>))
    }

    renderTranscriptHealth() {
        return this.state.listTranscript.map((row, index) => (
            <TableRow key={row.month} className={index % 2 === 0 ? 'cell-c' : ''}>
                <TableCell className="p-0 pl-2 font-medium">
                    {row.month}
                </TableCell>
                <TableCell className="p-0 text-center">{row.push}</TableCell>
                <TableCell className="p-0 text-center">{row.squat}</TableCell>
                <TableCell className="p-0 text-center">{row.bendBack}</TableCell>
                <TableCell className="p-0 text-center">{row.bellySticks}</TableCell>
                <TableCell className="p-0 text-center color-red">{row.health}</TableCell>
            </TableRow>))
    }

    renderTranscriptEducation() {
        return this.state.listTranscript.map((row, index) => (
            <TableRow key={row.month} className={index % 2 === 0 ? 'cell-c' : ''}>
                <TableCell className="p-0 pl-2 font-medium">
                    {row.month}
                </TableCell>
                <TableCell className="p-0 text-center color-red">{row.education}</TableCell>
            </TableRow>))
    }


    render() {

        return <div>
            <Row>
                <Col xs="12">
                    <Card>

                        <CardBody>
                            <CardTitle><h5>Bảng điểm tiếng nhật</h5></CardTitle>
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
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12">
                    <Card>
                        <CardBody>
                            <CardTitle><h5>Bảng điểm thể chất</h5></CardTitle>
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
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12">
                    <Card>
                        <CardBody>
                            <CardTitle><h5>Bảng điểm giáo dục định hướng</h5></CardTitle>
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
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </div>;
    }
}

const mapStateToProps = state => {
    return {user: state.userData}
};

MyTranscript = connect(mapStateToProps)(MyTranscript);
export default MyTranscript;


