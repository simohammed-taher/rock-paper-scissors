import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Player from './player';
import './styles.css';

const weapons = ['rock', 'paper', 'scissors'];
class App extends Component {
	state = {
		playerOne: weapons[0],
		playerTwo: weapons[0],
		winner: '',
	};

	startGame = () => {
		let counter = 0;
		let gameInterval = setInterval(() => {
			counter++;
			this.setState({
				playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
				winner: '',
			});
			if (counter > 5) {
				clearInterval(gameInterval);
				this.setState({
					winner: this.selectWinner(),
				});
			}
		}, 100);
	};

	selectWinner = () => {
		const { playerOne, playerTwo } = this.state;

		if (playerOne === playerTwo) {
			return "1=1";
		} else if (
			(playerOne === 'rock' && playerTwo === 'scissors') ||
			(playerOne === 'scissors' && playerTwo === 'paper') ||
			(playerOne === 'paper' && playerTwo === 'rock')
		) {
			return '1/0';
		} else {
			return '0/1';
		}
	};
	selectWeapon = (weapon) => {
		this.setState({
			playerOne: weapon,
			winner: '',
		});
	};
	render() {
		const { playerOne, playerTwo, winner } = this.state;
		return (
			<>
				<h1 style={{ textAlign: 'center' }}>
					Rock Paper Scissors<br></br> <b>Taher</b> <span>VS</span>
					<b>Taher</b>
				</h1>

				<div>
					<Player weapon={playerOne} />
					<Player weapon={playerTwo} />
				</div>
				<div>
					<button
						className='weaponBtn'
						onClick={() => this.selectWeapon('rock')}
					>
						rock-|-حجرة 
					</button>
					<button
						className='weaponBtn'
						onClick={() => this.selectWeapon('paper')}
					>
						paper-|-ورقة
					</button>
					<button
						className='weaponBtn'
						onClick={() => this.selectWeapon('scissors')}
					>
						scissor-|-مقص
					</button>
				</div>
				<div className='winner'><b>{winner ? this.selectWinner() : null}</b></div>
				<button type='button' onClick={this.startGame}>
					Start!
				</button>
			</>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
