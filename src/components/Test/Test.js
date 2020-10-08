import React,{Component} from 'react'
//import Anime from './Anime'

const animeList = ['AOT', 'DBZ', 'Naruto']

class Test extends Component {
constructor() {
  super()
  this.state= {
  	index: 0
  }
}
buttonClicked() {
	console.log('button was clicked')
	this.setState((prevState) => {
		return{ index: prevState.index + 1 }
	})
}

	render() {
		return(
			<div>
				<p> {animeList[this.state.index]} </p>
				<button onClick= {() => this.buttonClicked()}>
					Next
				</button>	
			</div>
			)
	}
}

export default Test