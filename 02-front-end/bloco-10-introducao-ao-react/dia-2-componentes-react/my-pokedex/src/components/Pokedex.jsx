import React, { Component } from 'react'
import Pokemon from './Pokemon';
import pokemons from '../data'
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <section>
                <h1 className='title'>Pokedex</h1>
                <section className='content-pokemons'>
                    {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
                </section>
            </section>
        );
    }
}

export default Pokedex;