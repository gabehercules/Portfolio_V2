import React from "react"
import * as S from "./styled"

import { ListUl as GoForm } from "@styled-icons/boxicons-regular/ListUl"

const ServicesUIUX = () => (

    <S.ServicesWrapper>
        <S.ServicesHeading>
            <h2>O que eu faço?</h2>
            <S.ServicesBriefing to="/briefing/" alt="Clique aqui para acessar o briefing online" title="Briefing Online" cover direction="left" bg="#141414" duration={0.6}>
                Briefing
                <span>
                    <GoForm />
                </span>
            </S.ServicesBriefing>
        </S.ServicesHeading>
        <S.ServicesItems>

    <S.ItemService>
        <h3>ID Visual - Criação de marcas</h3>
        <p>Criação de marcas completas, desde a concepção do primeiro sketch à toda a composição visual</p>
    </S.ItemService>

    <S.ItemService>
        <h3>UX - pesquisa e desenvolvimento</h3>
        <p>Pesquisas de validação, testes de usabilidade e análises de métricas para seu produto ou serviço</p>
    </S.ItemService>

    <S.ItemService>
        <h3>UI - para apps, sites e sistemas</h3>
        <p>Criação de marcas completas, desde a concepção do primeiro sketch à toda a composição visual</p>
    </S.ItemService>

        </S.ServicesItems>
    </S.ServicesWrapper>

)

export default ServicesUIUX