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
    togglePlay: () => void,
    setPlayingState: (boolean) => void
}


export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({children}) {
    const [episodeList, setEpisodeList] = useState<Episode[]>([]);
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
    const [playing, setPlaying] = useState(false);

    function play(episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
        setPlaying(true);
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
                setPlayingState
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}

