import React from 'react';
import styles from './SecaoProdutos.module.css';
import './Carrossel.css'
import Titulo from '../../Titulo/Titulo';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import gasolinaGRID from '../../../assets/img/gasolinaGRID.png';
import gasolinaPodium from '../../../assets/img/gasolinaPodium.png';
import etanolGRID from '../../../assets/img/etanolGRID.png';
import dieselS10 from '../../../assets/img/dieselS10.png';
import dieselS500 from '../../../assets/img/dieselS500.png';
import arla32 from '../../../assets/img/arla32.png';
import servicos from '../../../assets/img/servicos.png';

function SecaoProdutos() {

    const data = [
        { id: 1, image: gasolinaGRID, title: 'GASOLINA PETROBRAS GRID', subtitle: 'A ESCOLHA INTELIGENTE', text: 'Com a nova tecnologia de aditivação TECNO 3 a GRID evita a formação de sujeira e deixa o motor cada vez mais limpo, protege o seu motor, evitando desgaste e corrosão e melhora o funcionamento do motor, trazendo mais economia!' },
        { id: 2, image: gasolinaPodium, title: 'GASOLINA PETROBRAS PODIUM', subtitle: 'A MAIS AVANÇADA TECNOLOGIA', text: 'A gasolina Petrobras Podium, uma das mais avançadas do país, está ainda melhor. Se quer alta performance para viver ao máximo todas suas experiências com o menor impacto ambiental, então seu combustível é a Gasolina Petrobras Podium.' },
        { id: 3, image: etanolGRID, title: 'ETANOL PETROBRAS GRID', subtitle: 'A ESCOLHA SUSTENTÁVEL', text: 'Assim como a gasolina, o etanol GRID também conta com a tecnologia de aditivação tecno 3 e todos os seus benefícios, além de ser uma opção mais sustentável, pois é um combustível com origem 100% vegetal e menos poluente, causando menor impacto ambiental' },
        { id: 4, image: dieselS10, title: 'DIESEL S10 PETROBRAS', subtitle: 'O DIESEL MAIS LIMPO', text: 'O Diesel S10 é UBTE (ultrabaixo teor de enxofre) e foi desenvolvido para os veículos leves e pesados produzidos a partir de 2012. É adequado para uso em veículos com tecnologias mais modernas, mas também pode ser utilizado por veículos mais antigos, sem nenhum prejuízo ao seu funcionamento!' },
        { id: 5, image: dieselS500, title: 'DIESEL S500 PETROBRAS', subtitle: 'O DIESEL TRADICIONAL', text: 'O Diesel S500 é BTE (baixo teor de enxofre) e foi desenvolvido para os veículos leves e pesados produzidos antes de 2012. O combustível é adequado às tecnologias dos sistemas de combustão e de controle das emissões sem pós-tratamento, proporcionando um melhor custo/benefício nesse tipo de veículo.' },
        { id: 6, image: arla32, title: 'FLUA PETROBRAS ARLA 32', subtitle: 'AGENTE SUSTENTÁVEL', text: 'Flua Petrobras Arla 32 tem o que brasileiro gosta: a qualidade Petrobras, o cuidado com o seu motor e com o meio ambiente. É um agente líquido redutor de emissões de óxidos de nitrogênio (NOx) desenvolvido para os veículos movidos a óleo diesel produzidos com a nova tecnologia SCR (selective catalyst reduction).' },
        { id: 7, image: servicos, title: 'SERVIÇOS GERAIS', subtitle: 'LAVA-JATO, TROCA DE ÓLEO E CALIBRAGEM', text: 'Além de um atendimento personalizado e produtos de qualidade, contamos com toda a estrutura que você precisa para dar aquele trato no seu veículo, na Rede de Postos JL a sua satisfação é o nosso objetivo! Conte conosco sempre.' }
    ]

    return (
        <section className={styles.secaoProdutos}>
            <div id='produtos'>
                <Titulo titulo="Conheça nossos produtos" className={styles.tituloGeral}/>
                <Swiper
                    centeredSlides={true}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.carouselContent}>
                                <img
                                    className={styles.carouselImage}
                                    src={item.image}
                                    alt=""
                                />
                                <div className={styles.carouselText}>
                                    <h3>{item.title}</h3>
                                    <h5>{item.subtitle}</h5>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default SecaoProdutos;