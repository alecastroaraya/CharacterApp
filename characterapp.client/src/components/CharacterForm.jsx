import React, { useState } from 'react';

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

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('lastname', formData.lastname);
        formDataToSend.append('videogame', formData.videogame);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('envaname', formData.envaname);
        formDataToSend.append('simpreason', formData.simpreason);
        formDataToSend.append('imageurl', formData.imageurl);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                console.log('Character created successfully');
                // Additional logic after successful submission
            } else {
                console.error('Failed to create character');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>

            <label>
                Last name:
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
            </label>

            <label>
                From videogame:
                <input type="text" name="videogame" value={formData.videogame} onChange={handleChange} />
            </label>

            <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleChange} />
            </label>

            <label>
                English VA name:
                <input type="text" name="envaname" value={formData.envaname} onChange={handleChange} />
            </label>

            <label>
                Why I love them:
                <input type="text" name="simpreason" value={formData.simpreason} onChange={handleChange} />
            </label>

            <label>
                Image URL:
                <input type="text" name="imageurl" value={formData.imageurl} onChange={handleChange} />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default CharacterForm;
