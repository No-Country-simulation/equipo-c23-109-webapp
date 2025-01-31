
import { Header } from '../layouts/Header'
import { Main } from '../layouts/Main'


export function Home() {

    return (
        <>
            <Header />
            <Main />
            <footer className='text-left md:text-center md:flex-row bg-gray-900 text-white p-4 flex flex-col justify-around md:items-center gap-3'>
                <div>
                    <p >Proyecto &quot;PrestaYa 2025&quot; desarrollado para No Country </ p>
                    <p>Cohorte c23-109-WEBAPP &copy; 2025 - Todos los derechos reservados</p>
                </div>
                <p><span className='text-2xl'>Desarrolladores:</span> <br /> Martín Alvarez (FullStack Dev) <br /> Jorge Flores (FullStack Dev - Project Manager) <br /> Sergio Vazquez (Frontend Dev)</p>
                <p><span className='text-2xl'>Team Leader:</span> <br /> Carlos Ciccone</p>
            </footer>

        </>
    )
}