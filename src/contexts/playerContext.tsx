import { createContext, ReactNode, useEffect, useState } from 'react';

type Episode = {
    id: string
    title: string
    members: string
    thumbnail: string
    duration: number
    url: string
}

type PlayerContextData = {
    episodeList: Episode[],
    currentEpisodeIndex: number,
    playing: boolean,
    play: (Episode) => void,
    playNext: () => void,
    hasNext: boolean,
    playPrev: () => void,
    hasPrev: boolean,
    togglePlay: () => void,
    setPlayingState: (boolean) => void,
    playList: (list: Episode[], index: number) => void
}

type PlayerContextProviderProps = {
    children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({ children }: PlayerContextProviderProps) {
    const [episodeList, setEpisodeList] = useState<Episode[]>([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    function play(episode: Episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
        setPlaying(true);
    }

    function playList(episodes: Episode[], index: number) {
        setEpisodeList(episodes);
        setCurrentEpisodeIndex(index);
        setPlaying(true);

    }

    const hasNext = currentEpisodeIndex < (episodeList.length -1)

    const hasPrev = currentEpisodeIndex > 0

    function playNext() {
        setCurrentEpisodeIndex(prevState =>
            prevState < (episodeList.length -1) ? ++prevState: prevState);
    }

    function playPrev() {
        setCurrentEpisodeIndex(prevState =>
            prevState > 0 ? --prevState : prevState);
    }

    function togglePlay() {
        setPlaying(value => !value);
    }

    function setPlayingState(state: boolean) {
        setPlaying(state);
    }

    return (
        <PlayerContext.Provider
            value={{
                episodeList,
                currentEpisodeIndex,
                playing,
                play,
                togglePlay,
                setPlayingState,
                playList,
                playNext,
                hasNext,
                playPrev,
                hasPrev
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

