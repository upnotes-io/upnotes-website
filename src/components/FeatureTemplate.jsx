import React from 'react';
import upnotesImg from '../../public/assets/upnotes.png';

const FeatureTemplate = function () {
    return <div>
        <h2> Automatically organized notebooks for software engineers just focus on writing notes.</h2>
        <p>We organize your notes based on your git reposities. You just need to configure it once.</p>
        <div>
            <img src={upnotesImg} alt="feature" />
        </div>
    </div>
}


export default FeatureTemplate;