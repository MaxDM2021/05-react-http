import { Component } from "react";
import { ToastContainer } from 'react-toastify';


export default class App extends Component {
  
  state = {
    pokemon: null
  }
  
  componentDidMount() {
    setTimeout(() => {
      fetch('http://pokeapi.co/api/v2/pokemon/ditto')
      .them(res => res.json())
      .them(pokemon => this.setState({ pokemon }));
    }, 1000);
    }



render() {
  return(
    <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
      {this.state.pokemon && (
        <div>Тут будет покемон после фетча и когда в стейт запишем</div>
      )}
    </div>
  );
}
}