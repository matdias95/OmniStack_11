import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

export default function NewIncident()
{
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e)
    {
        e.preventDefault();

        const data = 
        {
            title,
            description,
            value
        };
        try 
        {
            await api.post('incidents', data,{
                headers: 
                {
                    Authorization: ongId,
                }
            });           

            history.push('/profile');

        } catch (error) 
        {
            alert("Error no cadastro caso, tente novamente.");
        }
    }

    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum error ut omnis unde! Corrupti facere recusandae quas ullam eligendi esse architecto voluptatum molestias labore tempore magnam corporis consectetur, non in.
                </p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"  />
                    Voltar para home
                </Link>

            </section>

            <form onSubmit={handleNewIncident}>
                <input type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Titulo do caso"
                />
                <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição"
                />
                <input 
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Valor em reais"
                />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}