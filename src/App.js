import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import particleSettings from './components/Particles/Particles';
import './App.css';


class App extends Component {
  constructor()
  {
    super();
    this.state = {
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit =() => {
    console.log('click');
  }
  render() {
  return (
    <div className="App">
    <Particles className='particles' params={particleSettings}/>
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
    {/*<FaceRecognition />*/}
    </div>
  );
}
}
export default App;
