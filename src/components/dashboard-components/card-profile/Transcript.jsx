import React from 'react';
import {
   CardTitle
} from 'reactstrap';

import {connect} from "react-redux";

import BrowseData from "../browser-stats/browsedata";


class Transcript extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
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

    render() {

        return (
            <div className="text-left p-2 h-100">
                <CardTitle >Bảng điểm tiếng nhật</CardTitle>
                <BrowseData
                     month="1"
                    content="Tháng 1"
                    badge="90"
                    badgeColor="danger"
                />
                <BrowseData
                    month="2"
                    content="Tháng 2"
                    badge="90"
                    badgeColor="primary"
                />
                <BrowseData
                    month="3"
                    content="Tháng 3"
                    badge="90"
                    badgeColor="info"
                />
                <BrowseData
                    month="4"
                    content="Tháng 4"
                    badge="90"
                    badgeColor="warning"
                />
                <BrowseData
                    month="5"
                    content="Tháng 5"
                    badge="90"
                    badgeColor="success"
                />
                <BrowseData
                    month="6"
                    content="Tháng 6"
                    badge="90"
                    badgeColor="info"
                />
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
