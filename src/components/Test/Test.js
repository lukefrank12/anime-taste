import React,{Component} from 'react'
import RadioButtons from './RadioButtons'

const animeNames = ['Attack on Titan', 'Code Geass', 'Naruto']
const animeImages = ['/Images/1.jpg','/Images/2.jpg','/Images/3.png']

class Test extends Component {
constructor() {
  super()
  this.radioButtonsElement = React.createRef()
  this.state= {
  	index: 0,
  	//choice: ''
  	//score: 0
  }
}
buttonClicked() {
	this.setState((prevState) => {
		return{ index: prevState.index + 1 }
	})
	this.radioButtonsElement.current.resetButton()
}
	render() {
		return(
			<div>
				<p> {animeNames[this.state.index]} </p>
				<img src={animeImages[this.state.index]}  />
				<RadioButtons ref={this.radioButtonsElement} />
				<button onClick= {() => this.buttonClicked()}>
					Next
				</button>
			</div>
			)
	}
}

export default Test