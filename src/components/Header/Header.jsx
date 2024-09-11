import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/img/logoClara.png';
import TituloHeader from './TituloHeader/TituloHeader';
import MenuNav from './MenuNav/MenuNav';
import CallToAction from './CallToAction/CallToAction';

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <div>
                    <img src={logo} alt="logo rede de postos JL" />
                    <MenuNav />
                </div>
                <div>
                    <TituloHeader />
                    <CallToAction />
                </div>
            </div>

        </header>
    );
}

export default Header;