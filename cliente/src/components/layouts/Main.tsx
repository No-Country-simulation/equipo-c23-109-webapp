import 'bootstrap/dist/css/bootstrap.min.css';
//import { Header } from '../layouts/Header'
import image1 from '../../public/images/imagen1.jpg'
import image2 from '../../public/images/imagen2.png'
import image3 from '../../public/images/imagen3.png'
import image4 from '../../public/images/imgen4.png'

import { Button } from 'react-bootstrap'

export function Main() {

    return (
        <main className='flex flex-col justify-center items-center p-[4_0] gap-[3rem] w-full'>
            <div className='flex md:flex-row flex-col-reverse justify-between items-center gap-6 p-4'>
                <div className='flex flex-col items-center gap-3'>
                    <h1 className=' text-6xl'>Préstamos P2P</h1>
                    <p className='max-w-[550px] text-lg'>Conectamos personas que necesitan préstamos con inversores que buscan rentabilidad</p>
                    <Button variant='outline-primary' size='sm' className='w-[300px]'>
                        <a href="./solicitud">Simulá tu préstamo</a>
                    </Button>
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
    )
}