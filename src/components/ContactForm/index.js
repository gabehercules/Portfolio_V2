import React from "react"
import * as S from "./styled"

const ContactForm = () => (
    <S.FormWrapper>
        <S.FormBlock>
            <S.ContactTitle>Formulário de contato</S.ContactTitle>
            <S.ContactSubtitle>Responderei sua mensagem na velocidade da luz. E fique tranquilo, 
                o lado Designer da força não manda spam.
            </S.ContactSubtitle>
            <form name="Contact Form" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/obrigado/">
                <input type="hidden" name="form-name" value="Contact Form" />
                <div>
                    <label htmlFor="email">Seu email*</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div>
                    <label htmlFor="name">Nome e sobrenome*</label>
                    <input type="name" id="name" name="name" required />
                </div>

                <div>
                    <label htmlFor="phone">Telefone com DDD*</label>
                    <input type="phone" id="phone" name="phone" required />
                </div>

                <div>
                    <label htmlFor="message">Deixe uma mensagem</label>
                    <textarea id="message" name="message" />
                </div>
                <button type="submit">Enviar mensagem</button>
            </form>
        </S.FormBlock>
    </S.FormWrapper>
)

export default ContactForm