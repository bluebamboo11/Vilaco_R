import React from 'react';
import {connect} from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";


class ProcessAll extends React.Component {

    render() {
        if (!this.props.processAll) {
            return ''
        }
        return (
            <div className="process-all">
                <LinearProgress/>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        processAll: state.processAll
    }
};
ProcessAll = connect(mapStateToProps)(ProcessAll);
export default ProcessAll;
