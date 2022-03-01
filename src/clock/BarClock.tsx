import React from 'react';

import ProgressBar from 'react-bootstrap/ProgressBar'

class BarClock extends React.Component<{}, {time: Date, some: String}> {
    interval: NodeJS.Timeout;

    constructor(props: any){
        super(props);
        this.state = {
            time: new Date(),
            some: '',
        };
        this.interval = setInterval(
            () => this.setState({
                time: new Date(),
                some: 'new state'
            }),
            1000);
    }

    render(): React.ReactNode {
        let currentHours = this.state.time.getHours();
        let currentMins = this.state.time.getMinutes();
        let currentSecs = this.state.time.getSeconds();
        return(
            <div>
                <p>now</p>
                <ProgressBar now={currentHours / 24 * 100} label={currentHours}></ProgressBar>
                <ProgressBar now={currentMins / 60 * 100} label={currentMins}></ProgressBar>
                <ProgressBar now={currentSecs / 60 * 100} label={currentSecs}></ProgressBar>
            </div>
        );
    }

    componentDidMount() {
        
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default BarClock;