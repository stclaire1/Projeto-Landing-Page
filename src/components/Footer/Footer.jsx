import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/img/logo.png';
import localIcon from '../../assets/img/local.png';
import telefoneIcon from '../../assets/img/telefone.png';
import whatsappIcon from '../../assets/img/IconWhatsapp.png';

function Footer() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.descricaoLateral}>
                    <img src={logo} alt="" />
                    <p>Produto de qualidade e bom atendimento é o nosso forte. Nos postos JL estamos sempre prontos para te atender!</p>
                </div>
                <div className={styles.infoMatriz}>
                    <p>Rede de postos JL - 06.315.263/0001-76</p>
                    <div className={styles.contatos}>
                        <img src={localIcon} alt="" />
                        <p>Av. Ver. Geraldo Teodoro da Silva, 290 - Bosque</p>
                    </div>
                    <ul>
                        <li>
                            <img src={telefoneIcon} alt="" />
                            <p>(34) 3242-2623</p>
                        </li>
                        <li>
                            <img src={whatsappIcon} alt="" />
                            <p>(34) 99803-0516</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.navLateral}>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#produtos">Produtos</a>
                            </li>
                            <li>
                                <a href="#beneficios">Benefícios</a>
                            </li>
                            <li>
                                <a href="#quemSomos">Quem somos</a>
                            </li>
                            <li>
                                <a href="#localizacao">Localização</a>
                            </li>
                            <li>
                                <a href="#faq">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Footer;