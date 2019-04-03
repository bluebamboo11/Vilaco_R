import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

/* Compose */
const EmailCompose = ({ show, showList }) => {

    const mailSent = () => {
        alert('Mail Sent!');
    };

    return (
        <div className={'right-part mail-compose bg-white ' + (show === true ? 'd-block' : 'd-none')}>
            <div className="p-4 border-bottom">
                <div className="d-flex align-items-center">
                    <div>
                        <h4>Compose</h4>
                        <span>create new message</span>
                    </div>
                    <div className="ml-auto">
                        <Button id="cancel_compose" onClick={() => {
                            showList();
                        }} className="btn btn-dark">Inbox</Button>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <Form>
                    <FormGroup>
                        <Input type="email" name="email" id="email" placeholder="To" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="text" name="subject" id="subject" placeholder="Subject" />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" name="message" id="message" rows="7" placeholder="Message Here..." />
                    </FormGroup>
                    <h4>Attachment</h4>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>
                    <Button type="submit" color="success" onClick={() => {
                        mailSent();
                    }} className="mt-3 mr-2"><i className="far fa-envelope"></i> Send</Button>
                    <Button type="submit" className="btn btn-dark mt-3">Discard</Button>
                </Form>
            </div>
        </div>
    );
};

export { EmailCompose };
