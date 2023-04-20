import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('')
    const navigator = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
        if(!name){
            return
        }

        navigator('/Home')
    }

    return (
        <div>
            <h2>Contact</h2>
            <div>
                <form onSubmit={(e) => submitForm(e)}>
                    <label>nombre: </label>
                    <input 
                        type='text'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type='submit'>Subir contacto</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;