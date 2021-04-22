import styled from 'styled-components';

export const HomeContainer = styled.div`
    padding: 0 4rem;
    height: calc(100vh - 6.5rem);
    overflow-y: scroll;

    h2 {
        margin-top: 3rem;
        margin-bottom: 1.5rem;
    }
`

export const LatestEpisodes = styled.section`
    ul {
        list-style: none;
        display: grid;
        grid-template-columns:  repeat(2, 1fr);
        gap: 1.5rem;
    }
`
export const LatestEpisodesItem = styled.section`
    background: var(--white);
    border: 1px solid var(--gray-100);
    padding: 1.25rem;
    border-radius: 1.5rem;
    position: relative;

    display: flex;
    align-items: center;

    img {
        width: 6rem;
        height: 6rem;
        border-radius: 1rem;
    }

    > div {
        flex: 1;
        margin-left: 1rem;

        a {
            display: block;
            color: var(--gray-800);
            font-weight: 600;
            text-decoration: none;
            line-height: 1.4rem;

            &:hover {
                text-decoration: underline;
            }
        }
        p {
            font-size: .9rem;
            margin-top: 0.5rem;
            max-width: 70%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        span {
            display: inline-block;
            margin-top: 0.5rem;
            font-size: .9rem;
            position: relative;

            &:first-of-type {
                margin-right: .5rem;
                padding-right: .5rem;
                position: relative;

                &::after {
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-radius: 4px;
                    background: var(--gray-800);
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translate(50%, -50%);
                }
            }
        }
    }
    button {
            position: absolute;
            right: 2rem;
            bottom: 2rem;

            width: 2.5rem;
            height: 2.5rem;
            background: var(--white);
            border: 1px solid var(--gray-100);
            border-radius: .6rem;
            font-size: 0;
            transition: all .2s;

            img {
                width: 1.5rem;
                height: 1.5rem;
            }

            &:hover {
                filter: brightness(.92);
            }
        }

`

export const AllEpisodes = styled.section`
    padding-bottom: 2rem;

    table {
        width: 100%;

        th, td {
            padding: .8rem 1rem;
            border-bottom: 1px solid var(--gray-100);
        }

        th {
            color: var(gray-200);
            font-size: .8rem;
            text-transform: uppercase;
            text-align: left;
        }

        td {
            img {
                width: 2.5rem;
                height: 2.5rem;
                border-radius: .5rem;
            }

            a {
                flex: 1;
                color: var(--gray-800);
                font-weight: 600;
                text-decoration: none;
                line-height: 1.4rem;

                &:hover {
                    text-decoration: underline;
                }
            }
            button {
                width: 2rem;
                height: 2rem;
                background: var(--white);
                border: 1px solid var(--gray-100);
                border-radius: .6rem;
                font-size: 0;
                transition: all .2s;

                img {
                    width: 1.25rem;
                    height: 1.25rem;
                }

                &:hover {
                    filter: brightness(.92);
                }
            }
        }
    }
`
