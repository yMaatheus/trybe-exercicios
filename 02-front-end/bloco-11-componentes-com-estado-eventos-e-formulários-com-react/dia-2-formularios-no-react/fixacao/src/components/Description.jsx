import React from "react";

class Description extends React.Component {
    render() {
        const { value, handleChange } = this.props;
        return (
            <textarea name="text" value={value} onChange={handleChange} />
        );
    }
}

export default Description;