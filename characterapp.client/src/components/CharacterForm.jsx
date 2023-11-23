import React, { useState } from 'react';
import './CharacterForm.css';

const CharacterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        videogame: '',
        description: '',
        envaname: '',
        simpreason: '',
        imageurl: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const apiUrl = 'http://localhost:5000/api/characters';

        const dataObj = {
            data: {
                name: formData.name,
                lastname: formData.lastname,
                videogame: formData.videogame,
                description: formData.description,
                envaname: formData.envaname,
                simpreason: formData.simpreason,
                imageurl: formData.imageurl,
            },
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataObj),
            });

            if (response.ok) {
                console.log('Character created successfully');
                
            } else {
                console.log(response);
                console.error('Failed to create character');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:{'\t'}
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>

                <label>
                    Last name:{'\t'}
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
                </label>

                <label>
                    From videogame:{'\t'}
                    <input type="text" name="videogame" value={formData.videogame} onChange={handleChange} />
                </label>

                <label>
                    Description:{'\t'}
                    <input type="text" name="description" value={formData.description} onChange={handleChange} />
                </label>

                <label>
                    English VA name:{'\t'}
                    <input type="text" name="envaname" value={formData.envaname} onChange={handleChange} />
                </label>

                <label>
                    Why I love them:{'\t'}
                    <input type="text" name="simpreason" value={formData.simpreason} onChange={handleChange} />
                </label>

                <label>
                    Image URL:{'\t'}
                    <input type="text" name="imageurl" value={formData.imageurl} onChange={handleChange} />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CharacterForm;
