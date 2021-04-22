import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { api } from '../../server/api';
import { EpisodeContainer, EpisodeCover, EpisodeDescription } from '../../styles/pages/episode';
import { convertDurationToString } from '../../utils/convertDurationToString';

import Image from 'next/image'
import Link from 'next/link';

type Episode = {
    id: string
    title: string
    members: string
    publishedAt: string
    thumbnail: string
    description: string
    duration: number
    url: string
    durationString: string
}

type EpisodeProps = {
    episode: Episode
}

export default function Episode({ episode }: EpisodeProps) {
    const router = useRouter();
    const { slug } = router.query;

    return (
        <>
            <Head>
                <title>Episode {episode.title}</title>
            </Head>
            <EpisodeContainer>
                <EpisodeCover>
                    <Link href="/">
                        <button type="button">
                            <img src="/arrow-left.svg" alt="voltar" />
                        </button>
                    </Link>
                    <Image
                        width="700"
                        height="160"
                        src={episode.thumbnail}
                        objectFit="cover"
                    />
                    <button type="button">
                        <img src="/play.svg" alt="tocar" />
                    </button>
                </EpisodeCover>
                <header>
                    <h1>{episode.title}</h1>
                    <span>{episode.members}</span>
                    <span>{episode.publishedAt}</span>
                    <span>{episode.durationString}</span>
                </header>
                <EpisodeDescription dangerouslySetInnerHTML={{ __html: episode.description }} />
            </EpisodeContainer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { data } = await api.get(`episodes/${context.params.slug}`)

    const episode = {
        id: data.id,
        title: data.title,
        members: data.members,
        publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
        duration: Number(data.file.duration),
        durationString: convertDurationToString(Number(data.file.duration)),
        description: data.description,
        thumbnail: data.thumbnail,
        url: data.file.url

    }
    return {
        props: {
            episode
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await api.get(`episodes`);

    const episodesPaths = data.map(ep =>{
        return {
            params: {
                slug:  ep.id
            }
        }
    })

    return {
        paths: [...episodesPaths],
        fallback: 'blocking'
    }
}