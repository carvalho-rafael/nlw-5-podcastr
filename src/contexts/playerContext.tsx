import { createContext, ReactNode, useEffect, useState } from 'react';
/* import Cookies from 'js-cookie';

import challenges from '../challenges.json';
 */
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
    currentEpisodeIndex: number
    play: (Episode) => void
}


export const PlayerContext = createContext({} as PlayerContextData);

export function PlayerProvider({children}) {
    const [episodeList, setEpisodeList] = useState<Episode[]>();
    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(1);

    function play(episode) {
        setEpisodeList([episode]);
        setCurrentEpisodeIndex(0);
    }

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    return (
        <PlayerContext.Provider
            value={{
                episodeList,
                currentEpisodeIndex,
                play
            }}
        >
            {...children}
        </PlayerContext.Provider>
    )
}

