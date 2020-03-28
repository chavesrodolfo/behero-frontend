import React from 'react';
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section className="form">
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os acasos da sua ONG.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
              Já tenho Login
          </Link>

        </section>

        <form>

          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="Email" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>

        </form>

      </div>
    </div>
  );
}