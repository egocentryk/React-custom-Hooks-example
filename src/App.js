import React, { useState } from 'react';

import CharPicker from './components/CharPicker';
import Character from './components/Character';

const App = props => {

	const [side, setSide] = useState('light');
	const [selectedCharacter, setSelectedCharacter] = useState(1);
	const [destroyed, setDestroyed] = useState(false);

	const sideHandler = side => {
		setSide(side);
	}

	const charSelectHandler = event => {
		const charId = event.target.value;
		setSelectedCharacter(charId);
	}

	const destructionHandler = () => {
		setDestroyed(true);
	}

    let content = (
      	<>
        	<CharPicker
          		side={side}
          		selectedChar={selectedCharacter}
          		onCharSelect={charSelectHandler}
        	/>
        	<Character selectedChar={selectedCharacter} />
        	<button onClick={sideHandler.bind(this, 'light')}>
          		Light Side
        	</button>
        	<button onClick={sideHandler.bind(this, 'dark')}>Dark Side</button>
        	{side === 'dark' && (
          		<button onClick={destructionHandler}>DESTROY!</button>
        	)}
      	</>
    );

    if (destroyed) {
      	content = <h1>Total destruction!</h1>;
    }

    return content;
}

export default App;
