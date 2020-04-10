import React, { Component } from "react";
import "./style.css";

class Timer extends Component {
    state = {
        count: Math.round(this.props.time / 60),
        start: false,
        width: 100,
        change: (100 / Math.round(this.props.time / 60)).toFixed(4)
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.start) {
                if (this.state.count !== 0) {
                    this.props.onTick(this.state);
                    this.startTime();
                    this.changeCount();
                    this.changeWidth();
                }
            } else {
                this.pauseTime();
            }
        }, 1000);
    }

    startTime = () => {
        this.setState({
            start: true
        });
    }

    reset = () => {
        this.setState({
            count: Math.round(this.props.time / 60),
            start: false,
            width: 100,
            change: (100 / Math.round(this.props.time / 60)).toFixed(4)
        });
    }

    pauseTime = () => {
        this.setState({
            start: false,
            count: this.state.count
        });
    }

    changeCount = () => {
        this.setState({ count: this.state.count - this.props.step })
    }

    changeWidth = () => {
        this.setState({
            width: (this.state.width - this.state.change * this.props.step)
        })
    }




    render() {
        return (
            <div className="timer">
                <div className="buttons">
                    <button onClick={this.pauseTime}>pause</button>
                    <button onClick={this.reset}>reset</button>
                    <button onClick={this.startTime}>start</button>
                    <div className="seconds">{this.state.count} seconds</div> 

                </div>
                <div className="row" style={{ width: this.state.width + '%' }} ></div>
            </div>
        )
    }
}

export default Timer;