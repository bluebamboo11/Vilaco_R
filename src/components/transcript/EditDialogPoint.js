import React from 'react';
import {
    Button, FormGroup, Input,
    Modal, ModalBody, ModalFooter,
    ModalHeader

} from 'reactstrap';
import {medium} from "../../views/Transcript/DataConfig";


class EditDialogPoint extends React.Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.update = this.update.bind(this);
        this.open = this.open.bind(this);
        this.state = this.defauvalue;

    }

    defauvalue = {
        listen: '',
        write: '',
        conversation: '',
        push: '',
        bendBack: '',
        bellySticks: '',
        squat: '',
        education: '',
        uid:'',
        id:''
    };

    onInputChange(event) {
        this.setState({
            [event.target.name]: Number(event.target.value)
        });
    }


    update() {
        this.props.toggle();
        const data = {...this.state};
        data.japanese = medium([data.listen, data.write, data.conversation]);
        data.health = medium([data.push, data.squat, data.bendBack, data.bellySticks]);
        this.props.save(data)
    }


    open() {
        let data = {...this.defauvalue};
        for (let key in data) {
            if (this.props.data[key]) {
                data[key] = this.props.data[key];
            }
        }
        this.setState(() => {
            return { ...data}
        });
    }

    render() {

        let {listen, write, conversation, push, bendBack, bellySticks, squat, education} = this.state;
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle} onOpened={this.open}
                   className="modal-dialog-centered">
                <ModalHeader toggle={this.toggle}>Sửa điểm học viên</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.doUpdate}>
                        <h5 className="col-12 mb-4">Điểm tiếng nhật</h5>
                        <FormGroup className="row ml-0 mr-0">
                            <label className="col-6">Nghe</label>
                            <Input type="number" className="form-control col-6" value={listen} name="listen"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup className="row  ml-0 mr-0">
                            <label className="col-6">Viêt</label>
                            <Input type="number" className="form-control col-6" value={write} name="write"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup className="row  ml-0 mr-0">
                            <label className="col-6">Hội thoại</label>
                            <Input type="number" className="form-control col-6" value={conversation} name="conversation"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                        <h5 className="col-12 mb-4">Điểm thể lực</h5>
                        <FormGroup className="row ml-0 mr-0">
                            <label className="col-6">Chống đẩy</label>
                            <Input type="number" className="form-control col-6" value={push} name="push"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup className="row  ml-0 mr-0">
                            <label className="col-6">Đứng lên ngồi xuống</label>
                            <Input type="number" className="form-control col-6" value={squat} name="squat"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup className="row  ml-0 mr-0">
                            <label className="col-6">Gập lưng</label>
                            <Input type="number" className="form-control col-6" value={bendBack} name="bendBack"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                        <FormGroup className="row  ml-0 mr-0">
                            <label className="col-6">Gập bụng</label>
                            <Input type="number" className="form-control col-6" value={bellySticks} name="bellySticks"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                        <h5 className="col-12 mb-4">Điểm Giáo dục định hướng</h5>
                        <FormGroup className="row ml-0 mr-0">
                            <label className="col-6">Điểm</label>
                            <Input type="push" className="form-control col-6" value={education} name="education"
                                   onChange={this.onInputChange}/>
                        </FormGroup>
                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={this.update}>Lưu</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Hủy</Button>
                </ModalFooter>
            </Modal>

        );
    }
}


export default EditDialogPoint;
