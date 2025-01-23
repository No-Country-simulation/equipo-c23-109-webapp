import NavBar from "./NavBar"

export function Header () {
    return (
        <header className='flex justify-between items-center p-4 bg-blue-600 m-auto max-w-[1460px]'>
            <h1><a href="#home" className="text-3xl">PrestaYa</a></h1>
            <NavBar />
        </header>
    )
}