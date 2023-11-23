import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';

const App = () => {
    const [viewForm, setViewForm] = useState(false);

    const handleAddCharacterClick = () => {
        setViewForm(true);
    };

    const handleViewCharactersClick = () => {
        setViewForm(false);
    };

    return (
        <div>
            <h1>Character Management App</h1>
            <div>
                <button onClick={handleAddCharacterClick}>Add Character</button>
                <button onClick={handleViewCharactersClick}>View Characters</button>
            </div>
            {viewForm ? <CharacterForm /> : <CharacterList />}
        </div>
    );
};

export default App;