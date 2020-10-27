import { Component } from 'react';
// https://swapi.dev/api/planets/

class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          planets: data.results,
        });
      });
  }
  render() {
    return this.state.planets.length === 0
      ? 'Loading'
      : (
        <ul>
          {this.state.planets.map(planet => (
            <li>{planet.name}</li>
          ))}
        </ul>
      );
  }
}

export default Planets;
