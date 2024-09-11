import React from 'react';
import SecaoProdutos from './SecaoProdutos/SecaoProdutos';
import SecaoBeneficios from './SecaoBeneficios/SecaoBeneficios';
import SecaoSobreNos from './SecaoSobreNos/SecaoSobreNos';
import Secao_Localizacao from './SecaoLocalizacao/SecaoLocalizacao';
import SecaoFaq from './SecaoFAQ/SecaoFaq';
import SecaoConversao from './SecaoConversao/SecaoConversao';

function Main() {
    return (
        <>
            <SecaoProdutos />
            <SecaoBeneficios />
            <SecaoSobreNos />
            <Secao_Localizacao />
            <SecaoFaq />
            <SecaoConversao />
        </>
    );
}

export default Main;