import { EmptyPlayer, CurrentEpisode, PlayerContainer, Progress, Buttons, PlayButton, RepeatButton, ShuffleButton, SliderContainer, EmptySlider } from "./styles";
import { useContext, useEffect, useRef, useState } from 'react';
import { PlayerContext } from "../../contexts/playerContext";
import Image from 'next/image';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { convertDurationToString } from "../../utils/convertDurationToString";

export default function Player() {
    const audioElement = useRef<HTMLAudioElement>(null);

    const [progress, setProgress] = useState(0);

    function setupProgressListener() {
        audioElement.current.currentTime = 0;
        audioElement.current.addEventListener('timeupdate', event => {
            setProgress(Math.floor(audioElement.current.currentTime));
        })
    }

    function handleSeek(amount: number) {
        audioElement.current.currentTime = amount;
        setProgress(amount);
    }

    function handleEpisodeEnded() {
        if(hasNext || shuffling) {
            playNext()
        } else {
            clearPlayerState()
        }
    }

    const { episodeList,
        currentEpisodeIndex,
        playing,
        looping,
        shuffling,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        setPlayingState,
        playNext,
        hasNext,
        playPrev,
        hasPrev,
        clearPlayerState
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
                        loop={looping}
                        ref={audioElement}
                        onPlay={() => setPlayingState(true)}
                        onPause={() => setPlayingState(false)}
                        onLoadedMetadata={setupProgressListener}
                        onEnded={handleEpisodeEnded}
                    ></audio>
                )}
                <Progress>
                    <span>{convertDurationToString(progress)}</span>
                    <SliderContainer>
                        {episode ? (
                            <Slider
                                max={episode.duration}
                                value={progress}
                                onChange={handleSeek}
                                trackStyle={{ backgroundColor: '#04d361' }}

                            />
                        ) : (
                            <EmptySlider />
                        )}
                    </SliderContainer>
                    <span>{convertDurationToString(episode?.duration ?? 0)}</span>
                </Progress>
                <Buttons empty={!episode}>
                    <ShuffleButton
                        type="button"
                        disabled={!episode || (episodeList.length === 1)}
                        active={shuffling}
                        onClick={toggleShuffle}
                    >
                        <img src="/shuffle.svg" alt="embaralhar" />
                    </ShuffleButton>
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
                    <RepeatButton active={looping} type="button" onClick={toggleLoop} disabled={!episode}>
                        <img src="/repeat.svg" alt="repetir" />
                    </RepeatButton>
                </Buttons>
            </footer>
        </PlayerContainer >
    )
}