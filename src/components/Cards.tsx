import Image from 'next/future/image'
import Link from 'next/link'
export default function Cards() {
    return (
        <div id="cards_plates" className="flex justify-center items-center rounded-lg bg-teal-700 m-5 border-2 border-sky-700 shadow-2xl">
            <Link href="pratos">
                <div className="flex justify-center">
                    <Image className="float-left" alt="Foto do prato" src="https://dummyimage.com/150x260/fff/aaa" width={150} height={260} />
                    <div className="block">
                        <h1 className="text-center m-3 block">Nome do prato</h1>
                        <span className="text-center m-3 block">
                            Descrição do prato e produtos
                            orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget lacus ut risus vehicula tincidunt in eget elit.
                            Curabitur non ornare diam. Nullam mollis nunc eget lobortis cursus. Integer quis rhoncus dui. Donec sed ex mauris.
                            Nunc nec gravida erat.
                        </span>
                        <span className="text-center m-3 block">Preço R$38,90</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}