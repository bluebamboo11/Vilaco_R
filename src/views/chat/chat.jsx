import React from 'react';
import { NavItem, Nav, TabContent, TabPane } from 'reactstrap';

import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import user1 from '../../assets/images/users/6.jpg';

import ReactDOM from 'react-dom';
import Message from './Message.js';
import * as data from './chat-data.jsx';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      'activeTab': 0,
      'alert': null,
      'chats': data.chatlisting,
      'chats2': data.chatlisting2,
      'chats3': data.chatlisting3,
      'chats4': data.chatlisting4,
      'other': data.messages
    };
    this.submitMessage = this.submitMessage.bind(this);
    this.submitMessage1 = this.submitMessage.bind(this);
    this.submitMessage2 = this.submitMessage.bind(this);
    this.submitMessage3 = this.submitMessage.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        'activeTab': tab.index
      });
    }
  }

  handleSubmit(event) {
    alert(`A name was submitted: ${this.state.content}`);
    event.preventDefault();
  }

  submitMessage(e, chatindex) {
    e.preventDefault();
    switch (chatindex) {
      case 'chat':
        this.setState(
          {
            'chats': this.state.chats.concat([
              {
                'content': (
                  <span>{ReactDOM.findDOMNode(this.msg).value}</span>
                ),
                'img': user1,
                'username': 'Kevin Hsu'
              }
            ])
          },
          () => {
            ReactDOM.findDOMNode(this.msg).value = '';
          }
        );
        break;
      case 'chat2':
        this.setState(
          {
            'chats2': this.state.chats2.concat([
              {
                'content': (
                  <span>{ReactDOM.findDOMNode(this.msg2).value}</span>
                ),
                'img': user1,
                'username': 'Kevin Hsu'
              }
            ])
          },
          () => {
            ReactDOM.findDOMNode(this.msg2).value = '';
          }
        );
        break;
      case 'chat3':
        this.setState(
          {
            'chats3': this.state.chats3.concat([
              {
                'content': (
                  <span>{ReactDOM.findDOMNode(this.msg3).value}</span>
                ),
                'img': user1,
                'username': 'Kevin Hsu'
              }
            ])
          },
          () => {
            ReactDOM.findDOMNode(this.msg3).value = '';
          }
        );
        break;
      case 'chat4':
        this.setState(
          {
            'chats4': this.state.chats4.concat([
              {
                'content': (
                  <span>{ReactDOM.findDOMNode(this.msg4).value}</span>
                ),
                'img': user1,
                'username': 'Kevin Hsu'
              }
            ])
          },
          () => {
            ReactDOM.findDOMNode(this.msg4).value = '';
          }
        );
        break;
      default:
    }
  }

  render() {
    const username = 'Kevin Hsu',
      { chats, chats2, chats3, chats4 } = this.state;

    return (
      <div>
        {/* --------------------------------------------------------------------------------*/}
        {/* Search                                                                     */}
        {/* --------------------------------------------------------------------------------*/}
        <div className="left-part bg-white">
          <div className="p-3 border-bottom">
            <h5 className="card-title">Search Contact</h5>
            <form>
              <input
                className="form-control"
                type="text"
                placeholder="Search"
              />
            </form>
          </div>
          <Nav className="list-unstyled d-block mailbox">
            {/* --------------------------------------------------------------------------------*/}
            {/* Chat Items                                                                     */}
            {/* --------------------------------------------------------------------------------*/}
            <div
              className="message-center"
              style={{ 'height': 'calc(100vh - 272px)' }}
            >
              <PerfectScrollbar>
                {data.messages.map((message, index) => (
                  <NavItem
                    onClick={() => {
                      this.toggle({ index });
                    }}
                    key={index}
                  >
                    <span
                      key={index}
                      className={
                        `${classnames({
                          'active': this.state.activeTab === index
                        })} message-item `
                      }
                    >
                      <span className="user-img">
                        <img
                          src={message.image}
                          alt="user"
                          className="rounded-circle"
                          width=""
                        />
                        <span
                          className={
                            `profile-status pull-right ${message.status}`
                          }
                        />
                      </span>
                      <div className="mail-contnet">
                        <h5 className="message-title">{message.title}</h5>
                        <span className="mail-desc">{message.desc}</span>
                        <span className="time">{message.time}</span>
                      </div>
                    </span>
                  </NavItem>
                ))}
              </PerfectScrollbar>
            </div>
          </Nav>
        </div>
        {/* --------------------------------------------------------------------------------*/}
        {/* Right panel                                                                     */}
        {/* --------------------------------------------------------------------------------*/}
        <div className="right-part bg-white">
          <TabContent activeTab={this.state.activeTab} ref={(e) => { this.chats = e; }}>
            {/* --------------------------------------------------------------------------------*/}
            {/* Tab1                                                                     */}
            {/* --------------------------------------------------------------------------------*/}
            <TabPane tabId={0}>
              <div className="d-flex align-items-center p-3 border-bottom">
                <div className="mr-2">
                  <img
                    src={this.state.other[0].image}
                    alt="user"
                    className="rounded-circle"
                    width="40"
                  />
                </div>
                <div>
                  <h5 className="message-title">{this.state.other[0].title}</h5>
                </div>
              </div>
              <ul
                className="chat-list p-4"
                ref={(e) => { this.chats = e; }}
                // ref="chats"
                style={{ 'height': 'calc(100vh - 345px)' }}
              >
                {chats.map((chat, index) => (
                  <Message key={index} chat={chat} user={username} />
                ))}
              </ul>
              <form
                id="chat"
                onSubmit={e => this.submitMessage(e, e.target.id)}
                className="card-body border-top"
              >
                <div className="d-flex">
                  <input
                    placeholder="Type and enter"
                    ref={(f) => { this.msg = f; }}
                    className="form-control border-0"
                    type="text"
                  />
                  <button
                    className="btn btn-circle btn-lg btn-info float-right text-white"
                    type="submit"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </form>
            </TabPane>
            {/* --------------------------------------------------------------------------------*/}
            {/* Tab2                                                                     */}
            {/* --------------------------------------------------------------------------------*/}
            <TabPane tabId={1}>
              <div className="d-flex align-items-center p-3 border-bottom">
                <div className="mr-2">
                  <img
                    src={this.state.other[1].image}
                    alt="user"
                    className="rounded-circle"
                    width="40"
                  />
                </div>
                <div>
                  <h5 className="message-title">{this.state.other[1].title}</h5>
                </div>
              </div>
              <ul
                className="chat-list p-4"
                ref={(e) => { this.chats = e; }}
                style={{ 'height': 'calc(100vh - 345px)' }}
              >
                {chats2.map((chat, index) => (
                  <Message key={index} chat={chat} user={username} />
                ))}
              </ul>
              <form
                id="chat2"
                onSubmit={e => this.submitMessage(e, e.target.id)}
                className="card-body border-top"
              >
                <div className="d-flex">
                  <input
                    placeholder="Type and enter"
                    //ref="msg2"
                    ref={(d) => { this.msg2 = d; }}
                    className="form-control border-0"
                    type="text"
                  />
                  <button
                    className="btn btn-circle btn-lg btn-info float-right text-white"
                    type="submit"
                    value="submit"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </form>
            </TabPane>
            {/* --------------------------------------------------------------------------------*/}
            {/* Tab3                                                                     */}
            {/* --------------------------------------------------------------------------------*/}
            <TabPane tabId={2}>
              <div className="d-flex align-items-center p-3 border-bottom">
                <div className="mr-2">
                  <img
                    src={this.state.other[2].image}
                    alt="user"
                    className="rounded-circle"
                    width="40"
                  />
                </div>
                <div>
                  <h5 className="message-title">{this.state.other[2].title}</h5>
                </div>
              </div>
              <ul
                className="chat-list p-4"
                ref={(e) => { this.chats = e; }}
                style={{ 'height': 'calc(100vh - 345px)' }}
              >
                {chats3.map((chat, index) => (
                  <Message key={index} chat={chat} user={username} />
                ))}
              </ul>
              <form
                id="chat3"
                onSubmit={e => this.submitMessage(e, e.target.id)}
                className="card-body border-top"
              >
                <div className="d-flex">
                  <input
                    placeholder="Type and enter"
                    // ref="msg3"
                    ref={(b) => { this.msg3 = b; }}
                    className="form-control border-0"
                    type="text"
                  />
                  <button
                    className="btn btn-circle btn-lg btn-info float-right text-white"
                    type="submit"
                    value="submit"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </form>
            </TabPane>
            {/* --------------------------------------------------------------------------------*/}
            {/* Tab4                                                                     */}
            {/* --------------------------------------------------------------------------------*/}
            <TabPane tabId={3}>
              <div className="d-flex align-items-center p-3 border-bottom">
                <div className="mr-2">
                  <img
                    src={this.state.other[3].image}
                    alt="user"
                    className="rounded-circle"
                    width="40"
                  />
                </div>
                <div>
                  <h5 className="message-title">{this.state.other[3].title}</h5>
                </div>
              </div>
              <ul
                className="chat-list p-4"
                ref={(e) => { this.chats = e; }}
                style={{ 'height': 'calc(100vh - 345px)' }}
              >
                {chats4.map((chat, index) => (
                  <Message key={index} chat={chat} user={username} />
                ))}
              </ul>
              <form
                id="chat4"
                onSubmit={e => this.submitMessage(e, e.target.id)}
                className="card-body border-top"
              >
                <div className="d-flex">
                  <input
                    placeholder="Type and enter"
                    // ref="msg4"
                    ref={(a) => { this.msg4 = a; }}
                    className="form-control border-0"
                    type="text"
                  />
                  <button
                    className="btn btn-circle btn-lg btn-info float-right text-white"
                    type="submit"
                    value="submit"
                  >
                    <i className="fas fa-paper-plane" />
                  </button>
                </div>
              </form>
            </TabPane>
          </TabContent>
        </div>
      </div>
    );
  }
}

export default Chat;
