import Image from "next/image";


export default function Header() {
    return (
        <header>
            <div className="w-screen h-auto flex flex-col lg:flex-row bg-whiteanqtique-500 text-vermilion-500 px-12 py-4">
                <div className="flex flex-1 py-4 lg:py-0 lg:justify-normal justify-center">
                    <Image src="/logo.png" alt="food" width={150} height={100} />
                </div>
                <ul className="flex flex-row justify-center lg:justify-end flex-1 content-middle">
                    <li className="flex content-middle">
                        <a className="menu-button" href="#">About us</a>
                    </li>
                    <li className="flex content-middle">
                        <a className="menu-button" href="#">Doc</a>
                    </li>
                </ul>
            </div>
        </header>)
}