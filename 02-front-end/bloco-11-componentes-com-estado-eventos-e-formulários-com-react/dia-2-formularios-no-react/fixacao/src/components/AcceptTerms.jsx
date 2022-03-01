import React from "react";

class AcceptTerms extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <input type='checkbox' name="check" value={value} onChange={handleChange} />
        );
    }
}

export default AcceptTerms;