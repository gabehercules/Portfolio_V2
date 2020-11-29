import React from "react"
import * as S from "./styled"

const ContactForm = () => (
    <S.FormWrapper>
        <S.ContactTitle>Entre em contato preenchendo o formulário</S.ContactTitle>
        <S.ContactSubtitle>Responderei sua mensagem o mais breve possível, e fique tranquilo, você não receberá spam.</S.ContactSubtitle>
        <S.FormBlock>
            <form name="Contact Form" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/obrigado/">
                <input type="hidden" name="form-name" value="Contact Form" />
                <div>
                    <label htmlFor="email">Seu email</label>
                    <input type="email" id="email" name="email" />
                </div>

                <div>
                    <label htmlFor="name">Nome completo</label>
                    <input type="name" id="name" name="name" />
                </div>

                <div>
                    <label htmlFor="phone">Telefone</label>
                    <input type="phone" id="phone" name="phone" />
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