import React from 'react'

import BarClock from './BarClock'

interface ClocksProps {
}

interface ClocksState {
    time: Date;
}

export default class Clocks extends React.Component<ClocksProps, ClocksState> {
    interval ?: NodeJS.Timeout;

    constructor(props: any){
        super(props);
        this.state = {
            time: new Date()
        };
    }

    render(): React.ReactNode {
        return(
            <div>
                <p>It is currently: {this.state.time.toISOString()}</p>
                <BarClock time={this.state.time} />
            </div>
        );
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.tick(),
            1000);
    }
    
    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}