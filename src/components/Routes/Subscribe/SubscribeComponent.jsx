import React, { Component } from "react";
import { useState } from "react";

export class SubscribeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 2,
            message: "Welcome to my Page",
            ButtonName: "Subscribe"
        };
    }

    SubEventHandler = () => {
        if (this.state.current % 2 == 0) {
            this.setState({
                current: this.current + 1,
                message: "Thank you for subscribing",
                ButtonName: "Unsubscribe"
            });
        } else {
            this.setState({
                current: 2,
                message: "Welcome to my Page",
                ButtonName: "Subscribe"
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.message}</h1>
                <button onClick={this.SubEventHandler}>{this.state.ButtonName}</button>
            </React.Fragment>
        );
    }
}

export default SubscribeComponent;
