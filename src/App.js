import React, {Component} from 'react'
import './App.css'
import Welcome from './components/Welcome/Welcome'
import Particles from 'react-particles-js'
import Test from './components/Test/Test'

const particles = {
  particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 500
        }
      }
  }
}


class App extends Component {

constructor() {
  super()
  this.state={
    route: ''
  }
}

onRouteChange = () => {
  this.setState({route: 'test'})
}

    render(){
      return (  
        <div className="App">
          <Particles className='particles' params={particles}/>
          { this.state.route === ''
           ?<Welcome onRouteChange={this.onRouteChange} /> //conditional statement
           : <Test/>
          }
          
        </div>
    
  );
}
}


export default App;
