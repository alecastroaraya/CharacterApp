import React, { useState } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';

const App = () => {
    const [viewForm, setViewForm] = useState(false);
    const [viewList, setViewList] = useState(false);

    const handleAddCharacterClick = () => {
        setViewList(false);
        setViewForm(true);
    };

    const handleViewCharactersClick = () => {
        setViewForm(false);
        setViewList(true);
    };

    return (
        <div>
            <h1>Character Management App</h1>
            <div>
                <button onClick={handleAddCharacterClick}>Add Character</button>
                <button onClick={handleViewCharactersClick}>View Characters</button>
            </div>
            {viewForm ? <CharacterForm /> : null}
            {viewList ? <CharacterList /> : null}

        </div>
    );
};

export default App;