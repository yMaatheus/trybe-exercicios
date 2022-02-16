import React, { Component } from 'react';

class Content extends Component {
    render() {
        const conteudos = [
            {
                conteudo: 'High Order Functions',
                bloco: 8,
                status: 'Aprendido'
            },
            {
                conteudo: 'Composicao de Componentes',
                bloco: 11,
                status: 'Aprendendo',
            },
            {
                conteudo: 'Composicao de Estados',
                bloco: 12,
                status: 'Aprenderei'
            },
            {
                conteudo: 'Redux',
                bloco: 16,
                status: 'Aprenderei'
            },
        ];
        return (<>{conteudos.map(({ conteudo, bloco, status }) => {
            return <ul>
                <li>O conteúdo é: {conteudo}</li>
                <li>Status: {status}</li>
                <li>Bloco: {bloco}</li>
            </ul>
            // return <p>
            // O conteúdo é: {conteudo} <br />
            // Status: {status} <br />
            // Bloco: {bloco} <br />
            // </p>
        })}</>);
    }
}

export default Content;