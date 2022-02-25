import React from "react";

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.count = this.count.bind(this);
        this.getButtonColor = this.getButtonColor.bind(this);
    }

    count() {
        this.setState((currentState) => ({
            count: currentState.count + 1
        }), () => console.log(`${this.props.name} ${this.getButtonColor()}`));
    }

    getButtonColor = () => (this.state.count % 2 === 0) ? 'green' : 'white';

    render() {
        const { name, message } = this.props;
        return (
        <>
            <button onClick={() => {this.count();message()}} style={{backgroundColor: this.getButtonColor()}} >{`${name} - Cliques: ${this.state.count}`}</button>
        </>);
    }
}

export default Button;