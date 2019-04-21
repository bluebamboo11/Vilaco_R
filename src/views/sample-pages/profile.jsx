import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {storage, userService} from "../../firebase";
import classnames from 'classnames';


import Setting from "../../components/profile/setting";
import Info from "../../components/profile/info";
import ChangePassword from "../../components/profile/changePassword";
import {connect} from "react-redux";
import SettingTeacher from "../../components/profile/settingTeacher";
import CardInfo from "../../components/profile/CardInfo";
import ImageUploader from "react-images-upload";
import Spinner from "reactstrap/es/Spinner";
import {setUserData} from "../../redux/actions";

class Profile extends React.Component {
    // Tabs
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.renderTab = this.renderTab.bind(this);
        this.renderTabContent = this.renderTabContent.bind(this);
        this.renderLoadImg = this.renderLoadImg.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.state = {
            'activeTab': '1',
            isUpAvatar: false
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                'activeTab': tab
            });
        }
    }


    componentDidMount() {

    }

    renderTabContent() {
        if (!this.props.userData.type) {
            return ''
        }
        if (this.props.userData.type !== 'student') {
            return <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                    <SettingTeacher/>
                </TabPane>
                <TabPane tabId="2">
                    <ChangePassword/>
                </TabPane>
            </TabContent>
        }
        return <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
                <Info/>
            </TabPane>
            <TabPane tabId="2">
                <Setting/>
            </TabPane>
            <TabPane tabId="3">
                <ChangePassword/>
            </TabPane>
        </TabContent>
    }

    renderTab() {
        if (this.props.userData.type !== 'student') {
            return <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({
                            'active': this.state.activeTab === '1'
                        })}
                        onClick={() => {
                            this.toggle('1');
                        }}
                    >
                        Cập nhật
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({
                            'active': this.state.activeTab === '2'
                        })}
                        onClick={() => {
                            this.toggle('2');
                        }}
                    >
                        Đổi mật khẩu
                    </NavLink>
                </NavItem>
            </Nav>
        }
        return <Nav tabs>
            <NavItem>
                <NavLink
                    className={classnames({
                        'active': this.state.activeTab === '1'
                    })}
                    onClick={() => {
                        this.toggle('1');
                    }}
                >
                    Hồ sơ
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({
                        'active': this.state.activeTab === '2'
                    })}
                    onClick={() => {
                        this.toggle('2');
                    }}
                >
                    Cập nhật
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({
                        'active': this.state.activeTab === '3'
                    })}
                    onClick={() => {
                        this.toggle('3');
                    }}
                >
                    Đổi mật khẩu
                </NavLink>
            </NavItem>
        </Nav>
    }

    index = 0;

    onDrop(picture) {
        this.setState({isUpAvatar: true});
        storage.upAvatar(this.props.user.uid, picture[this.index], (url) => {
            if (url) {
                userService.doUpdateUser(this.props.user.uid, {avatar: url}).then(() => {
                    this.props.userData.avatar = url;
                    this.props.dispatch(setUserData({...this.props.userData}));
                    this.setState({isUpAvatar: false})
                })
            }
        })

    }

    renderLoadImg() {
        if (!this.state.isUpAvatar) {
            return ''
        }
        return <div className="mark-avatar justify-content-center align-items-center"><Spinner
            style={{width: '3rem', height: '3rem'}} color="warning"/></div>
    }

    render() {
        let {name, avatar} = this.props.userData;

        return (
            <div>
                <Row>
                    <Col xs="12" md="12" lg="4">
                        <Card>
                            <CardBody>
                                <div className="text-center mt-4" style={{position: 'relative'}}>
                                    <img
                                        src={avatar}
                                        className="rounded-circle avatar"
                                        width="150"
                                        height="150"
                                        alt=""
                                    />
                                    {this.renderLoadImg()}
                                    <CardTitle className="mt-2">{name}</CardTitle>

                                    <Row className="text-center justify-content-md-center">

                                        <Col xs="4">
                                            <ImageUploader
                                                fileContainerStyle={{boxShadow: 'none', padding: 0, margin: 0}}
                                                label="ảnh có kích thước nhỏ hơn 1mb"
                                                withIcon={false}
                                                buttonText='Thay đổi ảnh'
                                                onChange={this.onDrop}
                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                fileSizeError="kích thược file vượt quá 1mb"
                                                fileTypeError="Định dạng file chưa chính xác"
                                                maxFileSize={1048576}
                                                buttonClassName="btn-secondary-upload"
                                                buttonStyles={{
                                                    fontSize: 11,
                                                    margin: 0,
                                                    borderRadius: 3,
                                                    padding: '6px 12px'
                                                }}
                                                singleImage={true}
                                            />

                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                            <CardInfo/>
                        </Card>
                    </Col>
                    <Col xs="12" md="12" lg="8">
                        <Card>
                            {this.renderTab()}
                            {this.renderTabContent()}

                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        userData: state.userData
    }
};
Profile = connect(mapStateToProps)(Profile);


export default Profile;
