import 'bootstrap/dist/css/bootstrap.min.css'
// import { useState } from "react"
import './app.css'
import { Header } from './components/Header'
import image1 from './public/imagen1.jpg'
import image2 from './public/imagen2.png'
import image3 from './public/imagen3.png'
import image4 from './public/imgen4.png'
import { Button } from 'react-bootstrap'


export function App() {
    // // const [count, setCount] = useState(0)

    return (
        <>
            <header className=' bg-blue-600 text-white'>
                <Header />
            </header>
            <main className='flex flex-col justify-center items-center p-[4_0] gap-[3rem] w-full'>
                <div className='flex md:flex-row flex-col-reverse justify-between items-center gap-6 p-4'>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className=' text-6xl'>Préstamos P2P</h1>
                        <p className='max-w-[550px] text-lg'>Conectamos personas que necesitan préstamos con inversores que buscan rentabilidad</p>
                        <Button variant='outline-primary' size='sm' className='w-[300px]'>Solicitá tu préstamo</Button>
                        <Button variant='outline-success' size='sm' className='w-[300px]'>Empezá a invertir</Button>
                    </div>
                    <div>
                        <img src={image1} alt="Imagen Principal" className=' w-[550px] lg:w-[550px]' />
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex flex-col items-center gap-3 w-full'>
                        <div className='w-full flex flex-col items-center gap-3 bg-blue-500 text-white p-4'>
                            <h2 className='text-3xl'>¿Por qué elegir PrestaYa?</h2>
                            <p className='max-w-[650px] text-lg'>Somos la plataforma líder en préstamos P2P en Argentina. Conocé las ventajas de invertir o solicitar un préstamo con nosotros.</p>
                        </div>
                        <h2 className='text-5xl'>Nuestras Estadísticas</h2>
                        <div className='flex flex-col md:flex-row justify-beetween items-center gap-[6rem] p-4'>
                            <div >
                                <img src={image2} alt="Estadistica 1" className='w-[300px] h-[250px]' />
                                <h3 className='text-2xl'>Cálculo de Riesgo</h3>
                            </div>
                            <div >
                                <img src={image3} alt="Estadistica 2" className='w-[300px] h-[250px]' />
                                <h3 className='text-2xl'>Cálculo de Inversión</h3>
                            </div>
                            <div >
                                <img src={image4} alt="Estadistica 3" className='w-[300px] h-[250px]' />
                                <h3 className='text-2xl'>Gráfica de Estado</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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