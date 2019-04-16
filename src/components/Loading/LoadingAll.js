import React from 'react';
import Lottie from 'react-lottie';
import jsonAni from '../../assets/animation/4251-plant-office-desk';
import {connect} from "react-redux";



class LoadingAll extends React.Component {
    constructor(props) {
        super(props);


    }



    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: jsonAni,

        };
        if(!this.props.loadAll){
            return (<div/>)
        }
        return (
            <div className="load-page-all" >
                <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                />
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        loadAll: state.loadAll
    }
};
LoadingAll = connect(mapStateToProps)(LoadingAll);
export default LoadingAll;