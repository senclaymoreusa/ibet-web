import React from 'react';
import TopNavbar from '../top_navbar';
import BannerImage from '../../assets/img/bonus_images/offerkv001.jpg';

class VerificationBonus extends React.Component {

    render() {
        return (
            <div>
                <TopNavbar />
                <img src={BannerImage} alt="Banner Image"/>
            </div>
        );
    }

}

export default VerificationBonus;
