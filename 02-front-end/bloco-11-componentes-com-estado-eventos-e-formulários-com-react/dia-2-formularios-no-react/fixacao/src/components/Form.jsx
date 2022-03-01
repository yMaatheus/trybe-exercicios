import React from "react";

class Form extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            numero: 0,
            check: false,
            select: 'one',
            text: '',
        }
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <form>
                <fieldset>
                    <select name="select" value={this.state.select} onChange={this.handleChange}>
                        <option value='one'>Opção 1</option>
                        <option value='two'>Opção 2</option>
                    </select>
                    <input type="file" />
                </fieldset>
                <fieldset>
                    <input type='number' name="numero" value={this.state.numero} onChange={this.handleChange} />
                    <input type='checkbox' name="check" value={this.state.check} onChange={this.handleChange} />
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} />
                </fieldset>
            </form>
        );
    }
}

export default Form;