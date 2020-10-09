import React,{Component} from 'react'
import RadioButtons from './RadioButtons'

const animeNames = ['Attack on Titan', 'Code Geass', 'Naruto']
const animeImages = ['/Images/1.jpg','/Images/2.jpg','/Images/3.png']

class Test extends Component {
constructor() {
  super()
  this.state= {
  	index: 0
  	score: 0
  }
}
buttonClicked() {
	this.setState((prevState) => {
		return{ index: prevState.index + 1 }
	})

}

	render() {
		return(
			<div>
				<p> {animeNames[this.state.index]} </p>
				<img src={animeImages[this.state.index]}  />
				<RadioButtons />
				<button onClick= {() => this.buttonClicked()}>
					Next
				</button>
			</div>
			)
	}
}

export default Test