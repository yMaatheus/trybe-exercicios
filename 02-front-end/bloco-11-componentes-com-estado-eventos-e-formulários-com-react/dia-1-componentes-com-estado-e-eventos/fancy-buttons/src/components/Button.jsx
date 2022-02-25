import React from "react";

class Button extends React.Component {
    render() {
        const { name, message } = this.props;
        return (
        <>
            <button onClick={message}>{name}</button>
        </>);
    }
}

export default Button;