import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../button';
// import ButtonLink from './components/buttonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/"><img className="Logo" src={logo} alt="Aluraflix Logo"></img></a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;

