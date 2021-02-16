import React from "react"
import * as S from "./styled"

import { ArrowFromLeft as GoBtn } from "@styled-icons/boxicons-regular/ArrowFromLeft"


const Testimonials = () => (

    <S.TestimonialWrapper>
        <S.TestimonialTitle>
            <h2>Depoimentos</h2>
        </S.TestimonialTitle>


        <S.TestimonialCards>
            <S.TCardItem>
                <S.TCardHeading>
                    <S.THeadingInfo>
                        <S.NameInitials>
                            <p>GH</p>
                        </S.NameInitials>
                        <h3>Gabriel Hercules<span>Sua Empresa</span></h3>
                    </S.THeadingInfo>
                    <S.TButton to="/portfolio/rhon" cover direction="left" bg="#141414" duration={0.6}>
                        Ver projeto
                        <span>
                            <GoBtn />
                        </span>
                    </S.TButton>
                </S.TCardHeading>
                <S.TCardBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id accumsan massa. 
                        Ut ut justo tristique, commodo odio a, pharetra dui. Nulla vitae purus malesuada, 
                        elementum augue vitae, finibus orci. Vestibulum ut nibh facilisis, pretium arcu 
                        eu, venenatis nisl.</p>
                </S.TCardBody>
            </S.TCardItem>

            <S.TCardItem>
                <S.TCardHeading>
                    <S.THeadingInfo>
                        <S.NameInitials>
                            <p>GH</p>
                        </S.NameInitials>
                        <h3>Gabriel Hercules<span>Sua Empresa</span></h3>
                    </S.THeadingInfo>
                    <S.TButton to="/portfolio/rhon" cover direction="left" bg="#141414" duration={0.6}>
                        Ver projeto
                        <span>
                            <GoBtn />
                        </span>
                    </S.TButton>
                </S.TCardHeading>
                <S.TCardBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id accumsan massa. 
                        Ut ut justo tristique, commodo odio a, pharetra dui. Nulla vitae purus malesuada, 
                        elementum augue vitae, finibus orci. Vestibulum ut nibh facilisis, pretium arcu 
                        eu, venenatis nisl.
                        </p>
                </S.TCardBody>
            </S.TCardItem>

            <S.TCardItem>
                <S.TCardHeading>
                    <S.THeadingInfo>
                        <S.NameInitials>
                            <p>GH</p>
                        </S.NameInitials>
                        <h3>Gabriel Hercules<span>Sua Empresa</span></h3>
                    </S.THeadingInfo>
                    <S.TButton to="/portfolio/rhon" cover direction="left" bg="#141414" duration={0.6}>
                        Ver projeto
                        <span>
                            <GoBtn />
                        </span>
                    </S.TButton>
                </S.TCardHeading>
                <S.TCardBody>
                    <p> Vestibulum ut nibh facilisis, pretium arcu 
                        eu, venenatis nisl. Integer sed tortor id neque malesuada aliquet. Sed ut ante ullamcorper, 
                        vulputate leo non, consequat tortor.</p>
                </S.TCardBody>
            </S.TCardItem>

            <S.TCardItem>
                <S.TCardHeading>
                    <S.THeadingInfo>
                        <S.NameInitials>
                            <p>GH</p>
                        </S.NameInitials>
                        <h3>Gabriel Hercules<span>Sua Empresa</span></h3>
                    </S.THeadingInfo>
                    <S.TButton to="/portfolio/rhon" cover direction="left" bg="#141414" duration={0.6}>
                        Ver projeto
                        <span>
                            <GoBtn />
                        </span>
                    </S.TButton>
                </S.TCardHeading>
                <S.TCardBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id accumsan massa. 
                        Ut ut justo tristique, commodo odio a, pharetra dui. Nulla vitae purus malesuada, 
                        elementum augue vitae, finibus orci. Vestibulum ut nibh facilisis, pretium arcu 
                        eu, venenatis nisl.</p>
                </S.TCardBody>
            </S.TCardItem>
        </S.TestimonialCards>

    </S.TestimonialWrapper>
)

export default Testimonials
