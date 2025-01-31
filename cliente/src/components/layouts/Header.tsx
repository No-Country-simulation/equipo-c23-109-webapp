import { useState } from "react";
import openMenu from '../../public/images/abrir-menu.png'


export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleToggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className='flex items-center p-4 bg-blue-600 m-auto max-w-[100dvw] text-white'>
            <div className='flex gap-10 justify-between p-4 w-[100%] '>
                <h1 className='text-3xl p-4 '>PrestaYa</h1>
                <div className='relative flex justify-between items-center'>
                    <nav className='hidden min-[610px]:flex justify-between items-center p-4 gap-4 text-white'>
                        <a className='no-underline hover:text-gray-300' href="#home">Inicio</a>
                        <a className='no-underline hover:text-green-400' href="./solicitud">Simular Préstamo</a>
                        <a className='no-underline hover:text-green-400' href="#link">Invertir</a>
                        <a className='no-underline hover:text-gray-300' href="#link">Iniciar Sesion</a>
                        <a className='no-underline hover:text-gray-300' href="./register">Registrarse</a>
                    </nav>
                    <button onClick={handleToggleMenu} className=''>
                        <img src={openMenu} alt="" width={50} height={50} className='fixed min-[610px]:hidden right-0 top-0 z-10 mr-12 mt-12 hover:cursor-pointer p-2 border-2 border-blue-700 rounded-md bg-blue-500' />
                    </button>
                    {isMenuOpen && (
                        <nav className='fixed left-0 top-0 w-[100vw] bg-sky-500 h-[100vh] flex flex-col justify-center text-4xl gap-12' >
                            <a className='hover:text-gray-300' href="#home">Inicio</a>
                            <a className='hover:text-green-400' href="#link">Simular Préstamo</a>
                            <a className='hover:text-green-400' href="#link">Invertir</a>
                            <a className='hover:text-gray-300' href="#link">Iniciar Sesion</a>
                            <a className='hover:text-gray-300' href="#link">Registrarse</a>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    )
}

