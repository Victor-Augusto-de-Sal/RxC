import Image from 'next/future/image'
import Link from 'next/link'
import { IoCloseOutline } from "react-icons/io5";

export default function Card_Pratos() {
    return (
        <div className="border-2 border-sky-700 shadow-2xl m-2">
            <Link href="cardapio">
            <IoCloseOutline className="absolute text-red-600 text-4xl right-20 sm:right-5"/>
            </Link>
            <div id="container" className="flex mt-10 justify-center text-center">
                <Image className="mx-2 float-left border-2 border-sky-700 shadow-2xl " alt="Foto do prato" src="https://dummyimage.com/250x360/fff/aaa" width={250} height={360} />
                <div className="w-full mr-2">
                    <h1 className="contents text-xl font-bold">Nome do prato</h1>
                    <h4>Descrição do prato:</h4>
                    <span>
                        Auishduhusida auasduhuh
                        iausuhudushhhud aiusdhuiahsd
                        uiahsdhiasdhuhui
                        iausdhuiasdhuhuiasd
                        Auishduhusida auasduhuh
                        iausuhudushhhud aiusdhuiahsd
                        uiahsdhiasdhuhui
                        iausdhuiasdhuhuiasd
                        Auishduhusida auasduhuh
                        iausuhudushhhud aiusdhuiahsd
                        uiahsdhiasdhuhui
                        iausdhuiasdhuhuiasd
                        Auishduhusida auasduhuh
                        iausuhudushhhud aiusdhuiahsd
                        uiahsdhiasdhuhui
                        iausdhuiasdhuhuiasd
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center mt-10">
                <span className="m-2 text-lg">Quantidade:</span>
                <div className="text-lg ml-2">1</div>
                <button className="h-7 w-7 m-2 rounded-md border-2 border-sky-700">+</button>
                <button className="h-7 w-7 rounded-md border-2 border-sky-700">-</button>
            </div>
        </div>
    )
}