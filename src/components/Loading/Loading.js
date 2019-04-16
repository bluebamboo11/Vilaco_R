import React from 'react';
import Lottie from 'react-lottie';
import jsonAni from '../../assets/animation/animation-w500-h500';



class Loading extends React.Component {
    constructor(props) {
        super(props);


    }




    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: jsonAni,

        };
        return (
            <div className="load-page" >
                <Lottie options={defaultOptions}
                        height={700}
                        width={700}
                       />
            </div>

        );
    }
}


export default Loading;
