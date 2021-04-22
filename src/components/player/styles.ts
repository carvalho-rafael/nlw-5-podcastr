import styled from 'styled-components'

export const PlayerContainer = styled.header`
    width: 26.5rem;
    height: 100vh;
    padding: 3rem 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background: var(--purple-500);
    color: var(--white);

    header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    footer {
        align-self: stretch;
    }
`

export const EmptyPlayer = styled.div`
    width: 100%;
    height: 20rem;
    padding: 2rem;
 
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1.5px dashed var(--purple-300);
    border-radius: 1.5rem;
    background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0,0,0,0) 100%);

    text-align: center;
`

export const Progress = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;

    span {
        display: inline-block;
        width: 4rem;
        text-align: center;
    }
`

export const Slider = styled.div`
    flex: 1;

    div {
        width: 100%;
        height: 4px;
        background: var(--purple-300);
        border-radius: 2px;
    }
`


export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    button {
        background: transparent;
        border: 0;
        font-size: 0;
    }
`

export const PlayButton = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: var(--purple-400)
`
