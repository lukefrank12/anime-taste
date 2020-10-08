import React,{Component}  from 'react'

let i = 0
let AnimeName = (props) => {
	const name = props.list[i]
	return(
		<div> {name} </div>
		)
}

class Anime extends Component{

	render(){
	const {list} = this.props
		return(
			<div>
				<AnimeName list={list} />
				
			</div>
			)
	}
	}
	



export default Anime