import React from 'react'
import './styles.css'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

export default function Register()
{
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum error ut omnis unde! Corrupti facere recusandae quas ullam eligendi esse architecto voluptatum molestias labore tempore magnam corporis consectetur, non in.
                    </p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"  />
                        Não tenho cadastro
                    </Link>

                </section>

                <form action="">
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="Whatsapp"/>

                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{ width: 80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}