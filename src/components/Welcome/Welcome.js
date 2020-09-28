import React from 'react'
import './Welcome.css'

const Welcome = ({onRouteChange}) => {
	
		return (
			<div className='vh-100 dt w-100'>
				<header className='dtc v-mid tc white ph3 ph4-l'>
					<h1 className='f1 f2 f-subheadline-1 fw6 tc'>the ANIME TASTE test</h1>
					<button onClick={onRouteChange}>start here</button>
				</header>
			</div>
			)
	

} 

export default Welcome