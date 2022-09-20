
import HeaderMenu from "../components/HeaderMenu"
import Cards from "../components/Cards"
import MenuCardapio from "../components/MenuCardapio"

export default function Cardapio() {
    return (
        <>
            <HeaderMenu />
            <MenuCardapio />
            <div className="flex flex-col justify-center">
                <Cards />
                <Cards />
            </div>
            <footer className="text-center">
                Página 1 de 10
            </footer>
        </>
    )
}