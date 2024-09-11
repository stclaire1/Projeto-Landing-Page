import React from 'react';
import { useEffect, useState } from 'react';
import styles from './InfoUnidade.module.css';
import infoIcon from '../../../../assets/img/info.png';
import localIcon from '../../../../assets/img/local.png';
import phoneIcon from '../../../../assets/img/telefone.png';
import hourIcon from '../../../../assets/img/horario.png';

function InfoUnidade({ range = [0, 4] }) {  // Definindo valor padrão para range
    const [unidades, setUnidades] = useState([]);

    useEffect(() => {
        fetch('https://stclaire1.github.io/json-files/unidades.json')
            .then(file => file.json())
            .then(info => setUnidades(info.unidades))
            .catch(error => console.error('Erro ao carregar o JSON:', error));
    }, []);

    function getUnidades() {
        if (unidades.length > 0) {
            // Use the range passed as a prop to limit the displayed items
            const unidadesToShow = unidades.slice(range[0], range[1]);
            return (
                unidadesToShow.map((unidade, index) => (
                    <div key={index} className={styles.container}>
                        <div className={styles.title}>
                            <img src={infoIcon} alt="" />
                            <h5>{unidade.nomeUnidade}</h5>
                        </div>
                        <div className={styles.info}>
                            <ul>
                                <li>
                                    <img src={localIcon} alt="" />
                                    <p>{unidade.endereço}</p>
                                </li>
                                <li>
                                    <img src={phoneIcon} alt="" />
                                    <p>{unidade.telefone}</p>
                                </li>
                                <li>
                                    <img src={hourIcon} alt="" />
                                    <p>{unidade.funcionamento}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            );
        }
    }

    return (
        getUnidades()
    );
}

export default InfoUnidade;
