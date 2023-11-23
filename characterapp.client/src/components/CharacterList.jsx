import React, { useState, useEffect } from 'react';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const apiUrl = 'http://localhost:5000/api/characters'; // Update with your Strapi API endpoint

            try {
                const response = await fetch(apiUrl);

                if (response.ok) {
                    const data = await response.json();
                    setCharacters(data || []); // Ensure that data is an array or default to an empty array
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
        <div>
            <h2>Existing Characters</h2>
            {console.log(characters.data)}
            {!Array.isArray(characters.data) || characters.data.length === 0 ? (
                <p>No characters available.</p>
            ) : (
                <ul>
                    {characters.data.map((character) => (
                        <li key={character.id}>
                            <strong>{character.attributes.name}</strong> - {character.attributes.videogame}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default CharacterList;
