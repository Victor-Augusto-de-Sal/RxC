export default function MenuCardapio() {
    return (
        <div id="menu" className="flex justify-center item-center w-screen ml-7 mt-4 sm:text-lg border-2 border-sky-700 shadow-2xl" >
            <h1 className="sm:text-2xl">Menu:</h1>
            <button className="sm:ml-3 px-3 mt-1 ">Entradas</button>
            <button className="sm:ml-3 px-3 mt-1">Massas</button>
            <button className="sm:ml-3 px-3 mt-1">Bebidas</button>
            <button className="sm:ml-3 px-3 mt-1">Sobremesas</button>
        </div >
    )
}