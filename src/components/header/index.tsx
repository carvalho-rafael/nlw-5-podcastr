import { HeaderContainer } from "./styles";
import ptBR from 'date-fns/locale/pt-BR'
import format from 'date-fns/format'

export default function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    })
    return (
        <HeaderContainer>
            <img src="/logo.svg" alt="logo podcastr"/>
            <p>O melhor para você ouvir sempre</p>
            <time dateTime={currentDate}>{currentDate}</time>
        </HeaderContainer>
    )
}