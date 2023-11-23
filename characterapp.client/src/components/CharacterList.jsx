import React, { useState, useEffect } from 'react';
import './CharacterList.css';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const apiUrl = 'http://localhost:5000/api/characters';

            try {
                const response = await fetch(apiUrl);

                if (response.ok) {
                    const data = await response.json();
                    setCharacters(data || []);
                } else {
                    console.error('Failed to fetch characters:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="list-container">
            {!Array.isArray(characters.data) || characters.data.length === 0 ? (
                <p>No characters available.</p>
            ) : (
                <ul>
                    {characters.data.map((character) => (
                        <li key={character.id}>
                            <strong>{character.attributes.name}</strong> <strong>{character.attributes.lastname}</strong> <br/>
                            {character.attributes.videogame} <br/>
                            {character.attributes.description} <br/>
                            {character.attributes.envaname} <br/>
                            {character.attributes.simpreason} <br />
                            <br />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default CharacterList;
