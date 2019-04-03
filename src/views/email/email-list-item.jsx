import React from 'react';

const EmailListItem = ({ email, onEmailClicked, selected }) => {
    let badge, classes;
    if (email.read === false) {
        classes = 'unread';
    }

    // if (selected) {
    // classes += " selected";
    // }
    switch (email.label) {
        case 'work':
            badge = 'danger';
            break;
        case 'business':
            badge = 'success';
            break;
        case 'family':
            badge = 'warning';
            break;
        case 'friends':
            badge = 'info';
            break;
        default:
    }
    const getAttachmentPin = () => {
        if (email.attachments.length) {
            return <i className="fa fa-paperclip"></i>;
        }

        return undefined;
    };

    return (
        <tr className={classes}>
            <td className="chb">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={email.id} />
                    <label className="custom-control-label" htmlFor={email.id}>&nbsp;</label>
                </div>
            </td>
            <td className="starred"><i className="far fa-star"></i></td>
            <td className="user-image"><img src={email.profile} alt="user" className="rounded-circle" width="30" /></td>
            <td className="user-name" onClick={() => {
                onEmailClicked(email.id);
            }}>
                <h6 className="mb-0">{email.from}</h6>
            </td>
            <td className="max-texts" onClick={() => {
                onEmailClicked(email.id);
            }}>
                <span className="link">
                    <span className={`badge mr-2 badge-${badge}`}>{email.label}</span>{email.subject}
                </span>
            </td>
            <td className="clip">{getAttachmentPin()}</td>
            <td className="time">{email.time}</td>
        </tr>
    );
};

export { EmailListItem };
