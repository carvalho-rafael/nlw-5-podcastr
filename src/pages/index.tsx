import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react';
import { PlayerContext } from '../contexts/playerContext';
import { api } from '../server/api';
import { HomeContainer, LatestEpisodes, AllEpisodes, LatestEpisodesItem } from '../styles/pages/home';
import { convertDurationToString } from '../utils/convertDurationToString';

type Episode = {
  id: string
  title: string
  members: string
  publishedAt: string
  thumbnail: string
  duration: number
  url: string
  durationString: string
}

type HomeProps = {
  latestEpisodes: Array<Episode>
  allEpisodes: Array<Episode>
}

export default function Home({ latestEpisodes, allEpisodes }: HomeProps) {
  const { play } = useContext(PlayerContext);

  return (
    <>
      <Head>
        <title>Podcastr</title>
      </Head>
      <HomeContainer>
        <LatestEpisodes>
          <h2>Últimos Lançamentos</h2>
          <ul>
            {latestEpisodes.map(ep => (
              <LatestEpisodesItem key={ep.id}>
                <Image
                  width="192"
                  height="192"
                  src={ep.thumbnail}
                  alt={ep.title}
                  objectFit="cover"
                />
                <div>
                  <Link href={`/episodes/${ep.id}`}><a>{ep.title}</a></Link>
                  <p>{ep.members}</p>
                  <span>{ep.publishedAt}</span>
                  <span>{ep.durationString}</span>
                </div>

                <button type="button" onClick={() => play(ep)}>
                  <img src="/play-green.svg" alt="tocar" />
                </button>
              </LatestEpisodesItem>
            ))}
          </ul>
        </LatestEpisodes>
        <AllEpisodes>
          <h2>Todos os Episódios</h2>
          <table cellSpacing={0}>
            <thead>
              <tr>
                <th></th>
                <th>Podcast</th>
                <th>Integrantes</th>
                <th style={{ width: '100px' }}>Data</th>
                <th>Duração</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allEpisodes.map(ep => (
                <tr key={ep.id}>
                  <td>
                    <Image
                      width="120"
                      height="120"
                      src={ep.thumbnail}
                      alt={ep.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${ep.id}`}><a>{ep.title}</a></Link>
                  </td>
                  <td>{ep.members}</td>
                  <td>{ep.publishedAt}</td>
                  <td>{ep.durationString}</td>
                  <td>
                    <button type="button" onClick={() => play(ep)}>
                      <img src="/play-green.svg" alt="tocar" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </AllEpisodes>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes = data.map(ep => {
    return {
      id: ep.id,
      title: ep.title,
      members: ep.members,
      publishedAt: format(parseISO(ep.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(ep.file.duration),
      durationString: convertDurationToString(Number(ep.file.duration)),
      thumbnail: ep.thumbnail,
      url: ep.file.url
    }
  })

  const latestEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8,
  }
}