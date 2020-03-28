import React, { useState } from 'react'
import './styles.css'

import api from '../../services/api'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

export default function Register()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handlerRegister(e)
    {
        e.preventDefault();

        const data = 
        {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try 
        {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${ response.data.id }`);

            history.push('/');

        } catch (error) 
        {
            alert("Error no cadastro, tente novamente.");
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum error ut omnis unde! Corrupti facere recusandae quas ullam eligendi esse architecto voluptatum molestias labore tempore magnam corporis consectetur, non in.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"  />
                        Não tenho cadastro
                    </Link>

                </section>

                <form onSubmit={handlerRegister}>
                    <input type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                     />

                    <input type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input type="text" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input type="text" 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input type="text" 
                            placeholder="UF" 
                            style={{ width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}