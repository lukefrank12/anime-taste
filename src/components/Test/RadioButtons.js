import React,{Component} from 'react'

class RadioButtons extends Component{
constructor(){
	super()
	this.state = {
		choice: ''
	}
}
onChange = e =>{
	this.setState({choice: e.target.value})
}
resetButton = () =>{
	this.setState({choice: ''})
}
	render(){
		return(
				<form>
					<label>
						Epic
						<input 
						type='radio'
						value='epic'
						checked={this.state.choice === 'epic'}
						onChange={this.onChange} />
					</label>
					<label>
						Trash
						<input 
						type='radio'
						value='trash'
						checked={this.state.choice === 'trash'}
						onChange={this.onChange} />
					</label>
				</form>
			)
	}
}

export default RadioButtons