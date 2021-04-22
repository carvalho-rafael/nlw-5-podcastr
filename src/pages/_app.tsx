import Header from "../components/header"
import Player from "../components/player"
import GlobalStyles from "../styles/global"
import { AppContainer } from "../styles/app"
import { PlayerProvider } from "../contexts/playerContext"

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <AppContainer>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
        <GlobalStyles />
      </AppContainer>
    </PlayerProvider>
  )
}

export default MyApp
