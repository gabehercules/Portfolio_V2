import React from "react"
import * as S from "./styled"

const thankContact = () => (
    <S.ThankWrapper>
        <S.ThankMessage>
            <h1>
                <span>I've been looking for you. Got something I'm supposed to deliver. 
                    In your hands only. Let's see here...
                </span>
                Obrigado pelo contato!
            </h1>
        </S.ThankMessage>
        <S.BackContact>
            <S.BackLink cover direction="left" bg="#141414" duration={0.6} to="/">De volta ao site</S.BackLink>
        </S.BackContact>
    </S.ThankWrapper>
)

export default  thankContact