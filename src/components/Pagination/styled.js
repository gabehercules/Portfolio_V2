import styled from "styled-components"

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #bdbdbd;
    padding: 1.5rem 1.6rem;
    
    a {
        color: #bdbdbd;
        text-decoration: none;
        transition: color ease-out 500ms;
    }

    &:hover {
        color: #e20749;
    }
`