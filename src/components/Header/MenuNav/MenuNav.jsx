import React from 'react';
import { useState } from 'react';
import styles from './MenuNav.module.css';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../../../assets/img/logoClara.png';

function MenuNav() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.menuHeader}>
            <div onClick={toggleMenu}>
                <FaBars className={styles.menuIconNavAberto} />
            </div>
            <nav className={isOpen ? styles.menuNavAberto : styles.menuNavFechado}>
                <div className={styles.alo}>
                    <FaTimes className={styles.menuIconNavFechado} onClick={toggleMenu} />
                    <img src={logo} alt="" className={styles.logoNavAberto} />
                </div>
                <ul>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#beneficios">Benefícios</a></li>
                    <li><a href="#localizacao">Localização</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuNav;