import React from 'react';
import styles from './SecaoLocalizacao.module.css';
import TituloSecao from './TituloSecao/TituloSecao';
import TituloUnidade from './TituloUnidade/TituloUnidade';
import GoogleMapsAPI from './GoogleMapsApi/GoogleMapsApi';
import InfoUnidade from './InfoUnidade/InfoUnidade';

function SecaoLocalizacao() {
    return (
        <section className={styles.secaoLocalizacao}>
            <div className={styles.corDeFundo}>
                <div className={styles.containerTitle} id='localizacao'>
                    <TituloSecao />
                </div>
            </div>
            <div className={styles.containerUnidade}>
                <TituloUnidade nomeUnidade='Araguari' />
            </div>
            <div>
                <GoogleMapsAPI />
            </div>
            <div className={styles.containerInfo}>
                <InfoUnidade range={[0, 4]}/>
            </div>
            <div className={styles.containerUnidade}>
                <TituloUnidade nomeUnidade='Uberlândia' />
            </div>
            <div>
                <GoogleMapsAPI />
            </div>
            <div className={styles.containerInfo}>
                <InfoUnidade range={[4, 5]}/>
            </div>
        </section>
    );
}

export default SecaoLocalizacao;