import styled from "styled-components"

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text);
    padding: 1.5rem 1.6rem;
    
    a {
        color: var(--text);
        text-decoration: none;
        transition: color ease-out 500ms;
    }

    a:hover {
        color: var(--contrast);
    }
`