import React from "react";

class Form extends React.Component {
    constructor() {
        super();

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);

        this.state = {
            checked: false,
            text: '',
        }
    }

    handleChangeText(event) {
        this.setState({
            text: event.target.value,
        })
    }

    handleChangeCheckBox() {
        const value = (this.state.checked) ? false : true;
        this.setState({
            checked: value,
        })
    }

    render() {
        return (
            <form>
                <select>
                    <option value='one'>Opção 1</option>
                    <option value='two'>Opção 2</option>
                </select>
                <input type='number' name="numero" />
                <input type='checkbox' name="check" value={this.state.checked} onChange={this.handleChangeCheckBox} />
                <textarea name="textarea" value={this.state.text} onChange={this.handleChangeText} />
            </form>
        );
    }
}

export default Form;