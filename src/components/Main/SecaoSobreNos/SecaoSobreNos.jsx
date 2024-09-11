import React from 'react';
import styles from './SecaoSobreNos.module.css';
import Carrossel from './Carrossel';
import Funcionalidade from './Funcionalidade';
import qualidadeImg from '../../../assets/img/qualidade.jpg';
import agilidadeImg from '../../../assets/img/agilidade.jpg';
import confiancaImg from '../../../assets/img/confianca.jpg';

function SecaoSobreNos() {
    return (
        <section className={styles.sobreNos} id='quemSomos'>
            <div>
                <h3 className={styles.sobreNosTitulo}>
                    HÁ <span className={styles.destaque}>20 ANOS</span> OFERECENDO QUALIDADE E CONFIANÇA PARA VOCÊ E SEU VEÍCULO
                </h3>
                <p className={styles.sobreNosDescricao}>
                    <span>A <strong>equipe de postos JL </strong>equipe de postos JL sabe da importância de construir uma <strong>empresa sólida,</strong></span> <span>comprometida com o trabalho que desempenha e com a qualidade</span> dos produtos que oferece aos seus clientes.
                </p>
                <Carrossel />
                <div className={styles.sobreNosFuncionalidades}>
                    <Funcionalidade
                        imagem={qualidadeImg}
                        titulo="QUALIDADE"
                        descricao="Há 20 anos com a bandeira BR, oferecemos combustíveis de alta qualidade e confiabilidade para seu veículo."
                    />
                    <Funcionalidade
                        imagem={agilidadeImg}
                        titulo="AGILIDADE"
                        descricao="Atendimento rápido e eficiente para quem precisa de agilidade no dia a dia. Valorize seu tempo conosco."
                    />
                    <Funcionalidade
                        imagem={confiancaImg}
                        titulo="CONFIANÇA"
                        descricao="A confiança de nossos clientes é nosso maior prêmio. Fomos reconhecidos com o Prêmio Top Off Mind Araguari 2023."
                    />
                </div>
            </div>
        </section>
    );
}

export default SecaoSobreNos;