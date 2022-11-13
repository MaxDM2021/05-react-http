import { Component } from "react";
import PokemonFallbackView from "../PokemonErrorView"
import PokemonDataView from "../PokemonDataView";
import PokemonPendingVie from "../PokemonPendingVie";
import pokemonAPI from "../PokemonApi/PokemonApi";


class PokemonInfo extends Component {
  state = {
    pokemon: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      pokemonAPI
          .fetchPokemon(nextName)
          .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected'}))
    
    }
  }

  // 'idle' - простой
  // 'pending' - ожидается
  // 'resolve' - выполнилось с результамом (хорошо)
  // 'resjected' - отклонено!

  render() {
    const { pokemon,  error, status } = this.state;
    const { pokemonName } = this.props;
  

    if (status === 'idle') {
      return <div>Введите имя покемона!</div>;
    }

    if (status === 'pending') {
      return <PokemonPendingVie pokemonName={pokemonName}/>;
    }

    if (status === 'rejected') {
      return <PokemonFallbackView message={error.message}/>
    }

    if (status === 'resolved') {
      return (
<PokemonDataView pokemon={pokemon}/>
      );
    }
  }
}

export default PokemonInfo;
