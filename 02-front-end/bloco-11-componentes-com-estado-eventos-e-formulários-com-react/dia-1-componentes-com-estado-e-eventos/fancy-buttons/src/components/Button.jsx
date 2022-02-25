import React from "react";

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.count = this.count.bind(this);
    }

    count() {
        this.setState((currentState, _props) => ({
            count: currentState.count + 1
        }));
    }

    render() {
        const { name, message } = this.props;
        return (
        <>
            <button onClick={() => {this.count();message()}}>{`${name} - Cliques: ${this.state.count}`}</button>
        </>);
    }
}

export default Button;