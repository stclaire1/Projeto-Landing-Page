import React from 'react';
import Beneficio from './Beneficio';
import styles from './SecaoBeneficios.module.css';
import imgPremmia from '../../../assets/img/imgPremmia.png';
import imgCelular from '../../../assets/img/imgCelular.png';
import Titulo from '../../Titulo/Titulo';

function SecaoBeneficios() {
    return (
        <section className={styles.secaoBeneficios} id='beneficios'>
            <div id={styles.beneficios}>
                <Titulo titulo="Benefícios"/>
                <div className={styles.containerBeneficios}>
                    <div className={styles.beneficio1}>
                        <Beneficio
                            titulo="Programa de Fidelidade Premmia"
                            subtitulo="O programa de pontos"
                            descricao="Com o Premmia, você se cadastra, acumula pontos e pode trocá-los por ofertas incríveis, produtos, serviços e descontos em diversos parceiros."
                            imagem={imgPremmia}
                        />
                    </div>
                <div className={styles.beneficio2}>
                    <Beneficio
                        titulo="Cashback e Acúmulo de Pontos"
                        subtitulo="vários benefícios"
                        descricao="Pague seu abastecimento pelo App Premmia com PIX ou cartão de crédito e ganhe até 6% de cashback. Pagando pelo App você também acumula pontos!"
                        imagem={imgCelular}
                        invertido
                        />
                </div>
                </div>
            </div>
        </section>
    );
}

export default SecaoBeneficios;