import { EmptyPlayer, PlayerContainer, Progress, Buttons, PlayButton, Slider } from "./styles";

export default function Player() {

    return (
        <PlayerContainer>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando Agora</strong>
            </header>
            <EmptyPlayer>
                <strong>Selecione um podcast para ouvir</strong>
            </EmptyPlayer>
            <footer>
                <Progress>
                    <span>00:00</span>
                    <Slider>
                        <div />
                    </Slider>
                    <span>00:00</span>
                </Progress>
                <Buttons>
                    <button type="button">
                        <img src="/shuffle.svg" alt="embaralhar" />
                    </button>
                    <button type="button">
                        <img src="/play-previous.svg" alt="tocar anterior" />
                    </button>
                    <PlayButton type="button">
                        <img src="/play.svg" alt="tocar" />
                    </PlayButton>
                    <button type="button">
                        <img src="/play-next.svg" alt="tocar próxima" />
                    </button>
                    <button type="button">
                        <img src="/repeat.svg" alt="repetir" />
                    </button>

                </Buttons>
            </footer>
        </PlayerContainer>
    )
}