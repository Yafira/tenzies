import React from 'react'
import Die from './components/Die'
import './style.css'

export default function App() {
	function allNewDice() {
		// new array to hold the numbers
		const newDice = []
		// loop 10 times
		for (let i = 0; i < 10; i++) {
			// push a random number from 1-6 to my array
			newDice.push(Math.ceil(Math.random() * 6))
		}
		// return array
		return newDice
	}
	console.log(allNewDice())

	return (
		<main>
			<div className='dice-container'>
				<Die value='1' />
				<Die value='2' />
				<Die value='3' />
				<Die value='4' />
				<Die value='5' />
				<Die value='6' />
				<Die value='7' />
				<Die value='8' />
				<Die value='9' />
				<Die value='0' />
			</div>
		</main>
	)
}
