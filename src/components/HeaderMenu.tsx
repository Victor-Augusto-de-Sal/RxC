import Image from 'next/future/image'
import { IoCartOutline } from "react-icons/io5";

export default function HeaderMenu() {
    return (
        <div id="header" className="flex justify-center w-screen md:w-11/12 mt-2">
            <div className="absolute left-20 sm:left-10">Mesa: ##</div>
            <div className="absolute text-4xl right-20 sm:right-10"><IoCartOutline /></div>
            <Image className="border-2 border-sky-700 shadow-2xl" alt="Restaurante logo" src="https://dummyimage.com/80x80/fff/aaa" width={80} height={80} />
        </div>
    )
}