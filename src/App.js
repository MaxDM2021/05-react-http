import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PokemonForm from './components/PokemonForm';
import PokemonInfo  from './components/PokemonInfo';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

 

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName })
  }

  render() {



    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm qwe={this.handleFormSubmit} />
        <PokemonInfo  pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000}/>
      </div>
    );
  }
}
// import { ToastContainer } from 'react-toastify';




















// class App extends Component {
  
//   state = {
//     pokemon: null,
//     loading: false,
//   };
  
//   componentDidMount() {
// this.setState({loading: true});


//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//       .then(res => res.json())
//       .then(pokemon => this.setState({ pokemon }))
//       .finally(() => this.setState({ loading: false }));
//     }, 1000);
//   }

// render() {
//   return (
//     <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
//       {this.state.loading && <h1>Загружаем...</h1>}
//       {this.state.pokemon && (
//         <div>{this.state.pokemon.name}</div>
//       )}
//     </div>
//   );
// }
// }

// export default App 
