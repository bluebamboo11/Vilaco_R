import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

/* Sidebar */
const EmailSidebar = ({ emails, setSidebarSection, showComposeMail, showLeftPart, show }) => {
    const unreadCount = emails.reduce(
        (previous, msg) => {
            if (msg.read !== true) {
                return previous + 1;
            }

            return previous;
        }, 0),
        deletedCount = emails.reduce(
            (previous, msg) => {
                if (msg.tag === 'deleted') {
                    return previous + 1;
                }

                return previous;
            }, 0);

    return (
        <div className={`left-part bg-white ${show === true ? 'show-panel' : ''}`}>
            <span onClick={() => {
                showLeftPart();
            }} className="btn btn-success show-left-part text-white d-block d-md-none"><i className="mdi mdi-menu"></i></span>
            <PerfectScrollbar className="scrollable" >
                <div className="p-3">
                    <span id="compose_mail" onClick={() => {
                        showComposeMail();
                    }} className="waves-effect waves-light btn btn-danger d-block text-white">Compose</span>
                </div>
                <div className="divider"></div>
                <ListGroup>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('inbox', 'tag');
                    }}>
                        <span className="list-group-item-action"><i className="mdi mdi-inbox"></i> Inbox <span className="badge badge-success float-right mt-1">{unreadCount}</span></span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('starred', 'tag');
                    }}>
                        <span className="list-group-item-action" > <i className="mdi mdi-star"></i> Starred </span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('important', 'tag');
                    }}>
                        <span className="list-group-item-action"> <i className="mdi mdi-label"></i> Important </span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('draft', 'tag');
                    }}>
                        <span className="list-group-item-action"> <i className="mdi mdi-file"></i> Draft </span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('sent', 'tag');
                    }}>
                        <span className="list-group-item-action"> <i className="mdi mdi-send"></i> Sent </span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <hr />
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('spam', 'tag');
                    }}>
                        <span className="list-group-item-action"> <i className="mdi mdi-block-helper"></i> Spam </span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('deleted', 'tag');
                    }}>
                        <span className="list-group-item-action"> <i className="mdi mdi-delete"></i> Trash <span className="badge badge-danger float-right mt-1">{deletedCount}</span></span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <hr />
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('work', 'label');
                    }}>
                        <span className="list-group-item-action"><i className="text-danger mdi mdi-checkbox-blank-circle"></i> Work </span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('business', 'label');
                    }}>
                        <span className="list-group-item-action"><i className="text-success mdi mdi-checkbox-blank-circle"></i> Business </span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('family', 'label');
                    }}>
                        <span className="list-group-item-action"><i className="text-warning mdi mdi-checkbox-blank-circle"></i> Family </span>
                    </ListGroupItem>
                    <ListGroupItem onClick={() => {
                        setSidebarSection('friends', 'label');
                    }}>
                        <span className="list-group-item-action"><i className="text-info mdi mdi-checkbox-blank-circle"></i> Friends </span>
                    </ListGroupItem>
                </ListGroup>
            </PerfectScrollbar>
        </div>
    );
};

export { EmailSidebar };
