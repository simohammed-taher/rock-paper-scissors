import React from 'react';
import scissors from './assets/scissors.png';
import paper from './assets/paper.png';
import rock from './assets/rock.png';

const Player = ({ weapon }) => (
	<>
		<div className='player'>
			<img
				className='player-image'
				src={
					weapon === 'rock' ? rock : weapon === 'scissors' ? scissors : paper
				}
				alt='Rock Paper Scissors'
			/>
		</div>
	</>
);

export default Player;
