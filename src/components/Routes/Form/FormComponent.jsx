import React, { Component } from "react";
import { useState } from "react";

export class FormComponent extends Component {
    SubmitHandler = e => {
        alert(`form submitted by ${this.state.NameOfStudent} ,
Age is : ${this.state.AgeOfStudent}
Grade is:${this.state.Grade}`);
        e.preventDefault();
    };
    constructor(props) {
        super(props);

        this.state = {
            NameOfStudent: "",
            AgeOfStudent: "",
            Grade: ""
        };
    }

    nameChangeHandler = event => {
        this.setState({
            NameOfStudent: event.target.value
        });
    };

    AgeChangeHandler = event => {
        this.setState({
            AgeOfStudent: event.target.value
        });
    };

    GradeChangeHandler = event => {
        this.setState({
            Grade: event.target.value
        });
    };
    render() {
        return (
            <React.Fragment>
                <div className="forms">
                    <h2>Welcome, {this.state.NameOfStudent}</h2>
                    <form onSubmit={this.SubmitHandler}>
                        <label for="name">Name</label>
                        <input type="text" value={this.state.NameOfStudent} onChange={this.nameChangeHandler} />
                        <br></br>

                        <label for="Age">Age</label>
                        <input type="text" value={this.state.AgeOfStudent} onChange={this.AgeChangeHandler} />

                        <label for="Grade">Grade</label>
                        <select value={this.state.Grade} onChange={this.GradeChangeHandler}>
                            <option value="Choose">Choose</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default FormComponent;
