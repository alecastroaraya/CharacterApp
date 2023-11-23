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
                            <strong>From videogame: </strong>{character.attributes.videogame} <br/>
                            <strong>Description: </strong>{character.attributes.description} <br/>
                            <strong>English VA name: </strong>{character.attributes.envaname} <br/>
                            <strong>Why I love them: </strong>{character.attributes.simpreason} <br />
                            <img
                                src={character.attributes.imageurl}
                                alt="character i simp"
                                style={{ maxWidth: '500px', maxHeight: '500px', display: 'block', margin: 'auto' }}
                            />
                            <br />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default CharacterList;
