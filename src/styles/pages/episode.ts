import styled from 'styled-components';

export const EpisodeContainer = styled.div`
    max-width: 45rem;
    padding: 3rem 2rem;
    margin: auto;

    header {
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray-100);

        h1 {
            margin-top: 2rem;
            margin-bottom: 1.5rem;
        }

        span {
            display: inline-block;
            font-size: .9rem;

            &:not(:first-of-type) {
                margin-left: 1rem;
                padding-left: 1rem;
                position: relative;

                &::before {
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-radius: 4px;
                    background: var(--gray-800);
                    position: absolute;
                    left: 0;
                    top: 50%;
                    transform: translate(50%, -50%);
                }
            }
        }
    }
`

export const EpisodeCover = styled.div`
    position: relative;

    img {
        border-radius: 1rem;
    }

    button {
        width: 3rem;
        height: 3rem;
        border-radius: .8rem;
        position: absolute;

        font-size: 0;
        z-index: 5;
        transition: all .2s;

        &:first-child {
            left: -.5rem;
            bottom: -.5rem;
            background: var(--purple-500);
        }

        &:last-child {
            left: 3rem;
            bottom: -.5rem;
            background: var(--green-500);
        }

        &:hover {
            filter: brightness(.92);
        }

    }
`

export const EpisodeDescription = styled.div`
    margin-top: 2rem;
    line-height: 1.7rem;

    color: var(--gray-800);

    p {
        margin: 1.5rem 0;
    }
`