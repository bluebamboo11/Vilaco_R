import React from 'react';

import { Button, Row, Col } from 'reactstrap';
const EmailDetails = ({ email, onDelete, show, showList }) => {
    const receiver = 'Suniljoshi19@gmail.com';

    if (!email) {
        return (
            <div className={'right-part mail-details bg-white ' + (show === true ? 'd-block' : 'd-none')}>
                <div className="empty">
                    <p className="text-muted font-24">Nothing, No Emails!</p>
                </div>
            </div>
        );
    }

    const getDeleteButton = () => {
        if (email.tag !== 'deleted') {
            return <Button type="button" onClick={() => {
                onDelete(email.id);
            }} className="btn btn-outline-secondary font-18"><i className="mdi mdi-delete"></i></Button>;
        }

        return undefined;
    };

    const getAttachments = () => {
        if (email.attachments.length) {
            return <div>
                <h4><i className="fa fa-paperclip mr-2 mb-2"></i> Attachments <span>(3)</span></h4>
                <Row>
                    <Col sm="2" md="2">
                        <a href="/"> <img className="img-thumbnail img-responsive" alt="attachment" src={email.attachments[0].atch1} /> </a>
                    </Col>
                    <Col sm="2" md="2">
                        <a href="/"> <img className="img-thumbnail img-responsive" alt="attachment" src={email.attachments[0].atch2} /> </a>
                    </Col>
                    <Col sm="2" md="2">
                        <a href="/"> <img className="img-thumbnail img-responsive" alt="attachment" src={email.attachments[0].atch3} /> </a>
                    </Col>
                </Row>
            </div>;
        }

        return undefined;
    };

    return (
        <div className={'right-part mail-details bg-white ' + (show === true ? 'd-block' : 'd-none')}>
            <div className="card-body bg-light">
                <Button onClick={() => {
                    showList();
                }} className="btn btn-dark mr-2">Inbox</Button>
                <div className="btn-group mr-2 float-right" role="group" aria-label="Button group with nested dropdown">
                    <Button type="button" className="btn btn-outline-secondary font-18"><i className="mdi mdi-reply"></i></Button>
                    <Button type="button" className="btn btn-outline-secondary font-18"><i className="mdi mdi-alert-octagon"></i></Button>
                    {getDeleteButton()}
                </div>
            </div>
            <div className="card-body border-bottom">
                <h4 className="mb-0">{email.subject}</h4>
            </div>
            <div className="card-body border-bottom">
                <div className="d-flex no-block align-items-center mb-5">
                    <div className="mr-2"><img src={email.profile} alt="user" className="rounded-circle" width="45" /></div>
                    <div className="">
                        <h5 className="mb-0 font-16 font-medium">{email.from}<small> ( {email.address} )</small></h5><span>to {receiver}</span>
                    </div>
                </div>
                <p>{email.message}</p>
            </div>
            <div className="card-body">
                {getAttachments()}
                <div className="border mt-3 p-3">
                    <p className="pb-3">click here to <a href="/">Reply</a> or <a href="/">Forward</a></p>
                </div>
            </div>
        </div>
    );
};

export { EmailDetails };
