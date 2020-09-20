import styled from "styled-components"

export const ProjectsWrapper = styled.section`
    padding: 50px 1.6rem;

`

export const ProjectsTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2.8rem;
`

export const ProjectsHeading = styled.h2`
    font-size: 2.2rem;
    color: #bdbdbd;
    margin-bottom: 2.4rem;
    font-weight: 600;
`

export const ProjectsBtnBudget = styled.a`
    padding: 10px 20px;
    background-color: #e20749;
    border-radius: 5px;
    display: inline-block;
    transition: 300ms ease-out;
    color: #efefef;
    text-decoration: none;
`

export const BudgetSpan = styled.span`
    height: 12px;
    vertical-align: middle;
    margin-left: .9rem;
    color: #141414;

    svg {
        width: 22px;
    }
`

export const ProjectsGrid = styled.div`
    display: flex;
    overflow-x: scroll;
`

export const ProjectsLink = styled.a`
    margin-left: 20px;
`

export const ProjectsImg = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 5px;
    background-color: #bdbdbd;
`