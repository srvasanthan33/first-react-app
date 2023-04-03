import React, { Component } from "react";

export class FormComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="forms">
                    <form>
                        <label for="name">Name</label>
                        <input type="text"></input>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default FormComponent;
