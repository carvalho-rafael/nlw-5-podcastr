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

export const CurrentEpisode = styled.div`
    text-align: center;

    img {
        border-radius: 1.5rem;
    }

    strong {
        display: block;
        margin-top: 2rem;
        font-size: 1.25rem;
        line-height: 1.4rem;
    }

    span {
        display: block;
        margin-top: 1rem;
        opacity: .6;
        line-height: 1.5rem;
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

export const SliderContainer = styled.div`
    flex: 1;
`
export const EmptySlider = styled.div`
    width: 100%;
    height: 4px;
    background: var(--purple-300);
    border-radius: 2px;
`


export const Buttons = styled.div<{empty: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    gap: 1.5rem;

    opacity: ${props => props.empty ? '.6': '1'};

    button {
        background: transparent;
        border: 0;
        font-size: 0;

        &:disabled {
            cursor: default;
        }
    }
`

export const PlayButton = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    background: var(--purple-300)!important;
`
