import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar'


export interface TimeProps {
    time: Date,
}

function BarClock(props: TimeProps) {
    let currentHours = props.time.getHours();
    let currentMins = props.time.getMinutes();
    let currentSecs = props.time.getSeconds();
    return (
        <div>
            <p>Bar Clock</p>
            <ProgressBar now={currentHours / 24 * 100} label={currentHours}></ProgressBar>
            <ProgressBar now={currentMins / 60 * 100} label={currentMins}></ProgressBar>
            <ProgressBar now={currentSecs / 60 * 100} label={currentSecs}></ProgressBar>
        </div>
    );
}

export default BarClock;