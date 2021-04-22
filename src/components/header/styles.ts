import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 6.5rem;
    display: flex;
    align-items: center;

    padding: 2rem 4rem;

    background: var(--white);
    border: 1px solid var(--gray-100);

    p {
        margin-left: 2rem;
        padding: 0.25rem 0 0.25rem 2rem;
        border-left: 2px solid var(--gray-100)
    }
    time {
        margin-left: auto;
        text-transform: capitalize;
    }

`