import React, { Component } from 'react'
import './Pokemon.css'

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
        return (
            <section className='content'>
                <section className='content-pokemon'>
                    <section className='content-pokemon-info'>
                        <span>{name}</span>
                        <span>{type}</span>
                        <span>averageWeight: {`${value} ${measurementUnit}`}</span>
                    </section>
                    <img className='image' src={image} alt='Imagem de um pokemon' />
                </section>
            </section>
        );
    }
}

export default Pokemon;