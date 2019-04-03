import React from 'react';
import { Button, Table } from 'reactstrap';
import * as Li from './email-list-item';
const EmailList = ({ emails, onEmailSelected, selectedEmailId, show }) => {
    if (emails.length === 0) {
        return (
            <div className={`right-part mail-list bg-white ${show === true ? 'd-block' : 'd-none'}`}>
                <div className="empty">
                    <p className="text-muted font-24">Nothing, No Emails!</p>
                </div>
            </div>
        );
    }

    return (
        <div className={`right-part mail-list bg-white ${show === true ? 'd-block' : 'd-none'}`}>
            <div className="p-3 b-b">
                <div className="d-md-flex align-items-center">
                    <div>
                        <h4>Mailbox </h4>
                        <span>Here is the list of mail</span>
                    </div>
                </div>
            </div>
            <div className="bg-light p-3 d-flex align-items-center do-block">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                    <Button type="button" className="btn btn-outline-secondary font-18"><i className="mdi mdi-reload"></i></Button>
                    <Button type="button" className="btn btn-outline-secondary font-18"><i className="mdi mdi-alert-octagon"></i></Button>
                    <Button type="button" className="btn btn-outline-secondary font-18"><i className="mdi mdi-delete"></i></Button>
                </div>
                <div className="ml-auto d-none d-md-block">
                    <input placeholder="Search Mail" type="text" className="form-control" />
                </div>
            </div>
            <div className="table-responsive">
                <Table className="table email-table no-wrap table-hover v-middle">
                    <tbody>
                        {
                            emails.map((email, index) => (
                                <Li.EmailListItem key={index}
                                    onEmailClicked={id => {
                                        onEmailSelected(id);
                                    }}
                                    email={email}
                                    selected={selectedEmailId === email.id}
                                />
                            ))
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export { EmailList };
