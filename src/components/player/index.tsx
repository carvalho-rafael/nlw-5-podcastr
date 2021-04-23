import { EmptyPlayer, CurrentEpisode, PlayerContainer, Progress, Buttons, PlayButton, SliderContainer, EmptySlider } from "./styles";
import { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from "../../contexts/playerContext";
import Image from 'next/image';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

export default function Player() {
    const audioElement = useRef<HTMLAudioElement>(null);

    const { episodeList,
        currentEpisodeIndex,
        playing,
        togglePlay,
        setPlayingState,
        playNext,
        hasNext,
        playPrev,
        hasPrev
    } = useContext(PlayerContext);

    const episode = episodeList[currentEpisodeIndex];

    useEffect(() => {
        if (!audioElement.current) {
            return;
        }

        if (playing) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    }, [playing])
    return (
        <PlayerContainer>
            <header>
                <img src="/playing.svg" alt="Tocando agora" />
                <strong>Tocando Agora</strong>
            </header>
            {episode ? (
                <CurrentEpisode>
                    <Image
                        width="592"
                        height="592"
                        src={episode.thumbnail}
                        alt={episode.title}
                        objectFit="cover"
                    />
                    <strong>{episode.title}</strong>
                    <span>{episode.members}</span>
                </CurrentEpisode>
            ) : (
                <EmptyPlayer>
                    <strong>Selecione um podcast para ouvir</strong>
                </EmptyPlayer >
            )}
            <footer>
                {episode && (
                    <audio
                        src={episode.url}
                        autoPlay
                        ref={audioElement}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                    ></audio>
                )}
                <Progress>
                    <span>00:00</span>
                    <SliderContainer>
                        {episode ? (
                            <Slider
                                trackStyle={{ backgroundColor: '#04d361' }}

                            />
                        ) : (
                            <EmptySlider />
                        )}
                    </SliderContainer>
                    <span>00:00</span>
                </Progress>
                <Buttons empty={!episode}>
                    <button type="button" disabled={!episode}>
                        <img src="/shuffle.svg" alt="embaralhar" />
                    </button>
                    <button type="button" onClick={playPrev} disabled={!episode || !hasPrev}>
                        <img src="/play-previous.svg" alt="tocar anterior" />
                    </button>
                    <PlayButton
                        type="button"
                        disabled={!episode}
                        onClick={togglePlay}
                    >
                        {playing ?
                            <img src="/pause.svg" alt="tocar" />
                            : <img src="/play.svg" alt="tocar" />
                        }
                    </PlayButton>
                    <button type="button" onClick={playNext} disabled={!episode || !hasNext}>
                        <img src="/play-next.svg" alt="tocar próxima" />
                    </button>
                    <button type="button" disabled={!episode}>
                        <img src="/repeat.svg" alt="repetir" />
                    </button>

                </Buttons>
            </footer>
        </PlayerContainer >
    )
}