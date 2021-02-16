import React from "react"
import * as S from "./styled"


const ContactHome = () => (
    <S.HomeContact_Warpper>
        <S.ContactLeft>
            <S.HomeContact_Heading>
                <h2>Entre em contato</h2>
                <p>Preencha o formulário de contato ou envie uma mensagem direto no 
                    meu <a href="https://api.whatsapp.com/send?1=pt_BR&phone=55011944801999" target="_blank" rel="noopener noreferrer">whatsapp </a> 
                    ou no email <a href="mailto:eu@gabehercules.me">eu@gabehercules.me</a></p>
            </S.HomeContact_Heading>
            <S.HomeContact_Form>
            <form name="Contact Form Homepage" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/obrigado/">
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
            <S.FormDisclaimer>
            Responderei sua mensagem na velocidade da luz. E fique tranquilo, o lado Designer da força não manda spam.
            </S.FormDisclaimer>
            </S.HomeContact_Form>
        </S.ContactLeft>
        <S.ContactRight>

        </S.ContactRight>
    </S.HomeContact_Warpper>
)

export default ContactHome