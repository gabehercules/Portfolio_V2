import React from "react"
import * as S from "./styled"

const WorkCards = () => (

    <S.WorkCardsWrapper>
        <S.CardsItem>
            <S.CardsItemHead>
                <h3>Entender seu negócio</h3>
                <h4>Briefing e pesquisa</h4>
            </S.CardsItemHead>
            <S.CardsItemBody>
                <p>Uma vez que o acordo foi estabelecido, teremos uma 
                    conversa onde irei retirar todas as informações necessárias 
                    para um melhor entendimento seu negócio, projeto ou ideia. 
                    Assim, darei início a uma pesquisa para centralizar os 
                    prinicpais recursos a serem explorados para o desenvolvimento.</p>
            </S.CardsItemBody>
        </S.CardsItem>

        <S.CardsItem>
            <S.CardsItemHead>
                <h3>Desenvolvimento</h3>
                <h4>Ideias e inspiração</h4>
            </S.CardsItemHead>
            <S.CardsItemBody>
                <p>Nesta etapa todo o conceito capitado na etapa anterior é explorado 
                    a fim de chegar em um resultado que reflita e contenha as características 
                    que irão fazer com que seu projeto tenha o impacto esperado, refletindo 
                    seus ideais e conceitos além de atingir o público da maneira correta.</p>
            </S.CardsItemBody>
        </S.CardsItem>

        <S.CardsItem>
            <S.CardsItemHead>
                <h3>Aplicação virtual</h3>
                <h4>Testes e prototipação</h4>
            </S.CardsItemHead>
            <S.CardsItemBody>
                <p>Esta etapa consiste em aplicar todos os recursos criados para 
                    testes de cor e formato a fim de reproduzir com mais fidelidade 
                    o produto final, sendo aplicados em alguns protótipos como 
                    embalagens, peças publicitárias, websites entre outros.</p>
            </S.CardsItemBody>
        </S.CardsItem>

        <S.CardsItem>
            <S.CardsItemHead>
                <h3>Entrega</h3>
                <h4>Apresentação e envio</h4>
            </S.CardsItemHead>
            <S.CardsItemBody>
                <p>A entrega, é uma etapa tão importante quanto as demais. Aqui, 
                    preparo uma apresentação incrível de todo o trabalho desenvolvido 
                    nas etapas anteriores. Também preparo todos os arquivos finalizados 
                    em diversos formatos para envio.</p>
            </S.CardsItemBody>
        </S.CardsItem>
    </S.WorkCardsWrapper>
)

export default WorkCards