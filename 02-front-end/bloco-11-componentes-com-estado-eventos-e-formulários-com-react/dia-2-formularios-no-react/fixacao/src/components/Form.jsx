import React from "react";
import AcceptTerms from "./AcceptTerms";
import Description from "./Description";

class Form extends React.Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            numero: 0,
            check: false,
            select: 'one',
            text: '',
            errors: false,
            errorList: [],
        }
    }

    handleChange({ target }) {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name]: value })
        this.handleErrors();
    }

    handleErrors() {
        const { numero, check, text } = this.state;
        const errorList = [];
        if (typeof numero !== 'number') {
            errorList.push('numero');
        }
        if (check !== true) {
            errorList.push('check');
        }
        if (typeof text !== 'string' || text.length > 20) {
            errorList.push('text');
        }
        this.setState({ errors: (errorList.length > 0), errorList: errorList })
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
                    {/* <input type='checkbox' name="check" value={this.state.check} onChange={this.handleChange} /> */}
                    <AcceptTerms value={this.state.check} handleChange={this.handleChange} />
                    {/* <textarea name="text" value={this.state.text} onChange={this.handleChange} /> */}
                    <Description value={this.state.text} handleChange={this.handleChange} />
                </fieldset>
                {this.state.errorList.includes('check') ? 'Aceite os termos do formulário!' : ''}
            </form>
        );
    }
}

export default Form;